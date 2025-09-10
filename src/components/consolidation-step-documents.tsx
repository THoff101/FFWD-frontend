import styled from "styled-components";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, FileText, Plus, Settings, Upload, CalendarIcon } from "lucide-react";
import { useState } from "react";

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
  background-color: #e0e7ff;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const FileTextIcon = styled(FileText)`
  width: 2rem;
  height: 2rem;
  color: #4338ca;
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

const DatesCard = styled(Card)`
  border: 1px solid #c7d2fe;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const DatesHeader = styled(CardHeader)`
  background-color: #eef2ff;
  border-bottom: 1px solid #c7d2fe;
`;

const DatesTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #4338ca;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CalendarIcon1 = styled(Calendar)`
  width: 1.25rem;
  height: 1.25rem;
`;

const DatesContent = styled(CardContent)`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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

const DateInputWrapper = styled.div`
  position: relative;
`;

const DateInput = styled(Input)`
  background-color: white;
  border: 1px solid #d1d5db;
  padding-left: 2.5rem;
  
  &:focus {
    border-color: #4338ca;
    box-shadow: 0 0 0 1px #4338ca;
  }
`;

const CalendarIconInput = styled(CalendarIcon)`
  width: 1rem;
  height: 1rem;
  color: #9ca3af;
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
`;

const HelpText = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
`;

const TradeCard = styled(Card)`
  border: 1px solid #a7f3d0;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const TradeHeader = styled(CardHeader)`
  background-color: #ecfdf5;
  border-bottom: 1px solid #a7f3d0;
`;

const TradeTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #047857;
`;

const TradeContent = styled(CardContent)`
  padding: 1.5rem;
`;

const TradeSelect = styled(Select)``;

const TradeSelectTrigger = styled(SelectTrigger)`
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 1px #10b981;
  }
`;

const DocumentsCard = styled(Card)`
  border: 1px solid #fde68a;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const DocumentsHeader = styled(CardHeader)`
  background-color: #fffbeb;
  border-bottom: 1px solid #fde68a;
`;

const DocumentsTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #d97706;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DocumentsContent = styled(CardContent)`
  padding: 1.5rem;
`;

const DocumentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const DocumentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  transition: border-color 0.2s;
  
  &:hover {
    border-color: #fde68a;
  }
`;

const DocumentLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const DocumentIconContainer = styled.div`
  flex-shrink: 0;
`;

const DocumentIcon = styled(FileText)`
  width: 1rem;
  height: 1rem;
  color: #9ca3af;
`;

const DocumentInfo = styled.div``;

const DocumentName = styled.span`
  font-weight: 500;
  color: #111827;
`;

const RequiredBadge = styled(Badge)`
  margin-left: 0.5rem;
  font-size: 0.75rem;
  background-color: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
`;

const DocumentActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const GenerateButton = styled(Button)`
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  
  &:hover {
    background-color: #dbeafe;
  }
`;

const UploadButton = styled(Button)`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  color: #374151;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const GenerateIcon = styled(Settings)`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
`;

const UploadIcon = styled(Upload)`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
`;

const CustomCard = styled(Card)`
  border: 1px solid #e9d5ff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const CustomHeader = styled(CardHeader)`
  background-color: #f3e8ff;
  border-bottom: 1px solid #e9d5ff;
`;

const CustomTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #7c3aed;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CustomTitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PlusIcon = styled(Plus)`
  width: 1.25rem;
  height: 1.25rem;
`;

const AddButton = styled(Button)`
  background-color: #f3e8ff;
  border: 1px solid #e9d5ff;
  color: #7c3aed;
  
  &:hover {
    background-color: #e9d5ff;
  }
`;

const AddButtonIcon = styled(Plus)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const CustomContent = styled(CardContent)`
  padding: 1.5rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem 0;
  color: #6b7280;
`;

const EmptyIcon = styled(FileText)`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 0.75rem auto;
  color: #d1d5db;
`;

const EmptyText = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;

const EmptySubtext = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0.25rem 0 0 0;
`;

const CustomDocumentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CustomDocumentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
`;

const CustomInput = styled(Input)`
  flex: 1;
  background-color: white;
  border: 1px solid #d1d5db;
  
  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 1px #7c3aed;
  }
`;

const RemoveButton = styled(Button)`
  color: #dc2626;
  background-color: white;
  border: 1px solid #fecaca;
  
  &:hover {
    background-color: #ef4444;
    color: white;
  }
`;

const InstructionsCard = styled(Card)`
  border: 1px solid #fda4af;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const InstructionsHeader = styled(CardHeader)`
  background-color: #fff1f2;
  border-bottom: 1px solid #fda4af;
`;

const InstructionsTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #be185d;
`;

const InstructionsContent = styled(CardContent)`
  padding: 1.5rem;
`;

const InstructionsTextarea = styled(Textarea)`
  background-color: white;
  border: 1px solid #d1d5db;
  min-height: 6rem;
  
  &:focus {
    border-color: #ec4899;
    box-shadow: 0 0 0 1px #ec4899;
  }
`;

interface ConsolidationStepDocumentsProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export function ConsolidationStepDocuments({ data, updateData }: ConsolidationStepDocumentsProps) {
  const [customDocuments, setCustomDocuments] = useState(data.customDocuments || []);

  const consolidationDocuments = [
    { name: 'MBL (Master Bill of Lading)', canGenerate: true, required: true },
    { name: 'LCL Manifest', canGenerate: true, required: true },
    { name: 'Delivery Order LCL', canGenerate: true, required: true },
    { name: 'Consolidation Invoice', canGenerate: true, required: false },
    { name: 'Customs Entry', canGenerate: false, required: true },
    { name: 'Container Packing List', canGenerate: true, required: false }
  ];

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
            <CalendarIcon1 />
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
            <TradeSelect onValueChange={(value) => updateData('incoterms', value)}>
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
            </TradeSelect>
            <HelpText>Terms of trade for the consolidation</HelpText>
          </FieldContainer>
        </TradeContent>
      </TradeCard>

      {/* Required Documents */}
      <DocumentsCard>
        <DocumentsHeader>
          <DocumentsTitle>
            <FileTextIcon />
            Required Documents for Consolidation
          </DocumentsTitle>
        </DocumentsHeader>
        <DocumentsContent>
          <DocumentsList>
            {consolidationDocuments.map((doc, index) => (
              <DocumentItem key={index}>
                <DocumentLeft>
                  <DocumentIconContainer>
                    <DocumentIcon />
                  </DocumentIconContainer>
                  <DocumentInfo>
                    <DocumentName>{doc.name}</DocumentName>
                    {doc.required && (
                      <RequiredBadge variant="destructive">Required</RequiredBadge>
                    )}
                  </DocumentInfo>
                </DocumentLeft>
                <DocumentActions>
                  {doc.canGenerate && (
                    <GenerateButton variant="outline" size="sm">
                      <GenerateIcon />
                      Generate
                    </GenerateButton>
                  )}
                  <UploadButton variant="outline" size="sm">
                    <UploadIcon />
                    Upload
                  </UploadButton>
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
              <PlusIcon />
              Custom Documents
            </CustomTitleLeft>
            <AddButton 
              variant="outline" 
              size="sm" 
              onClick={addCustomDocument}
            >
              <AddButtonIcon />
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
              {customDocuments.map((doc: any) => (
                <CustomDocumentItem key={doc.id}>
                  <CustomInput
                    placeholder="Document name"
                    value={doc.name}
                    onChange={(e) => updateCustomDocument(doc.id, 'name', e.target.value)}
                  />
                  <UploadButton variant="outline" size="sm">
                    <UploadIcon />
                    Upload
                  </UploadButton>
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