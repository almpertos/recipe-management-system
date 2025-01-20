interface FooterActionsProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  totalSteps: number;
}

const FooterActions: React.FC<FooterActionsProps> = ({
  currentStep,
  setCurrentStep,
  totalSteps,
}) => {
  return (
    <div className="flex justify-between gap-4">
      <button
        className="bg-[#e1e7eb] text-sm text-default h-[40px] w-1/6 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-colors"
        onClick={() => {
          if (currentStep > 1) setCurrentStep(currentStep - 1);
        }}
        disabled={currentStep === 1}
      >
        Back
      </button>
      <button
        className="bg-[#f79402] text-white text-sm h-[40px] w-5/6 rounded-md hover:bg-orange-600 hover:text-white transition-colors"
        onClick={() => {
          if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
        }}
        disabled={currentStep === totalSteps}
      >
        {currentStep === totalSteps ? "Finish" : "Next Step"}
      </button>
    </div>
  );
};

export default FooterActions;
