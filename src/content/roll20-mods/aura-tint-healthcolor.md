---
title: 'Aura/Tint HealthColor'
summary: 'Automatically colourises Roll20 tokens based on their remaining health, providing instant visual feedback through auras, tint overlays, particle effects and status automation.'
category: 'Visual feedback'
status: 'Active'
version: '2.x'
lastUpdated: 2026-06-01
maintainer:
  - name: 'MidNiteShadow7'
    url: '#'
order: 3
featuredLinks:
  - label: 'GitHub'
    url: '#'
  - label: 'Issues'
    url: '#'
  - label: 'Changelog'
    url: '#'
links:
  - label: 'Roll20 Forum Post'
    url: '#'
indexMedia: '../../assets/images/mods/HealthColor_Cover.jpg'
indexMediaAlt: 'Aura/Tint HealthColor mod cover image'
---

## Aura/Tint HealthColor Overview

Aura/Tint HealthColor is a Roll20 API script that provides instant visual feedback about token health without requiring players or Game Masters to open character sheets or inspect token bars.

As combat progresses, token colours automatically update based on remaining hit points, making it easy to identify which creatures are healthy, wounded, bloodied, or near defeat at a glance.

The script can apply these indicators using either coloured auras or full-token tint overlays, allowing groups to choose the visual style that best suits their table.

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

HealthColor can automatically:

- Apply a dead status marker at 0 HP.
- Remove the marker when health is restored.
- Play optional death sounds through the Roll20 jukebox.
- Update visuals immediately when health changes.

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

### Accessibility Focus

The script includes a dedicated colourblind palette and configurable thresholds to improve readability for a wider range of players and visual preferences.

---

## Why Use It?

During large encounters, it can be difficult to track which creatures are close to defeat without repeatedly checking token bars or character sheets.

HealthColor turns health information into a visual language that can be understood instantly across the battlefield, reducing bookkeeping and helping combat flow more smoothly.

For Game Masters running large groups of enemies, the script provides immediate battlefield awareness while still allowing complete control over how much information is visible to players.

---

## Recent Improvements

The modern v2.x series includes significant refactoring and new functionality, including:

- Colourblind-friendly health palettes
- Improved particle effect handling
- Better compatibility with other Roll20 API scripts
- Automatic handling of HP changes made by scripts such as AlterBars
- Enhanced validation and configuration management
- Expanded token refresh and synchronisation tools

---

## Download

The latest version is available from the Roll20 API Scripts repository and the project's GitHub repository.

See the README and changelog for full installation instructions and release history.
