---
title: "Aura/Tint HealthColors API v2.1.1"
summary: "A follow-up Roll20 update that fixes aura visibility, settings menu behavior, and a few lingering stability issues."
date: 2026-05-07
category: "HealthColors"
tags: ["Roll20 API Mod", "HealthColors", "Bug Fix Release"]
---

I have submitted the pull request to approve a new 2.1.1 version containing the bug fixes.

While it makes its way through the approval and import process into the One-Click installer, you can manually download it from here: [https://github.com/steverobertsuk/roll20-api-scripts/releases/download/HealthColors-v2.1.1/HealthColors_v2.1.1.zip](https://github.com/steverobertsuk/roll20-api-scripts/releases/download/HealthColors-v2.1.1/HealthColors_v2.1.1.zip)

Listed below are all the fixes.

### [2.1.1] - 2026-05-07

#### Added

- Added version 1.7.1 (sourced from the Roll20 forums, never previously submitted to the GitHub repository) so it appears as a selectable previous version in the Roll20 Mod Script Console.

#### Fixed

- Fixed aura visibility threshold (`Percentage PC/NPC`): tokens at or above the configured HP threshold were incorrectly shown a green default aura instead of having the aura hidden. Changed comparison from `>=` to `>` and replaced `applyDefaultAura()` with `clearAuras()` in the above-threshold branch so the aura correctly disappears when a token's HP is not below the threshold. Also added a guard so a threshold of `0` clears the aura rather than treating it as "always show". ([#1](https://github.com/steverobertsuk/roll20-api-scripts/issues/1))
- Fixed `!aura` settings menu after a change: clicking a button and submitting the dialog caused a non-interactive read-only panel (using `<span>` pills) to appear in public chat instead of re-displaying the interactive GM-whispered menu. Root cause was `handleInput` calling `showSettingsInGameChat()` on every setting change instead of `showMenu()`. The interactive GM menu is now always shown after a change; the read-only public snapshot remains available via the explicit `!aura settings` command. ([#3](https://github.com/steverobertsuk/roll20-api-scripts/issues/3), [#4](https://github.com/steverobertsuk/roll20-api-scripts/issues/4))
- Fixed `!aura perc` not refreshing tokens already on the map: changing the HP threshold now immediately re-evaluates all existing tokens via `menuForceUpdate()`, so tokens that were visible under the old threshold are correctly cleared (or revealed) without requiring a token move.
- Fixed "No FX with name" GM whisper appearing repeatedly when a character's `USEBLOOD` attribute is set to a custom custfx name that no longer exists in the campaign (e.g. after a campaign reset or character import). The error message now identifies the character by name so the GM knows which `USEBLOOD` attribute to correct. The script also falls back to `-DefaultHurt` so a visual effect still plays instead of silently doing nothing. ([#2](https://github.com/steverobertsuk/roll20-api-scripts/issues/2))

#### Changed

- Removed orphaned `applyDefaultAura` function - it was superseded by `clearAuras()` in the threshold fix but never deleted.
- Removed unused `changedSetting` variable from `handleInput` - it was assigned in ~20 places but never read, as `showMenu()` was always called unconditionally at the end of the function.
- Token refresh progress messages updated: sender changed from a hardcoded string to `SCRIPT_NAME`; text changed from `"Fixing N Tokens"` / `"Finished Fixing Tokens"` to `"Refreshing N Tokens"` / `"Finished Refreshing Tokens"`.
- `handleInput` command dispatch refactored - 27 switch cases reduced to 5 dispatch-table lookups (`TOGGLES`, `STRINGS`, `FLOATS`, `SHAPES`, `HEXES`) plus a 13-case switch for commands with unique behaviour, removing ~100 lines of repetitive boilerplate.
- `showSettingsInGameChat` refactored to reduce cognitive complexity: extracted `boolPill` and `namePill` module-level helpers (read-only counterparts to the existing `toggleBtn`/`nameBtn`), replacing 8 repeated inline ternary expressions and an inline `pickNameStyle` closure.
- JSDoc corrections: removed stale `@param [update]` from `applyAuraAndDead` (parameter was removed in an earlier refactor); corrected `spawnDefaultFxById` description which falsely claimed to tighten particle profile settings; corrected `boolPill` description (background colour, not text colour); corrected `registerEventHandlers` listing `change:token` instead of `change:graphic`; documented the missing British/American colour-key variants on `FX_PARAM_DEFAULTS`; removed stale `pColor` return-type entry from `resolveTypeConfig`.

---
