---
title: "Aura/Tint HealthColor"
summary: "Automatically colourises tokens based on their remaining health, providing instant visual feedback through auras, tint overlays and effects."
order: 3
category: "Visual feedback"
postCategory: "healthcolors"
status: "Active"
versions:
  - label: "One-Click"
    version: "v2.1.3"
    url: ""
  - label: "GitHub"
    version: "v2.1.3"
    url: "https://github.com/Roll20/roll20-api-scripts/tree/master/HealthColors/2.1.3"
  - label: "Development Download"
    version: "v2.1.4.beta.1"
    url: "https://www.dropbox.com/scl/fi/gteg92lz330dpk0wjujiz/HealthColors_v2.1.4.beta.1.zip?rlkey=pe35742kf9gwn0baqfj8w38uj&dl=0"
lastUpdated: 2026-05-22
compatibility:
  - label: "Jumpgate"
    url: "https://pages.roll20.net/redesign"
requirements:
  - label: "Roll20 Pro"
    url: ""
  - label: "Roll20 Elite"
    url: ""
credits:
  - name: "MidNiteShadow7"
    url: "https://app.roll20.net/users/16506286/midniteshadow7"
featuredLinks:
  - label: "GitHub"
    url: "https://github.com/Roll20/roll20-api-scripts/tree/master/HealthColors"
  - label: "Issues"
    url: "https://github.com/users/steverobertsuk/projects/2/views/1"
  - label: "Changelog"
    url: "https://github.com/Roll20/roll20-api-scripts/blob/master/HealthColors/CHANGELOG.md"
links:
  - label: "Roll20 Forum Post"
    url: "https://app.roll20.net/forum/post/12719378/aura-slash-tint-healthcolors-api-v2-dot-0-0"
indexMedia: "../../assets/images/mods/mod-healthcolors-cover.jpg"
indexMediaAlt: "Aura/Tint HealthColor mod cover image"
hero: "../../assets/images/mods/mod-healthcolors-cover.jpg"
heroAlt: "Aura/Tint HealthColor mod hero image"
---

## Aura/Tint HealthColor Overview

Aura/Tint HealthColor is a Roll20 API script that provides instant visual feedback about token health without requiring players or Game Masters to open character sheets or inspect token bars.

As combat progresses, token colours automatically update based on remaining hit points, making it easy to identify which creatures are healthy, wounded, bloodied, or near defeat at a glance.

The script can apply these indicators using either coloured auras or full-token tint overlays, allowing groups to choose the visual style that best suits their table.

Separate configuration options are available for player characters and NPCs, allowing each group to be managed independently.

Originally created by DXWarlock and later updated by Surok, the project is now actively maintained and modernised by MidNiteShadow7.

---

## Key Features

### Health-Based Colour Indicators

Tokens automatically transition through a colour gradient based on their current health percentage.

Two built-in palettes are available:

- Default palette (Green → Yellow → Red)
- Colourblind-friendly palette (Cyan → Orange → Magenta)

Dead or incapacitated tokens can be automatically displayed using a dedicated dead-state colour.

### Aura or Tint Modes

Choose how health information is displayed:

- Aura Mode uses Roll20's Aura 1 ring.
- Tint Mode applies colour directly to the token artwork.
- Aura 2 remains available for spell effects, light sources, range indicators, or other game mechanics.

### Automated Status Tracking

Aura/Tint HealthColor can automatically:

- Apply a dead status marker at 0 HP.
- Remove the marker when health is restored.
- Play optional death sounds through the Roll20 jukebox.
- Update visuals immediately when health changes.

It can also automatically apply and remove status indicators, update token visuals, and trigger optional audio cues as creatures enter or leave critical health states.

### Damage and Healing Effects

Optional particle effects provide additional visual feedback when a creature takes damage or receives healing.

Effects are fully configurable and support:

- Custom damage colours
- Custom healing colours
- Roll20 custom FX integration
- Per-character effect overrides

### PC and NPC Controls

Player characters and NPCs can be configured independently.

Separate settings are available for:

- Health visibility thresholds
- Aura behaviour
- Dead marker handling
- Nameplate visibility

### Accessibility Features

The script includes a dedicated colourblind palette and configurable thresholds to improve readability for a wider range of players and visual preferences.

---

## Why Use It?

During large encounters, it can be difficult to track which creatures are close to defeat without repeatedly checking token bars or character sheets.

Aura/Tint HealthColor turns health information into a visual language that can be understood instantly across the battlefield, reducing bookkeeping and helping combat flow more smoothly.

For Game Masters running large groups of enemies, the script provides immediate battlefield awareness while still allowing complete control over how much information is visible to players.

The modern v2.x series has been extensively refactored to improve reliability, compatibility with other Roll20 API scripts, and long-term maintainability.

---

## Compatibility

Aura/Tint HealthColor is designed for Roll20 API games and is compatible with Jumpgate.

The script also works alongside many other popular Roll20 API scripts and includes special handling for health changes made by external automation tools, helping ensure token visuals remain synchronised regardless of how health values are updated.
