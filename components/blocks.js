import DurationIntervalBlock from "./durationIntervalBlock";
import RestBlock from "./restBlock";
import SetBlock from "./setBlock";

export default function Block({ block }) {
  switch (block.type) {
    case "duration_interval":
      return <DurationIntervalBlock block={block} />;
    case "rest":
      return <RestBlock block={block} />;
    case "set":
      return <SetBlock block={block} />;
    default:
      return null;
  }
}
