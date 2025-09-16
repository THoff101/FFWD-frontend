import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
// Collapsible group UI for activity groups
const GroupHeader = styled.div`
  padding: 0.75rem 1rem;
  margin: 0;
  font-size: 1rem;
  color: var(--foreground);
  border-bottom: 1px solid var(--border);
  background-color: var(--card);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background 0.12s;
  &:hover {
    background-color: var(--muted);
  }
`;

const GroupContent = styled.div`
  max-height: 14rem;
  overflow-y: auto;
  transition: max-height 0.2s;
  background: inherit;
`;

const GroupControls = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background: var(--card);
  border-bottom: 1px solid var(--border);
  align-items: center;
  justify-content: flex-end;
`;
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Plus,
  Package,
  Truck,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Activity,
  FileText,
  Users,
  Globe,
  Calendar,
  ArrowRight,
  BarChart3,
  Workflow
} from "lucide-react";
// import { mockJobs } from "../data/mock-jobs";

// Responsive styled components
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
    margin-top: 4rem; /* Account for mobile menu button */
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

const WelcomeTitle = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--foreground);
  margin: 0 0 0.5rem 0;
`;

const WelcomeSubtitle = styled.p`
  color: var(--muted-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  margin: 0;
`;

const HeaderActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2vw, 1rem);
`;

const CreateButton = styled(Button)`
  background-color: var(--primary);
  color: var(--primary-foreground);
  
  &:hover {
    opacity: 0.9;
  }
`;

const ViewJobsButton = styled(Button)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled(Card)`
  border: 1px solid var(--border);
  background-color: var(--card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StatCardContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatInfo = styled.div`
  flex: 1;
`;

const StatValue = styled.div`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--foreground);
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
`;

const StatIcon = styled.div`
  width: clamp(2.5rem, 6vw, 3rem);
  height: clamp(2.5rem, 6vw, 3rem);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.primary {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  
  &.success {
    background-color: rgba(34, 197, 94, 0.1);
    color: #22c55e;
  }
  
  &.warning {
    background-color: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
  }
  
  &.purple {
    background-color: rgba(168, 85, 247, 0.1);
    color: #a855f7;
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 4vw, 2rem);
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const RecentActivityCard = styled(Card)`
  border: 1px solid var(--border);
  background-color: var(--card);
`;

const RecentActivityHeader = styled(CardHeader)`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
`;

const RecentActivityTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RecentActivityContent = styled(CardContent)`
  padding: 0;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActivityItem = styled.div`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: var(--muted);
  }
`;

const ActivityIcon = styled.div`
  width: clamp(2rem, 5vw, 2.5rem);
  height: clamp(2rem, 5vw, 2.5rem);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &.created {
    background-color: rgba(34, 197, 94, 0.1);
    color: #22c55e;
  }
  
  &.updated {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  
  &.alert {
    background-color: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
  }
`;

const ActivityInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ActivityTitle = styled.p`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--foreground);
  margin: 0 0 0.25rem 0;
`;

const ActivityDescription = styled.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
`;

const ActivityTime = styled.span`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
`;

const QuickActionsCard = styled(Card)`
  border: 1px solid var(--border);
  background-color: var(--card);
`;

const QuickActionsHeader = styled(CardHeader)`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
`;

const QuickActionsTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuickActionsContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const QuickActionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
`;

const QuickActionButton = styled(Button)`
  width: 100%;
  justify-content: flex-start;
  padding: clamp(0.75rem, 2vw, 1rem);
  height: auto;
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
  }
`;

const QuickActionIcon = styled.div`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: clamp(0.75rem, 2vw, 1rem);
  
  &.primary {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  
  &.success {
    background-color: rgba(34, 197, 94, 0.1);
    color: #22c55e;
  }
  
  &.purple {
    background-color: rgba(168, 85, 247, 0.1);
    color: #a855f7;
  }
`;

const QuickActionContent = styled.div`
  text-align: left;
  flex: 1;
`;

const QuickActionTitle = styled.div`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  margin-bottom: 0.25rem;
`;

const QuickActionDescription = styled.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  line-height: 1.3;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
  background-color: var(--card);
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 150px;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  color: var(--foreground);
  background-color: var(--background);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const Select = styled.select`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  color: var(--foreground);
  background-color: var(--background);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

export function DashboardPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const stats = [
    {
      label: "Active Consolidations",
      value: "12",
      icon: Package,
      className: "primary"
    },
    {
      label: "Pending Actions",
      value: "7",
      icon: Clock,
      className: "warning"
    },
    {
      label: "Completed Jobs",
      value: "42",
      icon: CheckCircle,
      className: "success"
    },
    {
      label: "Total Revenue",
      value: "$284K",
      icon: TrendingUp,
      className: "purple"
    }
  ];

  const recentActivity = [
    {
      id: 3,
      title: "New consolidation created",
      description: "CONS-789456 for Shanghai → Los Angeles route with 3 individual jobs",
      time: "2 hours ago",
      type: "created"
    },
    {
      id: 2,
      title: "Job status updated",
      description: "JOB-123456 moved to 'Destination Handling' stage",
      time: "4 hours ago",
      type: "updated"
    },
    {
      id: 1,
      title: "Document required",
      description: "Commercial Invoice needed for CONS-456789",
      time: "6 hours ago",
      type: "alert"
    },
    {
      id: 4,
      title: "Consolidation completed",
      description: "CONS-234567 successfully delivered to customers",
      time: "1 day ago",
      type: "created"
    },
    {
      id: 5,
      title: "Stage progress",
      description: "Multiple jobs advanced to 'Departure & Transit'",
      time: "2 days ago",
      type: "updated"
    }
  ];

  const quickActions = [
    {
      title: "Create Consolidation",
      description: "Start a new freight consolidation process",
      icon: Plus,
      className: "primary",
      action: () => navigate('/create')
    },
    {
      title: "View All Jobs",
      description: "Browse and manage your freight jobs",
      icon: FileText,
      className: "success",
      action: () => navigate('/jobs')
    },
    {
      title: "Vessels Table",
      description: "View current vessels information",
      icon: BarChart3,
      className: "purple",
      action: () => navigate('/vessels')
    }
  ];

  const formatTime = (timeString) => {
    return timeString;
  };

  // Filter recentActivity by search and filterType
  const filteredActivity = recentActivity.filter((activity) => {
    const matchesSearch = search === "" || 
      activity.title.toLowerCase().includes(search.toLowerCase()) || 
      activity.description.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === "all" || activity.type === filterType;
    return matchesSearch && matchesType;
  });

  // Group filtered results by type
  const groupedActivity = filteredActivity.reduce((groups, activity) => {
    if (!groups[activity.type]) {
      groups[activity.type] = [];
    }
    groups[activity.type].push(activity);
    return groups;
  }, {});

  // Map type to display label
  const typeLabels = {
    created: "Created",
    updated: "Updated",
    alert: "Alerts"
  };

  // Collapsed state for activity groups
  const groupKeys = Object.keys(groupedActivity);
  const [collapsedGroups, setCollapsedGroups] = useState(() =>
    groupKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );

  const toggleGroup = (key) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const collapseAll = () => {
    setCollapsedGroups(
      groupKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
  };
  const expandAll = () => {
    setCollapsedGroups(
      groupKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {})
    );
  };

  return (
    <PageContainer>
        {/* Header */}
        <Header>
          <HeaderContent>
            <HeaderLeft>
              <WelcomeTitle>Welcome back!</WelcomeTitle>
              <WelcomeSubtitle>
                Here's what's happening with your freight forwarding operations today.
              </WelcomeSubtitle>
            </HeaderLeft>
            <HeaderActions>
              <CreateButton onClick={() => navigate('/create')}>
                <Plus style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                New Consolidation
              </CreateButton>
              <ViewJobsButton variant="outline" onClick={() => navigate('/jobs')}>
                <Package style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                View Jobs
              </ViewJobsButton>
            </HeaderActions>
          </HeaderContent>
        </Header>

        {/* Content Area */}
        <ContentArea>
          <ContentWrapper>
            {/* Stats Grid */}
            <StatsGrid>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <StatCard key={index}>
                    <StatCardContent>
                      <StatInfo>
                        <StatValue>{stat.value}</StatValue>
                        <StatLabel>{stat.label}</StatLabel>
                      </StatInfo>
                      <StatIcon className={stat.className}>
                        <IconComponent style={{ width: '1.5rem', height: '1.5rem' }} />
                      </StatIcon>
                    </StatCardContent>
                  </StatCard>
                );
              })}
            </StatsGrid>

            {/* Main Content Grid */}
            <MainGrid>
              {/* Recent Activity */}
              <RecentActivityCard>
                <RecentActivityHeader>
                  <RecentActivityTitle>
                    <Activity style={{ width: '1.25rem', height: '1.25rem' }} />
                    Recent Activity
                  </RecentActivityTitle>
                </RecentActivityHeader>
                <RecentActivityContent>
                  <FilterBar>
                    <Input 
                      type="text" 
                      placeholder="Search activities..." 
                      value={search} 
                      onChange={(e) => setSearch(e.target.value)} 
                      aria-label="Search activities"
                    />
                    <Select 
                      value={filterType} 
                      onChange={(e) => setFilterType(e.target.value)}
                      aria-label="Filter activity type"
                    >
                      <option value="all">All Types</option>
                      <option value="created">Created</option>
                      <option value="updated">Updated</option>
                      <option value="alert">Alerts</option>
                    </Select>
                  </FilterBar>
                  <GroupControls>
                    <Button size="sm" variant="outline" onClick={expandAll}>Expand All</Button>
                    <Button size="sm" variant="outline" onClick={collapseAll}>Collapse All</Button>
                  </GroupControls>
                  <ActivityList>
                    {Object.entries(groupedActivity).map(([type, activities]) => (
                      <div key={type}>
                        <GroupHeader onClick={() => toggleGroup(type)} aria-expanded={!collapsedGroups[type]}>
                          <span>
                            {typeLabels[type] || type} ({activities.length})
                          </span>
                          <span style={{fontSize: "1.1em", opacity: 0.7}}>
                            {collapsedGroups[type] ? "▶" : "▼"}
                          </span>
                        </GroupHeader>
                        {!collapsedGroups[type] && (
                          <GroupContent>
                            {activities.map((activity) => (
                              <ActivityItem key={activity.id}>
                                <ActivityIcon className={activity.type}>
                                  {activity.type === 'created' && <Plus style={{ width: '1rem', height: '1rem' }} />}
                                  {activity.type === 'updated' && <ArrowRight style={{ width: '1rem', height: '1rem' }} />}
                                  {activity.type === 'alert' && <AlertTriangle style={{ width: '1rem', height: '1rem' }} />}
                                </ActivityIcon>
                                <ActivityInfo>
                                  <ActivityTitle>{activity.title}</ActivityTitle>
                                  <ActivityDescription>{activity.description}</ActivityDescription>
                                  <ActivityTime>{formatTime(activity.time)}</ActivityTime>
                                </ActivityInfo>
                              </ActivityItem>
                            ))}
                          </GroupContent>
                        )}
                      </div>
                    ))}
                  </ActivityList>
                </RecentActivityContent>
              </RecentActivityCard>

              {/* Quick Actions */}
              <QuickActionsCard>
                <QuickActionsHeader>
                  <QuickActionsTitle>
                    <Workflow style={{ width: '1.25rem', height: '1.25rem' }} />
                    Quick Actions
                  </QuickActionsTitle>
                </QuickActionsHeader>
                <QuickActionsContent>
                  <QuickActionsList>
                    {quickActions.map((action, index) => {
                      const IconComponent = action.icon;
                      return (
                        <QuickActionButton 
                          key={index}
                          variant="outline"
                          onClick={action.action}
                        >
                          <QuickActionIcon className={action.className}>
                            <IconComponent style={{ width: '1rem', height: '1rem' }} />
                          </QuickActionIcon>
                          <QuickActionContent>
                            <QuickActionTitle>{action.title}</QuickActionTitle>
                            <QuickActionDescription>{action.description}</QuickActionDescription>
                          </QuickActionContent>
                        </QuickActionButton>
                      );
                    })}
                  </QuickActionsList>
                </QuickActionsContent>
              </QuickActionsCard>
            </MainGrid>
          </ContentWrapper>
        </ContentArea>
    </PageContainer>
  );
}