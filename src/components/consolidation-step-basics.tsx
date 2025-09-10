import styled from "styled-components";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Package, AlertTriangle } from "lucide-react";

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
  background-color: #dbeafe;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const PackageIcon = styled(Package)`
  width: 2rem;
  height: 2rem;
  color: #2563eb;
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

const StyledCard = styled(Card)`
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const StyledCardHeader = styled(CardHeader)`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`;

const StyledCardTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #111827;
`;

const StyledCardContent = styled(CardContent)`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MeasurementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledLabel = styled(Label)`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const RequiredMark = styled.span`
  color: #ef4444;
`;

const StyledInput = styled(Input)`
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;

const DisabledInput = styled(Input)`
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  color: #6b7280;
`;

const StyledTextarea = styled(Textarea)`
  background-color: white;
  border: 1px solid #d1d5db;
  min-height: 6rem;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;

const StyledSelect = styled(Select)``;

const StyledSelectTrigger = styled(SelectTrigger)`
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;

const DisabledSelectTrigger = styled(SelectTrigger)`
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  color: #6b7280;
`;

const HelpText = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
`;

const HazardousCard = styled(Card)`
  border: 1px solid #fed7aa;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const HazardousCardContent = styled(CardContent)`
  padding: 1.5rem;
`;

const HazardousContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const HazardousIconContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #fed7aa;
  border-radius: 50%;
`;

const AlertIcon = styled(AlertTriangle)`
  width: 1.25rem;
  height: 1.25rem;
  color: #ea580c;
`;

const HazardousContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HazardousHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HazardousTextContainer = styled.div``;

const HazardousTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin: 0;
`;

const HazardousSubtitle = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`;

const HazardousDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid #fed7aa;
`;

const HazardousTextarea = styled(Textarea)`
  background-color: #fef3cd;
  border: 1px solid #fed7aa;
  
  &:focus {
    border-color: #ea580c;
    box-shadow: 0 0 0 1px #ea580c;
  }
`;

const HazardousHelpText = styled.p`
  font-size: 0.75rem;
  color: #ea580c;
  margin: 0;
`;

interface ConsolidationStepBasicsProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export function ConsolidationStepBasics({ data, updateData }: ConsolidationStepBasicsProps) {
  return (
    <Container>
      {/* Header */}
      <HeaderSection>
        <IconContainer>
          <PackageIcon />
        </IconContainer>
        <HeaderTitle>Consolidation Basics</HeaderTitle>
        <HeaderSubtitle>Enter the fundamental details for your freight consolidation</HeaderSubtitle>
      </HeaderSection>

      <StyledCard>
        <StyledCardHeader>
          <StyledCardTitle>Consolidation Information</StyledCardTitle>
        </StyledCardHeader>
        <StyledCardContent>
          <GridContainer>
            {/* Template (Fixed) */}
            <FieldContainer>
              <StyledLabel htmlFor="template">Shipment Template</StyledLabel>
              <StyledSelect value="Consolidation" disabled>
                <DisabledSelectTrigger id="template">
                  <SelectValue />
                </DisabledSelectTrigger>
                <SelectContent>
                  <SelectItem value="Consolidation">Consolidation</SelectItem>
                </SelectContent>
              </StyledSelect>
              <HelpText>Fixed template for consolidation shipments</HelpText>
            </FieldContainer>

            {/* Consolidation ID */}
            <FieldContainer>
              <StyledLabel htmlFor="consolidationId">
                Consolidation ID <RequiredMark>*</RequiredMark>
              </StyledLabel>
              <StyledInput
                id="consolidationId"
                placeholder="Enter CONS-XXX"
                value={data.consolidationId || ''}
                onChange={(e) => updateData('consolidationId', e.target.value)}
              />
              <HelpText>Unique identifier for this consolidation</HelpText>
            </FieldContainer>
          </GridContainer>

          {/* Total Cargo Description */}
          <FieldContainer>
            <StyledLabel htmlFor="description">
              Total Cargo Description <RequiredMark>*</RequiredMark>
            </StyledLabel>
            <StyledTextarea
              id="description"
              placeholder="e.g., Mixed electronics and machinery from multiple suppliers..."
              value={data.description || ''}
              onChange={(e) => updateData('description', e.target.value)}
            />
            <HelpText>Overall description of all cargo in this consolidation</HelpText>
          </FieldContainer>

          {/* Measurements */}
          <MeasurementsGrid>
            <FieldContainer>
              <StyledLabel htmlFor="totalQuantity">Total Quantity</StyledLabel>
              <StyledInput
                id="totalQuantity"
                type="number"
                placeholder="0"
                value={data.totalQuantity || ''}
                onChange={(e) => updateData('totalQuantity', e.target.value)}
              />
            </FieldContainer>
            
            <FieldContainer>
              <StyledLabel htmlFor="totalWeight">Total Weight (kg)</StyledLabel>
              <StyledInput
                id="totalWeight"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={data.totalWeight || ''}
                onChange={(e) => updateData('totalWeight', e.target.value)}
              />
            </FieldContainer>
            
            <FieldContainer>
              <StyledLabel htmlFor="totalVolume">Total Volume (cbm)</StyledLabel>
              <StyledInput
                id="totalVolume"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={data.totalVolume || ''}
                onChange={(e) => updateData('totalVolume', e.target.value)}
              />
            </FieldContainer>

            {/* Container Size */}
            <FieldContainer>
              <StyledLabel htmlFor="container">Container Size</StyledLabel>
              <StyledSelect onValueChange={(value) => updateData('containerSize', value)}>
                <StyledSelectTrigger id="container">
                  <SelectValue placeholder="Size" />
                </StyledSelectTrigger>
                <SelectContent>
                  <SelectItem value="20ft">20ft Standard</SelectItem>
                  <SelectItem value="40ft">40ft Standard</SelectItem>
                  <SelectItem value="40ft-hc">40ft High Cube</SelectItem>
                  <SelectItem value="45ft">45ft High Cube</SelectItem>
                </SelectContent>
              </StyledSelect>
            </FieldContainer>
          </MeasurementsGrid>
        </StyledCardContent>
      </StyledCard>

      {/* Hazardous Goods */}
      <HazardousCard>
        <HazardousCardContent>
          <HazardousContainer>
            <HazardousIconContainer>
              <AlertIcon />
            </HazardousIconContainer>
            <HazardousContent>
              <HazardousHeader>
                <HazardousTextContainer>
                  <HazardousTitle>Hazardous Goods Declaration</HazardousTitle>
                  <HazardousSubtitle>Indicate if any cargo in this consolidation contains hazardous materials</HazardousSubtitle>
                </HazardousTextContainer>
                <Switch
                  id="hazardous"
                  checked={data.hazardous || false}
                  onCheckedChange={(checked) => updateData('hazardous', checked)}
                />
              </HazardousHeader>
              
              {data.hazardous && (
                <HazardousDetails>
                  <StyledLabel htmlFor="hazardous-details">
                    Details <RequiredMark>*</RequiredMark>
                  </StyledLabel>
                  <HazardousTextarea
                    id="hazardous-details"
                    placeholder="Provide detailed information about hazardous materials, UN numbers, classifications, etc."
                    value={data.hazardousDetails || ''}
                    onChange={(e) => updateData('hazardousDetails', e.target.value)}
                  />
                  <HazardousHelpText>Required when consolidation contains hazardous goods</HazardousHelpText>
                </HazardousDetails>
              )}
            </HazardousContent>
          </HazardousContainer>
        </HazardousCardContent>
      </HazardousCard>
    </Container>
  );
}