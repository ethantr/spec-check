# Spec Check

Can AI tell when a software requirement is actually well specified?

I built this as a small experiment around [Jev](https://vercel.com/ai-gateway/models/jev).

You get shown a software requirement and have to decide whether it's:

* **Implementable**: you think it can be built as written
* **Underspecified**: there's important information missing
* **Contradictory**: the requirements conflict with each other

You also give each option an independent confidence level.

Then you lock in your answer and see what Jev thinks.

## Why?

I've been thinking about how AI changes software engineering, particularly the parts of engineering that aren't just writing code.

A lot of software work is deciding whether a requirement actually makes sense before you start building it.

We're also moving towards more **spec-driven development**, where AI can take a larger role in turning requirements into software.

That made me wonder:

**Can an AI distinguish between requirements that are implementable, underspecified, and contradictory?**

And how does its judgement compare with an engineer's?

This isn't intended to treat Jev's answer as the objective truth. Some requirements are genuinely debatable. The interesting part is the disagreement.

## How it works

**Read → Judge → Commit → Compare → Next**

You classify the requirement and set your confidence.

Jev receives the requirement, but not your answer.

It returns a classification and probability distribution across the three classifications.

The game then puts the two judgements side by side.

## Run locally

You'll need Node.js and pnpm installed.

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

You'll also need a Vercel AI Gateway API key in your environment:

```bash
AI_GATEWAY_API_KEY=your_key_here
```

## What I'm trying to learn

* Do engineers disagree with Jev?
* Where do those disagreements happen?
* Are these categories actually useful?
* Does comparing your judgement with AI's change how you think about the requirement?

If you play it, I'm particularly interested in the requirements where you think **Jev got it wrong**.

That's probably where the interesting stuff is.

## Status

This is an early experiment, not a finished product.

I'm putting it out there to get some real feedback before deciding what it should become.
