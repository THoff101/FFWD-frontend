import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Upload, FileText, Plus, Settings } from "lucide-react";
import { useState } from "react";

interface StepDocumentsProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export function StepDocuments({ data, updateData }: StepDocumentsProps) {
  const [customDocuments, setCustomDocuments] = useState(data.customDocuments || []);

  const getRequiredDocuments = (template: string) => {
    const documents: Record<string, Array<{name: string, canGenerate: boolean}>> = {
      'import-lcl': [
        { name: 'Delivery Order LCL', canGenerate: true },
        { name: 'MBL', canGenerate: true },
        { name: 'LCL Manifest', canGenerate: true },
        { name: 'Packing List', canGenerate: false },
        { name: 'Certificate of Origin', canGenerate: false },
        { name: 'LCL Coloader Delivery Order', canGenerate: true },
        { name: 'Proof of Delivery', canGenerate: false },
        { name: 'Invoice - Freight', canGenerate: true },
        { name: 'Customs Entry', canGenerate: false },
        { name: 'QUOTE', canGenerate: true },
        { name: 'Invoice - Disbursement', canGenerate: true },
        { name: 'Treatment Certificate', canGenerate: false },
        { name: 'Commercial Invoice', canGenerate: false },
        { name: 'HBL', canGenerate: true },
        { name: 'Packing Declaration', canGenerate: true },
        { name: 'Prealert/Arrival Notice', canGenerate: true },
        { name: 'MSDS', canGenerate: false }
      ],
      'export-lcl': [
        { name: 'HBL', canGenerate: true },
        { name: 'Packing Declaration', canGenerate: true },
        { name: 'Commercial Invoice', canGenerate: false },
        { name: 'Packing List', canGenerate: false },
        { name: 'Export Declaration', canGenerate: true },
        { name: 'Certificate of Origin', canGenerate: false },
        { name: 'LCL Manifest', canGenerate: true },
        { name: 'Booking Confirmation', canGenerate: true },
        { name: 'Shipping Instructions', canGenerate: true }
      ],
      'import-fcl': [
        { name: 'Bill of Lading', canGenerate: true },
        { name: 'Commercial Invoice', canGenerate: false },
        { name: 'Packing List', canGenerate: false },
        { name: 'Certificate of Origin', canGenerate: false },
        { name: 'Customs Entry', canGenerate: false },
        { name: 'Delivery Order', canGenerate: true },
        { name: 'Container Release', canGenerate: true }
      ],
      'export-fcl': [
        { name: 'Bill of Lading', canGenerate: true },
        { name: 'Commercial Invoice', canGenerate: false },
        { name: 'Packing List', canGenerate: false },
        { name: 'Export Declaration', canGenerate: true },
        { name: 'Certificate of Origin', canGenerate: false },
        { name: 'Shipping Instructions', canGenerate: true }
      ],
      'air-import': [
        { name: 'Air Waybill', canGenerate: true },
        { name: 'Commercial Invoice', canGenerate: false },
        { name: 'Packing List', canGenerate: false },
        { name: 'Certificate of Origin', canGenerate: false },
        { name: 'Customs Entry', canGenerate: false },
        { name: 'Delivery Receipt', canGenerate: true }
      ],
      'air-export': [
        { name: 'Air Waybill', canGenerate: true },
        { name: 'Commercial Invoice', canGenerate: false },
        { name: 'Packing List', canGenerate: false },
        { name: 'Export Declaration', canGenerate: true },
        { name: 'Certificate of Origin', canGenerate: false }
      ]
    };
    
    return documents[template] || [];
  };

  const requiredDocuments = getRequiredDocuments(data.template || '');

  const addCustomDocument = () => {
    const newDoc = { id: Date.now(), name: '', uploaded: false };
    const updated = [...customDocuments, newDoc];
    setCustomDocuments(updated);
    updateData('customDocuments', updated);
  };

  const updateCustomDocument = (id: number, field: string, value: string) => {
    const updated = customDocuments.map((doc: any) => 
      doc.id === id ? { ...doc, [field]: value } : doc
    );
    setCustomDocuments(updated);
    updateData('customDocuments', updated);
  };

  const removeCustomDocument = (id: number) => {
    const updated = customDocuments.filter((doc: any) => doc.id !== id);
    setCustomDocuments(updated);
    updateData('customDocuments', updated);
  };

  return (
    <div className="space-y-6">
      {/* Dates Section */}
      <Card className="border-2 border-dashed border-indigo-200 bg-indigo-50/30">
        <CardHeader className="pb-4">
          <CardTitle className="text-indigo-700">Shipping Dates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="etd">Estimated Departure (ETD)</Label>
              <Input
                id="etd"
                type="date"
                className="bg-white border-dashed"
                value={data.etd || ''}
                onChange={(e) => updateData('etd', e.target.value)}
              />
              <p className="text-xs text-muted-foreground">When the cargo leaves origin</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="eta">Estimated Arrival (ETA)</Label>
              <Input
                id="eta"
                type="date"
                className="bg-white border-dashed"
                value={data.eta || ''}
                onChange={(e) => updateData('eta', e.target.value)}
              />
              <p className="text-xs text-muted-foreground">When the cargo arrives at destination</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Incoterms Section */}
      <Card className="border-2 border-dashed border-emerald-200 bg-emerald-50/30">
        <CardHeader className="pb-4">
          <CardTitle className="text-emerald-700">Trade Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="incoterms">Incoterms</Label>
            <Select onValueChange={(value) => updateData('incoterms', value)}>
              <SelectTrigger id="incoterms" className="bg-white border-dashed">
                <SelectValue placeholder="Select Incoterms..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fob">FOB - Free on Board</SelectItem>
                <SelectItem value="cif">CIF - Cost, Insurance & Freight</SelectItem>
                <SelectItem value="cfr">CFR - Cost & Freight</SelectItem>
                <SelectItem value="exw">EXW - Ex Works</SelectItem>
                <SelectItem value="fca">FCA - Free Carrier</SelectItem>
                <SelectItem value="cpt">CPT - Carriage Paid To</SelectItem>
                <SelectItem value="cip">CIP - Carriage & Insurance Paid</SelectItem>
                <SelectItem value="dap">DAP - Delivered at Place</SelectItem>
                <SelectItem value="dpu">DPU - Delivered at Place Unloaded</SelectItem>
                <SelectItem value="ddp">DDP - Delivered Duty Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Required Documents */}
      {data.template && (
        <Card className="border-2 border-dashed border-amber-200 bg-amber-50/30">
          <CardHeader className="pb-4">
            <CardTitle className="text-amber-700 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Required Documents ({data.template})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-dashed border-amber-300">
                  <div className="flex items-center gap-2">
                    <Checkbox id={`doc-${index}`} />
                    <Label htmlFor={`doc-${index}`} className="text-sm">
                      {doc.name}
                    </Label>
                  </div>
                  <div className="flex gap-2">
                    {doc.canGenerate && (
                      <Button variant="outline" size="sm" className="text-xs">
                        <Settings className="w-3 h-3 mr-1" />
                        Generate
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="text-xs">
                      <Upload className="w-3 h-3 mr-1" />
                      Upload
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Custom Documents */}
      <Card className="border-2 border-dashed border-purple-200 bg-purple-50/30">
        <CardHeader className="pb-4">
          <CardTitle className="text-purple-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Custom Documents
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={addCustomDocument}
              className="border-dashed"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Document
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {customDocuments.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No custom documents added yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {customDocuments.map((doc: any) => (
                <div key={doc.id} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-dashed border-purple-300">
                  <Input
                    placeholder="Document name"
                    value={doc.name}
                    onChange={(e) => updateCustomDocument(doc.id, 'name', e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" size="sm">
                    <Upload className="w-3 h-3 mr-1" />
                    Upload
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => removeCustomDocument(doc.id)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Special Instructions */}
      <Card className="border-2 border-dashed border-rose-200 bg-rose-50/30">
        <CardHeader className="pb-4">
          <CardTitle className="text-rose-700">Special Instructions & Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="instructions">Additional Instructions</Label>
            <Textarea
              id="instructions"
              placeholder="Add any special handling instructions, documentation requirements, or additional notes..."
              className="bg-white border-dashed min-h-24"
              value={data.instructions || ''}
              onChange={(e) => updateData('instructions', e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}