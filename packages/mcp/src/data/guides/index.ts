import type { GuideDoc } from "../types.js";

import { gettingStartedGuide } from "./getting-started.js";
import { installationGuide } from "./installation.js";
import { themingGuide } from "./theming.js";
import { designBriefGuide } from "./design-brief.js";

export const allGuides: GuideDoc[] = [
  gettingStartedGuide,
  installationGuide,
  themingGuide,
  designBriefGuide,
];

export const guidesBySlug: Record<string, GuideDoc> = Object.fromEntries(
  allGuides.map((g) => [g.slug, g])
);
