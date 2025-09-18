import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
  AlertCircle,
  Loader2
} from "lucide-react";
import { fetchConsolidations, mockIndividualJobs } from "../data/mock-jobs";

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
  padding: clamp(1rem, 3vw, 1.5rem);
  margin-left: clamp(1rem, 3vw, 0);
  
  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 4rem; /* Account for mobile menu button */
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const HeaderContentButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`;

const HeaderText = styled.div`
  min-width: 0; // Prevents overflow
`;

const Title = styled.h1`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  color: var(--foreground);
  margin: 0;
`;

const Subtitle = styled.p`
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`;

const ContentArea = styled.div`
  flex: 1;
  padding: clamp(0.75rem, 3vw, 1.5rem);
  background-color: var(--muted);
`;

const ContentWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatsCard = styled(Card)`
  border: 1px solid var(--border);
  background-color: var(--card);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
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
  padding: clamp(0.75rem, 3vw, 1rem);
`;

const StatsInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatLabel = styled.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  margin: 0;
  
  &.blue { color: #2563eb; }
  &.green { color: #16a34a; }
  &.purple { color: #9333ea; }
`;

const StatValue = styled.p`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  margin: 0;
  
  &.blue { color: #1d4ed8; }
  &.green { color: #15803d; }
  &.purple { color: #7c3aed; }
`;

const IconContainer = styled.div`
  width: clamp(2rem, 6vw, 2.5rem);
  height: clamp(2rem, 6vw, 2.5rem);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.blue { background-color: #dbeafe; }
  &.green { background-color: #dcfce7; }
  &.purple { background-color: #f3e8ff; }
`;

const StyledIcon = styled.div`
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  
  &.blue { color: #2563eb; }
  &.green { color: #16a34a; }
  &.purple { color: #9333ea; }
`;

const FiltersCard = styled(Card)`
  border: 1px solid var(--border);
  background-color: var(--card);
`;

const FiltersHeader = styled(CardHeader)`
  background-color: var(--muted);
  border-bottom: 1px solid var(--border);
  padding: clamp(0.75rem, 3vw, 1rem);
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

const FiltersRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  min-width: 0;
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchIcon = styled(Search)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--muted-foreground);
  position: absolute;
  left: clamp(0.5rem, 2vw, 0.75rem);
  top: 50%;
  transform: translateY(-50%);
`;

const SearchInput = styled(Input)`
  padding-left: clamp(2rem, 6vw, 2.5rem);
  background-color: var(--input-background);
  border: 1px solid var(--border);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  
  &:focus {
    border-color: var(--ring);
    box-shadow: 0 0 0 1px var(--ring);
  }
`;

const SelectContainer = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: clamp(10rem, 20vw, 12rem);
  }
`;

const FilterButton = styled(Button)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  white-space: nowrap;
  
  &:hover {
    background-color: var(--muted);
  }
`;

const TableCard = styled.div`
  border: 1px solid var(--border);
  background-color: var(--card);
  border-radius: 0.75rem;
  overflow: hidden;
`;

const TableHeaderSection = styled.div`
  background-color: var(--muted);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const TableTitle = styled.h3`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  margin: 0;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
`;

const StyledTable = styled(Table)`
  width: 100%;
  min-width: 700px; // Minimum width for proper table layout
`;

const StyledTableHead = styled(TableHead)`
  color: var(--muted-foreground);
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1rem);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
`;

const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: var(--muted);
  }
  
  transition: background-color 0.2s;
`;

const StyledTableCell = styled(TableCell)`
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1rem);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
`;

const CellContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const JobIdText = styled.span`
  color: var(--foreground);
  font-weight: 500;
`;

const JobBadge = styled(Badge)`
  background-color: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`;

const TemplateText = styled.span`
  color: var(--foreground);
`;

const POText = styled.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin-top: 0.25rem;
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const DetailsContainer = styled.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
`;

const WeightText = styled.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
`;

const ParentText = styled.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.25rem, 1vw, 0.5rem);
  flex-wrap: wrap;
`;

const ActionButton = styled(Button)`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  min-height: clamp(1.75rem, 4vw, 2rem);
  padding: clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 2vw, 0.75rem);
  white-space: nowrap;
  
  &.view {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1d4ed8;
    
    &:hover {
      background-color: #dbeafe;
    }
  }
  
  &.edit {
    background-color: var(--secondary);
    border: 1px solid var(--border);
    color: var(--secondary-foreground);
    
    &:hover {
      background-color: var(--muted);
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

const CreateButton = styled(Button)`
  background-color: var(--primary);
  color: var(--primary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  white-space: nowrap;
  
  &:hover {
    background-color: var(--primary);
    opacity: 0.9;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 0.5rem;
  color: var(--muted-foreground);
`;

const LoadingSpinner = styled(Loader2)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export function JobsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [templateFilter, setTemplateFilter] = useState("all-templates");
  const [statusFilter, setStatusFilter] = useState("all-statuses");
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    activeJobs: 0,
    consolidations: 0,
    completed: 0
  });

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    setIsLoading(true);
    try {
      const consolidations = await fetchConsolidations();
      
      // Combine consolidations and individual jobs
      const allJobs = [
        ...consolidations.map(cons => ({
          ...cons,
          type: 'consolidation'
        })),
        ...mockIndividualJobs
      ];
      
      setJobs(allJobs);
      
      // Calculate stats
      const activeJobs = allJobs.filter(job => job.status === 'In Progress').length;
      const consolidationCount = consolidations.length;
      const completedJobs = allJobs.filter(job => job.status === 'Completed').length;
      
      setStats({
        activeJobs,
        consolidations: consolidationCount,
        completed: completedJobs
      });
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    const iconStyle = { width: '1rem', height: '1rem' };
    
    switch (status) {
      case 'In Progress':
        return <Clock style={{...iconStyle, color: '#2563eb'}} />;
      case 'Completed':
        return <CheckCircle2 style={{...iconStyle, color: '#16a34a'}} />;
      case 'Issue':
        return <AlertCircle style={{...iconStyle, color: '#dc2626'}} />;
      default:
        return <Clock style={{...iconStyle, color: '#9ca3af'}} />;
    }
  };

  const getStatusBadge = (status) => {
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

  const handleViewJob = (job) => {
    if (job.type === 'consolidation') {
      navigate(`/consolidation/${job.id}`);
    } else {
      navigate(`/job/${job.id}`);
    }
  };

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchTerm === "" || 
      job.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.poNumber && job.poNumber.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTemplate = templateFilter === "all-templates" || 
      job.template?.toLowerCase().includes(templateFilter.replace('-', ' '));
    
    const matchesStatus = statusFilter === "all-statuses" || 
      job.status?.toLowerCase().replace(' ', '-') === statusFilter;
    
    return matchesSearch && matchesTemplate && matchesStatus;
  });

  if (isLoading) {
    return (
      <PageContainer>
        <LoadingContainer>
          <LoadingSpinner />
          Loading jobs and consolidations...
        </LoadingContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
        {/* Header */}
        <Header>
          <HeaderContent>
            <HeaderText>
              <Title>Jobs & Consolidations</Title>
              <Subtitle>Track and manage all freight shipments</Subtitle>
            </HeaderText>
            {/* <CreateButton onClick={() => navigate('/create')}>
              <Plus  />
              Add New Shipment
            </CreateButton> */}
            <HeaderContentButton>
              <CreateButton onClick={() => navigate('/create')}>
                <Plus style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                Create Consolidation
              </CreateButton>
              <CreateButton onClick={() => navigate('/job/create')}>
                <Plus style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                Create Standalone Job
              </CreateButton>
            </HeaderContentButton>
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
                    <div>
                      <StatLabel className="blue">Active Jobs</StatLabel>
                      <StatValue className="blue">{stats.activeJobs}</StatValue>
                    </div>
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
                    <div>
                      <StatLabel className="green">Consolidations</StatLabel>
                      <StatValue className="green">{stats.consolidations}</StatValue>
                    </div>
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
                    <div>
                      <StatLabel className="purple">Completed</StatLabel>
                      <StatValue className="purple">{stats.completed}</StatValue>
                    </div>
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
                    <Select value={templateFilter} onValueChange={setTemplateFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Templates" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-templates">All Templates</SelectItem>
                        <SelectItem value="consolidation">Consolidation</SelectItem>
                        <SelectItem value="import-lcl">Import LCL</SelectItem>
                        <SelectItem value="export-fcl">Export FCL</SelectItem>
                        <SelectItem value="air-export">Air Export</SelectItem>
                      </SelectContent>
                    </Select>
                  </SelectContainer>

                  <SelectContainer>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Statuses" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-statuses">All Statuses</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="issue">Issue</SelectItem>
                      </SelectContent>
                    </Select>
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
                <TableTitle>All Jobs & Consolidations ({filteredJobs.length})</TableTitle>
              </TableHeaderSection>
              <TableWrapper>
                <StyledTable>
                  <TableHeader>
                    <TableRow>
                      <StyledTableHead>Job/Consolidation ID</StyledTableHead>
                      <StyledTableHead>Template</StyledTableHead>
                      <StyledTableHead>Current Stage</StyledTableHead>
                      <StyledTableHead>Status</StyledTableHead>
                      <StyledTableHead>Details</StyledTableHead>
                      <StyledTableHead>Actions</StyledTableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredJobs.map((job) => (
                      <StyledTableRow key={job.id}>
                        <StyledTableCell>
                          <CellContent>
                            {job.type === 'consolidation' ? (
                              <Package style={{width: '1rem', height: '1rem', color: '#2563eb'}} />
                            ) : (
                              <div style={{
                                width: '1rem',
                                height: '1rem',
                                backgroundColor: '#d1d5db',
                                borderRadius: '0.25rem'
                              }} />
                            )}
                            <JobIdText>{job.id}</JobIdText>
                            {job.type === 'consolidation' && job.totalJobs && (
                              <JobBadge variant="outline">
                                {job.totalJobs} jobs
                              </JobBadge>
                            )}
                          </CellContent>
                        </StyledTableCell>
                        <StyledTableCell>
                          <TemplateText>{job.template}</TemplateText>
                          {job.poNumber && (
                            <POText>PO: {job.poNumber}</POText>
                          )}
                        </StyledTableCell>
                        <StyledTableCell>
                          <span>{job.currentStage || 'Stage ' + (job.currentStage || 1)}</span>
                        </StyledTableCell>
                        <StyledTableCell>
                          <StatusContainer>
                            {getStatusIcon(job.status)}
                            {getStatusBadge(job.status)}
                          </StatusContainer>
                        </StyledTableCell>
                        <StyledTableCell>
                          {job.type === 'consolidation' ? (
                            <DetailsContainer>
                              <div>{job.origin?.city} → {job.destination?.city}</div>
                              <WeightText>{job.totalWeight}</WeightText>
                            </DetailsContainer>
                          ) : (
                            <DetailsContainer>
                              {job.consolidationId && (
                                <ParentText>Part of {job.consolidationId}</ParentText>
                              )}
                              {job.cargo?.description && (
                                <div>{job.cargo.description}</div>
                              )}
                            </DetailsContainer>
                          )}
                        </StyledTableCell>
                        <StyledTableCell>
                          <ActionsContainer>
                            <ActionButton 
                              className="view"
                              variant="outline" 
                              size="sm"
                              onClick={() => handleViewJob(job)}
                            >
                              <Eye style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
                              View
                            </ActionButton>
                            <ActionButton 
                              className="edit"
                              variant="outline" 
                              size="sm"
                            >
                              <Edit style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
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
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </StyledTable>
              </TableWrapper>
            </TableCard>
          </ContentWrapper>
        </ContentArea>
    </PageContainer>
  );
}