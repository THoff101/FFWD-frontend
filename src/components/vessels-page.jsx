import { useState, useCallback, useMemo, useEffect } from "react";
import styled from "styled-components";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { 
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ship,
  Settings,
  Download,
  Upload
} from "lucide-react";
import { toast } from "sonner@2.0.3";

// Styled components with responsive design
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  background-color: var(--card);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 2rem);
  margin-left: clamp(1rem, 3vw, 0);
  
  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 4rem;
  }
`;

const HeaderContent = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeaderLeft = styled.div`
  flex: 1;
`;

const PageTitle = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--foreground);
  margin: 0 0 0.5rem 0;
`;

const PageDescription = styled.p`
  color: var(--muted-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  margin: 0;
`;

const HeaderActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2vw, 1rem);
`;

const ActionButton = styled(Button)`
  background-color: var(--primary);
  color: var(--primary-foreground);
  
  &:hover {
    opacity: 0.9;
  }
  
  &.secondary {
    background-color: var(--secondary);
    border: 1px solid var(--border);
    color: var(--secondary-foreground);
    
    &:hover {
      background-color: var(--muted);
    }
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: clamp(1rem, 3vw, 2rem);
  overflow: auto;
  background-color: var(--muted);
`;

const ContentWrapper = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 4vw, 2rem);
`;

const FiltersCard = styled(Card)`
  border: 1px solid var(--border);
  background-color: var(--card);
`;

const FiltersHeader = styled(CardHeader)`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
`;

const FiltersTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FiltersContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 3fr 1fr 1fr 1fr;
  }
`;

const SearchInput = styled(Input)`
  background-color: var(--input-background);
`;

const TableCard = styled(Card)`
  border: 1px solid var(--border);
  background-color: var(--card);
`;

const TableHeader = styled(CardHeader)`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const TableTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TableControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
`;

const TableContent = styled(CardContent)`
  padding: 0;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`;

const TableHead = styled.thead`
  background-color: var(--muted);
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--border);
  
  &:hover {
    background-color: var(--muted);
  }
`;

const TableHeaderCell = styled.th`
  padding: clamp(0.75rem, 2vw, 1rem);
  text-align: left;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  position: relative;
  white-space: nowrap;
`;

const TableCell = styled.td`
  padding: clamp(0.75rem, 2vw, 1rem);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

const ActionsCell = styled.td`
  padding: clamp(0.75rem, 2vw, 1rem);
  width: 120px;
`;

const ActionButtonsGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled(Button)`
  width: 2rem;
  height: 2rem;
  padding: 0;
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
  }
  
  &.danger:hover {
    background-color: var(--destructive);
    color: var(--destructive-foreground);
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1rem, 3vw, 1.5rem);
  border-top: 1px solid var(--border);
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const PaginationInfo = styled.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const PaginationButton = styled(Button)`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover:not(:disabled) {
    background-color: var(--muted);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ColumnVisibilityButton = styled(Button)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
  }
`;

const TypeBadge = styled(Badge)`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  
  ${props => {
    switch (props.$type) {
      case 'Container Ship':
        return `
          background-color: #dbeafe;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        `;
      case 'Cargo':
        return `
          background-color: #fef3c7;
          color: #a16207;
          border: 1px solid #fde68a;
        `;
      default:
        return `
          background-color: var(--muted);
          color: var(--muted-foreground);
          border: 1px solid var(--border);
        `;
    }
  }}
`;

import { mockVessels, createVessel, updateVessel, deleteVessel } from "../data/mock-vessels";

const defaultColumns = [
  { key: 'name', label: 'Name', visible: true },
  { key: 'imoNumber', label: 'IMO Number', visible: true },
  { key: 'mmsiNumber', label: 'MMSI No', visible: true },
  { key: 'flag', label: 'Flag', visible: true },
  { key: 'type', label: 'Type', visible: true }
];

export function VesselsPage() {
  // State management
  const [vessels, setVessels] = useState([]);
  // Load initial vessels from mockVessels on mount
  useEffect(() => {
    setVessels([...mockVessels]);
  }, []);
  const [columns, setColumns] = useState(defaultColumns);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterFlag, setFilterFlag] = useState("");
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isColumnDialogOpen, setIsColumnDialogOpen] = useState(false);
  const [editingVessel, setEditingVessel] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    imoNumber: '',
    mmsiNumber: '',
    flag: '',
    type: ''
  });

  // Get unique values for filters
  const uniqueFlags = useMemo(() => 
    [...new Set(vessels.map(vessel => vessel.flag))].filter(Boolean).sort()
  , [vessels]);

  const uniqueTypes = useMemo(() => 
    [...new Set(vessels.map(vessel => vessel.type))].filter(Boolean).sort()
  , [vessels]);

  // Filter and search logic
  const filteredVessels = useMemo(() => {
    return vessels.filter(vessel => {
      const matchesSearch = searchTerm === "" || 
        Object.values(vessel).some(value => 
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesFlag = filterFlag === "" || vessel.flag === filterFlag;
      const matchesType = filterType === "" || vessel.type === filterType;
      
      return matchesSearch && matchesFlag && matchesType;
    });
  }, [vessels, searchTerm, filterFlag, filterType]);

  // Pagination logic
  const totalPages = Math.ceil(filteredVessels.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVessels = filteredVessels.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page when filters change
  const handleFiltersChange = useCallback(() => {
    setCurrentPage(1);
  }, []);

  // Form handlers
  const handleAdd = () => {
    setFormData({ name: '', imoNumber: '', mmsiNumber: '', flag: '', type: '' });
    setIsAddDialogOpen(true);
  };

  const handleEdit = (vessel) => {
    setEditingVessel(vessel);
    setFormData(vessel);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (vesselId) => {
    deleteVessel(vesselId);
    setVessels([...mockVessels]);
    toast.success("Vessel deleted successfully");
  };

  const handleSave = () => {
    if (editingVessel) {
      // Edit existing vessel
      updateVessel(editingVessel.id, formData);
      setVessels([...mockVessels]);
      toast.success("Vessel updated successfully");
      setIsEditDialogOpen(false);
    } else {
      // Add new vessel
      createVessel(formData);
      setVessels([...mockVessels]);
      toast.success("Vessel added successfully");
      setIsAddDialogOpen(false);
    }
    setEditingVessel(null);
    setFormData({ name: '', imoNumber: '', mmsiNumber: '', flag: '', type: '' });
  };

  const handleColumnToggle = (columnKey) => {
    setColumns(prev => prev.map(col => 
      col.key === columnKey ? { ...col, visible: !col.visible } : col
    ));
  };

  const visibleColumns = columns.filter(col => col.visible);

  return (
    <PageContainer>
      {/* Header */}
      <Header>
        <HeaderContent>
          <HeaderLeft>
            <PageTitle>Vessels</PageTitle>
            <PageDescription>
              Manage and track vessel information for your freight forwarding operations.
            </PageDescription>
          </HeaderLeft>
          <HeaderActions>
            <ActionButton onClick={handleAdd}>
              <Plus style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Add Vessel
            </ActionButton>
            <ActionButton className="secondary">
              <Upload style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Import
            </ActionButton>
            <ActionButton className="secondary">
              <Download style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Export
            </ActionButton>
          </HeaderActions>
        </HeaderContent>
      </Header>

      {/* Content Area */}
      <ContentArea>
        <ContentWrapper>
          {/* Filters */}
          <FiltersCard>
            <FiltersHeader>
              <FiltersTitle>
                <Filter style={{ width: '1.25rem', height: '1.25rem' }} />
                Search & Filters
              </FiltersTitle>
            </FiltersHeader>
            <FiltersContent>
              <FiltersGrid>
                <div>
                  <Label htmlFor="search">Search</Label>
                  <SearchInput
                    id="search"
                    placeholder="Search vessels by name, IMO, MMSI, flag, or type..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      handleFiltersChange();
                    }}
                  />
                </div>
                <div>
                  <Label>Flag</Label>
                  <Select
                    value={filterFlag === "" ? "all" : filterFlag}
                    onValueChange={(value) => {
                      setFilterFlag(value === "all" ? "" : value);
                      handleFiltersChange();
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All flags" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All flags</SelectItem>
                      {uniqueFlags.map(flag => (
                        <SelectItem key={flag} value={flag}>{flag}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Type</Label>
                  <Select
                    value={filterType === "" ? "all" : filterType}
                    onValueChange={(value) => {
                      setFilterType(value === "all" ? "" : value);
                      handleFiltersChange();
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      {uniqueTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </FiltersGrid>
            </FiltersContent>
          </FiltersCard>

          {/* Table */}
          <TableCard>
            <TableHeader>
              <TableTitle>
                <Ship style={{ width: '1.25rem', height: '1.25rem' }} />
                Vessel Registry ({filteredVessels.length} vessels)
              </TableTitle>
              <TableControls>
                <ColumnVisibilityButton 
                  variant="outline" 
                  onClick={() => setIsColumnDialogOpen(true)}
                >
                  <Settings style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                  Columns
                </ColumnVisibilityButton>
                <Select value={itemsPerPage.toString()} onValueChange={(value) => {
                  setItemsPerPage(parseInt(value));
                  setCurrentPage(1);
                }}>
                  <SelectTrigger style={{ width: '120px' }}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 per page</SelectItem>
                    <SelectItem value="10">10 per page</SelectItem>
                    <SelectItem value="25">25 per page</SelectItem>
                    <SelectItem value="50">50 per page</SelectItem>
                  </SelectContent>
                </Select>
              </TableControls>
            </TableHeader>
            <TableContent>
              <Table>
                <TableHead>
                  <TableRow>
                    {visibleColumns.map(column => (
                      <TableHeaderCell key={column.key}>
                        {column.label}
                      </TableHeaderCell>
                    ))}
                    <TableHeaderCell>Actions</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <tbody>
                  {paginatedVessels.map((vessel) => (
                    <TableRow key={vessel.id}>
                      {visibleColumns.map(column => (
                        <TableCell key={column.key}>
                          {column.key === 'type' ? (
                            <TypeBadge $type={vessel[column.key]}>
                              {vessel[column.key]}
                            </TypeBadge>
                          ) : (
                            vessel[column.key]
                          )}
                        </TableCell>
                      ))}
                      <ActionsCell>
                        <ActionButtonsGroup>
                          <IconButton 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEdit(vessel)}
                          >
                            <Edit2 style={{ width: '0.875rem', height: '0.875rem' }} />
                          </IconButton>
                          <IconButton 
                            variant="outline" 
                            size="sm" 
                            className="danger"
                            onClick={() => handleDelete(vessel.id)}
                          >
                            <Trash2 style={{ width: '0.875rem', height: '0.875rem' }} />
                          </IconButton>
                        </ActionButtonsGroup>
                      </ActionsCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContent>
            
            {/* Pagination */}
            <PaginationContainer>
              <PaginationInfo>
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredVessels.length)} of {filteredVessels.length} vessels
              </PaginationInfo>
              <PaginationControls>
                <PaginationButton
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                >
                  <ChevronsLeft style={{ width: '1rem', height: '1rem' }} />
                </PaginationButton>
                <PaginationButton
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft style={{ width: '1rem', height: '1rem' }} />
                </PaginationButton>
                <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
                  Page {currentPage} of {totalPages}
                </span>
                <PaginationButton
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight style={{ width: '1rem', height: '1rem' }} />
                </PaginationButton>
                <PaginationButton
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronsRight style={{ width: '1rem', height: '1rem' }} />
                </PaginationButton>
              </PaginationControls>
            </PaginationContainer>
          </TableCard>
        </ContentWrapper>
      </ContentArea>

      {/* Add/Edit Dialog */}
      <Dialog open={isAddDialogOpen || isEditDialogOpen} onOpenChange={(open) => {
        setIsAddDialogOpen(false);
        setIsEditDialogOpen(false);
        if (!open) {
          setEditingVessel(null);
          setFormData({ name: '', imoNumber: '', mmsiNumber: '', flag: '', type: '' });
        }
      }}>
        <DialogContent style={{ maxWidth: '32rem' }}>
          <DialogHeader>
            <DialogTitle>
              {editingVessel ? 'Edit Vessel' : 'Add New Vessel'}
            </DialogTitle>
            <DialogDescription>
              {editingVessel ? 'Update the vessel information below.' : 'Enter the vessel information below.'}
            </DialogDescription>
          </DialogHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <Label htmlFor="vessel-name">Name</Label>
              <Input
                id="vessel-name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter vessel name"
              />
            </div>
            <div>
              <Label htmlFor="imo-number">IMO Number</Label>
              <Input
                id="imo-number"
                value={formData.imoNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, imoNumber: e.target.value }))}
                placeholder="Enter IMO number"
              />
            </div>
            <div>
              <Label htmlFor="mmsi-number">MMSI Number</Label>
              <Input
                id="mmsi-number"
                value={formData.mmsiNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, mmsiNumber: e.target.value }))}
                placeholder="Enter MMSI number"
              />
            </div>
            <div>
              <Label htmlFor="flag">Flag</Label>
              <Input
                id="flag"
                value={formData.flag}
                onChange={(e) => setFormData(prev => ({ ...prev, flag: e.target.value }))}
                placeholder="Enter flag state"
              />
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Input
                id="type"
                value={formData.type}
                onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                placeholder="Enter vessel type"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsAddDialogOpen(false);
              setIsEditDialogOpen(false);
              setEditingVessel(null);
              setFormData({ name: '', imoNumber: '', mmsiNumber: '', flag: '', type: '' });
            }}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              {editingVessel ? 'Save Changes' : 'Add Vessel'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Column Visibility Dialog */}
      <Dialog open={isColumnDialogOpen} onOpenChange={setIsColumnDialogOpen}>
        <DialogContent style={{ maxWidth: '24rem' }}>
          <DialogHeader>
            <DialogTitle>Manage Columns</DialogTitle>
            <DialogDescription>
              Choose which columns to display in the table.
            </DialogDescription>
          </DialogHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {columns.map(column => (
              <div key={column.key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => handleColumnToggle(column.key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    color: 'var(--foreground)'
                  }}
                >
                  {column.visible ? (
                    <Eye style={{ width: '1rem', height: '1rem', color: 'var(--primary)' }} />
                  ) : (
                    <EyeOff style={{ width: '1rem', height: '1rem', color: 'var(--muted-foreground)' }} />
                  )}
                  <span style={{ fontSize: '0.875rem' }}>{column.label}</span>
                </button>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={() => setIsColumnDialogOpen(false)}>
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
}