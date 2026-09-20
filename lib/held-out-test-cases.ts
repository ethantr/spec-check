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
    {
        id: "held-out-11",
        expected: "implementable",
        requirement:
          "An account must be locked for 15 minutes after five failed password attempts within a 10-minute period.",
      },
      {
        id: "held-out-12",
        expected: "underspecified",
        requirement:
          "The application should load quickly even on slow internet connections.",
      },
      {
        id: "held-out-13",
        expected: "contradictory",
        requirement:
          "Every API response must contain a request identifier, but the API must not generate, store, or return any request identifiers.",
      },
      {
        id: "held-out-14",
        expected: "implementable",
        requirement:
          "Users can change their email address only after confirming the new address using a verification link sent to that address.",
      },
      {
        id: "held-out-15",
        expected: "underspecified",
        requirement:
          "The application should send users a reminder shortly before their subscription expires.",
      },
      {
        id: "held-out-16",
        expected: "contradictory",
        requirement:
          "The system must preserve every user's audit history permanently, but all user data must be automatically deleted after 90 days.",
      },
      {
        id: "held-out-17",
        expected: "implementable",
        requirement:
          "The API must return HTTP 404 when a requested resource does not exist.",
      },
      {
        id: "held-out-18",
        expected: "underspecified",
        requirement:
          "The dashboard should display the most important metrics for the business.",
      },
      {
        id: "held-out-19",
        expected: "contradictory",
        requirement:
          "A user must be able to access their private documents from any device, but the documents must never leave the device on which they were uploaded.",
      },
      {
        id: "held-out-20",
        expected: "implementable",
        requirement:
          "When a user signs out, the current session must be invalidated so that its authentication token can no longer be used.",
      },
    
      {
        id: "held-out-21",
        expected: "underspecified",
        requirement:
          "The payment page must prevent users from accidentally submitting the same payment twice.",
      },
      {
        id: "held-out-22",
        expected: "contradictory",
        requirement:
          "The service must remain available when the database is unavailable, but every request must read its response directly from the database.",
      },
      {
        id: "held-out-23",
        expected: "implementable",
        requirement:
          "Uploaded profile images must be converted to JPEG before being stored.",
      },
      {
        id: "held-out-24",
        expected: "underspecified",
        requirement:
          "Search results should be ordered by relevance.",
      },
      {
        id: "held-out-25",
        expected: "contradictory",
        requirement:
          "The application must allow users to delete their account immediately, but account deletion must require approval from an administrator.",
      },
      {
        id: "held-out-26",
        expected: "implementable",
        requirement:
          "Users without administrator permissions must receive HTTP 403 when attempting to access the administration API.",
      },
      {
        id: "held-out-27",
        expected: "underspecified",
        requirement:
          "The system should support millions of users without becoming slow.",
      },
      {
        id: "held-out-28",
        expected: "contradictory",
        requirement:
          "The cache must always contain the latest value from the database, but database writes must not invalidate or update the cache.",
      },
      {
        id: "held-out-29",
        expected: "implementable",
        requirement:
          "A user's username must be between 3 and 30 characters and may contain lowercase letters, numbers, and underscores.",
      },
      {
        id: "held-out-30",
        expected: "underspecified",
        requirement:
          "The application should notify administrators whenever something goes wrong.",
      },
    
      {
        id: "held-out-31",
        expected: "implementable",
        requirement:
          "The API must reject requests containing more than 100 items in a single bulk operation.",
      },
      {
        id: "held-out-32",
        expected: "underspecified",
        requirement:
          "Users should be able to recover their account if they lose access to their email address.",
      },
      {
        id: "held-out-33",
        expected: "contradictory",
        requirement:
          "The system must process requests in the order they are received, while allowing requests to be processed concurrently in any order.",
      },
      {
        id: "held-out-34",
        expected: "implementable",
        requirement:
          "A user's session should expire after 24 hours of inactivity.",
      },
      {
        id: "held-out-35",
        expected: "underspecified",
        requirement:
          "The API should provide useful error messages when a request fails.",
      },
      {
        id: "held-out-36",
        expected: "contradictory",
        requirement:
          "All customer data must be encrypted at rest, but customer data must be stored in plaintext so database administrators can query it directly.",
      },
      {
        id: "held-out-37",
        expected: "implementable",
        requirement:
          "When two users attempt to claim the same username at the same time, at most one request may succeed.",
      },
      {
        id: "held-out-38",
        expected: "underspecified",
        requirement:
          "The application must be accessible to all users.",
      },
      {
        id: "held-out-39",
        expected: "implementable",
        requirement:
          "The CSV export must contain exactly one row for each account owned by the requesting user.",
      },
      {
        id: "held-out-40",
        expected: "underspecified",
        requirement:
          "The service should retry failed requests automatically without causing duplicate operations.",
      },
  ] as const;