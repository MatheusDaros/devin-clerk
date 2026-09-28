import { appConfig } from "@/app.config";

export async function GET() {
  return Response.json({ features: appConfig.upcomingFeatures });
}
