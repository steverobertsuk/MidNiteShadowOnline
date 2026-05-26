---
title: "v2.1.0 SwapTokenPositions Mod"
summary: "Version 2.1 of the SwapTokenPositions Roll20 mod, featuring explicit token targeting and enhanced access control."
date: 2026-05-19
category: "SwapTokenPositions"
tags: ["Roll20 API Mod", "Feature Release"]
---

Version 2.1.0 of SwapTokenPositions has now been released, introducing explicit token targeting and enhanced access control.

Discussions on the additions, changes and fixes can be found on the Roll20 forums: [https://app.roll20.net/forum/post/12727681/new-swaptokenpositions](https://app.roll20.net/forum/post/12727681/new-swaptokenpositions).

## Change Log

### Added

- Explicit token targeting via `--token1 <id|name>` and `--token2 <id|name>` flags.
  - Both flags must be provided together; omitting one produces a clear usage error.
  - Each input resolves by token ID first, then by token name on the active page.
  - Ambiguous name matches (multiple tokens with the same name) are rejected with guidance to use a token ID.
  - Cross-page explicit pairs are rejected the same as cross-page selection pairs.
- `parseFreeStringFlag` parser utility to handle quoted (space-containing) and unquoted string values.
- Explicit token access control via three new GM-only management commands (take effect immediately, no `--save` required):
  - `--token-input-access <gm-only|all-players|selected-users>` — sets who may use `--token1` and `--token2`.
  - `--token-input-users <id|name,...>` — replaces the allow-list with the specified players (resolved by ID then display name).
  - `--token-input-users-remove <id|name,...>` — removes specific players from the allow-list.
  - Default mode is `gm-only`. The GM is always permitted regardless of mode.
  - `--show-settings` now includes `Token Input Access` and (in `selected-users` mode) `Token Input Users`.
- `parseCommaListFlag` parser utility for comma-separated quoted and bare values.

### Developer Notes

- Build process now automatically syncs `package.json` version from `script.json` on each build.
- Build process now auto-increments the trailing build number on pre-release versions (e.g. `2.1.0.beta.0` → `2.1.0.beta.1`) so the version is always up to date after each `npm run build`. Release versions (`major.minor.patch`) are not auto-incremented.
- Versioned archive folder now uses the base semver (`major.minor.patch`) rather than the full pre-release string, so pre-release builds update the same folder in place.


## Where to install the mod from?

- Roll20 One-Click Installer - Coming soon.
- [Roll20 API GitHub master branch](https://github.com/Roll20/roll20-api-scripts/tree/master/SwapTokenPositions).
- [Download and install manually from Dropbox](https://www.dropbox.com/scl/fi/oy3akul8vah2nud0zln7z/SwapTokenPositions_v2.1.0.zip?rlkey=w49hxtoizpkgoxd8wq5v61gt4&dl=0).

---

The mod API is offered under the MIT License, and it allows users to freely use, copy, modify, merge, publish, distribute, sublicense, and sell the software, provided the original copyright and license notice are included.

