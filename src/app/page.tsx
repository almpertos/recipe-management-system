import AddRecipe from "./components/AddRecipe";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 bg-[#fff4e6]">
        <div className="bg-white shadow-md rounded-lg p-6 j">
          <h1 className="text-3xl font-bold text-[#2d2d2d] mb-4">
            Welcome to Recipe Management System
          </h1>
          <div className="text-lg text-[#2d2d2d] space-y-4">
            <p>This app was created for educational purposes.</p>
            <p>
              <strong>Course:</strong> Software Engineering for Large-Scale
              Applications
            </p>
            <p>
              <strong>Master's Program:</strong> Software Engineering for Web
              and Mobile Applications
            </p>
            <p>
              <strong>Developed by:</strong> Kesisefidis Efthymios-Almpertos
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
