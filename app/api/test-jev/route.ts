
import { heldOutTestCases } from "@/lib/held-out-test-cases";
import { evaluateRequirement } from "@/lib/jev/evaluate-requirement";

export async function GET() {
  const results = await Promise.all(
    heldOutTestCases.map(async (testCase) => {
      const evaluation = await evaluateRequirement(testCase.requirement);

      return {
        id: testCase.id,
        expected: testCase.expected,
        requirement: testCase.requirement,
        ...evaluation,
      };
    }),
  );

  return Response.json(results);
}