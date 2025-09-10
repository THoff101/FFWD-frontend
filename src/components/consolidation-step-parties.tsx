import styled from "styled-components";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, MapPin, User, Users } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: #dcfce7;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const UsersIcon = styled(Users)`
  width: 2rem;
  height: 2rem;
  color: #16a34a;
`;

const HeaderTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.5rem 0;
`;

const HeaderSubtitle = styled.p`
  color: #4b5563;
  margin: 0;
`;

const PartiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ShipperCard = styled(Card)`
  border: 1px solid #bbf7d0;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const ShipperHeader = styled(CardHeader)`
  background-color: #dcfce7;
  border-bottom: 1px solid #bbf7d0;
`;

const ShipperTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #15803d;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ConsigneeCard = styled(Card)`
  border: 1px solid #e9d5ff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const ConsigneeHeader = styled(CardHeader)`
  background-color: #f3e8ff;
  border-bottom: 1px solid #e9d5ff;
`;

const ConsigneeTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #7c3aed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NotifyCard = styled(Card)`
  border: 1px solid #bfdbfe;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const NotifyHeader = styled(CardHeader)`
  background-color: #eff6ff;
  border-bottom: 1px solid #bfdbfe;
`;

const NotifyTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #1d4ed8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const OriginCard = styled(Card)`
  border: 1px solid #fed7aa;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const OriginHeader = styled(CardHeader)`
  background-color: #fff7ed;
  border-bottom: 1px solid #fed7aa;
`;

const OriginTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #c2410c;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DestinationCard = styled(Card)`
  border: 1px solid #99f6e4;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const DestinationHeader = styled(CardHeader)`
  background-color: #f0fdfa;
  border-bottom: 1px solid #99f6e4;
`;

const DestinationTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #0f766e;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledCardContent = styled(CardContent)`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NotifyCardContent = styled(CardContent)`
  padding: 1.5rem;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const NotifyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const StyledLabel = styled(Label)`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const RequiredMark = styled.span`
  color: #ef4444;
`;

const OptionalBadge = styled(Badge)`
  background-color: #f3f4f6;
  color: #4b5563;
`;

const ShipperInput = styled(Input)`
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #16a34a;
    box-shadow: 0 0 0 1px #16a34a;
  }
`;

const ConsigneeInput = styled(Input)`
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 1px #7c3aed;
  }
`;

const NotifyInput = styled(Input)`
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;

const OriginInput = styled(Input)`
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #ea580c;
    box-shadow: 0 0 0 1px #ea580c;
  }
`;

const DestinationInput = styled(Input)`
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #0d9488;
    box-shadow: 0 0 0 1px #0d9488;
  }
`;

const NotifySelectTrigger = styled(SelectTrigger)`
  width: 12rem;
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;

const BuildingIcon = styled(Building2)`
  width: 1.25rem;
  height: 1.25rem;
`;

const UserIcon = styled(User)`
  width: 1.25rem;
  height: 1.25rem;
`;

const MapPinIcon = styled(MapPin)`
  width: 1.25rem;
  height: 1.25rem;
`;

interface ConsolidationStepPartiesProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export function ConsolidationStepParties({ data, updateData }: ConsolidationStepPartiesProps) {
  const updatePartyData = (party: string, field: string, value: string) => {
    const currentParty = data[party] || {};
    updateData(party, { ...currentParty, [field]: value });
  };

  const updateLocationData = (location: string, field: string, value: string) => {
    const currentLocation = data[location] || {};
    updateData(location, { ...currentLocation, [field]: value });
  };

  return (
    <Container>
      {/* Header */}
      <HeaderSection>
        <IconContainer>
          <UsersIcon />
        </IconContainer>
        <HeaderTitle>Parties & Locations</HeaderTitle>
        <HeaderSubtitle>Define the main parties and locations for this consolidation</HeaderSubtitle>
      </HeaderSection>

      {/* Parties Section */}
      <PartiesGrid>
        {/* Shipper */}
        <ShipperCard>
          <ShipperHeader>
            <ShipperTitle>
              <BuildingIcon />
              Shipper
              <RequiredMark>*</RequiredMark>
            </ShipperTitle>
          </ShipperHeader>
          <StyledCardContent>
            <FieldContainer>
              <StyledLabel htmlFor="shipper-company">Company Name</StyledLabel>
              <ShipperInput
                id="shipper-company"
                placeholder="Company name"
                value={data.shipper?.company || ''}
                onChange={(e) => updatePartyData('shipper', 'company', e.target.value)}
              />
            </FieldContainer>

            <FieldContainer>
              <StyledLabel htmlFor="shipper-address">Address</StyledLabel>
              <ShipperInput
                id="shipper-address"
                placeholder="Full address"
                value={data.shipper?.address || ''}
                onChange={(e) => updatePartyData('shipper', 'address', e.target.value)}
              />
            </FieldContainer>

            <ContactGrid>
              <FieldContainer>
                <StyledLabel htmlFor="shipper-contact">Contact Person</StyledLabel>
                <ShipperInput
                  id="shipper-contact"
                  placeholder="Contact name"
                  value={data.shipper?.contact || ''}
                  onChange={(e) => updatePartyData('shipper', 'contact', e.target.value)}
                />
              </FieldContainer>

              <FieldContainer>
                <StyledLabel htmlFor="shipper-email">Email</StyledLabel>
                <ShipperInput
                  id="shipper-email"
                  type="email"
                  placeholder="email@company.com"
                  value={data.shipper?.email || ''}
                  onChange={(e) => updatePartyData('shipper', 'email', e.target.value)}
                />
              </FieldContainer>
            </ContactGrid>
          </StyledCardContent>
        </ShipperCard>

        {/* Consignee */}
        <ConsigneeCard>
          <ConsigneeHeader>
            <ConsigneeTitle>
              <BuildingIcon />
              Consignee
              <RequiredMark>*</RequiredMark>
            </ConsigneeTitle>
          </ConsigneeHeader>
          <StyledCardContent>
            <FieldContainer>
              <StyledLabel htmlFor="consignee-company">Company Name</StyledLabel>
              <ConsigneeInput
                id="consignee-company"
                placeholder="Company name"
                value={data.consignee?.company || ''}
                onChange={(e) => updatePartyData('consignee', 'company', e.target.value)}
              />
            </FieldContainer>

            <FieldContainer>
              <StyledLabel htmlFor="consignee-address">Address</StyledLabel>
              <ConsigneeInput
                id="consignee-address"
                placeholder="Full address"
                value={data.consignee?.address || ''}
                onChange={(e) => updatePartyData('consignee', 'address', e.target.value)}
              />
            </FieldContainer>

            <ContactGrid>
              <FieldContainer>
                <StyledLabel htmlFor="consignee-contact">Contact Person</StyledLabel>
                <ConsigneeInput
                  id="consignee-contact"
                  placeholder="Contact name"
                  value={data.consignee?.contact || ''}
                  onChange={(e) => updatePartyData('consignee', 'contact', e.target.value)}
                />
              </FieldContainer>

              <FieldContainer>
                <StyledLabel htmlFor="consignee-email">Email</StyledLabel>
                <ConsigneeInput
                  id="consignee-email"
                  type="email"
                  placeholder="email@company.com"
                  value={data.consignee?.email || ''}
                  onChange={(e) => updatePartyData('consignee', 'email', e.target.value)}
                />
              </FieldContainer>
            </ContactGrid>
          </StyledCardContent>
        </ConsigneeCard>
      </PartiesGrid>

      {/* Notify Party */}
      <NotifyCard>
        <NotifyHeader>
          <NotifyTitle>
            <UserIcon />
            Notify Party
            <OptionalBadge variant="secondary">Optional</OptionalBadge>
          </NotifyTitle>
        </NotifyHeader>
        <NotifyCardContent>
          <NotifyGrid>
            <FieldContainer>
              <StyledLabel htmlFor="notify-company">Company Name</StyledLabel>
              <NotifyInput
                id="notify-company"
                placeholder="Company name (optional)"
                value={data.notifyParty?.company || ''}
                onChange={(e) => updatePartyData('notifyParty', 'company', e.target.value)}
              />
            </FieldContainer>
            
            <FieldContainer>
              <StyledLabel htmlFor="notify-type">Party Type</StyledLabel>
              <NotifyInput
                id="notify-type"
                placeholder="Party Type (Required)"
                value={data.notifyParty?.type || ''}
                onChange={(e) => updatePartyData('notifyParty', 'type', e.target.value)}
              />
            </FieldContainer>

            <FieldContainer>
              <StyledLabel htmlFor="notify-email">Email</StyledLabel>
              <NotifyInput
                id="notify-email"
                placeholder="Email (Required)"
                value={data.notifyParty?.email || ''}
                onChange={(e) => updatePartyData('notifyParty', 'email', e.target.value)}
              />
            </FieldContainer>

            <FieldContainer>
              <StyledLabel htmlFor="notify-document">Document Stage</StyledLabel>
              <Select>
                <NotifySelectTrigger>
                  <SelectValue placeholder="Select Document" />
                </NotifySelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Related Documents</SelectItem>
                  <SelectItem value="mawb">MAWB</SelectItem>
                  <SelectItem value="packing">Master Packing List</SelectItem>
                  <SelectItem value="invoice">Master Invoice</SelectItem>
                </SelectContent>
              </Select>
            </FieldContainer>
          </NotifyGrid>
        </NotifyCardContent>
      </NotifyCard>

      {/* Locations Section */}
      <LocationsGrid>
        {/* Origin */}
        <OriginCard>
          <OriginHeader>
            <OriginTitle>
              <MapPinIcon />
              Origin
              <RequiredMark>*</RequiredMark>
            </OriginTitle>
          </OriginHeader>
          <StyledCardContent>
            <FieldContainer>
              <StyledLabel htmlFor="origin-port">Port/Airport</StyledLabel>
              <OriginInput
                id="origin-port"
                placeholder="Port or airport name"
                value={data.origin?.port || ''}
                onChange={(e) => updateLocationData('origin', 'port', e.target.value)}
              />
            </FieldContainer>

            <LocationGrid>
              <FieldContainer>
                <StyledLabel htmlFor="origin-city">City</StyledLabel>
                <OriginInput
                  id="origin-city"
                  placeholder="City name"
                  value={data.origin?.city || ''}
                  onChange={(e) => updateLocationData('origin', 'city', e.target.value)}
                />
              </FieldContainer>

              <FieldContainer>
                <StyledLabel htmlFor="origin-country">Country</StyledLabel>
                <OriginInput
                  id="origin-country"
                  placeholder="Country name"
                  value={data.origin?.country || ''}
                  onChange={(e) => updateLocationData('origin', 'country', e.target.value)}
                />
              </FieldContainer>
            </LocationGrid>
          </StyledCardContent>
        </OriginCard>

        {/* Destination */}
        <DestinationCard>
          <DestinationHeader>
            <DestinationTitle>
              <MapPinIcon />
              Destination
              <RequiredMark>*</RequiredMark>
            </DestinationTitle>
          </DestinationHeader>
          <StyledCardContent>
            <FieldContainer>
              <StyledLabel htmlFor="destination-port">Port/Airport</StyledLabel>
              <DestinationInput
                id="destination-port"
                placeholder="Port or airport name"
                value={data.destination?.port || ''}
                onChange={(e) => updateLocationData('destination', 'port', e.target.value)}
              />
            </FieldContainer>

            <LocationGrid>
              <FieldContainer>
                <StyledLabel htmlFor="destination-city">City</StyledLabel>
                <DestinationInput
                  id="destination-city"
                  placeholder="City name"
                  value={data.destination?.city || ''}
                  onChange={(e) => updateLocationData('destination', 'city', e.target.value)}
                />
              </FieldContainer>

              <FieldContainer>
                <StyledLabel htmlFor="destination-country">Country</StyledLabel>
                <DestinationInput
                  id="destination-country"
                  placeholder="Country name"
                  value={data.destination?.country || ''}
                  onChange={(e) => updateLocationData('destination', 'country', e.target.value)}
                />
              </FieldContainer>
            </LocationGrid>
          </StyledCardContent>
        </DestinationCard>
      </LocationsGrid>
    </Container>
  );
}