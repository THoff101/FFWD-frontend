import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface StepPartiesProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export function StepParties({ data, updateData }: StepPartiesProps) {
  const updateNestedData = (section: string, field: string, value: string) => {
    const currentSection = data[section] || {};
    updateData(section, { ...currentSection, [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Parties Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Shipper */}
        <Card className="border-2 border-dashed border-green-200 bg-green-50/30">
          <CardHeader className="pb-4">
            <CardTitle className="text-green-700">Shipper Information *</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="shipper-name">Company Name</Label>
              <Input
                id="shipper-name"
                placeholder="ABC Company Ltd."
                className="bg-white border-dashed"
                value={data.shipper?.name || ''}
                onChange={(e) => updateNestedData('shipper', 'name', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="shipper-address">Address</Label>
              <Textarea
                id="shipper-address"
                placeholder="123 Business Street, City, Country"
                className="bg-white border-dashed min-h-16"
                value={data.shipper?.address || ''}
                onChange={(e) => updateNestedData('shipper', 'address', e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="shipper-contact">Contact Person</Label>
                <Input
                  id="shipper-contact"
                  placeholder="John Doe"
                  className="bg-white border-dashed"
                  value={data.shipper?.contact || ''}
                  onChange={(e) => updateNestedData('shipper', 'contact', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="shipper-email">Email</Label>
                <Input
                  id="shipper-email"
                  type="email"
                  placeholder="john@abc.com"
                  className="bg-white border-dashed"
                  value={data.shipper?.email || ''}
                  onChange={(e) => updateNestedData('shipper', 'email', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consignee */}
        <Card className="border-2 border-dashed border-purple-200 bg-purple-50/30">
          <CardHeader className="pb-4">
            <CardTitle className="text-purple-700">Consignee Information *</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="consignee-name">Company Name</Label>
              <Input
                id="consignee-name"
                placeholder="XYZ Corp Inc."
                className="bg-white border-dashed"
                value={data.consignee?.name || ''}
                onChange={(e) => updateNestedData('consignee', 'name', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="consignee-address">Address</Label>
              <Textarea
                id="consignee-address"
                placeholder="456 Commerce Ave, City, Country"
                className="bg-white border-dashed min-h-16"
                value={data.consignee?.address || ''}
                onChange={(e) => updateNestedData('consignee', 'address', e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="consignee-contact">Contact Person</Label>
                <Input
                  id="consignee-contact"
                  placeholder="Jane Smith"
                  className="bg-white border-dashed"
                  value={data.consignee?.contact || ''}
                  onChange={(e) => updateNestedData('consignee', 'contact', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="consignee-email">Email</Label>
                <Input
                  id="consignee-email"
                  type="email"
                  placeholder="jane@xyz.com"
                  className="bg-white border-dashed"
                  value={data.consignee?.email || ''}
                  onChange={(e) => updateNestedData('consignee', 'email', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notify Party */}
      <Card className="border-2 border-dashed border-blue-200 bg-blue-50/30">
        <CardHeader className="pb-4">
          <CardTitle className="text-blue-700">Notify Party (Optional)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="notify-name">Company Name</Label>
              <Input
                id="notify-name"
                placeholder="Notify Company"
                className="bg-white border-dashed"
                value={data.notifyParty?.name || ''}
                onChange={(e) => updateNestedData('notifyParty', 'name', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notify-email">Email</Label>
              <Input
                id="notify-email"
                type="email"
                placeholder="notify@company.com"
                className="bg-white border-dashed"
                value={data.notifyParty?.email || ''}
                onChange={(e) => updateNestedData('notifyParty', 'email', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Locations Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Origin */}
        <Card className="border-2 border-dashed border-orange-200 bg-orange-50/30">
          <CardHeader className="pb-4">
            <CardTitle className="text-orange-700">Origin *</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="origin-port">Port/Airport</Label>
              <Input
                id="origin-port"
                placeholder="e.g., Shanghai Port (CNSHA)"
                className="bg-white border-dashed"
                value={data.origin?.port || ''}
                onChange={(e) => updateNestedData('origin', 'port', e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="origin-city">City</Label>
                <Input
                  id="origin-city"
                  placeholder="Shanghai"
                  className="bg-white border-dashed"
                  value={data.origin?.city || ''}
                  onChange={(e) => updateNestedData('origin', 'city', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="origin-country">Country</Label>
                <Input
                  id="origin-country"
                  placeholder="China"
                  className="bg-white border-dashed"
                  value={data.origin?.country || ''}
                  onChange={(e) => updateNestedData('origin', 'country', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Destination */}
        <Card className="border-2 border-dashed border-teal-200 bg-teal-50/30">
          <CardHeader className="pb-4">
            <CardTitle className="text-teal-700">Destination *</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dest-port">Port/Airport</Label>
              <Input
                id="dest-port"
                placeholder="e.g., Los Angeles Port (USLAX)"
                className="bg-white border-dashed"
                value={data.destination?.port || ''}
                onChange={(e) => updateNestedData('destination', 'port', e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dest-city">City</Label>
                <Input
                  id="dest-city"
                  placeholder="Los Angeles"
                  className="bg-white border-dashed"
                  value={data.destination?.city || ''}
                  onChange={(e) => updateNestedData('destination', 'city', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dest-country">Country</Label>
                <Input
                  id="dest-country"
                  placeholder="United States"
                  className="bg-white border-dashed"
                  value={data.destination?.country || ''}
                  onChange={(e) => updateNestedData('destination', 'country', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}