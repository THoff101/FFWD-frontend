import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Upload, FileText, Play } from "lucide-react";
import { Button } from "./ui/button";

interface StepReviewProps {
  data: any;
  onSubmit: () => void;
  onBack: () => void;
}

export function StepReview({ data, onSubmit, onBack }: StepReviewProps) {
  const formatValue = (value: any) => {
    if (!value || (typeof value === 'object' && Object.keys(value).length === 0)) {
      return <span className="text-muted-foreground italic">Not specified</span>;
    }
    if (typeof value === 'object') {
      return (
        <div className="space-y-1">
          {Object.entries(value).map(([key, val]) => (
            <div key={key} className="text-sm">
              <span className="font-medium capitalize">{key}: </span>
              <span>{val as string || 'Not specified'}</span>
            </div>
          ))}
        </div>
      );
    }
    return value;
  };

  // Mock progress stages for preview
  const progressStages = [
    { name: "Booking & Preparation", status: "pending" },
    { name: "Origin Handling", status: "pending" },
    { name: "Departure & Transit", status: "pending" },
    { name: "Arrival Notification", status: "pending" },
    { name: "Destination Clearance", status: data.template?.includes('import') ? "external" : "pending" },
    { name: "Destination Handling", status: "pending" },
    { name: "Completion & Settlement", status: "pending" }
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-blue-600">{data.template?.toUpperCase() || 'N/A'}</div>
            <div className="text-sm text-blue-700">Template</div>
          </CardContent>
        </Card>
        
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-green-600">{data.poNumber || 'N/A'}</div>
            <div className="text-sm text-green-700">PO Number</div>
          </CardContent>
        </Card>
        
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-purple-600">{data.weight || '0'} kg</div>
            <div className="text-sm text-purple-700">Weight</div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-orange-600">{data.volume || '0'} cbm</div>
            <div className="text-sm text-orange-700">Volume</div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Preview */}
      <Card className="border-2 border-dashed border-indigo-200 bg-indigo-50/30">
        <CardHeader>
          <CardTitle className="text-indigo-700">Progress Preview</CardTitle>
          <p className="text-sm text-indigo-600">This is how your job progress will look after creation</p>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-6 left-0 w-full h-0.5 bg-muted opacity-50">
              <div className="h-full bg-blue-500 w-0 transition-all duration-300 ease-in-out" />
            </div>
            
            {/* Stages */}
            <div className="flex items-center justify-between relative z-10">
              {progressStages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={`
                      w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs
                      ${stage.status === 'external' ? 'bg-gray-300 border-gray-400 text-gray-600' : 
                        'bg-white border-muted text-muted-foreground'}
                    `}
                  >
                    {index + 1}
                  </div>
                  <div className="mt-2 text-center max-w-16">
                    <p className="text-xs text-muted-foreground">{stage.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Review */}
      <Card className="border-2 border-dashed border-blue-200 bg-blue-50/30">
        <CardHeader>
          <CardTitle className="text-blue-700 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Job Details Review
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full">
            {/* Basics */}
            <AccordionItem value="basics" className="border-dashed">
              <AccordionTrigger className="text-blue-600">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-100">Step 1</Badge>
                  Shipment Basics
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-3 bg-white p-4 rounded-lg border-dashed border">
                <div><strong>Template:</strong> {formatValue(data.template)}</div>
                <div><strong>PO Number:</strong> {formatValue(data.poNumber)}</div>
                <div><strong>Description:</strong> {formatValue(data.description)}</div>
                <div className="grid grid-cols-3 gap-4">
                  <div><strong>Quantity:</strong> {formatValue(data.quantity)}</div>
                  <div><strong>Weight:</strong> {formatValue(data.weight)} kg</div>
                  <div><strong>Volume:</strong> {formatValue(data.volume)} cbm</div>
                </div>
                <div><strong>Container Size:</strong> {formatValue(data.containerSize)}</div>
                {data.hazardous && (
                  <div className="p-2 bg-orange-50 border border-orange-200 rounded">
                    <div><strong>Hazardous Goods:</strong> Yes</div>
                    <div><strong>Details:</strong> {formatValue(data.hazardousDetails)}</div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>

            {/* Parties */}
            <AccordionItem value="parties" className="border-dashed">
              <AccordionTrigger className="text-green-600">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-100">Step 2</Badge>
                  Parties & Locations
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 bg-white p-4 rounded-lg border-dashed border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Shipper</h4>
                    {formatValue(data.shipper)}
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700 mb-2">Consignee</h4>
                    {formatValue(data.consignee)}
                  </div>
                </div>
                
                {data.notifyParty && Object.keys(data.notifyParty).length > 0 && (
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Notify Party</h4>
                    {formatValue(data.notifyParty)}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-orange-700 mb-2">Origin</h4>
                    {formatValue(data.origin)}
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-700 mb-2">Destination</h4>
                    {formatValue(data.destination)}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Documents & Dates */}
            <AccordionItem value="documents" className="border-dashed">
              <AccordionTrigger className="text-indigo-600">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-indigo-100">Step 3</Badge>
                  Dates & Documents
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-3 bg-white p-4 rounded-lg border-dashed border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><strong>ETD:</strong> {formatValue(data.etd)}</div>
                  <div><strong>ETA:</strong> {formatValue(data.eta)}</div>
                </div>
                <div><strong>Incoterms:</strong> {formatValue(data.incoterms)}</div>
                {data.customDocuments && data.customDocuments.length > 0 && (
                  <div>
                    <strong>Custom Documents:</strong>
                    <div className="mt-2 space-y-1">
                      {data.customDocuments.map((doc: any, index: number) => (
                        <div key={index} className="text-sm bg-gray-50 p-2 rounded">
                          {doc.name || 'Unnamed document'}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div><strong>Special Instructions:</strong> {formatValue(data.instructions)}</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* File Upload */}
      <Card className="border-2 border-dashed border-amber-200 bg-amber-50/30">
        <CardHeader>
          <CardTitle className="text-amber-700 flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Final Document Upload
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center bg-white hover:bg-amber-50 transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-amber-700 mb-2">Upload Any Additional Documents</h3>
            <p className="text-amber-600 mb-4">Drag and drop files here or click to browse</p>
            <p className="text-xs text-muted-foreground">
              Any last-minute attachments before job creation
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-6">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="border-dashed border-gray-400 text-gray-600 hover:bg-gray-50"
        >
          ← Back to Documents
        </Button>
        
        <Button 
          onClick={onSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white border-none shadow-lg"
          size="lg"
        >
          <Play className="w-5 h-5 mr-2" />
          Create Job
        </Button>
      </div>
    </div>
  );
}