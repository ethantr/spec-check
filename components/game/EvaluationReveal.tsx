import type {
    GameEvaluation,
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

export type EvaluationRevealProps = {
    prediction: {
        classification: RequirementClassification;
        confidence: Prediction;
    };
    evaluation: GameEvaluation;
    onPlayAgain: () => void;
};

export function EvaluationReveal({
    prediction,
    evaluation,
    onPlayAgain,
}: EvaluationRevealProps) {
    const playerClassification = prediction.classification;
    const jevClassification = evaluation.classification;

    return (
        <section className="space-y-12">
            <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    The reveal
                </p>

                <h2 className="font-heading text-3xl tracking-tight">
                    What did Jev think?
                </h2>
            </div>

            <div className="grid gap-8 border-y border-border py-8 md:grid-cols-2 md:gap-12">
                <div>
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Your judgement
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="font-heading text-3xl text-accent">
                            {symbols[playerClassification]}
                        </span>

                        <p className="font-heading text-2xl">
                            {labels[playerClassification]}
                        </p>
                    </div>
                </div>

                <div>
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Jev
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="font-heading text-3xl text-accent">
                            {symbols[jevClassification]}
                        </span>

                        <p className="font-heading text-2xl">
                            {labels[jevClassification]}
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Confidence comparison
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Your confidence beside Jev&apos;s probability.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                    {/* You */}
                    <div className="space-y-6">
                        <p className="font-mono text-xs uppercase tracking-[0.15em]">
                            You
                        </p>

                        {classifications.map((classification) => {
                            const percentage = prediction.confidence[classification];

                            return (
                                <div key={classification} className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm">
                                            {labels[classification]}
                                        </span>

                                        <span className="font-mono text-xs tabular-nums">
                                            {percentage}%
                                        </span>
                                    </div>

                                    <div className="h-1 bg-muted">
                                        <div
                                            className="h-full bg-foreground"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Jev */}
                    <div className="space-y-6">
                        <p className="font-mono text-xs uppercase tracking-[0.15em]">
                            Jev
                        </p>

                        {classifications.map((classification) => {
                            const probability =
                                evaluation.probabilities?.[classification] ?? 0;

                            const percentage = Math.round(probability * 100);

                            return (
                                <div key={classification} className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm">
                                            {labels[classification]}
                                        </span>

                                        <span className="font-mono text-xs tabular-nums">
                                            {percentage}%
                                        </span>
                                    </div>

                                    <div className="h-1 bg-muted">
                                        <div
                                            className="h-full bg-foreground"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex justify-end border-t border-border pt-6">
                <button
                    type="button"
                    onClick={onPlayAgain}
                    className="font-mono text-xs font-medium uppercase tracking-[0.15em] underline underline-offset-4 hover:no-underline"
                >
                    Next requirement →
                </button>
            </div>
        </section>
    );
}

