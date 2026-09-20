import { RequirementGame } from "@/components/game/RequirementGame";
import { chooseRequirement } from "@/lib/game/choose-requirement";

export default function Home() {
  const requirement = chooseRequirement();

  return <RequirementGame requirement={requirement} />;
} 