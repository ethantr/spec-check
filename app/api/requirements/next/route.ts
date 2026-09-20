import { chooseRequirement } from "@/lib/game/choose-requirement";

export async function POST() {
  const requirement = chooseRequirement();

  return Response.json(requirement);
}