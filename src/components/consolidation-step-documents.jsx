import { useState } from "react";
import styled from "styled-components";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, FileText, Plus, Settings, Upload, CalendarIcon } from "lucide-react";

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
  background-color: #e0e7ff;
  border-radius: 50%;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
`;

const FileTextIcon = styled(FileText)`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  color: #4338ca;
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

const DatesCard = styled(Card)`
  border: 1px solid #c7d2fe;
  background-color: var(--card);
`;

const DatesHeader = styled(CardHeader)`
  background-color: #eef2ff;
  border-bottom: 1px solid #c7d2fe;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const DatesTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #4338ca;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DatesContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.25rem, 1vw, 0.5rem);
`;

const StyledLabel = styled(Label)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
`;

const DateInputWrapper = styled.div`
  position: relative;
`;

const DateInput = styled(Input)`
  background-color: var(--card);
  border: 1px solid var(--border);
  padding-left: clamp(2rem, 6vw, 2.5rem);
  
  &:focus {
    border-color: #4338ca;
    box-shadow: 0 0 0 1px #4338ca;
  }
`;

const CalendarIconInput = styled(CalendarIcon)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--muted-foreground);
  position: absolute;
  left: clamp(0.5rem, 2vw, 0.75rem);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const HelpText = styled.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: 0;
  line-height: 1.3;
`;

const TradeCard = styled(Card)`
  border: 1px solid #a7f3d0;
  background-color: var(--card);
`;

const TradeHeader = styled(CardHeader)`
  background-color: #ecfdf5;
  border-bottom: 1px solid #a7f3d0;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const TradeTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #047857;
`;

const TradeContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const TradeSelectTrigger = styled(SelectTrigger)`
  background-color: var(--card);
  border: 1px solid var(--border);
  
  &:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 1px #10b981;
  }
`;

const DocumentsCard = styled(Card)`
  border: 1px solid #fde68a;
  background-color: var(--card);
`;

const DocumentsHeader = styled(CardHeader)`
  background-color: #fffbeb;
  border-bottom: 1px solid #fde68a;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const DocumentsTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #d97706;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DocumentsContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const DocumentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`;

const DocumentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(0.75rem, 3vw, 1rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  transition: border-color 0.2s;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  &:hover {
    border-color: #fde68a;
  }
`;

const DocumentLeft = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  flex: 1;
  min-width: 0;
`;

const DocumentInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const DocumentName = styled.span`
  color: var(--foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  display: block;
`;

const RequiredBadge = styled(Badge)`
  margin-top: 0.25rem;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  background-color: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
  display: inline-block;
`;

const DocumentActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ActionButton = styled(Button)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
  
  &.generate {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1d4ed8;
    
    &:hover {
      background-color: #dbeafe;
    }
  }
  
  &.upload {
    background-color: var(--secondary);
    border: 1px solid var(--border);
    color: var(--secondary-foreground);
    
    &:hover {
      background-color: var(--muted);
    }
  }
`;

const CustomCard = styled(Card)`
  border: 1px solid #e9d5ff;
  background-color: var(--card);
`;

const CustomHeader = styled(CardHeader)`
  background-color: #f3e8ff;
  border-bottom: 1px solid #e9d5ff;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const CustomTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #7c3aed;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const CustomTitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AddButton = styled(Button)`
  background-color: #f3e8ff;
  border: 1px solid #e9d5ff;
  color: #7c3aed;
  
  &:hover {
    background-color: #e9d5ff;
  }
`;

const CustomContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const EmptyState = styled.div`
  text-align: center;
  padding: clamp(1rem, 4vw, 2rem) 0;
  color: var(--muted-foreground);
`;

const EmptyIcon = styled(FileText)`
  width: clamp(2rem, 6vw, 3rem);
  height: clamp(2rem, 6vw, 3rem);
  margin: 0 auto clamp(0.5rem, 2vw, 0.75rem) auto;
  color: var(--muted-foreground);
  opacity: 0.5;
`;

const EmptyText = styled.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  margin: 0;
`;

const EmptySubtext = styled.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: clamp(0.125rem, 0.5vw, 0.25rem) 0 0 0;
  opacity: 0.7;
`;

const CustomDocumentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`;

const CustomDocumentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: clamp(0.75rem, 3vw, 1rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const CustomInput = styled(Input)`
  flex: 1;
  background-color: var(--card);
  border: 1px solid var(--border);
  
  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 1px #7c3aed;
  }
`;

const RemoveButton = styled(Button)`
  color: #dc2626;
  background-color: var(--card);
  border: 1px solid #fecaca;
  
  &:hover {
    background-color: #ef4444;
    color: white;
  }
`;

const InstructionsCard = styled(Card)`
  border: 1px solid #fda4af;
  background-color: var(--card);
`;

const InstructionsHeader = styled(CardHeader)`
  background-color: #fff1f2;
  border-bottom: 1px solid #fda4af;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const InstructionsTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #be185d;
`;

const InstructionsContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const InstructionsTextarea = styled(Textarea)`
  background-color: var(--card);
  border: 1px solid var(--border);
  min-height: clamp(4rem, 12vw, 6rem);
  resize: vertical;
  
  &:focus {
    border-color: #ec4899;
    box-shadow: 0 0 0 1px #ec4899;
  }
`;

export function ConsolidationStepDocuments({ data, updateData }) {
  const [customDocuments, setCustomDocuments] = useState(data.customDocuments || []);

  const consolidationDocuments = [
    { name: 'MBL (Master Bill of Lading)', canGenerate: false, required: true },
    { name: 'LCL Manifest', canGenerate: true, required: true },
    { name: 'Delivery Order LCL', canGenerate: true, required: true },
    { name: 'Customs Entry', canGenerate: false, required: true },
    { name: 'Consolidation Invoice', canGenerate: true, required: false },
    { name: 'Container Packing List', canGenerate: true, required: false }
  ];

  const addCustomDocument = () => {
    const newDoc = { id: Date.now(), name: '', uploaded: false };
    const updated = [...customDocuments, newDoc];
    setCustomDocuments(updated);
    updateData('customDocuments', updated);
  };

  const updateCustomDocument = (id, field, value) => {
    const updated = customDocuments.map((doc) => 
      doc.id === id ? { ...doc, [field]: value } : doc
    );
    setCustomDocuments(updated);
    updateData('customDocuments', updated);
  };

  const removeCustomDocument = (id) => {
    const updated = customDocuments.filter((doc) => doc.id !== id);
    setCustomDocuments(updated);
    updateData('customDocuments', updated);
  };

  return (
    <Container>
      {/* Header */}
      <HeaderSection>
        <IconContainer>
          <FileTextIcon />
        </IconContainer>
        <HeaderTitle>Dates & Documents</HeaderTitle>
        <HeaderSubtitle>Set shipping dates and manage consolidation documentation</HeaderSubtitle>
      </HeaderSection>

      {/* Dates Section */}
      <DatesCard>
        <DatesHeader>
          <DatesTitle>
            <Calendar style={{ width: '1.25rem', height: '1.25rem' }} />
            Shipping Dates
          </DatesTitle>
        </DatesHeader>
        <DatesContent>
          <DateGrid>
            <FieldContainer>
              <StyledLabel htmlFor="etd">Estimated Departure (ETD)</StyledLabel>
              <DateInputWrapper>
                <DateInput
                  id="etd"
                  type="date"
                  value={data.etd || ''}
                  onChange={(e) => updateData('etd', e.target.value)}
                />
                <CalendarIconInput />
              </DateInputWrapper>
              <HelpText>When the consolidation leaves origin</HelpText>
            </FieldContainer>
            
            <FieldContainer>
              <StyledLabel htmlFor="eta">Estimated Arrival (ETA)</StyledLabel>
              <DateInputWrapper>
                <DateInput
                  id="eta"
                  type="date"
                  value={data.eta || ''}
                  onChange={(e) => updateData('eta', e.target.value)}
                />
                <CalendarIconInput />
              </DateInputWrapper>
              <HelpText>When the consolidation arrives at destination</HelpText>
            </FieldContainer>
          </DateGrid>
        </DatesContent>
      </DatesCard>

      {/* Incoterms Section */}
      <TradeCard>
        <TradeHeader>
          <TradeTitle>Trade Terms</TradeTitle>
        </TradeHeader>
        <TradeContent>
          <FieldContainer>
            <StyledLabel htmlFor="incoterms">Incoterms</StyledLabel>
            <Select onValueChange={(value) => updateData('incoterms', value)}>
              <TradeSelectTrigger id="incoterms">
                <SelectValue placeholder="Select Incoterms..." />
              </TradeSelectTrigger>
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
            <HelpText>Terms of trade for the consolidation</HelpText>
          </FieldContainer>
        </TradeContent>
      </TradeCard>

      {/* Required Documents */}
      <DocumentsCard>
        <DocumentsHeader>
          <DocumentsTitle>
            <FileText style={{ width: '1.25rem', height: '1.25rem' }} />
            Required Documents for Consolidation
          </DocumentsTitle>
        </DocumentsHeader>
        <DocumentsContent>
          <DocumentsList>
            {consolidationDocuments.map((doc, index) => (
              <DocumentItem key={index}>
                <DocumentLeft>
                  <FileText style={{ width: '1rem', height: '1rem', color: 'var(--muted-foreground)' }} />
                  <DocumentInfo>
                    <DocumentName>{doc.name}</DocumentName>
                    {doc.required && (
                      <RequiredBadge>Required</RequiredBadge>
                    )}
                  </DocumentInfo>
                </DocumentLeft>
                <DocumentActions>
                  {doc.canGenerate && (
                    <ActionButton className="generate" variant="outline" size="sm">
                      <Settings style={{ width: '0.75rem', height: '0.75rem', marginRight: '0.25rem' }} />
                      Generate
                    </ActionButton>
                  )}
                  <ActionButton className="upload" variant="outline" size="sm">
                    <Upload style={{ width: '0.75rem', height: '0.75rem', marginRight: '0.25rem' }} />
                    Upload
                  </ActionButton>
                </DocumentActions>
              </DocumentItem>
            ))}
          </DocumentsList>
        </DocumentsContent>
      </DocumentsCard>

      {/* Custom Documents */}
      <CustomCard>
        <CustomHeader>
          <CustomTitle>
            <CustomTitleLeft>
              <Plus style={{ width: '1.25rem', height: '1.25rem' }} />
              Custom Documents
            </CustomTitleLeft>
            <AddButton 
              variant="outline" 
              size="sm" 
              onClick={addCustomDocument}
            >
              <Plus style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Add Document
            </AddButton>
          </CustomTitle>
        </CustomHeader>
        <CustomContent>
          {customDocuments.length === 0 ? (
            <EmptyState>
              <EmptyIcon />
              <EmptyText>No custom documents added yet</EmptyText>
              <EmptySubtext>Click "Add Document" to include additional documentation</EmptySubtext>
            </EmptyState>
          ) : (
            <CustomDocumentsList>
              {customDocuments.map((doc) => (
                <CustomDocumentItem key={doc.id}>
                  <CustomInput
                    placeholder="Document name"
                    value={doc.name}
                    onChange={(e) => updateCustomDocument(doc.id, 'name', e.target.value)}
                  />
                  <ActionButton className="upload" variant="outline" size="sm">
                    <Upload style={{ width: '0.75rem', height: '0.75rem', marginRight: '0.25rem' }} />
                    Upload
                  </ActionButton>
                  <RemoveButton 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => removeCustomDocument(doc.id)}
                  >
                    Remove
                  </RemoveButton>
                </CustomDocumentItem>
              ))}
            </CustomDocumentsList>
          )}
        </CustomContent>
      </CustomCard>

      {/* Special Instructions */}
      <InstructionsCard>
        <InstructionsHeader>
          <InstructionsTitle>Special Instructions & Notes</InstructionsTitle>
        </InstructionsHeader>
        <InstructionsContent>
          <FieldContainer>
            <StyledLabel htmlFor="instructions">Additional Instructions</StyledLabel>
            <InstructionsTextarea
              id="instructions"
              placeholder="Add any special handling instructions, consolidation requirements, or additional notes for this shipment..."
              value={data.instructions || ''}
              onChange={(e) => updateData('instructions', e.target.value)}
            />
            <HelpText>Special requirements or notes for freight handling and documentation</HelpText>
          </FieldContainer>
        </InstructionsContent>
      </InstructionsCard>
    </Container>
  );
}