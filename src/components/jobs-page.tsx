import { useState } from "react";
import styled from "styled-components";
import { ModernSidebar } from "./modern-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  Archive,
  Package,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1.5rem;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderText = styled.div``;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #6b7280;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 1.5rem;
`;

const ContentWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatsCard = styled(Card)`
  border: 1px solid;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
  &.blue {
    border-color: #bfdbfe;
  }
  
  &.green {
    border-color: #bbf7d0;
  }
  
  &.purple {
    border-color: #e9d5ff;
  }
`;

const StatsContent = styled(CardContent)`
  padding: 1rem;
`;

const StatsInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatsTextContainer = styled.div``;

const StatLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  
  &.blue {
    color: #2563eb;
  }
  
  &.green {
    color: #16a34a;
  }
  
  &.purple {
    color: #9333ea;
  }
`;

const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  
  &.blue {
    color: #1d4ed8;
  }
  
  &.green {
    color: #15803d;
  }
  
  &.purple {
    color: #7c3aed;
  }
`;

const IconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.blue {
    background-color: #dbeafe;
  }
  
  &.green {
    background-color: #dcfce7;
  }
  
  &.purple {
    background-color: #f3e8ff;
  }
`;

const StyledIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  
  &.blue {
    color: #2563eb;
  }
  
  &.green {
    color: #16a34a;
  }
  
  &.purple {
    color: #9333ea;
  }
`;

const FiltersCard = styled(Card)`
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const FiltersHeader = styled(CardHeader)`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`;

const FiltersTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FiltersContent = styled(CardContent)`
  padding: 1.5rem;
`;

const FiltersRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchIcon = styled(Search)`
  width: 1rem;
  height: 1rem;
  color: #9ca3af;
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchInput = styled(Input)`
  padding-left: 2.5rem;
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;

const SelectContainer = styled.div`
  width: 12rem;
`;

const StyledSelect = styled(Select)``;

const StyledSelectTrigger = styled(SelectTrigger)`
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;

const FilterButton = styled(Button)`
  background-color: white;
  border: 1px solid #d1d5db;
  color: #374151;
  
  &:hover {
    background-color: #f9fafb;
  }
`;

const TableCard = styled.div`
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
`;

const TableHeaderSection = styled.div`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  padding: 1.5rem;
`;

const TableTitle = styled.h3`
  font-size: 1.125rem;
  color: #111827;
  margin: 0;
  font-weight: 600;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled(Table)`
  width: 100%;
`;

const StyledTableHeader = styled(TableHeader)``;

const StyledTableHeaderRow = styled(TableRow)`
  background-color: #f9fafb;
`;

const StyledTableHead = styled(TableHead)`
  font-weight: 500;
  color: #374151;
  padding: 0.75rem 1rem;
`;

const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: #f9fafb;
  }
  
  transition: background-color 0.2s;
`;

const CellContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobIcon = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: #d1d5db;
  border-radius: 0.25rem;
`;

const JobIdText = styled.span`
  color: #111827;
`;

const JobBadge = styled(Badge)`
  background-color: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: 0.75rem;
`;

const TemplateText = styled.span`
  color: #374151;
`;

const POText = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

const StageText = styled.span`
  color: #374151;
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatusIcon = styled.div`
  width: 1rem;
  height: 1rem;
`;

const DetailsContainer = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
`;

const WeightText = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const ParentText = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ActionButton = styled(Button)`
  &.view {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1d4ed8;
    
    &:hover {
      background-color: #dbeafe;
    }
  }
  
  &.edit {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    color: #374151;
    
    &:hover {
      background-color: #f3f4f6;
    }
  }
  
  &.archive {
    background-color: #fff7ed;
    border: 1px solid #fed7aa;
    color: #ea580c;
    
    &:hover {
      background-color: #ffedd5;
    }
  }
`;

const ButtonIcon = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
`;

const CreateButton = styled(Button)`
  background-color: #2563eb;
  color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
  &:hover {
    background-color: #1d4ed8;
  }
`;

const CreateButtonIcon = styled(Plus)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

interface JobsPageProps {
  onCreateNew: () => void;
  onViewConsolidation: (data: any) => void;
}

export function JobsPage({ onCreateNew, onViewConsolidation }: JobsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [templateFilter, setTemplateFilter] = useState("all-templates");
  const [statusFilter, setStatusFilter] = useState("all-statuses");

  // Mock data
  const jobs = [
    {
      id: "CONS-789123",
      type: "consolidation",
      template: "Consolidation",
      currentStage: "Origin Handling",
      status: "In Progress",
      origin: "Shanghai",
      destination: "Los Angeles",
      totalJobs: 3,
      createdAt: "2025-01-15",
      weight: "2100 kg"
    },
    {
      id: "JOB-123456",
      template: "Import LCL",
      currentStage: "Origin Handling", 
      status: "In Progress",
      poNumber: "PO-2025-001",
      parentConsolidation: "CONS-789123"
    },
    {
      id: "JOB-123457",
      template: "Import LCL",
      currentStage: "Origin Handling",
      status: "In Progress", 
      poNumber: "PO-2025-002",
      parentConsolidation: "CONS-789123"
    },
    {
      id: "JOB-456789",
      template: "Export FCL",
      currentStage: "Completion",
      status: "Completed",
      poNumber: "PO-2024-003"
    },
    {
      id: "CONS-234567",
      type: "consolidation", 
      template: "Consolidation",
      currentStage: "Booking & Preparation",
      status: "In Progress",
      totalJobs: 2,
      createdAt: "2025-01-20"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Progress':
        return <StatusIcon><Clock style={{color: '#2563eb', width: '1rem', height: '1rem'}} /></StatusIcon>;
      case 'Completed':
        return <StatusIcon><CheckCircle2 style={{color: '#16a34a', width: '1rem', height: '1rem'}} /></StatusIcon>;
      case 'Issue':
        return <StatusIcon><AlertCircle style={{color: '#dc2626', width: '1rem', height: '1rem'}} /></StatusIcon>;
      default:
        return <StatusIcon><Clock style={{color: '#9ca3af', width: '1rem', height: '1rem'}} /></StatusIcon>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Progress':
        return <Badge style={{backgroundColor: '#dbeafe', color: '#1d4ed8', border: '1px solid #bfdbfe'}}>In Progress</Badge>;
      case 'Completed':
        return <Badge style={{backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0'}}>Completed</Badge>;
      case 'Issue':
        return <Badge style={{backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca'}}>Issue</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleViewJob = (job: any) => {
    if (job.type === 'consolidation') {
      // Mock consolidation data
      const consolidationData = {
        id: job.id,
        template: job.template,
        status: job.status,
        currentStage: 2,
        origin: { city: job.origin, port: job.origin + " Port" },
        destination: { city: job.destination, port: job.destination + " Port" },
        totalWeight: job.weight,
        individualJobs: [
          {
            id: 'JOB-123456',
            poNumber: 'PO-2024-001',
            template: 'Import LCL',
            status: 'In Progress',
            currentStage: 2
          },
          {
            id: 'JOB-123457', 
            poNumber: 'PO-2024-002',
            template: 'Import LCL',
            status: 'In Progress',
            currentStage: 2
          }
        ],
        createdAt: new Date().toISOString()
      };
      onViewConsolidation(consolidationData);
    }
  };

  return (
    <PageContainer>
      {/* Sidebar */}
      <ModernSidebar currentPage="jobs" />
      
      {/* Main Content */}
      <MainContent>
        {/* Header */}
        <Header>
          <HeaderContent>
            <HeaderText>
              <Title>Jobs & Consolidations</Title>
              <Subtitle>Track and manage all freight shipments</Subtitle>
            </HeaderText>
            <CreateButton onClick={onCreateNew}>
              <CreateButtonIcon />
              Add New Shipment
            </CreateButton>
          </HeaderContent>
        </Header>

        {/* Content Area */}
        <ContentArea>
          <ContentWrapper>
            {/* Stats Cards */}
            <StatsGrid>
              <StatsCard className="blue">
                <StatsContent>
                  <StatsInner>
                    <StatsTextContainer>
                      <StatLabel className="blue">Active Jobs</StatLabel>
                      <StatValue className="blue">12</StatValue>
                    </StatsTextContainer>
                    <IconContainer className="blue">
                      <StyledIcon className="blue">
                        <Package />
                      </StyledIcon>
                    </IconContainer>
                  </StatsInner>
                </StatsContent>
              </StatsCard>

              <StatsCard className="green">
                <StatsContent>
                  <StatsInner>
                    <StatsTextContainer>
                      <StatLabel className="green">Consolidations</StatLabel>
                      <StatValue className="green">3</StatValue>
                    </StatsTextContainer>
                    <IconContainer className="green">
                      <StyledIcon className="green">
                        <BarChart3 />
                      </StyledIcon>
                    </IconContainer>
                  </StatsInner>
                </StatsContent>
              </StatsCard>

              <StatsCard className="purple">
                <StatsContent>
                  <StatsInner>
                    <StatsTextContainer>
                      <StatLabel className="purple">Completed</StatLabel>
                      <StatValue className="purple">45</StatValue>
                    </StatsTextContainer>
                    <IconContainer className="purple">
                      <StyledIcon className="purple">
                        <CheckCircle2 />
                      </StyledIcon>
                    </IconContainer>
                  </StatsInner>
                </StatsContent>
              </StatsCard>
            </StatsGrid>

            {/* Filters */}
            <FiltersCard>
              <FiltersHeader>
                <FiltersTitle>
                  <Filter />
                  Search & Filters
                </FiltersTitle>
              </FiltersHeader>
              <FiltersContent>
                <FiltersRow>
                  <SearchContainer>
                    <SearchWrapper>
                      <SearchIcon />
                      <SearchInput
                        placeholder="Search by Job ID, PO Number, or Consolidation ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </SearchWrapper>
                  </SearchContainer>
                  
                  <SelectContainer>
                    <StyledSelect value={templateFilter} onValueChange={setTemplateFilter}>
                      <StyledSelectTrigger>
                        <SelectValue placeholder="All Templates" />
                      </StyledSelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-templates">All Templates</SelectItem>
                        <SelectItem value="consolidation">Consolidation</SelectItem>
                        <SelectItem value="import-lcl">Import LCL</SelectItem>
                        <SelectItem value="export-fcl">Export FCL</SelectItem>
                        <SelectItem value="air-export">Air Export</SelectItem>
                      </SelectContent>
                    </StyledSelect>
                  </SelectContainer>

                  <SelectContainer>
                    <StyledSelect value={statusFilter} onValueChange={setStatusFilter}>
                      <StyledSelectTrigger>
                        <SelectValue placeholder="All Statuses" />
                      </StyledSelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-statuses">All Statuses</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="issue">Issue</SelectItem>
                      </SelectContent>
                    </StyledSelect>
                  </SelectContainer>

                  <FilterButton variant="outline">
                    Apply Filters
                  </FilterButton>
                </FiltersRow>
              </FiltersContent>
            </FiltersCard>

            {/* Jobs Table */}
            <TableCard>
              <TableHeaderSection>
                <TableTitle>All Jobs & Consolidations</TableTitle>
              </TableHeaderSection>
              <TableWrapper>
                <StyledTable>
                  <StyledTableHeader>
                    <StyledTableHeaderRow>
                      <StyledTableHead>Job/Consolidation ID</StyledTableHead>
                      <StyledTableHead>Template</StyledTableHead>
                      <StyledTableHead>Current Stage</StyledTableHead>
                      <StyledTableHead>Status</StyledTableHead>
                      <StyledTableHead>Details</StyledTableHead>
                      <StyledTableHead>Actions</StyledTableHead>
                    </StyledTableHeaderRow>
                  </StyledTableHeader>
                  <TableBody>
                    {jobs.map((job) => (
                      <StyledTableRow key={job.id}>
                        <TableCell>
                          <CellContent>
                            {job.type === 'consolidation' ? (
                              <Package style={{width: '1rem', height: '1rem', color: '#2563eb'}} />
                            ) : (
                              <JobIcon />
                            )}
                            <JobIdText>{job.id}</JobIdText>
                            {job.type === 'consolidation' && (
                              <JobBadge variant="outline">
                                {job.totalJobs} jobs
                              </JobBadge>
                            )}
                          </CellContent>
                        </TableCell>
                        <TableCell>
                          <TemplateText>{job.template}</TemplateText>
                          {job.poNumber && (
                            <POText>PO: {job.poNumber}</POText>
                          )}
                        </TableCell>
                        <TableCell>
                          <StageText>{job.currentStage}</StageText>
                        </TableCell>
                        <TableCell>
                          <StatusContainer>
                            {getStatusIcon(job.status)}
                            {getStatusBadge(job.status)}
                          </StatusContainer>
                        </TableCell>
                        <TableCell>
                          {job.type === 'consolidation' ? (
                            <DetailsContainer>
                              <div>{job.origin} → {job.destination}</div>
                              <WeightText>{job.weight}</WeightText>
                            </DetailsContainer>
                          ) : (
                            <DetailsContainer>
                              {job.parentConsolidation && (
                                <ParentText>Part of {job.parentConsolidation}</ParentText>
                              )}
                            </DetailsContainer>
                          )}
                        </TableCell>
                        <TableCell>
                          <ActionsContainer>
                            <ActionButton 
                              className="view"
                              variant="outline" 
                              size="sm"
                              onClick={() => handleViewJob(job)}
                            >
                              <ButtonIcon>
                                <Eye />
                              </ButtonIcon>
                              View
                            </ActionButton>
                            <ActionButton 
                              className="edit"
                              variant="outline" 
                              size="sm"
                            >
                              <ButtonIcon>
                                <Edit />
                              </ButtonIcon>
                              Edit
                            </ActionButton>
                            {job.status === 'Completed' && (
                              <ActionButton 
                                className="archive"
                                variant="outline" 
                                size="sm"
                              >
                                <Archive style={{width: '0.75rem', height: '0.75rem'}} />
                              </ActionButton>
                            )}
                          </ActionsContainer>
                        </TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </StyledTable>
              </TableWrapper>
            </TableCard>
          </ContentWrapper>
        </ContentArea>
      </MainContent>
    </PageContainer>
  );
}