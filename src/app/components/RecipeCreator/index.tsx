"use client";
import React, { useState } from "react";

import FooterActions from "./FooterActions";
import RenderWizard from "./RenderWizard";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const RecipeCreator = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        return <StepOne />;
    }
  };

  return (
    <div className="w-full h-full max-w-[800px] bg-white rounded-2xl p-4 flex flex-col justify-between">
      <div className="flex flex-col">
        <h1 className="text-default text-2xl">Add Recipe</h1>
        <p className="text-default text-xs">Add a new recipe.</p>
      </div>
      <RenderWizard
        currentStep={currentStep}
        stepTitles={["Add Recipe", "Add Ingredients", "Add Instructions"]}
      />
      {renderStep()}
      <FooterActions
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={3}
      />
    </div>
  );
};

export default RecipeCreator;
