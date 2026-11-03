/**
 * Google Tag Manager & GA4 custom event tracking helper.
 * Pushes conversion and interaction events to window.dataLayer
 * without triggering duplicate page views.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}

