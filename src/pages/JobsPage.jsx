import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Input,
  Badge,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Select,
} from "../ui";
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
  FileText,
} from "lucide-react";
import { mockJobs } from "../data/jobs";

// --- Modern Layout Styled Components ---
const PageContainer = styled.div`
  display: flex;
  min-height: 100%;
  background: var(--background);
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const Header = styled.header`
  border-bottom: 1px solid var(--foreground);
  padding: 2rem 2.5rem 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: var(--background);
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--foreground);
  margin: 0;
`;

const Subtitle = styled.p`
  color: var(--muted-foreground);
  font-size: 1.125rem;
  margin: 0;
`;

const CreateButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--process_buttons);
  color: var(--primary-foreground);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgb(16 24 40 / 0.05);
  &:hover {
    background: var(--primary);
    opacity: 0.92;
  }
`;

const CreateButtonIcon = styled(Plus)`
  width: 1.25rem;
  height: 1.25rem;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 0;
`;

const ContentWrapper = styled.div`
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 2rem);
`;

// --- Stats ---
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const StatsCard = styled(Card)`
  border: none;
  background: var(--card);
  border-radius: 1rem;
  box-shadow: 0 2px 8px 0 rgb(16 24 40 / 0.06);
  padding: 0;
`;
const StatsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
`;
const StatsInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const StatsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const StatLabel = styled.span`
  font-size: 1rem;
  color: var(--muted-foreground);
  font-weight: 500;
`;
const StatValue = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: var(--foreground);
`;
const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props =>
    props.color === "blue"
      ? "#dbeafe"
      : props.color === "green"
      ? "#dcfce7"
      : "#f3e8ff"};
`;
const StyledIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  color: ${props =>
    props.color === "blue"
      ? "#2563eb"
      : props.color === "green"
      ? "#16a34a"
      : "#9333ea"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

// --- Filters ---
const FiltersCard = styled(Card)`
  border: none;
  background: var(--card);
  border-radius: 1rem;
  box-shadow: 0 2px 8px 0 rgb(16 24 40 / 0.06);
  padding: 0;
`;
const FiltersHeader = styled.div`
  background: var(--muted);
  border-bottom: 1px solid #e5e7eb;
  padding: 1.25rem 2rem;
  border-radius: 1rem 1rem 0 0;
`;
const FiltersTitle = styled.h3`
  font-size: 1.125rem;
  color: var(--foreground);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
`;
const FiltersContent = styled.div`
  padding: 1.5rem 2rem;
`;
const FiltersRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
  }
`;
const SearchContainer = styled.div`
  flex: 1;
  min-width: 180px;
`;
const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const SearchIcon = styled(Search)`
  width: 1.1rem;
  height: 1.1rem;
  color: #94a3b8;
  position: absolute;
  left: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
`;
const SearchInput = styled(Input)`
  padding-left: 2.5rem;
  background: var(--input-background);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  height: 2.5rem;
  font-size: 1rem;
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 1px #2563eb22;
  }
`;
const SelectContainer = styled.div`
  min-width: 180px;
`;
const StyledSelect = styled(Select)`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  height: 2.5rem;
  font-size: 1rem;
`;
const StyledSelectTrigger = styled.div``;
const FilterButton = styled(Button)`
  background: var(--secondary);
  color: var(--secondary-foreground);
  font-weight: 500;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  height: 2.5rem;
  font-size: 1rem;
  &:hover {
    background: var(--secondary);
    opacity: 0.92;
  }
`;

// --- Table ---
const TableCard = styled.div`
  border: none;
  background: var(--card);
  border-radius: 1rem;
  box-shadow: 0 2px 8px 0 rgb(16 24 40 / 0.06);
  overflow: hidden;
`;
const TableHeaderSection = styled.div`
  background: var(--muted);
  border-bottom: 1px solid #e5e7eb;
  padding: 1.5rem 2rem;
`;
const TableTitle = styled.h3`
  font-size: 1.125rem;
  color: var(--foreground);
  font-weight: 600;
  margin: 0;
`;
const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;
const StyledTable = styled(Table)`
  width: 100%;
  min-width: 100%;
  background: var(--card);
`;
const StyledTableHeader = styled(TableHead)``;
const StyledTableHeaderRow = styled.tr``;
const StyledTableHead = styled.th`
  font-weight: 600;
  color: var(--muted-foreground);
  background: var(--muted);
  padding: 1rem 1.25rem;
  text-align: left;
  font-size: 1rem;
`;
const StyledTableRow = styled.tr`
  background: var(--card);
  border-bottom: 3px solid var(--muted);
  &:hover {
    background: var(--secondary);
    cursor: default;
  }
  transition: background 0.2s;
`;
const CellContent = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const JobIcon = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  background: #e5e7eb;
  border-radius: 0.25rem;
`;
const JobIdText = styled.span`
  color: var(--foreground);
  font-weight: 500;
  font-size: 1rem;
`;
const JobBadge = styled(Badge)`
  background: var(--accent);
  color: var(--accent-foreground);
  border: none;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;
`;
const TemplateText = styled.span`
  color: var(--foreground);
  font-weight: 500;
`;
const POText = styled.div`
  font-size: 0.7rem;
  color: var(--muted-foreground);
  margin-top: 0.2rem;
`;
const StageText = styled.span`
  color: var(--muted-foreground);
  font-weight: 500;
`;
const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const StatusIcon = styled.div``;
const DetailsContainer = styled.div`
  font-size: 0.95rem;
  color: var(--muted-foreground);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const WeightText = styled.div`
  font-size: 0.8rem;
  color: var(--muted-foreground);
`;
const ParentText = styled.div`
  font-size: 0.8rem;
  color: var(--muted-foreground);
`;
const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const ActionButton = styled(Button)`
  cursor: default;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.95rem;
  padding: 0.4rem 0.9rem;
  border-radius: 0.5rem;
  &.view {
    background: var(--accent);
    color: var(--accent-foreground);
    border: none;
    &:hover {
      opacity: 0.92;
    }
  }
  &.edit {
    background: var(--secondary);
    color: var(--secondary-foreground);
    border: none;
    &:hover {
      opacity: 0.92;
    }
  }
  &.archive {
    background: var(--destructive-foreground);
    color: var(--destructive);
    border: none;
    &:hover {
      opacity: 0.92;
    }
  }
`;
const ButtonIcon = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

// --- Component ---
export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [templateFilter, setTemplateFilter] = useState("all-templates");
  const [statusFilter, setStatusFilter] = useState("all-statuses");
  const navigate = useNavigate();
  const handleCreateNew = () => navigate("/consolidation/new");

  // --- Select options ---
  const templateOptions = [
    { label: "All Templates", value: "all-templates" },
    { label: "Ocean Import", value: "ocean-import" },
    { label: "Air Export", value: "air-export" },
    { label: "Consolidation", value: "consolidation" },
    // Add more as needed
  ];
  const statusOptions = [
    { label: "All Statuses", value: "all-statuses" },
    { label: "In Progress", value: "In Progress" },
    { label: "Completed", value: "Completed" },
    { label: "Issue", value: "Issue" },
    // Add more as needed
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "In Progress":
        return <Clock style={{ color: "#2563eb", width: "1rem", height: "1rem" }} />;
      case "Completed":
        return <CheckCircle2 style={{ color: "#16a34a", width: "1rem", height: "1rem" }} />;
      case "Issue":
        return <AlertCircle style={{ color: "#dc2626", width: "1rem", height: "1rem" }} />;
      default:
        return <Clock style={{ color: "#9ca3af", width: "1rem", height: "1rem" }} />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "In Progress":
        return <Badge style={{ backgroundColor: "var(--in-progress)", color: "var(--accent-foreground)" }}>In Progress</Badge>;
      case "Completed":
        return <Badge style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}>Completed</Badge>;
      case "Issue":
        return <Badge style={{ backgroundColor: "var(--destructive-foreground)", color: "var(--destructive)" }}>Issue</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <PageContainer>
      <MainContent>
        <Header>
          <HeaderText>
            <Title>Jobs & Consolidations</Title>
            <Subtitle>Track and manage all freight shipments</Subtitle>
          </HeaderText>
          <CreateButton onClick={handleCreateNew}>
            <CreateButtonIcon />
            Add New Shipment
          </CreateButton>
        </Header>
        <ContentArea>
          <ContentWrapper>
            <StatsGrid>
              <StatsCard>
                <StatsContent>
                  <StatsInner>
                    <StatsTextContainer>
                      <StatLabel>Active Jobs</StatLabel>
                      <StatValue>12</StatValue>
                    </StatsTextContainer>
                  </StatsInner>
                  <IconContainer color="blue">
                    <StyledIcon color="blue">
                      <Package />
                    </StyledIcon>
                  </IconContainer>
                </StatsContent>
              </StatsCard>
              <StatsCard>
                <StatsContent>
                  <StatsInner>
                    <StatsTextContainer>
                      <StatLabel>Consolidations</StatLabel>
                      <StatValue>3</StatValue>
                    </StatsTextContainer>
                  </StatsInner>
                  <IconContainer color="green">
                    <StyledIcon color="green">
                      <BarChart3 />
                    </StyledIcon>
                  </IconContainer>
                </StatsContent>
              </StatsCard>
              <StatsCard>
                <StatsContent>
                  <StatsInner>
                    <StatsTextContainer>
                      <StatLabel>Completed</StatLabel>
                      <StatValue>45</StatValue>
                    </StatsTextContainer>
                  </StatsInner>
                  <IconContainer color="purple">
                    <StyledIcon color="purple">
                      <CheckCircle2 />
                    </StyledIcon>
                  </IconContainer>
                </StatsContent>
              </StatsCard>
            </StatsGrid>
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
                    <StyledSelect
                      value={templateFilter}
                      onValueChange={setTemplateFilter}
                      options={templateOptions}
                    />
                  </SelectContainer>
                  <SelectContainer>
                    <StyledSelect
                      value={statusFilter}
                      onValueChange={setStatusFilter}
                      options={statusOptions}
                    />
                  </SelectContainer>
                  <FilterButton>Apply Filters</FilterButton>
                </FiltersRow>
              </FiltersContent>
            </FiltersCard>
            <TableCard>
              <TableHeaderSection>
                <TableTitle>All Jobs & Consolidations</TableTitle>
              </TableHeaderSection>
              <TableWrapper>
                <StyledTable>
                  <thead>
                    <StyledTableHeaderRow>
                      <StyledTableHead>Job/Consolidation ID</StyledTableHead>
                      <StyledTableHead>Template</StyledTableHead>
                      <StyledTableHead>Current Stage</StyledTableHead>
                      <StyledTableHead>Status</StyledTableHead>
                      <StyledTableHead>Details</StyledTableHead>
                      <StyledTableHead>Actions</StyledTableHead>
                    </StyledTableHeaderRow>
                  </thead>
                  <tbody>
                    {mockJobs.map((job) => (
                      <StyledTableRow key={job.id}>
                        <td>
                          <CellContent>
                            {job.type === "consolidation" ? (
                              <Package style={{ width: "1.1rem", height: "1.1rem", color: "#2563eb" }} />
                            ) : (
                              <JobIcon> <FileText/> </JobIcon>
                            )}
                            <JobIdText>{job.id}</JobIdText>
                            {job.type === "consolidation" && <JobBadge>{job.totalJobs} jobs</JobBadge>}
                          </CellContent>
                        </td>
                        <td>
                          <TemplateText>{job.template}</TemplateText>
                          {job.poNumber && <POText>PO: {job.poNumber}</POText>}
                        </td>
                        <td>
                          <StageText>{job.currentStage}</StageText>
                        </td>
                        <td>
                          <StatusContainer>
                            {getStatusIcon(job.status)}
                            {getStatusBadge(job.status)}
                          </StatusContainer>
                        </td>
                        <td>
                          {job.type === "consolidation" ? (
                            <DetailsContainer>
                              <div>
                                {job.origin} → {job.destination}
                              </div>
                              <WeightText>{job.weight}</WeightText>
                            </DetailsContainer>
                          ) : (
                            <DetailsContainer>
                              {job.parentConsolidation && (
                                <ParentText>Part of {job.parentConsolidation}</ParentText>
                              )}
                            </DetailsContainer>
                          )}
                        </td>
                        <td>
                          <ActionsContainer>
                            <ActionButton className="view">
                              <ButtonIcon>
                                <Eye style={{ width: "1rem", height: "1rem" }} />
                              </ButtonIcon>
                              View
                            </ActionButton>
                            <ActionButton className="edit">
                              <ButtonIcon>
                                <Edit style={{ width: "1rem", height: "1rem" }} />
                              </ButtonIcon>
                              Edit
                            </ActionButton>
                            {job.status === "Completed" && (
                              <ActionButton className="archive">
                                <ButtonIcon>
                                  <Archive style={{ width: "1rem", height: "1rem" }} />
                                </ButtonIcon>
                              </ActionButton>
                            )}
                          </ActionsContainer>
                        </td>
                      </StyledTableRow>
                    ))}
                  </tbody>
                </StyledTable>
              </TableWrapper>
            </TableCard>
          </ContentWrapper>
        </ContentArea>
      </MainContent>
    </PageContainer>
  );
}