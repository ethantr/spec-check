"use client";

import { useEffect, useState } from "react";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

import type {
  Prediction,
  RequirementClassification,
} from "@/lib/game/types";

const classifications: RequirementClassification[] = [
  "implementable",
  "underspecified",
  "contradictory",
];

const labels: Record<RequirementClassification, string> = {
  implementable: "Implementable",
  underspecified: "Underspecified",
  contradictory: "Contradictory",
};

const symbols: Record<RequirementClassification, string> = {
  implementable: "○",
  underspecified: "?",
  contradictory: "×",
};

const initialConfidence: Prediction = {
  implementable: 50,
  underspecified: 50,
  contradictory: 50,
};

export type PlayerPrediction = {
  classification: RequirementClassification;
  confidence: Prediction;
};

export type PredictionControlsProps = {
  onLock: (prediction: PlayerPrediction) => void;
};

export function PredictionControls({
  onLock,
}: PredictionControlsProps) {
  const [classification, setClassification] = useState<
    RequirementClassification | ""
  >("");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [confidence, setConfidence] =
    useState<Prediction>(initialConfidence);

  function handleConfidenceChange(
    classification: RequirementClassification,
    value: number | readonly number[],
  ) {
    const nextValue = Array.isArray(value) ? value[0] : value;

    setConfidence((current) => ({
      ...current,
      [classification]: nextValue,
    }));
  }

  function handleLock() {
    if (classification === "") {
      return;
    }

    onLock({
      classification,
      confidence,
    });
  }

  return (
    <section className="space-y-12">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Your judgement
        </p>

        <h2 className="font-heading text-3xl tracking-tight">
          What do you think?
        </h2>
      </div>

      <RadioGroup
        value={classification}
        onValueChange={(value) =>
          setClassification(value as RequirementClassification)
        }
        className="grid gap-3 md:grid-cols-3"
        aria-label="Requirement classification"
      >
        {classifications.map((option) => (
          <label
            key={option}
            htmlFor={option}
            className="group cursor-pointer"
          >
            <div
              className={[
                "flex min-h-20 items-center gap-4 border px-5",
                "transition-colors",
                classification === option
                  ? "border-foreground bg-muted"
                  : "border-border hover:border-foreground/50 hover:bg-muted/30",
              ].join(" ")}
            >
              <RadioGroupItem
                value={option}
                id={option}
                className="sr-only"
              />

              <span
                className={[
                  "font-heading text-2xl transition-transform",
                  classification === option
                    ? "text-accent scale-110"
                    : "text-muted-foreground",
                ].join(" ")}
              >
                {symbols[option]}
              </span>

              <span className="font-mono text-xs font-medium uppercase tracking-[0.12em]">
                {labels[option]}
              </span>
            </div>
          </label>
        ))}
      </RadioGroup>

      <div className="space-y-7">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Confidence
          </p>

          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Give each classification an independent confidence. They do not need to
            add up to 100%.
          </p>
        </div>

        <div className="space-y-7">
          {classifications.map((option) => (
            <div key={option} className="grid gap-3 md:grid-cols-[150px_1fr_48px] md:items-center">
              <span className="text-sm">
                {labels[option]}
              </span>

              <Slider
                value={[confidence[option]]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) =>
                  handleConfidenceChange(option, value)
                }
                aria-label={`${labels[option]} confidence`}
              />

              <span className="min-w-12 font-mono text-right text-xs tabular-nums text-muted-foreground">
                {confidence[option]}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end border-t border-border pt-6">
        <button
          type="button"
          onClick={handleLock}
          disabled={!isMounted || classification === ""}
          className="font-mono text-xs uppercase tracking-[0.15em]"
        >
          Lock in →
        </button>
      </div>
    </section>
  );
}