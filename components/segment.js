import Block from "./blocks";

export default function Segment({ segment }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-blue-600 border-l-4 border-blue-500 pl-3 mb-4">
        {segment.title}
      </h2>
      <div className="space-y-3">
        {segment.blocks.map((block, idx) => (
          <Block key={idx} block={block} />
        ))}
      </div>
    </section>
  );
}
