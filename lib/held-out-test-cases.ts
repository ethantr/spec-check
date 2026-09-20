export const heldOutTestCases = [
    {
      id: "held-out-1",
      expected: "underspecified",
      requirement:
        "The API should return the user's current account balance when the user requests their account details.",
    },
    {
      id: "held-out-2",
      expected: "contradictory",
      requirement:
        "The application must never store uploaded files on disk, but it must save every uploaded file to the server's local filesystem for later processing.",
    },
    {
      id: "held-out-3",
      expected: "implementable",
      requirement:
        "Password reset links should expire after 30 minutes and should only be usable once.",
    },
    {
      id: "held-out-4",
      expected: "underspecified",
      requirement:
        "The search API must return results instantly for any query, regardless of how many records exist in the database.",
    },
    {
      id: "held-out-5",
      expected: "implementable",
      requirement:
        "Users must be able to export their data as a CSV file containing their name, email address, and account creation date.",
    },
    {
      id: "held-out-6",
      expected: "underspecified",
      requirement:
        "The notification service must deliver every notification within one second, even when the user's device is offline.",
    },
    {
      id: "held-out-7",
      expected: "contradictory",
      requirement:
        "The API should return a user's profile from the database, but it must not make any database queries when handling profile requests.",
    },
    {
      id: "held-out-8",
      expected: "underspecified",
      requirement:
        "The frontend should work well on mobile devices.",
    },
    {
      id: "held-out-9",
      expected: "contradictory",
      requirement:
        "The system should reject duplicate usernames while allowing two users to have the same username.",
    },
    {
      id: "held-out-10",
      expected: "underspecified",
      requirement:
        "When a user deletes a photo, the photo should no longer be visible to other users.",
    },
  ] as const;