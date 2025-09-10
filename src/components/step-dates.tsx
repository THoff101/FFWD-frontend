import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface StepDatesProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export function StepDates({ data, updateData }: StepDatesProps) {
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
            <p className="text-xs text-muted-foreground">
              Defines responsibility for costs and risks between buyer and seller
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Special Instructions */}
      <Card className="border-2 border-dashed border-rose-200 bg-rose-50/30">
        <CardHeader className="pb-4">
          <CardTitle className="text-rose-700">Additional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="instructions">Special Instructions & Notes</Label>
            <Textarea
              id="instructions"
              placeholder="Add any special handling instructions, documentation requirements, or additional notes..."
              className="bg-white border-dashed min-h-24"
              value={data.instructions || ''}
              onChange={(e) => updateData('instructions', e.target.value)}
            />
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-dashed border-rose-300">
            <h4 className="text-sm font-medium text-rose-700 mb-2">Common Instructions:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-rose-600">
              <div>• Temperature controlled</div>
              <div>• Fragile handling required</div>
              <div>• Rush delivery needed</div>
              <div>• Weekend pickup/delivery</div>
              <div>• Insurance coverage required</div>
              <div>• Customs documentation</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}