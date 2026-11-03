import type { DeckDef } from "./Deck";
import { samsung } from "./studies/Samsung";

// Case studies with a full slide deck, by id (each opens at /case-studies/<id>)
export const caseStudyDecks: Record<string, DeckDef> = {
  samsung,
};
