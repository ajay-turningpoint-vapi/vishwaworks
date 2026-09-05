/**
 * Analytics-ready event tracking.
 * Pushes to window.dataLayer (GTM) and calls gtag if present.
 * Safe no-op when no analytics tool is installed.
 */

type EventName =
  | "whatsapp_click"
  | "call_click"
  | "form_started"
  | "form_submitted"
  | "problem_selected"
  | "area_selected"
  | "service_clicked"
  | "faq_opened";

type Payload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: EventName, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...payload });
    window.gtag?.("event", event, payload);
    if (import.meta.env.DEV) console.debug("[track]", event, payload);
  } catch {
    /* never break the page for analytics */
  }
}
