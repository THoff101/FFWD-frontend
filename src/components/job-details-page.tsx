import { SidebarNav } from "./sidebar-nav";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { 
  Play, 
  Pause, 
  Edit, 
  FileText, 
  Upload, 
  Settings, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ArrowLeft
} from "lucide-react";

interface JobDetailsPageProps {
  data: any;
  onBackToCreation: () => void;
}

export function JobDetailsPage({ data, onBackToCreation }: JobDetailsPageProps) {
  const progressStages = [
    { 
      name: "Booking & Preparation", 
      status: "current", 
      description: "Setting up shipment documentation and booking confirmation"
    },
    { 
      name: "Origin Handling", 
      status: "pending", 
      description: "Collection and preparation at origin location"
    },
    { 
      name: "Departure & Transit", 
      status: "pending", 
      description: "Cargo in transit to destination"
    },
    { 
      name: "Arrival Notification", 
      status: "pending", 
      description: "Notification of cargo arrival at destination"
    },
    { 
      name: "Destination Clearance", 
      status: data.template?.includes('import') ? "external" : "pending",
      description: "Customs clearance and regulatory approvals"
    },
    { 
      name: "Destination Handling", 
      status: "pending", 
      description: "Final delivery preparations"
    },
    { 
      name: "Completion & Settlement", 
      status: "pending", 
      description: "Final documentation and payment settlement"
    }
  ];

  const currentStageIndex = progressStages.findIndex(stage => stage.status === 'current');
  const currentStage = progressStages[currentStageIndex];

  const pendingTasks = [
    { name: "Generate Delivery Order LCL", type: "generate", urgent: true },
    { name: "Upload Commercial Invoice", type: "upload", urgent: false },
    { name: "Generate MBL", type: "generate", urgent: false }
  ];

  const historyLog = [
    { timestamp: data.createdAt, event: "Job Created", user: "System", details: `Job ${data.id} created successfully` },
    { timestamp: data.createdAt, event: "Template Applied", user: "System", details: `${data.template} template applied` },
    { timestamp: data.createdAt, event: "Stage Advanced", user: "System", details: "Advanced to Booking & Preparation" }
  ];

  const getStageColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500 border-green-500 text-white';
      case 'current': return 'bg-blue-500 border-blue-500 text-white';
      case 'pending': return 'bg-white border-muted text-muted-foreground';
      case 'external': return 'bg-gray-300 border-gray-400 text-gray-600';
      case 'issue': return 'bg-red-500 border-red-500 text-white';
      default: return 'bg-white border-muted text-muted-foreground';
    }
  };

  const getStageIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'current': return <Clock className="w-4 h-4" />;
      case 'issue': return <AlertCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex">
      {/* Sidebar */}
      <SidebarNav />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onBackToCreation}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Creation
                </Button>
                <Badge variant="outline" className="bg-blue-50">
                  {data.status}
                </Badge>
              </div>
              <h1 className="text-2xl font-bold text-foreground">Job {data.id}</h1>
              <p className="text-muted-foreground">
                {data.template?.toUpperCase()} • PO: {data.poNumber} • Created {formatDateTime(data.createdAt)}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Details
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Modify Progress
              </Button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Job Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground">Origin → Destination</div>
                  <div className="font-medium">
                    {data.origin?.city || 'N/A'} → {data.destination?.city || 'N/A'}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground">Weight / Volume</div>
                  <div className="font-medium">
                    {data.weight || '0'} kg / {data.volume || '0'} cbm
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground">ETD / ETA</div>
                  <div className="font-medium">
                    {data.etd || 'TBD'} / {data.eta || 'TBD'}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground">Current Stage</div>
                  <div className="font-medium">
                    Stage {currentStageIndex + 1} of {progressStages.length}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Bar */}
            <Card className="border-2 border-dashed border-blue-200 bg-blue-50/30">
              <CardHeader>
                <CardTitle className="text-blue-700">Progress Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Progress line */}
                  <div className="absolute top-6 left-0 w-full h-0.5 bg-muted">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
                      style={{ width: `${(currentStageIndex / (progressStages.length - 1)) * 100}%` }}
                    />
                  </div>
                  
                  {/* Stages */}
                  <div className="flex items-center justify-between relative z-10">
                    {progressStages.map((stage, index) => (
                      <div key={index} className="flex flex-col items-center max-w-24">
                        <div 
                          className={`
                            w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200
                            ${getStageColor(stage.status)}
                            shadow-sm
                          `}
                        >
                          {getStageIcon(stage.status) || (
                            <span className="text-sm font-medium">{index + 1}</span>
                          )}
                        </div>
                        
                        <div className="mt-2 text-center">
                          <p className={`text-xs font-medium ${
                            stage.status === 'current' ? 'text-blue-600' : 
                            stage.status === 'completed' ? 'text-green-600' :
                            stage.status === 'external' ? 'text-gray-600' :
                            'text-muted-foreground'
                          }`}>
                            {stage.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Stage Details */}
            <Card className="border-2 border-dashed border-green-200 bg-green-50/30">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Current Stage: {currentStage?.name}
                </CardTitle>
                <p className="text-green-600 text-sm">{currentStage?.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-medium">Pending Tasks:</h4>
                  <div className="space-y-3">
                    {pendingTasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-dashed border-green-300">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${task.urgent ? 'bg-red-500' : 'bg-yellow-500'}`} />
                          <span className="font-medium">{task.name}</span>
                          {task.urgent && <Badge variant="destructive" className="text-xs">Urgent</Badge>}
                        </div>
                        <div className="flex gap-2">
                          {task.type === 'generate' ? (
                            <Button variant="outline" size="sm" className="text-xs">
                              <Settings className="w-3 h-3 mr-1" />
                              Generate
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" className="text-xs">
                              <Upload className="w-3 h-3 mr-1" />
                              Upload
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-dashed border-green-300">
                    <Button className="bg-green-600 hover:bg-green-700 text-white mr-3">
                      <Play className="w-4 h-4 mr-2" />
                      Resume Progress
                    </Button>
                    <Button variant="outline">
                      <Pause className="w-4 h-4 mr-2" />
                      Pause Job
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Documents */}
              <Card className="border-2 border-dashed border-purple-200 bg-purple-50/30">
                <CardHeader>
                  <CardTitle className="text-purple-700 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Document Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="required">
                      <AccordionTrigger>Required Documents</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-white rounded border">
                            <span className="text-sm">Delivery Order LCL</span>
                            <Badge variant="outline" className="bg-yellow-50">Pending</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-white rounded border">
                            <span className="text-sm">Commercial Invoice</span>
                            <Badge variant="outline" className="bg-red-50">Missing</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-white rounded border">
                            <span className="text-sm">MBL</span>
                            <Badge variant="outline" className="bg-green-50">Generated</Badge>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    {data.customDocuments && data.customDocuments.length > 0 && (
                      <AccordionItem value="custom">
                        <AccordionTrigger>Custom Documents</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {data.customDocuments.map((doc: any, index: number) => (
                              <div key={index} className="flex justify-between items-center p-2 bg-white rounded border">
                                <span className="text-sm">{doc.name || 'Unnamed'}</span>
                                <Badge variant="outline" className="bg-gray-50">Uploaded</Badge>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </Accordion>
                </CardContent>
              </Card>

              {/* History Log */}
              <Card className="border-2 border-dashed border-orange-200 bg-orange-50/30">
                <CardHeader>
                  <CardTitle className="text-orange-700">Activity History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {historyLog.map((log, index) => (
                      <div key={index} className="flex gap-3 p-3 bg-white rounded-lg border border-dashed border-orange-300">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-sm">{log.event}</p>
                              <p className="text-xs text-muted-foreground">{log.details}</p>
                            </div>
                            <div className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                              {formatDateTime(log.timestamp)}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">by {log.user}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}