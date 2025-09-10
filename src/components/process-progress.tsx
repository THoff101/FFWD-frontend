import { Check } from "lucide-react";

interface ProcessProgressProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export function ProcessProgress({ currentStep, totalSteps, stepLabels }: ProcessProgressProps) {
  return (
    <div className="w-full bg-white border-b border-border p-6">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-6 left-0 w-full h-0.5 bg-muted">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>
        
        {/* Steps */}
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={index} className="flex flex-col items-center relative z-10">
              {/* Step circle */}
              <div 
                className={`
                  w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200
                  ${isCompleted ? 'bg-blue-500 border-blue-500 text-white' : 
                    isCurrent ? 'bg-white border-blue-500 text-blue-500' : 
                    'bg-white border-muted text-muted-foreground'}
                  shadow-sm
                `}
                style={{
                  transform: isCurrent ? 'scale(1.1)' : 'scale(1)',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
                }}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-medium">{stepNumber}</span>
                )}
              </div>
              
              {/* Step label */}
              <div className="mt-2 text-center">
                <p className={`text-xs ${isCurrent ? 'text-blue-600 font-medium' : 'text-muted-foreground'}`}>
                  Step {stepNumber}
                </p>
                <p className={`text-sm mt-1 max-w-20 ${isCurrent ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  {label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}