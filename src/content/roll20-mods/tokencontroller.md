---
title: 'TokenController'
summary: 'Set tokens patrolling routes, following leaders and holding still, on any grid in Jumpgate and Legacy games.'
order: 7
category: 'Token movement'
postCategory: 'tokencontroller'
status: 'Active'
versions:
  - label: 'One-Click'
    version: 'v4.0.1'
    url: ''
  - label: 'GitHub'
    version: 'v5.0.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/tree/TokenController-v5.0.0/TokenController'
  - label: 'Direct Download'
    version: 'v5.0.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/releases/download/TokenController-v5.0.0/TokenController_v5.0.0.zip'
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
  - name: 'Developesque'
    url: 'https://app.roll20.net/users/6975764'
featuredLinks:
  - label: 'GitHub'
    url: 'https://github.com/Roll20/roll20-api-scripts/tree/master/TokenController'
  - label: 'Changelog'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/blob/TokenController-v5.0.0/TokenController/CHANGELOG.md'
links: []
indexMedia: '../../assets/images/mods/mod-tokencontroller-cover.jpg'
indexMediaAlt: 'TokenController mod cover image'
hero: '../../assets/images/mods/mod-tokencontroller-hero.jpg'
heroAlt: 'TokenController mod hero image'
---

## TokenController Overview

A map feels more alive when things move on it: guards walking their rounds, a cart following its driver, a patrol pacing the castle walls. Moving those tokens by hand every turn is slow, and easy to forget in the middle of a scene.

TokenController moves them for you. Give a token a route and it walks it on its own, at its own speed, until you stop it. Other tokens can follow a leader in single file or in formation, and tokens you want left alone can be locked in place. When combat starts, patrols pause, and they carry on when it ends.

TokenController was created by **Developesque**. Version 5.0.0 is a full rewrite by me, MidNiteShadow7, after the Mod was reported as not working in Jumpgate. It works in Jumpgate and Legacy games, no longer needs HTML Builder, and keeps version 4 paths, patrols, locks, followers, macros and `!tc` commands working.

---

## Key Features

### Three Ways to Make a Route

- **Step codes**: a short list of moves such as `U2R2D2L2`, with diagonals (`UR`, `DL`), waits (`W3`) and stealth toggles (`S`). A step code isn't tied to one place, so the same route works anywhere on any page.
- **Drawings**: draw a line, polygon, freehand shape, rectangle or ellipse with Roll20's drawing tools, select it and click **From Drawing**. Tokens walk along it, and you can delete the drawing afterwards.
- **Recording**: select a token, click **Record** and move it with the arrow buttons or by dragging it on the map. Roll20 waypoints are followed. On square grids the recording is saved as a step code you can edit later.

### Every Grid

Square, hex (V and H), isometric, dimetric and gridless pages all work. TokenController reads each page's grid type, cell size and Jumpgate grid offset as it moves a token, so every page can use a different grid. On hex grids, directions with no matching neighbour zigzag and stay on course. If a map's grid doesn't quite line up, the `calibrate` command lines it up from tokens snapped to cell centres.

### Patrols That Behave

- Loop, walk back the way they came, or run once and stop.
- Each route has its own speed, a maximum number of tokens, an optional random start point and an optional fixed start.
- Move one cell at a time, or a whole step such as `U3` at once.
- Turn tokens to face the way they walk, whichever way their art faces.
- Drag a patrolling token and it carries on from where you drop it.
- **Reset** sends tokens back to exactly where they started, on the layer they started on.

### Following

Select a leader and click **Leader**, then select the followers and click **Follow**, or simply type the leader's name. Followers walk in the leader's footsteps, or keep their place around it in formation. They follow patrolling leaders, leaders you drag by hand and leaders moved by **TokenMod**, and followers can follow other followers.

### Locks

Hold a token in place with Roll20's own position lock, by undoing any move, or by simply stopping it patrolling and following. An optional status marker shows which tokens are locked.

### Combat Aware

Combat is detected from the turn tracker, a GM switch, or both. Patrols can pause, move once each time the turn passes, or keep moving, and the GM is told when they pause and resume.

### Easy to Drive

- A GM-only **TokenController - Command Deck** handout with a button for every action.
- A GM-only **TokenController - Help** handout with full instructions.
- Short whispered replies instead of a full menu after every action, so chat stays readable.
- A status card showing what the Mod is doing and how it sees the current page's grid.

### Available in 24 Languages

Messages, menus and handouts are available in 24 languages, chosen with `!tokencontroller set language` or the Language option on the Mod's One-Click settings page.

### Works With Other Mods

- Every move is passed to **Hexploration** v2, so patrolling and following tokens reveal hexes as they move.
- Other Mods can use `TokenController.ObserveTokenChange`, `start`, `stop`, `reset` and `routeOf`.

---

## What's New in Version 5.0.0

Version 5.0.0 is a full rewrite with no loss of existing work:

- **Jumpgate and Legacy**: the engine is detected automatically, and HTML Builder is no longer needed.
- **One-Click installs work again**: version 4.0.1 was published without its folder, so installing it failed.
- **Routes from drawings and recordings**, as well as step codes with diagonals and counted waits.
- **Every grid type**, with the cell size read from each page instead of one global setting.
- **Back-and-forth routes** walk back exactly the way they came, instead of drifting further away on every lap.
- **Tokens near the edge of the page** move freely, and steps off the page are skipped without the token losing its place.
- **Editing a patrolling token** (a bar, a marker, its name) no longer takes it off its route.
- **Followers** no longer stack on top of a patrolling leader, and can keep formation.
- **Settings** for movement, combat detection and behaviour, lock mode and follow mode.
- **Chat stays readable**, and the help handout is no longer visible to players.
- **Version 4 games upgrade on startup**: paths, patrols, locks, followers, unfinished drafts and settings are kept, and the `T-Cntrl_` macros and `!tc` commands keep working.

The full list is in the changelog.

---

## Upgrading from Version 4

Install version 5 over version 4 and save. On startup, every version 4 path becomes a route with the same name, patrolling tokens carry on from where they are, and locks and followers are kept. You can then remove HTML Builder unless another Mod uses it.

A token now follows one route at a time; tokens that were on several paths keep the first. The Pixels Per Unit setting is gone, because the cell size now comes from each page.

---

## Why Use It?

Background movement is one of the easiest ways to make a map feel lived in, and one of the first things a busy GM stops doing. TokenController lets you set it up once, before the session, and forget about it: the guards walk, the followers follow, the statues stay put, and everything waits politely while the party fights.
