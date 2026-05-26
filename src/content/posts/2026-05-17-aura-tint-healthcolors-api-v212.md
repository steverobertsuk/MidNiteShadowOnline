---
title: "Aura/Tint HealthColors API v2.1.2"
summary: "Version 2.1.2 of the HealthColors API that fixes critical bugs related to aura visibility, settings menu behavior, and stability issues."
date: 2026-05-17
category: "HealthColors"
tags: ["Roll20 API Mod", "Feature Release"]
---

Version 2.1.2 is an update focused on fixing critical bugs related to aura visibility, settings menu behavior, and stability issues.

## Change Log

### Fixed

- Fixed Aura 1 being reset to transparent/zero radius in tint mode when a token's HP changed. `clearAuras` was unconditionally zeroing `aura1_color` and `aura1_radius` even though HealthColors never writes to Aura 1 in tint mode, causing any manually-placed Aura 1 to be wiped on every health update. Aura 1 is now left untouched when tint mode is active. ([#17](https://github.com/steverobertsuk/roll20-api-scripts/issues/17))
- Fixed incomplete token refresh when toggling between aura and tint modes. The previous approach ran a separate aura1 cleanup pass followed by the async drain queue, which could interleave with the `change:graphic` events the cleanup itself triggered. Replaced with a single `modeSwitch` drain queue that clears aura1 and re-evaluates each token in one atomic step per token, ensuring all tokens transition cleanly in both directions.

## Where to install the mod from?

- Roll20 One-Click Installer.
- [Roll20 API GitHub master branch](https://github.com/Roll20/roll20-api-scripts/tree/master/HealthColors).
- [Download and install manually from Dropbox](https://www.dropbox.com/scl/fi/bnrvrek4t7mljzfjtfuj8/HealthColors_v2.1.2.zip?rlkey=5liihguzh8551xks39qkhn4ic&dl=0).

---

The mod API is offered under the MIT License, and it allows users to freely use, copy, modify, merge, publish, distribute, sublicense, and sell the software, provided the original copyright and license notice are included.
