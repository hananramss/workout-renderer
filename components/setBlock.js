// The SetBlock represents a collection of sub-blocks (like exercises or notes within a set).
// It's styled with a yellow accent to differentiate it visually.
// It uses recursion by rendering each sub-block using a shared Block component.

import Block from "./blocks";

export default function SetBlock({ block }) {
  return (
    <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
      <p className="font-semibold text-yellow-800 mb-2">{block.render}</p>
      <div className="pl-4 space-y-2">
        {block.blocks.map((b) => (
          <Block key={b.id} block={b} />
        ))}
      </div>
    </div>
  );
}
