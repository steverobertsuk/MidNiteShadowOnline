---
title: 'Concentration'
summary: 'Keeps concentration effects visible and easier to maintain, especially when damage checks and linked spell effects need to stay in sync.'
order: 5
category: 'Spell support'
postCategory: 'concentration'
status: 'Active'
versions:
  - label: 'One-Click'
    version: 'v1.0.0'
    url: ''
  - label: 'GitHub'
    version: 'v1.0.0'
    url: 'https://github.com/Roll20/roll20-api-scripts/tree/master/Concentration/1.0.0'
lastUpdated: 2026-05-23
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
    url: 'https://github.com/Roll20/roll20-api-scripts/tree/master/Concentration'
  - label: 'Issues'
    url: 'https://github.com/users/steverobertsuk/projects/6/views/1'
  - label: 'Changelog'
    url: 'https://github.com/Roll20/roll20-api-scripts/blob/master/Concentration/CHANGELOG.md'
links:
  - label: 'v1 Release via Roll20 Forum Support Post'
    url: 'https://app.roll20.net/forum/post/12727019/concentration-mod-slash-api-spells-do-not-trigger-it-dnd-2024-sheet/?pageforid=12761476#post-12761476'
indexMedia: '../../assets/images/mods/mod-concentration-cover.jpg'
indexMediaAlt: 'Concentration mod cover image'
hero: '../../assets/images/mods/mod-concentration-cover.jpg'
heroAlt: 'Concentration mod hero image'
---

## Concentration Overview

Concentration is planned as a focused Roll20 API utility for tracking which creature is concentrating, what effect is tied to that state, and when that concentration chain should end.

It is intended to help Game Masters and players keep concentration visible during combat, especially when damage checks, spell effects, and linked token markers need to stay in sync.

The goal is to reduce missed concentration checks and make it easier to clear related effects when concentration breaks.

---

## Key Features

### Concentration Visibility

The script is intended to make concentrating tokens easier to identify at a glance, reducing the chance that active concentration effects are forgotten.

### Linked Effect Tracking

Concentration can record or display the effect associated with the concentrating creature, helping the table understand what is currently being maintained.

### Damage Check Prompts

When a concentrating creature takes damage, the script can surface a reminder that a concentration check may be required.

### One-Command Cleanup

When concentration ends, the script is intended to provide a simple way to clear the concentration state and any linked effect information.

### Beacon-Friendly Direction

The project is intended to work well with modern Roll20 character sheet and automation setups, including Beacon-compatible workflows where possible.

---

## Why Use It?

Concentration is one of the easiest combat mechanics to overlook during busy encounters.

This script aims to keep concentration visible, remind the table when checks are needed, and reduce the clean-up work required when a spell or effect ends.

---

## Compatibility

Concentration is planned for Roll20 API games and is intended to support modern Roll20 table setups.
