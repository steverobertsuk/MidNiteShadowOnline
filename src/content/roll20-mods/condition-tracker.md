---
title: "Condition Tracker"
summary: "Tracks active conditions, durations, and turn-by-turn cleanup so status effects are easier to manage in live play."
category: "Combat automation"
postCategory: "condition-tracker"
status: "In development"
order: 1
versions: []
lastUpdated:
compatibility:
  - label: "Jumpgate"
    url: ""
requirements:
  - label: "Roll20 Pro"
    url: "/"
credits:
  - name: "MidNiteShadow7"
    url: ""
featuredLinks:
  - label: "GitHub"
    url: "#"
  - label: "Issues"
    url: "#"
  - label: "Changelog"
    url: "#"
links: []
indexMedia: "../../assets/images/mods/ConditionTracker_Cover.jpg"
indexMediaAlt: "Condition Tracker mod cover image"
---

## Condition Tracker Overview

Condition Tracker is a Roll20 API script designed to reduce the bookkeeping load around active combat conditions, timed effects, and turn-by-turn cleanup.

It is intended for tables that regularly manage effects such as stunned, poisoned, restrained, blinded, frightened, or custom table-specific statuses, where remembering who is affected and when each effect ends can become difficult during live play.

The goal is to keep condition state visible, predictable, and easier to maintain as initiative advances.

---

## Key Features

### Token-Linked Condition Tracking

Conditions are associated directly with affected tokens, helping Game Masters see which creatures are affected without relying on separate notes or memory.

### Duration Management

Condition Tracker is designed to support timed effects with optional round counters, making it easier to track conditions that expire after a set number of turns or rounds.

### Turn Progression Support

The script can hook into turn progression so timed effects can decrement automatically as combat advances.

### GM-Facing Commands

Game Masters can add, remove, inspect, and clear active effects through chat commands, keeping condition management close to normal Roll20 play.

### Custom Table Support

Condition Tracker is intended to support both common rulebook conditions and custom effects created for a specific campaign, encounter, monster, or house rule.

---

## Why Use It?

Combat conditions are easy to forget, especially in larger encounters where several creatures may be affected by overlapping spells, abilities, or environmental effects.

Condition Tracker provides a structured way to manage those effects so conditions remain visible, durations remain consistent, and clean-up is less likely to be missed.

It is designed to support smoother combat flow while reducing the amount of manual tracking required from the Game Master.

---

## Compatibility

Condition Tracker is designed for Roll20 API games and is intended to work alongside other combat and token-management scripts.
