const StepOne = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h4 className="text-black text-md">Name</h4>
        <input
          className="w-full rounded-xl border border-graphite-200 p-[16px] text-sm text-black outline-none focus:border-[##FDAA2F]"
          type="text"
        />
        <span className="text-[#727982] text-sm">
          Give your recipe name here.
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-black text-md">Description</h4>
        <input
          className="w-full rounded-xl border border-graphite-200 p-[16px] text-sm text-black outline-none focus:border-[##FDAA2F]"
          type="text"
        />
        <span className="text-[#727982] text-sm">
          Give your recipe description here.
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-black text-md">Difficulty</h4>
        <select className="w-full rounded-xl border border-graphite-200 p-[16px] text-sm text-black outline-none focus:border-[##FDAA2F]">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <span className="text-[#727982] text-sm">
          Select the difficulty level of your recipe.
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-full h-[200px] flex flex-col gap-1 justify-center items-center border-2 border-dashed border-graphite-200 rounded-xl">
          <h4 className="text-[#727982] text-md">Drop your image here, or</h4>
          <label className="block  rounded-xl border border-graphite-200 p-[16px] text-sm text-black text-center cursor-pointer hover:bg-gray-200">
            Click to browse an image
            <input className="hidden" type="file" accept="image/*" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
