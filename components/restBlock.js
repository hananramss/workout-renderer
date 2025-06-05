// This component renders a simple block to indicate a rest period in the workout.
// It uses a blue background and styling to visually separate it from other block types.

import { TimerOff } from "lucide-react";

export default function RestBlock({ block }) {
  return (
    <div className="bg-blue-50 p-3 rounded shadow-sm text-blue-700 text-sm">
      <div className="flex flex-row items-center gap-2">
        <TimerOff /> {block.render}
      </div>
    </div>
  );
}
