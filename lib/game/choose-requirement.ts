import { heldOutTestCases } from "@/lib/held-out-test-cases";

export type GameRequirement = {
  id: string;
  requirement: string;
};

export function chooseRequirement(): GameRequirement {
  const index = Math.floor(Math.random() * heldOutTestCases.length);

  const { id, requirement } = heldOutTestCases[index];

  return {
    id,
    requirement,
  };
}