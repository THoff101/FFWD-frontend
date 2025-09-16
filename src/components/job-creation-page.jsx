import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useJobs } from "../contexts/job-context";
import { shipmentTemplates } from "../data/shipment-templates";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  padding: clamp(1rem, 4vw, 2rem);
`;

const FormCard = styled(Card)`
  width: 100%;
  max-width: 48rem;
  border: 1px solid var(--border);
  background-color: var(--card);
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
  color: var(--foreground);
`;

const UploadCard = styled(Card)`
  border: 1px solid #fde68a;
  background-color: var(--card);
  margin-bottom: 1.5rem;
`;
const UploadHeader = styled(CardHeader)`
  background-color: #fffbeb;
  border-bottom: 1px solid #fde68a;
  padding: 1rem 1.5rem;
`;
const UploadTitle = styled(CardTitle)`
  font-size: 1rem;
  color: #d97706;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const UploadContent = styled(CardContent)`
  padding: 1.25rem 1.5rem;
`;
const UploadZone = styled.label`
  border: 2px dashed #fde68a;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  text-align: center;
  background: linear-gradient(to bottom, #fffbeb, var(--card));
  cursor: pointer;
  transition: background 0.2s;
  display: block;
  margin-bottom: 0.5rem;
  &:hover {
    background: linear-gradient(to bottom, #fef3c7, var(--card));
  }
`;
const UploadPlaceholder = styled.div`
  color: #d97706;
  font-size: 0.98rem;
  margin-bottom: 0.25rem;
`;
const UploadInput = styled(Input)`
  display: none;
`;
const FileList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.95rem;
  color: var(--foreground);
`;

export function JobCreationPage() {
  const navigate = useNavigate();
  const { createJob } = useJobs();

  // Expanded form state
  const [form, setForm] = useState({
    status: "",
    poNumber: "",
    client: "",
    template: "",
    readyDate: "",
    shippingMethod: "",
    hazardous: false,
    incoterm: "",
    origin: "",
    destination: "",
    supplier: "",
    consignee: "",
    loadingAddress: "",
    unloadingAddress: "",
    loadingDate: "",
    unloadingDate: "",
    originAgent: "",
    destinationAgent: "",
  });

  // Document file states
  const [docFiles, setDocFiles] = useState({
    commercialInvoice: [],
    packingList: [],
    purchaseOrder: [],
    proformaInvoice: [],
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckbox = (field) => {
    setForm(prev => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle file uploads
  const handleFileChange = (docType, files) => {
    setDocFiles(prev => ({
      ...prev,
      [docType]: Array.from(files)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // You might want to handle file uploads here before creating job
      const newJob = await createJob(form);
      navigate(`/job/${newJob.id}`);
    } catch (err) {
      console.error("Failed to create job:", err);
    }
  };

  return (
    <PageContainer>
      <FormCard>
        <CardHeader>
          <CardTitle>Create Standalone Job</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Status, PO#, Client */}
            <FormGrid>
              <FormRow>
                <Label>Status</Label>
                <Select
                  value={form.status}
                  onValueChange={val => handleChange("status", val)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Convert-to-Job">Convert to Job</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>

                  </SelectContent>
                </Select>
              </FormRow>
              <FormRow>
                <Label>PO Number</Label>
                <Input
                  value={form.poNumber}
                  onChange={e => handleChange("poNumber", e.target.value)}
                  required
                />
              </FormRow>
              <FormRow>
                <Label>Client</Label>
                <Input
                  value={form.client}
                  onChange={e => handleChange("client", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Template</Label>
                <Select
                  value={form.template}
                  onValueChange={val => handleChange("template", val)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Template" />
                  </SelectTrigger>
                  <SelectContent>
                    {shipmentTemplates.map(t => (
                      <SelectItem key={t.id} value={t.name}>{t.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormRow>
            </FormGrid>

            {/* Ready Date, Shipping Method, Hazardous, Incoterm */}
            <SectionTitle>Shipment Details</SectionTitle>
            <FormGrid>
              <FormRow>
                <Label>Ready Date</Label>
                <Input
                  type="date"
                  value={form.readyDate}
                  onChange={e => handleChange("readyDate", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Shipping Method</Label>
                <Select
                  value={form.shippingMethod}
                  onValueChange={val => handleChange("shippingMethod", val)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Shipping Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sea">Sea</SelectItem>
                    <SelectItem value="Air">Air</SelectItem>
                    <SelectItem value="Truck">Truck</SelectItem>
                    <SelectItem value="Rail">Rail</SelectItem>
                  </SelectContent>
                </Select>
              </FormRow>
              <FormRow style={{ justifyContent: "flex-end" }}>
                <Label>Hazardous Goods</Label>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    checked={form.hazardous}
                    onChange={() => handleCheckbox("hazardous")}
                    id="hazardous"
                    style={{ width: "1.1em", height: "1.1em" }}
                  />
                  <Label htmlFor="hazardous" style={{ margin: 0, fontWeight: 400 }}>Yes</Label>
                </div>
              </FormRow>
              <FormRow>
                <Label>Incoterm</Label>
                <Select
                  value={form.incoterm}
                  onValueChange={val => handleChange("incoterm", val)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Incoterm" />
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
              </FormRow>
            </FormGrid>

            {/* Origin, Destination, Supplier, Consignee, Loading/Unloading Addresses, Dates, Agents */}
            <SectionTitle>Locations & Parties</SectionTitle>
            <FormGrid>
              <FormRow>
                <Label>Origin</Label>
                <Input
                  value={form.origin}
                  onChange={e => handleChange("origin", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Destination</Label>
                <Input
                  value={form.destination}
                  onChange={e => handleChange("destination", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Supplier</Label>
                <Input
                  value={form.supplier}
                  onChange={e => handleChange("supplier", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Consignee</Label>
                <Input
                  value={form.consignee}
                  onChange={e => handleChange("consignee", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Loading Address</Label>
                <Input
                  value={form.loadingAddress}
                  onChange={e => handleChange("loadingAddress", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Unloading Address</Label>
                <Input
                  value={form.unloadingAddress}
                  onChange={e => handleChange("unloadingAddress", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Loading Date</Label>
                <Input
                  type="date"
                  value={form.loadingDate}
                  onChange={e => handleChange("loadingDate", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Unloading Date</Label>
                <Input
                  type="date"
                  value={form.unloadingDate}
                  onChange={e => handleChange("unloadingDate", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Origin Agent</Label>
                <Input
                  value={form.originAgent}
                  onChange={e => handleChange("originAgent", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Destination Agent</Label>
                <Input
                  value={form.destinationAgent}
                  onChange={e => handleChange("destinationAgent", e.target.value)}
                />
              </FormRow>
            </FormGrid>

            {/* Document Uploads Section */}
            <SectionTitle>Document Uploads</SectionTitle>
            <UploadCard>
              <UploadHeader>
                <UploadTitle>Commercial Invoice</UploadTitle>
              </UploadHeader>
              <UploadContent>
                <UploadZone>
                  <UploadPlaceholder>Click or drag files here to upload</UploadPlaceholder>
                  <UploadInput
                    type="file"
                    multiple
                    onChange={e => handleFileChange("commercialInvoice", e.target.files)}
                  />
                  <Input
                    as="span"
                    tabIndex={-1}
                    style={{ display: "none" }}
                  />
                </UploadZone>
                {docFiles.commercialInvoice.length > 0 && (
                  <FileList>
                    {docFiles.commercialInvoice.map((f, i) => (
                      <li key={i}>{f.name}</li>
                    ))}
                  </FileList>
                )}
              </UploadContent>
            </UploadCard>
            <UploadCard>
              <UploadHeader>
                <UploadTitle>Packing List</UploadTitle>
              </UploadHeader>
              <UploadContent>
                <UploadZone>
                  <UploadPlaceholder>Click or drag files here to upload</UploadPlaceholder>
                  <UploadInput
                    type="file"
                    multiple
                    onChange={e => handleFileChange("packingList", e.target.files)}
                  />
                  <Input
                    as="span"
                    tabIndex={-1}
                    style={{ display: "none" }}
                  />
                </UploadZone>
                {docFiles.packingList.length > 0 && (
                  <FileList>
                    {docFiles.packingList.map((f, i) => (
                      <li key={i}>{f.name}</li>
                    ))}
                  </FileList>
                )}
              </UploadContent>
            </UploadCard>
            <UploadCard>
              <UploadHeader>
                <UploadTitle>Purchase Order</UploadTitle>
              </UploadHeader>
              <UploadContent>
                <UploadZone>
                  <UploadPlaceholder>Click or drag files here to upload</UploadPlaceholder>
                  <UploadInput
                    type="file"
                    multiple
                    onChange={e => handleFileChange("purchaseOrder", e.target.files)}
                  />
                  <Input
                    as="span"
                    tabIndex={-1}
                    style={{ display: "none" }}
                  />
                </UploadZone>
                {docFiles.purchaseOrder.length > 0 && (
                  <FileList>
                    {docFiles.purchaseOrder.map((f, i) => (
                      <li key={i}>{f.name}</li>
                    ))}
                  </FileList>
                )}
              </UploadContent>
            </UploadCard>
            <UploadCard>
              <UploadHeader>
                <UploadTitle>Proforma Invoice</UploadTitle>
              </UploadHeader>
              <UploadContent>
                <UploadZone>
                  <UploadPlaceholder>Click or drag files here to upload</UploadPlaceholder>
                  <UploadInput
                    type="file"
                    multiple
                    onChange={e => handleFileChange("proformaInvoice", e.target.files)}
                  />
                  <Input
                    as="span"
                    tabIndex={-1}
                    style={{ display: "none" }}
                  />
                </UploadZone>
                {docFiles.proformaInvoice.length > 0 && (
                  <FileList>
                    {docFiles.proformaInvoice.map((f, i) => (
                      <li key={i}>{f.name}</li>
                    ))}
                  </FileList>
                )}
              </UploadContent>
            </UploadCard>

            {/* Actions */}
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
              <Button type="submit" className="w-full bg-blue-600 text-white">
                Create Job
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/jobs")}
                className="w-full"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </FormCard>
    </PageContainer>
  );
}