import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://fe5d6bafd63c4f2a9737b04d4358aff1@o1252868.ingest.sentry.io/6419187",
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
