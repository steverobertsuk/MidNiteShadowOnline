---
title: 'Aura/Tint HealthColors'
summary: 'Automatically colourises tokens based on their remaining health, providing instant visual feedback through auras, tint overlays and effects.'
order: 1
category: 'Visual feedback'
postCategory: 'healthcolors'
status: 'Active'
versions:
  - label: 'One-Click'
    version: 'v2.3.0'
    url: ''
  - label: 'GitHub'
    version: 'v2.4.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/tree/HealthColors-v2.4.0/HealthColors'
  - label: 'Direct Download'
    version: 'v2.4.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/releases/download/HealthColors-v2.4.0/HealthColors_v2.4.0.zip'
lastUpdated: 2026-10-25
compatibility:
  - label: 'Jumpgate'
    url: 'https://pages.roll20.net/redesign'
requirements:
  - label: 'Roll20 Pro'
    url: ''
  - label: 'Roll20 Elite'
    url: ''
credits:
  - name: 'MidNiteShadow7'
    url: 'https://app.roll20.net/users/16506286/midniteshadow7'
  - name: 'Surok'
    url: 'https://app.roll20.net/users/335573/surok'
  - name: 'DXWarlock'
    url: 'https://app.roll20.net/users/262130/dxwarlock'
featuredLinks:
  - label: 'GitHub'
    url: 'https://github.com/Roll20/roll20-api-scripts/tree/master/HealthColors'
  - label: 'Issues'
    url: 'https://github.com/users/steverobertsuk/projects/2/views/1'
  - label: 'Changelog'
    url: 'https://github.com/Roll20/roll20-api-scripts/blob/master/HealthColors/CHANGELOG.md'
links:
  - label: 'Roll20 Forum Post'
    url: 'https://app.roll20.net/forum/post/12719378/aura-slash-tint-healthcolors-api-v2-dot-0-0'
indexMedia: '../../assets/images/mods/mod-healthcolors-cover.jpg'
indexMediaAlt: 'Aura/Tint HealthColor mod cover image'
hero: '../../assets/images/mods/mod-healthcolors-cover.jpg'
heroAlt: 'Aura/Tint HealthColor mod hero image'
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

### Aura Shapes and Appearance

From v2.4.0 the Aura 1 health ring supports all six Roll20 aura shapes: Circle, Square, Hex, Circle Border, Square Border and Hex Border.

- **Auto** (the default for new games) uses Hex on hex-grid maps once the ring is at least one grid cell wide, and Circle otherwise.
- **Auto Border** does the same with the outline shapes.
- **Keep** never changes a token's shape, so auras set by hand are left alone. Games upgrading from an older version keep their existing shapes.
- **Opacity** (`!aura opacity`) makes the ring see-through, from 1 to 100 %.
- **Player lock** (`!aura lock`, on by default) stops controlling players editing Aura 1 while HealthColors manages it.

The health value can be read from any token bar, including bar 4 for games that use four bars.

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

- Custom damage and healing colours
- Roll20 built-in effects by name (for example `glow-holy` or `explode-blood`)
- Custom FX from your campaign's Effects menu, listed with one-click set buttons by `!aura listfx`
- Per-character overrides through the `USEBLOOD` (damage) and `USEHEAL` (healing) attributes

### PC and NPC Controls

Player characters and NPCs can be configured independently.

Separate settings are available for:

- Health visibility thresholds
- Aura behaviour
- Dead marker handling
- Nameplate visibility

### GM Menu and Help Handout

The `!aura` menu groups every setting into clear sections, with buttons to update the selected tokens, refresh every token or post a read-only copy of the settings to chat.

A GM-only **HealthColors — Help & Reference** handout in the Journal lists every command, the aura shapes, colour palettes, character attributes, optional integrations, tips and the game's current settings. It is kept up to date automatically, and `!aura handout` rebuilds it on demand.

### One-Click Install Options

Every setting can be chosen from the Roll20 One-Click install dialog. Options are applied when the mod is installed and whenever the dialog is saved again, so changes made in game are not overwritten on every restart.

### Accessibility Features

The script includes a dedicated colourblind palette and configurable thresholds to improve readability for a wider range of players and visual preferences.

### Death Save Integration

Since version 2.2.0, HealthColors supports character death-state workflows while keeping existing campaigns stable during upgrades.

- **Death Save Integration (Optional):** An off-by-default mode that separates PC states at 0 HP into **dying**, **stable**, and **dead**.
- **Dying state marker:** Uses a configurable marker (default: `skull`) for player characters at 0 HP who are still making death saves.
- **Stable state marker:** Applies a configurable green marker when a player character reaches 3 death-save successes.
- **Dead state marker:** Applies the standard Red X when a player character reaches 3 death-save failures.
- **NPC behaviour unchanged:** NPCs are not affected by death-save integration and continue using the normal dead Red X at 0 HP.

Death saves are tracked automatically for supported character sheets, so checked boxes and direct death-save value updates immediately refresh token markers without macros or manual sync actions.

Configuration is available in both the interactive GM menu and read-only settings output:

- `!aura` interactive GM menu
- `!aura settings` snapshot output
- `!aura deathsaves` command group for enabling, watch controls, and marker configuration

To prevent silent misconfiguration, marker validation now warns the GM when a configured `dying` or `stable` marker tag does not exist in the active campaign marker set.

Live death-save syncing for D&D 2024 (Beacon) sheets needs Roll20's Mod Script Sandbox v1.5. HealthColors detects the sandbox version and only shows a note when the game is on v1.0.

Upgrade handling has also been improved: campaigns migrating from the interim PC dying-marker build now keep existing dying-marker settings instead of resetting them.

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

- **TokenMod** and **SmartAoE**: health changes made by these mods are picked up straight away. When SmartAoE marks a token with its own 0 HP marker, HealthColors leaves that marker in place and adds no dead marker of its own.
- **Attribute scripts** such as AlterBars and ChatSetAttr: changes to linked health attributes are picked up through the attribute link.
