"use client"; // Προστίθεται στην κορυφή για να δηλωθεί ως client component

import React, { useState } from "react";

interface Recipe {
  title: string;
  description: string;
  ingredients: string;
  steps: string;
}

const AddRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>({
    title: "",
    description: "",
    ingredients: "",
    steps: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Recipe Submitted: ", recipe);
    // Add logic to save the recipe
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#f79402]">
        Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            placeholder="Enter the recipe title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f79402] focus:outline-none"
            required
          />
        </div>

        {/* Recipe Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleChange}
            placeholder="Write a short description of the recipe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f79402] focus:outline-none"
            rows={3}
            required
          ></textarea>
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ingredients (comma-separated)
          </label>
          <input
            type="text"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="e.g., eggs, milk, sugar"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f79402] focus:outline-none"
            required
          />
        </div>

        {/* Steps */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Steps
          </label>
          <textarea
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            placeholder="Write the steps of the recipe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f79402] focus:outline-none"
            rows={5}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-[#f79402] text-white font-semibold rounded-lg hover:bg-[#e68400] transition-all duration-300"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
