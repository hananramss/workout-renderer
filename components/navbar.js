export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600 tracking-tight">
        🏃 FitRun
      </h1>
      <ul className="flex space-x-4 text-sm text-gray-700">
        <li>
          <a href="#" className="hover:text-blue-500">
            Workouts
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Plans
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Progress
          </a>
        </li>
      </ul>
    </nav>
  );
}
