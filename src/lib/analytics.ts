// Umami analytics (cookieless; the script is loaded in index.html and only reports on the domains
// listed there, so local development isn't counted). Clicks on links and buttons are tracked with
// `data-umami-event` attributes; this helper is for events that aren't clicks.
type EventData = Record<string, string | number>;

declare global {
  interface Window {
    umami?: { track: (event: string, data?: EventData) => void };
  }
}

export function track(event: string, data?: EventData) {
  window.umami?.track(event, data);
}

// The same event only once per visit, e.g. the first time each section is reached
const seen = new Set<string>();
export function trackOnce(event: string, data: EventData) {
  const key = event + JSON.stringify(data);
  if (seen.has(key)) return;
  seen.add(key);
  track(event, data);
}
