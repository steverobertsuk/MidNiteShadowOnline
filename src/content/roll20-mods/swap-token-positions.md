---
title: 'Swap Token Positions'
summary: "Moves two selected tokens into each other's spaces without manual drag-and-drop cleanup or layer mistakes."
order: 4
category: 'Token movement'
postCategory: 'swap-token-positions'
status: 'Active'
versions:
  - label: 'One-Click'
    version: 'v2.1.0'
    url: ''
  - label: 'GitHub'
    version: 'v2.1.0'
    url: 'https://github.com/Roll20/roll20-api-scripts/tree/master/SwapTokenPositions/2.1.0'
lastUpdated: 2026-06-14
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
featuredLinks:
  - label: 'GitHub'
    url: 'https://github.com/Roll20/roll20-api-scripts/tree/master/SwapTokenPositions'
  - label: 'Issues'
    url: 'https://github.com/users/steverobertsuk/projects/4/views/1'
  - label: 'Changelog'
    url: 'https://github.com/Roll20/roll20-api-scripts/blob/master/SwapTokenPositions/CHANGELOG.md'
links:
  - label: 'Roll20 Forum Post'
    url: '#'
indexMedia: '../../assets/images/mods/mod-swaptokenpositions-cover.jpg'
indexMediaAlt: 'Swap Token Positions mod cover image'
hero: '../../assets/images/mods/mod-swaptokenpositions-cover.jpg'
heroAlt: 'Swap Token Positions mod hero image'
---

## Swap Token Positions Overview

Swap Token Positions is a Roll20 Mod that allows two tokens to instantly exchange places on the battlefield.

What started as a simple utility script has evolved into a flexible movement and teleportation system capable of creating everything from magical portal effects and shadow-step abilities to Star Trek-style transporter animations and cinematic combat abilities.

Whether used as a player ability, a monster power, a puzzle mechanic, or a Game Master tool, the script provides a fast and visually engaging way to reposition creatures during play.

---

## Key Features

### Instant Token Swapping

At its core, Swap Token Positions exchanges the location of two tokens on the same Roll20 page.

The process is fully automated, allowing players and Game Masters to reposition creatures without manually dragging tokens around the map.

This makes it ideal for:

- Teleportation abilities
- Tactical movement powers
- Magical item effects
- Trap and puzzle mechanics
- NPC and monster abilities
- Narrative scene transitions

### Cinematic Teleportation Effects

Version 2 introduced a completely redesigned animation system built around a staged movement pipeline.

Each swap can be customised with:

- Origin effects
- Travel effects
- Destination effects
- Adjustable timing controls
- Visibility options during transit

The result is a movement system that can feel dramatically different depending on the effect being used.

A teleportation spell can appear as an arcane portal, while a monster ability might manifest as smoke, fire, lightning, or shadow magic.

### Built-In Presets

Several ready-to-use presets are included for common use cases:

- Portal
- Lightning
- Shadow
- Fire
- Magic
- Transport
- Instant

These presets allow Game Masters to quickly create distinctive visual styles without configuring individual effects.

### Direct Token Targeting

In addition to traditional token selection, the mod can target tokens directly by name or token ID.

This makes it particularly useful for:

- Character abilities
- Macro-driven actions
- Automated encounters
- Custom API integrations

Game Masters can also control who has access to this functionality, allowing it to remain a GM-only tool or be shared with selected players.

### Persistent Configuration

Global settings can be saved between game sessions, ensuring preferred visual effects and timing options remain available without requiring repeated setup.

This allows each campaign to establish its own visual identity and teleportation effect style.

---

## Why Use It?

Token movement is a common part of many tabletop RPG systems, but manually repositioning creatures can interrupt the flow of combat and reduce the impact of special abilities.

Swap Token Positions turns repositioning into a visual event.

A wizard can open a portal and exchange places with an ally. A rogue can disappear in a cloud of shadow and reappear elsewhere. A powerful monster can blink across the battlefield in a flash of lightning.

By combining movement with visual effects, the script helps transform a simple token swap into a memorable part of the encounter.

---

## Development

Swap Token Positions was developed and is actively maintained by MidNiteShadow7.

The modern v2.x series introduced a complete internal redesign, adding a configurable animation pipeline, visual presets, persistent settings, enhanced validation, and support for direct token targeting while maintaining compatibility with earlier versions of the script.

The project continues to focus on reliability, ease of use, and creating visually satisfying movement effects for Roll20 campaigns.

---

## Compatibility

Swap Token Positions is designed for Roll20 API games and is fully compatible with Jumpgate.

The script has been built to operate safely alongside other Roll20 API scripts, with extensive validation and recovery handling to ensure token swaps complete reliably even during complex encounters or heavily automated games.
