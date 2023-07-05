// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import {CaptureConsole} from "@sentry/integrations";

Sentry.init({
    dsn: "https://0dcdcd642c3d4b9b82a8cda8fb6348cf@o4504038488604672.ingest.sentry.io/4505178750386176",

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,

    integrations: [
        new CaptureConsole({
            // array of methods that should be captured
            // defaults to ['log', 'info', 'warn', 'error', 'debug', 'assert']
            // levels: ['log', 'info', 'warn', 'error', 'debug', 'assert'],
        }),
    ],

});
