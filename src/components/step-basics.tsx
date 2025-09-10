import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Card, CardContent } from "./ui/card";

interface StepBasicsProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export function StepBasics({ data, updateData }: StepBasicsProps) {
  return (
    <Card className="border-2 border-dashed border-blue-200 bg-blue-50/30">
      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shipment Template */}
          <div className="space-y-2">
            <Label htmlFor="template">Shipment Template *</Label>
            <Select onValueChange={(value) => updateData('template', value)}>
              <SelectTrigger id="template" className="bg-white border-dashed">
                <SelectValue placeholder="Select template..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="export-fcl">Export FCL</SelectItem>
                <SelectItem value="export-lcl">Export LCL</SelectItem>
                <SelectItem value="air-export">Air Export</SelectItem>
                <SelectItem value="import-fcl">Import FCL</SelectItem>
                <SelectItem value="import-lcl">Import LCL</SelectItem>
                <SelectItem value="air-import">Air Import</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Purchase Order Number */}
          <div className="space-y-2">
            <Label htmlFor="poNumber">Purchase Order (PO) Number *</Label>
            <Input
              id="poNumber"
              placeholder="e.g., PO-2024-001234"
              className="bg-white border-dashed"
              value={data.poNumber || ''}
              onChange={(e) => updateData('poNumber', e.target.value)}
            />
            <p className="text-xs text-muted-foreground">Required for tracking and reference</p>
          </div>
        </div>

        {/* Cargo Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Cargo Description *</Label>
          <Textarea
            id="description"
            placeholder="e.g., 500 cartons of electronics..."
            className="bg-white border-dashed min-h-20"
            value={data.description || ''}
            onChange={(e) => updateData('description', e.target.value)}
          />
        </div>

        {/* Quantity, Weight, Volume */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="0"
              className="bg-white border-dashed"
              value={data.quantity || ''}
              onChange={(e) => updateData('quantity', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="0.00"
              className="bg-white border-dashed"
              value={data.weight || ''}
              onChange={(e) => updateData('weight', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="volume">Volume (cbm)</Label>
            <Input
              id="volume"
              type="number"
              placeholder="0.00"
              className="bg-white border-dashed"
              value={data.volume || ''}
              onChange={(e) => updateData('volume', e.target.value)}
            />
          </div>

          {/* Container Size */}
          <div className="space-y-2">
            <Label htmlFor="container">Container Size</Label>
            <Select onValueChange={(value) => updateData('containerSize', value)}>
              <SelectTrigger id="container" className="bg-white border-dashed">
                <SelectValue placeholder="Select size..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="20ft">20ft</SelectItem>
                <SelectItem value="40ft">40ft</SelectItem>
                <SelectItem value="40ft-hc">40ft HC</SelectItem>
                <SelectItem value="45ft">45ft</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Hazardous Goods */}
        <div className="space-y-4 p-4 bg-white rounded-lg border-2 border-dashed border-orange-200">
          <div className="flex items-center space-x-3">
            <Switch
              id="hazardous"
              checked={data.hazardous || false}
              onCheckedChange={(checked) => updateData('hazardous', checked)}
            />
            <Label htmlFor="hazardous" className="text-orange-700">
              Hazardous Goods
            </Label>
          </div>
          
          {data.hazardous && (
            <div className="space-y-2">
              <Label htmlFor="hazardous-details">IMDG/ADR Details</Label>
              <Textarea
                id="hazardous-details"
                placeholder="Provide details about hazardous materials..."
                className="bg-orange-50 border-dashed border-orange-300"
                value={data.hazardousDetails || ''}
                onChange={(e) => updateData('hazardousDetails', e.target.value)}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}