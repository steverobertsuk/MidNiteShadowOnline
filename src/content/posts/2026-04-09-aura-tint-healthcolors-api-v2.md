---
title: "Aura/Tint HealthColors API v2.0.0"
summary: "A major modernization of the Aura/Tint HealthColors script with stability fixes, configuration cleanup, and improved visual behavior."
date: 2026-04-09
category: "HealthColors"
tags: ["Roll20 API Mod", "Feature Release"]
---

A couple of DMs whose games I play in mentioned that they wish this API had its bugs fixed, especially the ones where the aura would not show, and the animations no longer had colour.

As I am a developer, I thought I would go about fixing this API to help in the games I play, and I'm posting it here to hopefully help others here, as I've seen other threads and posts where the community have been asking about fixes, as the author has not been able to maintain it in the past several years.

As part of the update, I have added a README file and a changelog; the manual installation instructions are in the README.

Regarding the changes version 2 brings to this API, it is a major modernization and stability refactor of the entire script, consolidating performance improvements, critical bug fixes, and new user control features. This version represents a complete overhaul from the v1.6.x series.

## Change Log

### Added

- Respect Manual Overrides - the script now only updates visual properties (Aura 1) when a token's internal health bar actually changes. This allows for manual customization of colors, radii, and shapes via the token settings dialog without script interference during movement.
- Persistent Default Auras - tokens at 100% health now default to a clean Green Aura 1 (at the configured `AuraSize`) to indicate stability.
- JSDoc Documentation - every function is now fully documented with parameter types, return values, and behavioral descriptions to improve maintainability.
- Centralized Configuration - all default state values, FX definitions, and internal parameters are now managed via unified constants.
- FX Recovery Commands - added `!aura reset-fx` (rebuild default heal/hurt custom FX objects) and `!aura reset-all` (restore all settings to defaults + rebuild default FX + force update).
- Public Settings Snapshot - setting-changing `!aura` commands now post a read-only settings panel to game chat for table visibility.
- Aura Detail Commands - added `!aura a1shape`, `!aura a1tint`, `!aura a2size`, `!aura a2shape`, and `!aura a2tint` to adjust displayed Aura 1/Aura 2 detail values from chat.
- Settings Output Command - added `!aura settings` to post the current settings snapshot to game chat on demand.

### Changed

- `_` (Underscore) dependency - no longer required.
- `buttonColor` function - legacy function completely removed after verifying no external or internal dependencies; superseded by `nameBtn`.
- Tautological FX condition `(UseBlood !== "OFF" || UseBlood !== "NO").`
- `!aura on/off` semantics - now explicitly sets global enabled state instead of toggling on `on`.
- Schema version - bumped to `1.1.0` to reflect incremental state/data migration changes in the v2.0.0 line.

### Fixed

- Consistent casing for `checkInstall` and `handleToken` throughout.
- Initialization of `OneOff` state key to prevent `undefined` collisions.
- Corrected logic in `playDeath` to ensure jukebox tracks are properly stopped before restarting.
- Page scale calculation and aura radius math standardized for better precision.
- Heal and hurt FX color assignment now resolves `startColour`/`startColor` and `endColour`/`endColor` consistently, preventing gray/white fallback artifacts.
- Default heal/hurt FX random color channels are explicitly neutralized during spawn preparation to preserve configured color fidelity.
- Added a fallback spawn path that updates and triggers default custom FX by id (`spawnFx`) when definition-based spawning renders colors inconsistently.
- Tuned default heal/hurt particle profile values for clearer saturation and reduced washed-out appearance in experimental sandboxes.
- `!aura bar` now validates `1|2|3`, whispers confirmation on change, and immediately runs a full sync to apply the new bar selection.
- Tokens with no `max` value on the configured bar now have aura/tint cleared, preventing stale health indicators.
- Configuration output now explicitly includes Aura 2 detail rows in both the GM menu and public settings snapshot.
- Prevented duplicate settings output: setting-changing commands now publish a single game-chat snapshot instead of both GM and public panels.
- Aura 2 output values are now sourced from state-backed defaults (`Aura2Size`, `Aura2Shape`, `Aura2Color`) instead of hardcoded labels.
- Added Aura 1 Shape/Tint rows to settings output and backed them with default state values (`Aura1Shape`, `Aura1Color`).
- Default heal/hurt custom FX definitions are now synchronized proactively on install/reset and when FX colors change, preventing delayed/stale visual updates after color edits or token lifecycle events.

## Introduction Video

You can view the introduction video on YouTube: [https://youtu.be/07x_Md085YA](https://youtu.be/07x_Md085YA)

<div class="video-embed">
	<iframe
		src="https://www.youtube.com/embed/07x_Md085YA?rel=0&modestbranding=1"
		title="Aura/Tint HealthColors v2 Introduction"
		loading="eager"
		fetchpriority="high"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
</div>


I've posted the new version to the Roll20 API Scripts GitHub repository, and I am awaiting its review and merge, hopefully to be brought into Roll20 properly as version 2.0.0. The pull request is here: [https://github.com/Roll20/roll20-api-scripts/pull/2202](https://github.com/Roll20/roll20-api-scripts/pull/2202)

If you'd like to manually install this API, you can download it from Dropbox here: [https://www.dropbox.com/scl/fi/t4ymkhnz157g3u4s0pfuf/HealthColors_v2.0.0.zip?rlkey=6zxqrd6zn7lkuinnhhnn5dyr7&dl=0](https://www.dropbox.com/scl/fi/t4ymkhnz157g3u4s0pfuf/HealthColors_v2.0.0.zip?rlkey=6zxqrd6zn7lkuinnhhnn5dyr7&dl=0)


## Where to install the mod from?

- Roll20 One-Click Installer.
- [Roll20 API GitHub master branch](https://github.com/Roll20/roll20-api-scripts/tree/master/HealthColors).
- [Download and install manually from Dropbox](https://www.dropbox.com/scl/fi/t4ymkhnz157g3u4s0pfuf/HealthColors_v2.0.0.zip?rlkey=6zxqrd6zn7lkuinnhhnn5dyr7&dl=0).

---

The mod API is offered under the MIT License, and it allows users to freely use, copy, modify, merge, publish, distribute, sublicense, and sell the software, provided the original copyright and license notice are included.
