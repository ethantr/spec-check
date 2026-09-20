export type RequirementClassification =
  | "implementable"
  | "underspecified"
  | "contradictory";

export type Prediction = Record<RequirementClassification, number>;

export type GameEvaluation = {
  classification: RequirementClassification;
  probabilities?: Prediction;
};