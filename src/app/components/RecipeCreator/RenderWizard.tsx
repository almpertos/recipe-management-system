import React, { JSX } from "react";

interface RenderWizardProps {
  currentStep: number;
  totalSteps?: number;
  stepTitles: string[];
  className?: string;
}

const RenderWizard: React.FC<RenderWizardProps> = ({
  currentStep,
  totalSteps,
  stepTitles,
  className,
}): JSX.Element => {
  const steps = ["Step 1", "Step 2", "Step 3"];
  return (
    <div className="flex items-center justify-center gap-2">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex justify-center items-center min-h-9 min-w-9 rounded-full text-white font-semibold ${
              currentStep > index + 1
                ? "bg-[#f79402]"
                : currentStep === index + 1
                ? "bg-[#f79402]"
                : "bg-[#e1e7eb]"
            }`}
          >
            {index + 1}
          </div>
          <span
            className={`text-sm font-semibold ${
              currentStep >= index + 1 ? "text-[#f79402]" : "text-[#e1e7eb]"
            }`}
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {stepTitles && stepTitles[index]}
          </span>
          {index < steps.length - 1 && (
            <div
              className={`h-1 w-full rounded-md ${
                currentStep > index + 1 ? "bg-[#f79402]" : "bg-[#e1e7eb]"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RenderWizard;
