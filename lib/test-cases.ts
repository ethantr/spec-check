export const testCases = [
  // Clearly implementable
  {
    id: "implementable-1",
    expected: "implementable",
    requirement:
      "The health check endpoint should return HTTP 200 while the server is running.",
  },
  {
    id: "implementable-2",
    expected: "implementable",
    requirement:
      "The API should allow an authenticated user to update their email address by sending a PUT request containing the new email address.",
  },
  {
    id: "implementable-3",
    expected: "implementable",
    requirement:
      "The system should store each submitted support ticket with the timestamp at which it was created.",
  },
  {
    id: "implementable-4",
    expected: "implementable",
    requirement:
      "The API should return HTTP 404 when a requested user does not exist.",
  },
  {
    id: "implementable-5",
    expected: "implementable",
    requirement:
      "The application should display a loading indicator while the profile API request is in progress.",
  },
  {
    id: "implementable-6",
    expected: "implementable",
    requirement:
      "Users should be able to delete their own saved searches through the DELETE /saved-searches/:id endpoint.",
  },

  // Underspecified
  {
    id: "underspecified-1",
    expected: "underspecified",
    requirement:
      "The system should process large uploads quickly.",
  },
  {
    id: "underspecified-2",
    expected: "underspecified",
    requirement:
      "The API should return the user's profile within 100ms, even when the database is unavailable.",
  },
  {
    id: "underspecified-3",
    expected: "underspecified",
    requirement:
      "The application should support a large number of concurrent users.",
  },
  {
    id: "underspecified-4",
    expected: "underspecified",
    requirement:
      "The search results should be highly relevant to the user.",
  },
  {
    id: "underspecified-5",
    expected: "underspecified",
    requirement:
      "The system should send notifications promptly after an important event occurs.",
  },
  {
    id: "underspecified-6",
    expected: "underspecified",
    requirement:
      "The API should handle invalid input gracefully.",
  },

  // Contradictory
  {
    id: "contradictory-1",
    expected: "contradictory",
    requirement:
      "The API must return fresh profile data directly from the database when the database is unavailable.",
  },
  {
    id: "contradictory-2",
    expected: "contradictory",
    requirement:
      "The system must never store user passwords, but it must store each user's plaintext password so administrators can retrieve it.",
  },
  {
    id: "contradictory-3",
    expected: "contradictory",
    requirement:
      "The API must always return the latest database value, even when it is forbidden from making any database requests.",
  },
  {
    id: "contradictory-4",
    expected: "contradictory",
    requirement:
      "A deleted account must remain completely inaccessible while the API must continue returning the deleted user's private profile to authenticated clients.",
  },
  {
    id: "contradictory-5",
    expected: "contradictory",
    requirement:
      "The upload must complete before the client begins uploading the file.",
  },
  {
    id: "contradictory-6",
    expected: "contradictory",
    requirement:
      "The service must accept requests only from authenticated users, but unauthenticated users must also be able to access every endpoint.",
  },

  // Boundary / adversarial cases
  {
    id: "boundary-1",
    expected: "underspecified",
    requirement:
      "The API must return the user's profile within 50ms.",
  },
  {
    id: "boundary-2",
    expected: "underspecified",
    requirement:
      "Users must receive real-time notifications whenever their account changes.",
  },
] as const;