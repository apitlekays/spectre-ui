import type { ComponentDoc } from "../types.js";

import { alertDoc } from "./alert.js";
import { avatarDoc } from "./avatar.js";
import { badgeDoc } from "./badge.js";
import { breadcrumbDoc } from "./breadcrumb.js";
import { buttonDoc } from "./button.js";
import { cardDoc } from "./card.js";
import { checkboxDoc } from "./checkbox.js";
import { commandPaletteDoc } from "./command-palette.js";
import { containerDoc } from "./container.js";
import { dataTableDoc } from "./data-table.js";
import { dialogDoc } from "./dialog.js";
import { dropdownMenuDoc } from "./dropdown-menu.js";
import { formDoc } from "./form.js";
import { glowBorderDoc } from "./glow-border.js";
import { gridDoc } from "./grid.js";
import { gridBackgroundDoc } from "./grid-background.js";
import { inputDoc } from "./input.js";
import { navbarDoc } from "./navbar.js";
import { popoverDoc } from "./popover.js";
import { progressDoc } from "./progress.js";
import { scanBeamDoc } from "./scan-beam.js";
import { scanlineOverlayDoc } from "./scanline-overlay.js";
import { selectDoc } from "./select.js";
import { separatorDoc } from "./separator.js";
import { sidebarDoc } from "./sidebar.js";
import { skeletonDoc } from "./skeleton.js";
import { sliderDoc } from "./slider.js";
import { stackDoc } from "./stack.js";
import { statDoc } from "./stat.js";
import { switchDoc } from "./switch.js";
import { systemTickerDoc } from "./system-ticker.js";
import { tableDoc } from "./table.js";
import { tabsDoc } from "./tabs.js";
import { terminalTextDoc } from "./terminal-text.js";
import { textareaDoc } from "./textarea.js";
import { timelineDoc } from "./timeline.js";
import { toastDoc } from "./toast.js";
import { tooltipDoc } from "./tooltip.js";

export const allComponents: ComponentDoc[] = [
  alertDoc,
  avatarDoc,
  badgeDoc,
  breadcrumbDoc,
  buttonDoc,
  cardDoc,
  checkboxDoc,
  commandPaletteDoc,
  containerDoc,
  dataTableDoc,
  dialogDoc,
  dropdownMenuDoc,
  formDoc,
  glowBorderDoc,
  gridDoc,
  gridBackgroundDoc,
  inputDoc,
  navbarDoc,
  popoverDoc,
  progressDoc,
  scanBeamDoc,
  scanlineOverlayDoc,
  selectDoc,
  separatorDoc,
  sidebarDoc,
  skeletonDoc,
  sliderDoc,
  stackDoc,
  statDoc,
  switchDoc,
  systemTickerDoc,
  tableDoc,
  tabsDoc,
  terminalTextDoc,
  textareaDoc,
  timelineDoc,
  toastDoc,
  tooltipDoc,
].sort((a, b) => a.name.localeCompare(b.name));

export const componentsBySlug: Record<string, ComponentDoc> = Object.fromEntries(
  allComponents.map((c) => [c.slug, c])
);
