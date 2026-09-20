import { experimental_evaluate as evaluate } from "ai";

import { heldOutTestCases as testCases } from "@/lib/held-out-test-cases";

export async function GET() {
    const results = await Promise.all(
        testCases.map(async (testCase) => {
            const result = await evaluate({
                model: "typesafe-ai/jev",
                state: testCase.requirement,
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

            return {
                id: testCase.id,
                expected: testCase.expected,
                requirement: testCase.requirement,
                choice: result.answers.status.choice,
                probabilities: result.answers.status.probabilities,
            };
        }),
    );

    return Response.json(results);
}