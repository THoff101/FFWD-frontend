import { useState } from "react";
import { ProcessProgress } from "./process-progress";
import { SidebarNav } from "./sidebar-nav";
import { StepBasics } from "./step-basics";
import { StepParties } from "./step-parties";
import { StepDocuments } from "./step-documents";
import { StepReview } from "./step-review";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface JobCreationProcessProps {
  onJobCreated: (data: any) => void;
}

export function JobCreationProcess({ onJobCreated }: JobCreationProcessProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const stepLabels = ["Basics", "Parties", "Dates & Documents", "Review"];
  const totalSteps = 4;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onJobCreated(formData);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepBasics data={formData} updateData={updateFormData} />;
      case 2:
        return <StepParties data={formData} updateData={updateFormData} />;
      case 3:
        return <StepDocuments data={formData} updateData={updateFormData} />;
      case 4:
        return <StepReview data={formData} onSubmit={handleSubmit} onBack={prevStep} />;
      default:
        return <StepBasics data={formData} updateData={updateFormData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex">
      {/* Sidebar */}
      <SidebarNav />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Progress Bar */}
        <ProcessProgress 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
          stepLabels={stepLabels} 
        />
        
        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Create New Freight Job
              </h1>
              <p className="text-muted-foreground">
                Complete the following steps to set up your freight forwarding job
              </p>
            </div>

            {/* Form Content */}
            <div className="space-y-6">
              {/* Step Content */}
              <div className="min-h-[600px]">
                {renderCurrentStep()}
              </div>

              {/* Navigation Buttons - Hidden on Step 4 (Review handles its own) */}
              {currentStep < 4 && (
                <div className="flex justify-between items-center pt-6 border-t border-dashed border-border">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="border-dashed border-gray-400 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Step {currentStep} of {totalSteps} - {stepLabels[currentStep - 1]}
                    </p>
                  </div>

                  <Button
                    onClick={nextStep}
                    className="bg-blue-500 hover:bg-blue-600 text-white border-none shadow-lg"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}