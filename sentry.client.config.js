/* eslint-disable turbo/no-undeclared-env-vars */
import * as Sentry from "@sentry/nextjs";
import getConfig from "next/config";
import { CaptureConsole } from "@sentry/integrations";
const { publicRuntimeConfig } = getConfig();

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://8a5a68eb454b4356b833a155548b82ce@o4504038488604672.ingest.sentry.io/4504038492209152",
  tracesSampleRate: 0.1,
  release: process.env.SENTRY_RELEASE,
  environment: publicRuntimeConfig.SENTRY_ENVIRONMENT || "preview",
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
