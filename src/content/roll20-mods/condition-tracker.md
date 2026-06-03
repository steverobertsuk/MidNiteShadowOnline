---
title: "Condition Tracker"
summary: "Advanced condition, effect, and status tracking for Roll20 campaigns with Turn Tracker integration, custom effects, saved conditions, localisation, and support for dozens of game systems."
order: 1
category: "Combat automation"
postCategory: "condition-tracker"
status: "In development"
versions:
  - label: "One-Click"
    version: "v1.0.0"
    url: ""
  - label: "GitHub"
    version: "v1.0.0"
    url: "https://github.com/#"
lastUpdated: 2026-06-01
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
links:
  - label: "Roll20 Forum Post"
    url: "#"
indexMedia: "../../assets/images/mods/ConditionTracker_Cover.jpg"
indexMediaAlt: "Condition Tracker mod cover image"
---

## Condition Tracker Overview

Keeping track of conditions, spell effects, debuffs, buffs, and other temporary status effects can quickly become one of the most time-consuming parts of running combat in Roll20.

Condition Tracker was created to provide a structured, visual, and reliable way to manage those effects directly within the Roll20 Turn Tracker while remaining flexible enough to support a wide variety of tabletop roleplaying systems.

The mod allows Game Masters to apply conditions to tokens, automatically track durations, manage custom effects, generate reports, store long-term conditions, and maintain a clear overview of combat without relying on handwritten notes or external tools.

Whether you are running Dungeons & Dragons, Pathfinder, Starfinder, or one of many other supported systems, Condition Tracker helps keep important status information visible and organised.

---

## Key Features

### Condition Tracking

Apply standard conditions such as Grappled, Restrained, Prone, Poisoned, Stunned, Charmed, Frightened, Paralysed, Petrified, Unconscious, and many others.

Each condition creates its own dedicated Turn Tracker entry, making it easy to see exactly which effects are currently active and who applied them.

### Custom Effects

Not every effect fits neatly into a predefined condition.

Condition Tracker supports custom effect types including:

* Spell effects
* Abilities
* Advantage
* Disadvantage
* Custom effects and homebrew mechanics

This makes it ideal for tracking abilities such as Hunter's Mark, Hex, Booming Blade, class features, environmental hazards, and campaign-specific mechanics.

### Duration Management

Track effects that:

* Last until manually removed.
* Expire at the end of a source creature's turn.
* Expire at the end of a target creature's turn.
* Last for a specified number of rounds.

Durations are updated automatically as combat progresses.

### Saved Effects

Some effects exist outside normal combat encounters.

Saved Effects allow Game Masters to record persistent conditions such as:

* Diseases
* Curses
* Long-term injuries
* Hidden debuffs
* Story-driven status effects

Effects can be stored indefinitely and later promoted into active combat tracking when required.

Visibility settings allow effects to be:

* Fully visible to players.
* Partially hidden from players.
* Completely GM-only.

### Multi-Target Support

Apply a condition to multiple selected tokens at the same time.

This is particularly useful for:

* Area-of-effect spells
* Environmental hazards
* Group buffs
* Mass debuffs

### Token Reporting

Generate detailed reports showing:

* Conditions currently affecting a token.
* Conditions applied by that token.
* Active and saved effects.

This gives Game Masters a quick overview without having to manually search the Turn Tracker.

### Automatic Marker Management

Condition Tracker can automatically apply and remove Roll20 status markers.

Markers remain synchronised with active effects and are only removed when no longer required, preventing conflicts when multiple conditions share the same marker.

### Actor Classification

The built-in classification system automatically identifies:

* Player characters
* Non-player characters
* Tokens that should be ignored

This helps keep menus clean and reduces accidental application of conditions to scenery, spell templates, and utility tokens.

---

## Supported Game Systems

Condition Tracker includes support for a wide range of tabletop RPG systems, including:

* Dungeons & Dragons 5th Edition
* Dungeons & Dragons 4th Edition
* Dungeons & Dragons 3.5
* Pathfinder First Edition
* Pathfinder Second Edition
* Starfinder
* Savage Worlds
* Traveller
* Call of Cthulhu
* Delta Green
* Cyberpunk RED
* Alien RPG
* Vampire: The Masquerade
* Werewolf: The Apocalypse
* and many more.

Game-specific condition lists and marker defaults can be selected through the configuration menu.

---

## Internationalisation

Condition Tracker supports localisation for more than twenty languages.

Chat messages, menus, help content, handouts, and configuration screens are translated, allowing Game Masters and players worldwide to use the mod in their preferred language.

Right-to-left language support is also included for Hebrew.

---

## Quality of Life Features

The mod includes numerous quality-of-life improvements designed to make campaign management easier:

* Interactive setup wizard
* Guided condition application workflow
* Automatic macro installation
* Built-in help handout generation
* Duplicate condition prevention
* Token deletion cleanup
* Health-based condition cleanup prompts
* Configurable status markers
* Localised chat cards and menus

These features reduce administrative overhead and allow Game Masters to focus on running the game rather than maintaining bookkeeping.

---

## Development Notes

Condition Tracker is developed using a modular source architecture and modern JavaScript tooling. The project includes automated builds, extensive testing procedures, localisation support, and versioned releases to simplify future maintenance and community contributions.

The project continues to evolve with new features, additional system support, localisation improvements, and quality-of-life enhancements based on real-world Roll20 campaign usage.

---

## Why I Use It

Combat encounters often involve far more than simply tracking hit points.

Modern tabletop RPGs frequently include concentration effects, temporary conditions, spell interactions, ongoing damage, environmental hazards, and long-term story effects. Condition Tracker provides a central place to manage all of that information while keeping the Roll20 Turn Tracker organised and easy to read.

The addition of Saved Effects has made it particularly useful for campaign management, allowing important character conditions to persist between sessions without cluttering active combat encounters.

For Game Masters running longer campaigns, it has become one of the most valuable quality-of-life tools in my Roll20 toolkit.
