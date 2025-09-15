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
  max-width: 40rem;
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

export function JobCreationPage() {
  const navigate = useNavigate();
  const { createJob } = useJobs();

  const [form, setForm] = useState({
    poNumber: "",
    template: "",
    shipper: { company: "" },
    consignee: { company: "" },
    cargo: { description: "", weight: "", volume: "" },
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleNestedChange = (parent, field, value) => {
    setForm(prev => ({
      ...prev,
      [parent]: { ...prev[parent], [field]: value }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <FormRow>
              <Label>PO Number</Label>
              <Input
                value={form.poNumber}
                onChange={(e) => handleChange("poNumber", e.target.value)}
                required
              />
            </FormRow>

            <FormRow>
              <Label>Template</Label>
              <Select
                value={form.template}
                onValueChange={(val) => handleChange("template", val)}
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

            <FormGrid>
              <FormRow>
                <Label>Shipper Company</Label>
                <Input
                  value={form.shipper.company}
                  onChange={(e) => handleNestedChange("shipper", "company", e.target.value)}
                  required
                />
              </FormRow>
              <FormRow>
                <Label>Consignee Company</Label>
                <Input
                  value={form.consignee.company}
                  onChange={(e) => handleNestedChange("consignee", "company", e.target.value)}
                  required
                />
              </FormRow>
            </FormGrid>

            <FormGrid>
              <FormRow>
                <Label>Cargo Description</Label>
                <Input
                  value={form.cargo.description}
                  onChange={(e) => handleNestedChange("cargo", "description", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Weight (kg)</Label>
                <Input
                  type="number"
                  value={form.cargo.weight}
                  onChange={(e) => handleNestedChange("cargo", "weight", e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Label>Volume (m³)</Label>
                <Input
                  type="number"
                  value={form.cargo.volume}
                  onChange={(e) => handleNestedChange("cargo", "volume", e.target.value)}
                />
              </FormRow>
            </FormGrid>

            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
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