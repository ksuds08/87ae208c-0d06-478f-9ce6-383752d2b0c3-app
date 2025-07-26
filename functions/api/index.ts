// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { UserAuthenticationBackendHandler } from './UserAuthenticationBackend';
import { BusinessPlanGeneratorBackendHandler } from './BusinessPlanGeneratorBackend';
import { MarketAnalysisBackendHandler } from './MarketAnalysisBackend';
import { FeedbackCollectionBackendHandler } from './FeedbackCollectionBackend';
import { PitchDeckGeneratorBackendHandler } from './PitchDeckGeneratorBackend';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/UserAuthenticationBackend") return UserAuthenticationBackendHandler(request);
  if (path === "/api/BusinessPlanGeneratorBackend") return BusinessPlanGeneratorBackendHandler(request);
  if (path === "/api/MarketAnalysisBackend") return MarketAnalysisBackendHandler(request);
  if (path === "/api/FeedbackCollectionBackend") return FeedbackCollectionBackendHandler(request);
  if (path === "/api/PitchDeckGeneratorBackend") return PitchDeckGeneratorBackendHandler(request);

  return new Response("Not found", { status: 404 });
}
