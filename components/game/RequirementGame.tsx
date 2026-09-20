"use client";

import { useState } from "react";

import { EvaluationReveal } from "@/components/game/EvaluationReveal";
import {
    PredictionControls,
    type PlayerPrediction,
} from "@/components/game/PredictionControls";
import type { GameEvaluation } from "@/lib/game/types";

export type RequirementGameProps = {
    requirement: {
        id: string;
        requirement: string;
    };
};

export function RequirementGame({
    requirement: initialRequirement,
}: RequirementGameProps) {
    const [requirement, setRequirement] = useState(initialRequirement);

    const [prediction, setPrediction] =
        useState<PlayerPrediction | null>(null);

    const [evaluation, setEvaluation] =
        useState<GameEvaluation | null>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingNext, setIsLoadingNext] = useState(false);

    const [round, setRound] = useState(1);

    async function handleLock(playerPrediction: PlayerPrediction) {
        setPrediction(playerPrediction);
        setIsLoading(true);

        try {
            const response = await fetch("/api/requirements/evaluate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    requirement: requirement.requirement,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to evaluate requirement");
            }

            const result: GameEvaluation = await response.json();

            setEvaluation(result);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleNextRequirement() {
        setIsLoadingNext(true);

        try {
            const response = await fetch("/api/requirements/next", {
                method: "POST",
            });

            if (!response.ok) {
                throw new Error("Failed to load next requirement");
            }

            const nextRequirement: typeof requirement =
                await response.json();

            setRequirement(nextRequirement);
            setPrediction(null);
            setEvaluation(null);
            setRound((current) => current + 1);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoadingNext(false);
        }
    }

    const isLocked = prediction !== null;

    return (
        <main className="min-h-screen px-6 py-8 md:px-10 md:py-12">
            <div className="mx-auto max-w-4xl">
                <header className="flex items-baseline justify-between border-b border-border pb-4">
                    <h1 className="font-heading text-2xl font-semibold tracking-tight">
                        Spec Check
                    </h1>

                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Round {String(round).padStart(2, "0")}
                    </span>
                </header>

                <article className="py-12 md:py-16">
                    <p className="mb-8 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        Requirement
                    </p>

                    <h2 className="font-heading text-3xl leading-[1.15] tracking-tight md:text-5xl">
                        “{requirement.requirement}”
                    </h2>
                </article>

                <div className="border-t border-border" />

                {!isLocked && (
                    <div className="py-12 md:py-16">
                        <PredictionControls onLock={handleLock} />
                    </div>
                )}

                {isLoading && (
                    <div className="border-t border-border py-8">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Jev is analysing...
                        </p>
                    </div>
                )}

                {prediction && evaluation && !isLoading && (
                    <div className="py-12 md:py-16">
                        <EvaluationReveal
                            prediction={prediction}
                            evaluation={evaluation}
                            onPlayAgain={handleNextRequirement}
                        />
                    </div>
                )}

                {prediction && !evaluation && !isLoading && (
                    <div className="py-8">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Your prediction is locked.
                        </p>
                    </div>
                )}

                {isLoadingNext && (
                    <div className="border-t border-border py-8">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Loading next requirement...
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}

