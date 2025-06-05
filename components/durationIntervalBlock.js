import { Lightbulb } from "lucide-react";

export default function DurationIntervalBlock({ block }) {
  const colors = {
    easy: "green-100",
    hard: "red-100",
    fartlek: "yellow-100",
    recovery: "blue-100",
  };

  const bgColor = colors[block.intensity] || "gray-100";

  return (
    <div className={`bg-${bgColor} p-3 rounded shadow-sm`}>
      <p className="text-sm font-medium">{block.render}</p>
      {block.note && (
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-600 italic">
          <Lightbulb className="w-4 h-4 shrink-0" color="orange" />
          <span>{block.note}</span>
        </div>
      )}
    </div>
  );
}
