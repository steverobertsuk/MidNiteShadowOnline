---
title: 'Hexploration'
summary: 'Cover a hex map with hexes and uncover it as the party explores, with hidden locations announced when they are found, in Jumpgate and Legacy games.'
order: 8
category: 'Map exploration'
postCategory: 'hexploration'
status: 'Active'
versions:
  - label: 'One-Click'
    version: 'v1.3'
    url: ''
  - label: 'GitHub'
    version: 'v2.0.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/tree/Hexploration-v2.0.0/Hexploration'
  - label: 'Direct Download'
    version: 'v2.0.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/releases/download/Hexploration-v2.0.0/Hexploration_v2.0.0.zip'
lastUpdated: 2026-10-30
compatibility:
  - label: 'Jumpgate'
    url: 'https://pages.roll20.net/redesign'
  - label: 'Legacy'
    url: ''
  - label: 'Any game system'
    url: ''
requirements:
  - label: 'Roll20 Pro'
    url: ''
  - label: 'Roll20 Elite'
    url: ''
credits:
  - name: 'MidNiteShadow7'
    url: 'https://app.roll20.net/users/16506286/midniteshadow7'
  - name: 'Ada Lindberg'
    url: 'https://app.roll20.net/users/46544/ada-l'
featuredLinks:
  - label: 'GitHub'
    url: 'https://github.com/Roll20/roll20-api-scripts/tree/master/Hexploration'
  - label: 'Changelog'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/blob/Hexploration-v2.0.0/Hexploration/CHANGELOG.md'
links:
  - label: "Ada Lindberg's Art Packs"
    url: 'https://marketplace.roll20.net/browse/publisher/165/ada-lindberg'
indexMedia: '../../assets/images/mods/mod-hexploration-cover.jpg'
indexMediaAlt: 'Hexploration mod cover image'
hero: '../../assets/images/mods/mod-hexploration-hero.jpg'
heroAlt: 'Hexploration mod hero image'
---

## Hexploration Overview

Hex crawls are built on not knowing what lies over the next ridge. On a virtual tabletop, though, the whole map is usually on show from the start, and hiding it by hand with fog of war or drawings is slow work for the GM.

Hexploration covers the map for you. Draw a shape over the area to hide, fill it with hexes, and each hex a player token moves through is uncovered, along with the hexes it can see around it. Ruins, lairs and villages can be hidden under the hexes and announced in chat when the party finds them.

Hexploration was created by **Ada Lindberg**. Version 2.0.0 is a full rewrite by me, MidNiteShadow7, after the Mod stopped working in Jumpgate games. It works in Jumpgate and Legacy games, no longer needs PathMath, MatrixMath, Vector Math or HTML Builder, and keeps version 1 hex maps, settings and `!hexploration_*` commands working.

---

## Key Features

### Fill a Map in a Few Clicks

- Draw polygons, rectangles, ellipses or freehand shapes around the area to hide, select them and click **Fill**.
- **Inverse Fill** covers the whole page except inside the selected shapes.
- **Undo** removes the last fill and puts back the shapes it used.
- Hexes are drawn on the foreground layer, above tokens, when the game has one, and on the token layer otherwise.
- Works on both **Hex (V)** and **Hex (H)** grids, at any cell size.

### Revealing as the Party Moves

- A token reveals every hex it covers, so large creatures reveal several.
- **Reveal Along Path** uncovers the whole route a token is dragged along, waypoints included, so fast moves don't skip hexes.
- **Sight Distance** reveals the hexes around the token, and **Line of Sight** stops covered hexes from being seen through.
- **Hex Reveal Distance** marks terrain that can only be revealed from close by, such as dense forest.
- **Glimpse** mode turns nearby hexes see-through instead of removing them, and clears them when a token enters.
- **Tokens That Reveal** chooses player tokens (the default), character tokens or all tokens, so the GM can move monsters without giving the map away.

### Hidden Locations

Select a token for an important place and click **Mark Location** before filling. The token is hidden under the hexes and announced in chat, to everyone or to the GM only, when it is discovered, with an optional ping to show the players where. Hexes can also be given names that only the GM sees.

### Monsters Stay Hidden

Roll20 draws token names, bars and auras above everything else on the map. With **Hide Covered Tokens** on, tokens under a covered hex have their player-visible name, bars and auras switched off until the hex is uncovered, so the creatures waiting in the dark don't give themselves away.

### GM Tools

- Reveal or re-cover selected hexes, reveal the whole page, or reset it.
- **Explore** reveals around selected tokens as if they had just moved there.
- Per-page settings for sight, line of sight, reveal path, glimpse and announcements.
- **Rescan** picks up a page's hexes again after the page or game is copied.
- **Calibrate** lines the hexes up with maps whose grid doesn't quite match.
- A **status card** for the current page.

### Easy to Drive

- A GM-only **Hexploration - Command Deck** handout with a button for every action.
- A GM-only **Hexploration - Help** handout with full instructions.

### Available in 24 Languages

Messages, menus and handouts are available in 24 languages, chosen with `!hexploration set language` or the Language option on the Mod's One-Click settings page.

### Works With Other Mods

- Tokens moved by **TokenMod** reveal hexes automatically.
- **TokenController** v5 passes every move on, so patrolling and following tokens reveal hexes as they go.
- Other Mods can call `Hexploration.revealAround(token)`.

---

## What's New in Version 2.0.0

Version 2.0.0 is a full rewrite with no loss of existing work:

- **Jumpgate and Legacy**: the engine is detected automatically, and shapes drawn in either editor can be filled.
- **No more dependencies**: PathMath, MatrixMath, Vector Math and HTML Builder are no longer needed.
- **Hexes line up** with Jumpgate's grid, and Legacy maps keep their exact version 1 spacing.
- **Inverse Fill** now covers the far right and bottom of the page.
- **Fast moves** no longer skip hexes, and tokens near the edge of a hex land in the right one.
- **Monsters moved by the GM**, and tokens on the GM layer, no longer reveal the map.
- **No more crashes** when hexes, labels or icons are deleted by hand.
- **Large fills** are drawn in batches, so they no longer trip the API's watchdog.
- **New features**: Reveal Along Path, Glimpse, Hide Covered Tokens, Mark Location, Undo, per-page settings, Rescan, Calibrate, the Help and Command Deck handouts and 24 languages.
- **Commands are GM only**.

The full list is in the changelog.

---

## Upgrading from Version 1

Install version 2 over version 1 and save. On startup, existing hexes, names, locations, colours, border width and sight distance carry over, and the `!hexploration_*` commands and the `Hexploration_menu` macro keep working. You can then remove PathMath, MatrixMath, Vector Math and HTML Builder unless another Mod uses them.

If you copy a Legacy game to Jumpgate, run `!hexploration rescan` on each page to pick its hexes up again.

---

## Why Use It?

Exploration is at its best when the players genuinely don't know what's out there. Hexploration keeps the map a mystery without the GM having to manage fog or redraw anything: the party moves, the wilderness opens up around them, and the forgotten temple appears the moment they stumble into it.
