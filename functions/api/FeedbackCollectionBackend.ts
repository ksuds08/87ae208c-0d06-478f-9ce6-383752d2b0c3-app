type Feedback = {
  userId: string;
  feedbackText: string;
  timestamp: string;
};

type ErrorResponse = {
  error: string;
};

export async function FeedbackCollectionBackendHandler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  let feedbackData: Feedback;
  try {
    feedbackData = await req.json();
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const validationError = validateFeedback(feedbackData);
  if (validationError) {
    return new Response(JSON.stringify({ error: validationError }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    // Simulate saving feedback to a database or a third-party service
    // This is where you would use fetch to send data to your database or service
    // await fetch("https://your-database-api.com/save-feedback", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(feedbackData)
    // });

    return new Response(JSON.stringify({ message: "Feedback submitted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to save feedback" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

function validateFeedback(feedback: Feedback): string | null {
  if (!feedback.userId || typeof feedback.userId !== "string") {
    return "Invalid or missing userId";
  }
  if (!feedback.feedbackText || typeof feedback.feedbackText !== "string") {
    return "Invalid or missing feedbackText";
  }
  if (!feedback.timestamp || typeof feedback.timestamp !== "string") {
    return "Invalid or missing timestamp";
  }
  return null;
}
