import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Segment from "@/components/segment";
import workout from "@/data/workout.json";
import { Timer } from "lucide-react";

export default function WorkoutRenderer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center shadow-lg">
        <h1 className="text-3xl font-bold tracking-tight">{workout.name}</h1>
        <p className="mt-2 text-sm opacity-90">{workout.description}</p>
        <div className="flex flex-row items-center justify-center gap-2 mt-2 text-sm">
          <Timer size={20} /> Duration: {workout.duration.value}{" "}
          {workout.duration.unit}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {workout.segments.map((segment, idx) => (
          <Segment key={idx} segment={segment} />
        ))}
      </main>

      <Footer/>
    </div>
  );
}