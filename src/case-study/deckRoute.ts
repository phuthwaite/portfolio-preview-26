import { useEffect, useState } from "react";

// Case study decks open in a modal over the home page, but keep their own address
// (/case-studies/<id>) so they can be shared, bookmarked and closed with the back button.
const PATH = /^\/case-studies\/([\w-]+)\/?$/;
const EVENT = "deckroutechange";

export const deckPath = (id: string) => `/case-studies/${id}`;
const currentDeck = () => window.location.pathname.match(PATH)?.[1] ?? null;

/** Open a deck: adds a history entry, so Back closes it again */
export function openDeck(id: string) {
  history.pushState({ deck: id }, "", deckPath(id));
  window.dispatchEvent(new Event(EVENT));
}

/** Close the deck: steps back if we opened it, otherwise (a direct visit) returns to the case studies */
export function closeDeck() {
  if (history.state?.deck) history.back();
  else {
    history.replaceState(null, "", "/#case-studies");
    window.dispatchEvent(new Event(EVENT));
    // once the deck has closed (and the page can scroll again), go to the case studies; a section link
    // click is what the slide stack responds to
    setTimeout(() => {
      const link = Object.assign(document.createElement("a"), {
        href: "#case-studies",
      });
      document.body.append(link);
      link.click();
      link.remove();
    }, 0);
  }
}

/** The id of the deck in the address, if any; follows openDeck/closeDeck and the back/forward buttons */
export function useDeckRoute() {
  const [id, setId] = useState(currentDeck);
  useEffect(() => {
    const update = () => setId(currentDeck());
    window.addEventListener("popstate", update);
    window.addEventListener(EVENT, update);
    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener(EVENT, update);
    };
  }, []);
  return id;
}
