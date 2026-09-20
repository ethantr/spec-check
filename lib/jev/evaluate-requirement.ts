import { experimental_evaluate as evaluate } from "ai";

import type {
  GameEvaluation,
  Prediction,
  RequirementClassification,
} from "@/lib/game/types";

export type RequirementEvaluation = {
  classification: RequirementClassification;
  probabilities?: Prediction;
};

export async function evaluateRequirement(requirement: string) :Promise<GameEvaluation> {
  const result = await evaluate({
    model: "typesafe-ai/jev",
    state: requirement,
    questions: {
      status: {
        type: "choice",
        instructions:
          "Classify the requirement according to whether it can be implemented as written, lacks enough information to determine its implementation requirements, or contains mutually incompatible constraints.",
        criteria: {
          implementable:
            "The requirement is sufficiently specific and its stated constraints can be satisfied simultaneously.",
          underspecified:
            "The requirement may be implementable, but important information, measurable criteria, or constraints are missing. Do not assume that an unstated constraint makes the requirement contradictory.",
          contradictory:
            "The requirement contains two or more constraints that cannot be satisfied simultaneously as written.",
        },
      },
    },
  });

  const status = result.answers.status;

  return {
    classification: status.choice,
    probabilities: status.probabilities,
  };
}