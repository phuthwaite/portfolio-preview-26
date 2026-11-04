import type { DeckDef } from "./Deck";
import { axs } from "./studies/Axs";
import { samsung } from "./studies/Samsung";
import { twc } from "./studies/Twc";
import { vw } from "./studies/Vw";

// Case studies with a full slide deck, by id (each opens at /case-studies/<id>)
export const caseStudyDecks: Record<string, DeckDef> = {
  samsung,
  vw,
  twc,
  axs,
};
