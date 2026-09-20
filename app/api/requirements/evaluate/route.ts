import { z } from "zod";

import { evaluateRequirement } from "@/lib/jev/evaluate-requirement";

const requestSchema = z.object({
  requirement: z.string().trim().min(1),
});

export async function POST(request: Request) {
  const body = await request.json();

  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Requirement must be a non-empty string." },
      { status: 400 },
    );
  }

  const evaluation = await evaluateRequirement(parsed.data.requirement);

  return Response.json(evaluation);
}