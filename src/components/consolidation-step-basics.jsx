import { useEffect } from "react";
import styled from "styled-components";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Package, AlertTriangle } from "lucide-react";
import { shipmentTemplates } from "../data/shipment-templates";

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
  background-color: #dbeafe;
  border-radius: 50%;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
`;

const PackageIcon = styled(Package)`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  color: var(--primary);
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

const StyledCard = styled(Card)`
  border: 1px solid var(--border);
  background-color: var(--card);
`;

const StyledCardHeader = styled(CardHeader)`
  background-color: var(--muted);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const StyledCardTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
`;

const StyledCardContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MeasurementsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.375rem, 1vw, 0.5rem);
`;

const StyledLabel = styled(Label)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
`;

const RequiredMark = styled.span`
  color: #ef4444;
`;

const StyledInput = styled(Input)`
  background-color: var(--input-background);
  border: 1px solid var(--border);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  
  &:focus {
    border-color: var(--ring);
    box-shadow: 0 0 0 1px var(--ring);
  }
  
  &:disabled {
    background-color: var(--muted);
    color: var(--muted-foreground);
    opacity: 0.7;
  }
`;

const StyledTextarea = styled(Textarea)`
  background-color: var(--input-background);
  border: 1px solid var(--border);
  min-height: clamp(4rem, 15vw, 6rem);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  
  &:focus {
    border-color: var(--ring);
    box-shadow: 0 0 0 1px var(--ring);
  }
`;

const StyledSelectTrigger = styled(SelectTrigger)`
  background-color: var(--input-background);
  border: 1px solid var(--border);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  
  &:focus {
    border-color: var(--ring);
    box-shadow: 0 0 0 1px var(--ring);
  }
  
  &:disabled {
    background-color: var(--muted);
    color: var(--muted-foreground);
    opacity: 0.7;
  }
`;

const HelpText = styled.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: 0;
  line-height: 1.3;
`;

const HazardousCard = styled(Card)`
  border: 1px solid #fed7aa;
  background-color: var(--card);
`;

const HazardousCardContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const HazardousContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const HazardousIconContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(2rem, 6vw, 2.5rem);
  height: clamp(2rem, 6vw, 2.5rem);
  background-color: #fed7aa;
  border-radius: 50%;
  flex-shrink: 0;
`;

const AlertIcon = styled(AlertTriangle)`
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  color: #ea580c;
`;

const HazardousContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
`;

const HazardousHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const HazardousTextContainer = styled.div`
  flex: 1;
`;

const HazardousTitle = styled.h3`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  margin: 0;
`;

const HazardousSubtitle = styled.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  line-height: 1.3;
`;

const HazardousDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.375rem, 1vw, 0.5rem);
  padding-top: clamp(0.75rem, 2vw, 1rem);
  border-top: 1px solid #fed7aa;
`;

const HazardousTextarea = styled(Textarea)`
  background-color: #fef3cd;
  border: 1px solid #fed7aa;
  min-height: clamp(3rem, 10vw, 4rem);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  
  &:focus {
    border-color: #ea580c;
    box-shadow: 0 0 0 1px #ea580c;
  }
`;

const HazardousHelpText = styled.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: #ea580c;
  margin: 0;
`;

export function ConsolidationStepBasics({ data, updateData, updateValidation }) {
  // Validate form on data changes
  useEffect(() => {
    const isValid = Boolean(
      data.title &&
      data.template &&
      data.description &&
      (!data.hazardous || data.hazardousDetails)
    );
    
    if (updateValidation) {
      updateValidation(1, isValid);
    }
  }, [data, updateValidation]);

  // Get available templates
  const availableTemplates = shipmentTemplates.filter(template => 
    template.containerType === 'lcl' || template.containerType === 'fcl'
  );

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
            {/* Consolidation Title */}
            <FieldContainer>
              <StyledLabel htmlFor="title">
                Consolidation Title <RequiredMark>*</RequiredMark>
              </StyledLabel>
              <StyledInput
                id="title"
                placeholder="e.g., Shanghai to Los Angeles - Electronics"
                value={data.title || ''}
                onChange={(e) => updateData('title', e.target.value)}
              />
              <HelpText>Descriptive name for this consolidation</HelpText>
            </FieldContainer>

            {/* Template */}
            <FieldContainer>
              <StyledLabel htmlFor="template">
                Shipment Template <RequiredMark>*</RequiredMark>
              </StyledLabel>
              <Select 
                value={data.template || ''} 
                onValueChange={(value) => updateData('template', value)}
              >
                <StyledSelectTrigger id="template">
                  <SelectValue placeholder="Select template" />
                </StyledSelectTrigger>
                <SelectContent>
                  {availableTemplates.map(template => (
                    <SelectItem key={template.id} value={template.name}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <HelpText>Choose the type of consolidation shipment</HelpText>
            </FieldContainer>
          </GridContainer>

          {/* Total Cargo Description */}
          <FieldContainer>
            <StyledLabel htmlFor="description">
              Consolidation Description <RequiredMark>*</RequiredMark>
            </StyledLabel>
            <StyledTextarea
              id="description"
              placeholder="e.g., Mixed electronics and machinery from multiple suppliers for retail distribution in Los Angeles..."
              value={data.description || ''}
              onChange={(e) => updateData('description', e.target.value)}
            />
            <HelpText>Overall description of all cargo in this consolidation</HelpText>
          </FieldContainer>

          {/* Estimated Measurements */}
          <div>
            <StyledLabel>Estimated Totals (will be updated from individual jobs)</StyledLabel>
            <MeasurementsGrid style={{marginTop: '0.5rem'}}>
              <FieldContainer>
                <StyledLabel htmlFor="estimatedQuantity">Est. Total Pieces</StyledLabel>
                <StyledInput
                  id="estimatedQuantity"
                  type="number"
                  placeholder="0"
                  value={data.estimatedQuantity || ''}
                  onChange={(e) => updateData('estimatedQuantity', e.target.value)}
                />
              </FieldContainer>
              
              <FieldContainer>
                <StyledLabel htmlFor="estimatedWeight">Est. Total Weight (kg)</StyledLabel>
                <StyledInput
                  id="estimatedWeight"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={data.estimatedWeight || ''}
                  onChange={(e) => updateData('estimatedWeight', e.target.value)}
                />
              </FieldContainer>
              
              <FieldContainer>
                <StyledLabel htmlFor="estimatedVolume">Est. Total Volume (m³)</StyledLabel>
                <StyledInput
                  id="estimatedVolume"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={data.estimatedVolume || ''}
                  onChange={(e) => updateData('estimatedVolume', e.target.value)}
                />
              </FieldContainer>

              <FieldContainer>
                <StyledLabel htmlFor="containerSize">Preferred Container</StyledLabel>
                <Select 
                  value={data.containerSize || ''} 
                  onValueChange={(value) => updateData('containerSize', value)}
                >
                  <StyledSelectTrigger id="containerSize">
                    <SelectValue placeholder="Select size" />
                  </StyledSelectTrigger>
                  <SelectContent>
                    <SelectItem value="20ft">20ft Standard</SelectItem>
                    <SelectItem value="40ft">40ft Standard</SelectItem>
                    <SelectItem value="40ft-hc">40ft High Cube</SelectItem>
                    <SelectItem value="45ft">45ft High Cube</SelectItem>
                  </SelectContent>
                </Select>
              </FieldContainer>
            </MeasurementsGrid>
            <HelpText style={{marginTop: '0.5rem'}}>
              These are estimates. Actual totals will be calculated from individual job details.
            </HelpText>
          </div>
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
                  <HazardousSubtitle>
                    Indicate if any cargo in this consolidation contains hazardous materials
                  </HazardousSubtitle>
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
                    Hazardous Goods Details <RequiredMark>*</RequiredMark>
                  </StyledLabel>
                  <HazardousTextarea
                    id="hazardous-details"
                    placeholder="Provide detailed information about hazardous materials, UN numbers, classifications, packaging requirements, etc."
                    value={data.hazardousDetails || ''}
                    onChange={(e) => updateData('hazardousDetails', e.target.value)}
                  />
                  <HazardousHelpText>
                    Required when consolidation contains hazardous goods. Include UN numbers, proper shipping names, hazard classes, and packaging groups.
                  </HazardousHelpText>
                </HazardousDetails>
              )}
            </HazardousContent>
          </HazardousContainer>
        </HazardousCardContent>
      </HazardousCard>
    </Container>
  );
}