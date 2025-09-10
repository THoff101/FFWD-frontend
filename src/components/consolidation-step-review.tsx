import styled from "styled-components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Upload, FileText, Play, ChevronLeft, CheckCircle2 } from "lucide-react";
import { TrackingProgress } from "./modern-progress";

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

const CheckIcon = styled(CheckCircle2)`
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

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SummaryCard = styled(Card)<{ $variant: 'blue' | 'green' | 'purple' | 'orange' }>`
  ${props => {
    switch (props.$variant) {
      case 'blue':
        return `
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border: 1px solid #bfdbfe;
        `;
      case 'green':
        return `
          background: linear-gradient(135deg, #ecfdf5 0%, #dcfce7 100%);
          border: 1px solid #bbf7d0;
        `;
      case 'purple':
        return `
          background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
          border: 1px solid #e9d5ff;
        `;
      case 'orange':
        return `
          background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
          border: 1px solid #fdba74;
        `;
    }
  }}
`;

const SummaryContent = styled(CardContent)`
  padding: 1rem;
  text-align: center;
`;

const SummaryValue = styled.div<{ $variant: 'blue' | 'green' | 'purple' | 'orange' }>`
  font-size: 1.25rem;
  font-weight: bold;
  ${props => {
    switch (props.$variant) {
      case 'blue':
        return 'color: #1d4ed8;';
      case 'green':
        return 'color: #15803d;';
      case 'purple':
        return 'color: #7c3aed;';
      case 'orange':
        return 'color: #c2410c;';
    }
  }}
`;

const SummaryLabel = styled.div<{ $variant: 'blue' | 'green' | 'purple' | 'orange' }>`
  font-size: 0.875rem;
  margin-top: 0.25rem;
  ${props => {
    switch (props.$variant) {
      case 'blue':
        return 'color: #2563eb;';
      case 'green':
        return 'color: #16a34a;';
      case 'purple':
        return 'color: #9333ea;';
      case 'orange':
        return 'color: #ea580c;';
    }
  }}
`;

const ReviewCard = styled(Card)`
  border: 1px solid #bfdbfe;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const ReviewHeader = styled(CardHeader)`
  background-color: #eff6ff;
  border-bottom: 1px solid #bfdbfe;
`;

const ReviewTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #1d4ed8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FileIcon = styled(FileText)`
  width: 1.25rem;
  height: 1.25rem;
`;

const ReviewContent = styled(CardContent)`
  padding: 1.5rem;
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;
`;

const AccordionItemStyled = styled(AccordionItem)`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const AccordionTriggerStyled = styled(AccordionTrigger)<{ $variant: 'blue' | 'green' | 'indigo' }>`
  padding: 1rem;
  ${props => {
    switch (props.$variant) {
      case 'blue':
        return 'color: #1d4ed8;';
      case 'green':
        return 'color: #15803d;';
      case 'indigo':
        return 'color: #4338ca;';
    }
  }}
  
  &:hover {
    text-decoration: none;
  }
`;

const TriggerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StepBadge = styled(Badge)<{ $variant: 'blue' | 'green' | 'indigo' }>`
  ${props => {
    switch (props.$variant) {
      case 'blue':
        return `
          background-color: #dbeafe;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        `;
      case 'green':
        return `
          background-color: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
        `;
      case 'indigo':
        return `
          background-color: #e0e7ff;
          color: #4338ca;
          border: 1px solid #c7d2fe;
        `;
    }
  }}
`;

const StepTitle = styled.span`
  font-weight: 500;
`;

const AccordionContentStyled = styled(AccordionContent)`
  padding: 0 1rem 1rem 1rem;
`;

const ContentSection = styled.div`
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  
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

const DetailItem = styled.div``;

const DetailLabel = styled.strong`
  color: #374151;
`;

const NotSpecified = styled.span`
  color: #9ca3af;
  font-style: italic;
`;

const ObjectValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ObjectItem = styled.div`
  font-size: 0.875rem;
`;

const ObjectKey = styled.span`
  font-weight: 500;
  color: #374151;
  text-transform: capitalize;
`;

const ObjectValue = styled.span`
  color: #4b5563;
`;

const HazardousSection = styled.div`
  padding: 0.75rem;
  background-color: #fff7ed;
  border: 1px solid #fed7aa;
  border-radius: 0.5rem;
`;

const HazardousLabel = styled.strong`
  color: #c2410c;
`;

const PartiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PartyCard = styled.div<{ $variant: 'green' | 'purple' | 'blue' | 'orange' | 'teal' }>`
  padding: 0.75rem;
  border-radius: 0.5rem;
  ${props => {
    switch (props.$variant) {
      case 'green':
        return 'border: 1px solid #bbf7d0;';
      case 'purple':
        return 'border: 1px solid #e9d5ff;';
      case 'blue':
        return 'border: 1px solid #bfdbfe;';
      case 'orange':
        return 'border: 1px solid #fed7aa;';
      case 'teal':
        return 'border: 1px solid #99f6e4;';
    }
  }}
`;

const PartyTitle = styled.h4<{ $variant: 'green' | 'purple' | 'blue' | 'orange' | 'teal' }>`
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  ${props => {
    switch (props.$variant) {
      case 'green':
        return 'color: #15803d;';
      case 'purple':
        return 'color: #7c3aed;';
      case 'blue':
        return 'color: #1d4ed8;';
      case 'orange':
        return 'color: #c2410c;';
      case 'teal':
        return 'color: #0f766e;';
    }
  }}
`;

const DocumentsList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DocumentItem = styled.div`
  font-size: 0.875rem;
  background-color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
`;

const UploadCard = styled(Card)`
  border: 1px solid #fde68a;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const UploadHeader = styled(CardHeader)`
  background-color: #fffbeb;
  border-bottom: 1px solid #fde68a;
`;

const UploadTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #d97706;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UploadIcon = styled(Upload)`
  width: 1.25rem;
  height: 1.25rem;
`;

const UploadContent = styled(CardContent)`
  padding: 1.5rem;
`;

const UploadZone = styled.div`
  border: 2px dashed #fde68a;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(to bottom, #fffbeb, white);
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: linear-gradient(to bottom, #fef3c7, white);
  }
`;

const UploadIconLarge = styled(Upload)`
  width: 3rem;
  height: 3rem;
  color: #f59e0b;
  margin: 0 auto 1rem auto;
`;

const UploadMainText = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #d97706;
  margin: 0 0 0.5rem 0;
`;

const UploadSubText = styled.p`
  color: #d97706;
  margin: 0 0 0.5rem 0;
`;

const UploadHelpText = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const BackButton = styled(Button)`
  background-color: white;
  border: 1px solid #d1d5db;
  color: #374151;
  
  &:hover {
    background-color: #f9fafb;
  }
`;

const BackIcon = styled(ChevronLeft)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(to right, #2563eb, #1d4ed8);
  color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  
  &:hover {
    background: linear-gradient(to right, #1d4ed8, #1e40af);
  }
`;

const PlayIcon = styled(Play)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

interface ConsolidationStepReviewProps {
  data: any;
  onSubmit: () => void;
  onBack: () => void;
}

export function ConsolidationStepReview({ data, onSubmit, onBack }: ConsolidationStepReviewProps) {
  const formatValue = (value: any) => {
    if (!value || (typeof value === 'object' && Object.keys(value).length === 0)) {
      return <NotSpecified>Not specified</NotSpecified>;
    }
    if (typeof value === 'object') {
      return (
        <ObjectValues>
          {Object.entries(value).map(([key, val]) => (
            <ObjectItem key={key}>
              <ObjectKey>{key}: </ObjectKey>
              <ObjectValue>{val as string || 'Not specified'}</ObjectValue>
            </ObjectItem>
          ))}
        </ObjectValues>
      );
    }
    return <span>{value}</span>;
  };

  const progressStages = [
    { name: "Booking & Preparation", status: "pending" as const, description: "Initial setup and documentation" },
    { name: "Origin Handling", status: "pending" as const, description: "Collection and consolidation at origin" },
    { name: "Departure & Transit", status: "pending" as const, description: "Cargo in transit to destination" },
    { name: "Arrival Notification", status: "pending" as const, description: "Notification of cargo arrival" },
    { name: "Destination Clearance", status: "pending" as const, description: "Customs clearance process" },
    { name: "Destination Handling", status: "pending" as const, description: "Final delivery preparations" },
    { name: "Completion & Settlement", status: "pending" as const, description: "Final documentation and settlement" }
  ];

  return (
    <Container>
      {/* Header */}
      <HeaderSection>
        <IconContainer>
          <CheckIcon />
        </IconContainer>
        <HeaderTitle>Review & Submit</HeaderTitle>
        <HeaderSubtitle>Review all consolidation details before creating the shipment</HeaderSubtitle>
      </HeaderSection>

      {/* Summary Cards */}
      <SummaryGrid>
        <SummaryCard $variant="blue">
          <SummaryContent>
            <SummaryValue $variant="blue">{data.template || 'Consolidation'}</SummaryValue>
            <SummaryLabel $variant="blue">Template</SummaryLabel>
          </SummaryContent>
        </SummaryCard>
        
        <SummaryCard $variant="green">
          <SummaryContent>
            <SummaryValue $variant="green">{data.consolidationId || 'N/A'}</SummaryValue>
            <SummaryLabel $variant="green">Consolidation ID</SummaryLabel>
          </SummaryContent>
        </SummaryCard>
        
        <SummaryCard $variant="purple">
          <SummaryContent>
            <SummaryValue $variant="purple">{data.totalWeight || '0'} kg</SummaryValue>
            <SummaryLabel $variant="purple">Total Weight</SummaryLabel>
          </SummaryContent>
        </SummaryCard>

        <SummaryCard $variant="orange">
          <SummaryContent>
            <SummaryValue $variant="orange">{data.totalVolume || '0'} cbm</SummaryValue>
            <SummaryLabel $variant="orange">Total Volume</SummaryLabel>
          </SummaryContent>
        </SummaryCard>
      </SummaryGrid>

      {/* Progress Preview */}
      <TrackingProgress 
        currentStage={1} 
        stages={progressStages}
      />

      {/* Detailed Review */}
      <ReviewCard>
        <ReviewHeader>
          <ReviewTitle>
            <FileIcon />
            Consolidation Details Review
          </ReviewTitle>
        </ReviewHeader>
        <ReviewContent>
          <StyledAccordion type="multiple">
            {/* Basics */}
            <AccordionItemStyled value="basics">
              <AccordionTriggerStyled $variant="blue">
                <TriggerContent>
                  <StepBadge $variant="blue" variant="outline">Step 1</StepBadge>
                  <StepTitle>Consolidation Basics</StepTitle>
                </TriggerContent>
              </AccordionTriggerStyled>
              <AccordionContentStyled>
                <ContentSection>
                  <DetailGrid>
                    <DetailItem><DetailLabel>Template:</DetailLabel> {formatValue(data.template)}</DetailItem>
                    <DetailItem><DetailLabel>Consolidation ID:</DetailLabel> {formatValue(data.consolidationId)}</DetailItem>
                  </DetailGrid>
                  <DetailItem><DetailLabel>Description:</DetailLabel> {formatValue(data.description)}</DetailItem>
                  <MeasurementsGrid>
                    <DetailItem><DetailLabel>Quantity:</DetailLabel> {formatValue(data.totalQuantity)}</DetailItem>
                    <DetailItem><DetailLabel>Weight:</DetailLabel> {formatValue(data.totalWeight)} kg</DetailItem>
                    <DetailItem><DetailLabel>Volume:</DetailLabel> {formatValue(data.totalVolume)} cbm</DetailItem>
                    <DetailItem><DetailLabel>Container:</DetailLabel> {formatValue(data.containerSize)}</DetailItem>
                  </MeasurementsGrid>
                  {data.hazardous && (
                    <HazardousSection>
                      <DetailItem><HazardousLabel>Hazardous Goods:</HazardousLabel> Yes</DetailItem>
                      <DetailItem><HazardousLabel>Details:</HazardousLabel> {formatValue(data.hazardousDetails)}</DetailItem>
                    </HazardousSection>
                  )}
                </ContentSection>
              </AccordionContentStyled>
            </AccordionItemStyled>

            {/* Parties */}
            <AccordionItemStyled value="parties">
              <AccordionTriggerStyled $variant="green">
                <TriggerContent>
                  <StepBadge $variant="green" variant="outline">Step 2</StepBadge>
                  <StepTitle>Parties & Locations</StepTitle>
                </TriggerContent>
              </AccordionTriggerStyled>
              <AccordionContentStyled>
                <ContentSection>
                  <PartiesGrid>
                    <PartyCard $variant="green">
                      <PartyTitle $variant="green">Shipper</PartyTitle>
                      {formatValue(data.shipper)}
                    </PartyCard>
                    <PartyCard $variant="purple">
                      <PartyTitle $variant="purple">Consignee</PartyTitle>
                      {formatValue(data.consignee)}
                    </PartyCard>
                  </PartiesGrid>
                  
                  {data.notifyParty && Object.keys(data.notifyParty).length > 0 && (
                    <PartyCard $variant="blue">
                      <PartyTitle $variant="blue">Notify Party</PartyTitle>
                      {formatValue(data.notifyParty)}
                    </PartyCard>
                  )}
                  
                  <PartiesGrid>
                    <PartyCard $variant="orange">
                      <PartyTitle $variant="orange">Origin</PartyTitle>
                      {formatValue(data.origin)}
                    </PartyCard>
                    <PartyCard $variant="teal">
                      <PartyTitle $variant="teal">Destination</PartyTitle>
                      {formatValue(data.destination)}
                    </PartyCard>
                  </PartiesGrid>
                </ContentSection>
              </AccordionContentStyled>
            </AccordionItemStyled>

            {/* Documents & Dates */}
            <AccordionItemStyled value="documents">
              <AccordionTriggerStyled $variant="indigo">
                <TriggerContent>
                  <StepBadge $variant="indigo" variant="outline">Step 3</StepBadge>
                  <StepTitle>Dates & Documents</StepTitle>
                </TriggerContent>
              </AccordionTriggerStyled>
              <AccordionContentStyled>
                <ContentSection>
                  <DetailGrid>
                    <DetailItem><DetailLabel>ETD:</DetailLabel> {formatValue(data.etd)}</DetailItem>
                    <DetailItem><DetailLabel>ETA:</DetailLabel> {formatValue(data.eta)}</DetailItem>
                  </DetailGrid>
                  <DetailItem><DetailLabel>Incoterms:</DetailLabel> {formatValue(data.incoterms)}</DetailItem>
                  {data.customDocuments && data.customDocuments.length > 0 && (
                    <div>
                      <DetailLabel>Custom Documents:</DetailLabel>
                      <DocumentsList>
                        {data.customDocuments.map((doc: any, index: number) => (
                          <DocumentItem key={index}>
                            {doc.name || 'Unnamed document'}
                          </DocumentItem>
                        ))}
                      </DocumentsList>
                    </div>
                  )}
                  <DetailItem><DetailLabel>Special Instructions:</DetailLabel> {formatValue(data.instructions)}</DetailItem>
                </ContentSection>
              </AccordionContentStyled>
            </AccordionItemStyled>
          </StyledAccordion>
        </ReviewContent>
      </ReviewCard>

      {/* Final Upload Zone */}
      <UploadCard>
        <UploadHeader>
          <UploadTitle>
            <UploadIcon />
            Final Document Upload
          </UploadTitle>
        </UploadHeader>
        <UploadContent>
          <UploadZone>
            <UploadIconLarge />
            <UploadMainText>Upload Any Additional Documents</UploadMainText>
            <UploadSubText>Drag and drop files here or click to browse</UploadSubText>
            <UploadHelpText>
              Any last-minute attachments before consolidation creation
            </UploadHelpText>
          </UploadZone>
        </UploadContent>
      </UploadCard>

      {/* Action Buttons */}
      <ActionSection>
        <BackButton 
          variant="outline" 
          onClick={onBack}
        >
          <BackIcon />
          Back to Documents
        </BackButton>
        
        <SubmitButton 
          onClick={onSubmit}
          size="lg"
        >
          <PlayIcon />
          Create Consolidation
        </SubmitButton>
      </ActionSection>
    </Container>
  );
}