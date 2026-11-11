/**
 * Privacy-conscious client-side analytics helper.
 *
 * Rules:
 * - NEVER hardcode placeholder measurement IDs.
 * - Only emits events when GA4 gtag is initialized by the owner with explicit consent.
 * - Zero PII sent in payload.
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export type AnalyticsEvent =
  | {
      name: "order_swiggy_click";
      params: { outlet_id?: string; destination_url: string };
    }
  | {
      name: "order_zomato_click";
      params: { outlet_id?: string; destination_url: string };
    }
  | {
      name: "phone_click";
      params: { phone_number: string; context: string };
    }
  | {
      name: "franchise_enquiry_click";
      params: { method: string };
    }
  | {
      name: "event_enquiry_click";
      params: { method: string };
    };

export function trackAnalyticsEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", event.name, event.params);
  }
}

