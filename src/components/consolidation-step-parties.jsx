import styled from "styled-components";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, MapPin, User, Users } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// Responsive styled components with mobile-first approach
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: clamp(1rem, 4vw, 2rem);
`;

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(3rem, 8vw, 4rem);
  height: clamp(3rem, 8vw, 4rem);
  background-color: #dcfce7;
  border-radius: 50%;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
`;

const UsersIcon = styled(Users)`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  color: #16a34a;
`;

const HeaderTitle = styled.h2`
  font-size: clamp(1.125rem, 3vw, 1.25rem);
  color: var(--foreground);
  margin: 0 0 clamp(0.25rem, 1vw, 0.5rem) 0;
`;

const HeaderSubtitle = styled.p`
  color: var(--muted-foreground);
  margin: 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`;

const PartiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ShipperCard = styled(Card)`
  border: 1px solid #bbf7d0;
  background-color: var(--card);
`;

const ShipperHeader = styled(CardHeader)`
  background-color: #dcfce7;
  border-bottom: 1px solid #bbf7d0;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const ShipperTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #15803d;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ConsigneeCard = styled(Card)`
  border: 1px solid #e9d5ff;
  background-color: var(--card);
`;

const ConsigneeHeader = styled(CardHeader)`
  background-color: #f3e8ff;
  border-bottom: 1px solid #e9d5ff;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const ConsigneeTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #7c3aed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NotifyCard = styled(Card)`
  border: 1px solid #bfdbfe;
  background-color: var(--card);
`;

const NotifyHeader = styled(CardHeader)`
  background-color: #eff6ff;
  border-bottom: 1px solid #bfdbfe;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const NotifyTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #1d4ed8;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

const OriginCard = styled(Card)`
  border: 1px solid #fed7aa;
  background-color: var(--card);
`;

const OriginHeader = styled(CardHeader)`
  background-color: #fff7ed;
  border-bottom: 1px solid #fed7aa;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const OriginTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #c2410c;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DestinationCard = styled(Card)`
  border: 1px solid #99f6e4;
  background-color: var(--card);
`;

const DestinationHeader = styled(CardHeader)`
  background-color: #f0fdfa;
  border-bottom: 1px solid #99f6e4;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const DestinationTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #0f766e;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledCardContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
`;

const NotifyCardContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.25rem, 1vw, 0.5rem);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NotifyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledLabel = styled(Label)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
`;

const RequiredMark = styled.span`
  color: #ef4444;
`;

const OptionalBadge = styled(Badge)`
  background-color: var(--muted);
  color: var(--muted-foreground);
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
`;

const BaseInput = styled(Input)`
  background-color: var(--card);
  border: 1px solid var(--border);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`;

const ShipperInput = styled(BaseInput)`
  &:focus {
    border-color: #16a34a;
    box-shadow: 0 0 0 1px #16a34a;
  }
`;

const ConsigneeInput = styled(BaseInput)`
  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 1px #7c3aed;
  }
`;

const NotifyInput = styled(BaseInput)`
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;

const OriginInput = styled(BaseInput)`
  &:focus {
    border-color: #ea580c;
    box-shadow: 0 0 0 1px #ea580c;
  }
`;

const DestinationInput = styled(BaseInput)`
  &:focus {
    border-color: #0d9488;
    box-shadow: 0 0 0 1px #0d9488;
  }
`;

const NotifySelectTrigger = styled(SelectTrigger)`
  background-color: var(--card);
  border: 1px solid var(--border);

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;

export function ConsolidationStepParties({ data, updateData }) {
  const updatePartyData = (party, field, value) => {
    const currentParty = data[party] || {};
    updateData(party, { ...currentParty, [field]: value });
  };

  const updateLocationData = (location, field, value) => {
    const currentLocation = data[location] || {};
    updateData(location, {
      ...currentLocation,
      [field]: value,
    });
  };

  return (
    <Container>
      {/* Header */}
      <HeaderSection>
        <IconContainer>
          <UsersIcon />
        </IconContainer>
        <HeaderTitle>Parties & Locations</HeaderTitle>
        <HeaderSubtitle>
          Define the main parties and locations for this consolidation
        </HeaderSubtitle>
      </HeaderSection>

      {/* Parties Section */}
      <PartiesGrid>
        {/* Shipper */}
        <ShipperCard>
          <ShipperHeader>
            <ShipperTitle>
              <Building2 style={{ width: '1.25rem', height: '1.25rem' }} />
              Shipper
              <RequiredMark>*</RequiredMark>
            </ShipperTitle>
          </ShipperHeader>
          <StyledCardContent>
            <FieldContainer>
              <StyledLabel htmlFor="shipper-company">
                Company Name
              </StyledLabel>
              <ShipperInput
                id="shipper-company"
                placeholder="Company name"
                value={data.shipper?.company || ""}
                onChange={(e) =>
                  updatePartyData(
                    "shipper",
                    "company",
                    e.target.value,
                  )
                }
              />
            </FieldContainer>

            <FieldContainer>
              <StyledLabel htmlFor="shipper-address">
                Address
              </StyledLabel>
              <ShipperInput
                id="shipper-address"
                placeholder="Full address"
                value={data.shipper?.address || ""}
                onChange={(e) =>
                  updatePartyData(
                    "shipper",
                    "address",
                    e.target.value,
                  )
                }
              />
            </FieldContainer>

            <ContactGrid>
              <FieldContainer>
                <StyledLabel htmlFor="shipper-contact">
                  Contact Person
                </StyledLabel>
                <ShipperInput
                  id="shipper-contact"
                  placeholder="Contact name"
                  value={data.shipper?.contact || ""}
                  onChange={(e) =>
                    updatePartyData(
                      "shipper",
                      "contact",
                      e.target.value,
                    )
                  }
                />
              </FieldContainer>

              <FieldContainer>
                <StyledLabel htmlFor="shipper-email">
                  Email
                </StyledLabel>
                <ShipperInput
                  id="shipper-email"
                  type="email"
                  placeholder="email@company.com"
                  value={data.shipper?.email || ""}
                  onChange={(e) =>
                    updatePartyData(
                      "shipper",
                      "email",
                      e.target.value,
                    )
                  }
                />
              </FieldContainer>
            </ContactGrid>
          </StyledCardContent>
        </ShipperCard>

        {/* Consignee */}
        <ConsigneeCard>
          <ConsigneeHeader>
            <ConsigneeTitle>
              <Building2 style={{ width: '1.25rem', height: '1.25rem' }} />
              Consignee
              <RequiredMark>*</RequiredMark>
            </ConsigneeTitle>
          </ConsigneeHeader>
          <StyledCardContent>
            <FieldContainer>
              <StyledLabel htmlFor="consignee-company">
                Company Name
              </StyledLabel>
              <ConsigneeInput
                id="consignee-company"
                placeholder="Company name"
                value={data.consignee?.company || ""}
                onChange={(e) =>
                  updatePartyData(
                    "consignee",
                    "company",
                    e.target.value,
                  )
                }
              />
            </FieldContainer>

            <FieldContainer>
              <StyledLabel htmlFor="consignee-address">
                Address
              </StyledLabel>
              <ConsigneeInput
                id="consignee-address"
                placeholder="Full address"
                value={data.consignee?.address || ""}
                onChange={(e) =>
                  updatePartyData(
                    "consignee",
                    "address",
                    e.target.value,
                  )
                }
              />
            </FieldContainer>

            <ContactGrid>
              <FieldContainer>
                <StyledLabel htmlFor="consignee-contact">
                  Contact Person
                </StyledLabel>
                <ConsigneeInput
                  id="consignee-contact"
                  placeholder="Contact name"
                  value={data.consignee?.contact || ""}
                  onChange={(e) =>
                    updatePartyData(
                      "consignee",
                      "contact",
                      e.target.value,
                    )
                  }
                />
              </FieldContainer>

              <FieldContainer>
                <StyledLabel htmlFor="consignee-email">
                  Email
                </StyledLabel>
                <ConsigneeInput
                  id="consignee-email"
                  type="email"
                  placeholder="email@company.com"
                  value={data.consignee?.email || ""}
                  onChange={(e) =>
                    updatePartyData(
                      "consignee",
                      "email",
                      e.target.value,
                    )
                  }
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
            <User style={{ width: '1.25rem', height: '1.25rem' }} />
            Notify Party
            <OptionalBadge variant="secondary">
              Optional
            </OptionalBadge>
          </NotifyTitle>
        </NotifyHeader>
        <NotifyCardContent>
          <NotifyGrid>
            <FieldContainer>
              <StyledLabel htmlFor="notify-company">
                Company Name
              </StyledLabel>
              <NotifyInput
                id="notify-company"
                placeholder="Company name (optional)"
                value={data.notifyParty?.company || ""}
                onChange={(e) =>
                  updatePartyData(
                    "notifyParty",
                    "company",
                    e.target.value,
                  )
                }
              />
            </FieldContainer>

            <FieldContainer>
              <StyledLabel htmlFor="notify-type">
                Party Type
              </StyledLabel>
              <NotifyInput
                id="notify-type"
                placeholder="Party Type (Required)"
                value={data.notifyParty?.type || ""}
                onChange={(e) =>
                  updatePartyData(
                    "notifyParty",
                    "type",
                    e.target.value,
                  )
                }
              />
            </FieldContainer>

            <FieldContainer>
              <StyledLabel htmlFor="notify-email">
                Email
              </StyledLabel>
              <NotifyInput
                id="notify-email"
                placeholder="Email (Required)"
                value={data.notifyParty?.email || ""}
                onChange={(e) =>
                  updatePartyData(
                    "notifyParty",
                    "email",
                    e.target.value,
                  )
                }
              />
            </FieldContainer>

            <FieldContainer>
              <StyledLabel htmlFor="notify-document">
                Document Stage
              </StyledLabel>
              <Select>
                <NotifySelectTrigger>
                  <SelectValue placeholder="Select Document" />
                </NotifySelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    All Related Documents
                  </SelectItem>
                  <SelectItem value="mawb">MAWB</SelectItem>
                  <SelectItem value="packing">
                    Master Packing List
                  </SelectItem>
                  <SelectItem value="invoice">
                    Master Invoice
                  </SelectItem>
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
              <MapPin style={{ width: '1.25rem', height: '1.25rem' }} />
              Origin
              <RequiredMark>*</RequiredMark>
            </OriginTitle>
          </OriginHeader>
          <StyledCardContent>
            <FieldContainer>
              <StyledLabel htmlFor="origin-port">
                Port/Airport
              </StyledLabel>
              <OriginInput
                id="origin-port"
                placeholder="Port or airport name"
                value={data.origin?.port || ""}
                onChange={(e) =>
                  updateLocationData(
                    "origin",
                    "port",
                    e.target.value,
                  )
                }
              />
            </FieldContainer>

            <LocationGrid>
              <FieldContainer>
                <StyledLabel htmlFor="origin-city">
                  City
                </StyledLabel>
                <OriginInput
                  id="origin-city"
                  placeholder="City name"
                  value={data.origin?.city || ""}
                  onChange={(e) =>
                    updateLocationData(
                      "origin",
                      "city",
                      e.target.value,
                    )
                  }
                />
              </FieldContainer>

              <FieldContainer>
                <StyledLabel htmlFor="origin-country">
                  Country
                </StyledLabel>
                <OriginInput
                  id="origin-country"
                  placeholder="Country name"
                  value={data.origin?.country || ""}
                  onChange={(e) =>
                    updateLocationData(
                      "origin",
                      "country",
                      e.target.value,
                    )
                  }
                />
              </FieldContainer>
            </LocationGrid>
          </StyledCardContent>
        </OriginCard>

        {/* Destination */}
        <DestinationCard>
          <DestinationHeader>
            <DestinationTitle>
              <MapPin style={{ width: '1.25rem', height: '1.25rem' }} />
              Destination
              <RequiredMark>*</RequiredMark>
            </DestinationTitle>
          </DestinationHeader>
          <StyledCardContent>
            <FieldContainer>
              <StyledLabel htmlFor="destination-port">
                Port/Airport
              </StyledLabel>
              <DestinationInput
                id="destination-port"
                placeholder="Port or airport name"
                value={data.destination?.port || ""}
                onChange={(e) =>
                  updateLocationData(
                    "destination",
                    "port",
                    e.target.value,
                  )
                }
              />
            </FieldContainer>

            <LocationGrid>
              <FieldContainer>
                <StyledLabel htmlFor="destination-city">
                  City
                </StyledLabel>
                <DestinationInput
                  id="destination-city"
                  placeholder="City name"
                  value={data.destination?.city || ""}
                  onChange={(e) =>
                    updateLocationData(
                      "destination",
                      "city",
                      e.target.value,
                    )
                  }
                />
              </FieldContainer>

              <FieldContainer>
                <StyledLabel htmlFor="destination-country">
                  Country
                </StyledLabel>
                <DestinationInput
                  id="destination-country"
                  placeholder="Country name"
                  value={data.destination?.country || ""}
                  onChange={(e) =>
                    updateLocationData(
                      "destination",
                      "country",
                      e.target.value,
                    )
                  }
                />
              </FieldContainer>
            </LocationGrid>
          </StyledCardContent>
        </DestinationCard>
      </LocationsGrid>
    </Container>
  );
}