import { heldOutTestCases } from "../held-out-test-cases";

export type GameRequirement = {
    id: string;
    requirement: string;
  };

  export const gameRequirements: GameRequirement[] =
  heldOutTestCases.map(({ id, requirement }) => ({
    id,
    requirement,
  }));