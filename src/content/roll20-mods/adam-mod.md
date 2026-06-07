---
title: "A.D.A.M."
summary: "Provides directional movement, token facing, and animation states for creating more dynamic and immersive encounters."
order: 6
category: "Token control"
postCategory: "adam"
status: "In Development"
versions:
  - label: "One-Click"
    version: "Unavailable"
    url: ""
  - label: "GitHub"
    version: "Unavailable"
    # url: "https://github.com/#"
  - label: "Development Download"
    version: "v1.0.0.alpha.1"
    url: "https://www.dropbox.com/scl/fi/rbaq9a4lyg2e1te7kayr2/ADAM_v1.0.0.alpha.1.zip?rlkey=o0gwj91m98zgzkher2xd01zyi&dl=0"
lastUpdated: 2026-06-07
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
  # - label: "GitHub"
  #   url: "#"
  - label: "Issues"
    url: "https://github.com/users/steverobertsuk/projects/7"
  # - label: "Changelog"
  #   url: "#"
# links:
#   - label: "Roll20 Forum Post"
#     url: "#"
indexMedia: "../../assets/images/mods/mod-adam-cover.jpg"
indexMediaAlt: "Automated Direction and Animation Manager mod cover image"
hero: "../../assets/images/mods/mod-adam-cover.jpg"
heroAlt: "Automated Direction and Animation Manager mod hero image"
---

## Automated Direction & Animation Manager Overview

A.D.A.M. (Automated Direction and Animation Manager) is a Roll20 Mod designed to bring greater movement awareness and character expression to the virtual tabletop.

Rather than simply dragging tokens across the map, A.D.A.M. allows Game Masters and players to control how creatures move, which direction they face, and what visual state they present to the rest of the table.

Whether guiding a stealthy rogue through a dungeon corridor, turning a dragon to face its attackers, or placing a character into a combat-ready stance, A.D.A.M. helps transform static tokens into more dynamic participants within the encounter.

---

## Key Features

### Directional Movement

Move selected tokens using simple directional commands.

Supported movement includes:

* North
* North-East
* East
* South-East
* South
* South-West
* West
* North-West

Movement respects configurable distances, making it suitable for a variety of grid scales and game systems.

### Automatic Facing

Tokens can automatically rotate to match the direction in which they move.

This helps maintain battlefield clarity and provides an additional visual cue regarding a creature's intentions and awareness.

### Animation States

A.D.A.M. supports multiple animation and behavioural states, allowing tokens to better reflect the actions taking place during play.

Available states include:

* Idle
* Combat
* Walk
* Dash
* Sneak
* Rage
* Spellcasting
* Help

These states can be applied directly or triggered through higher-level actions.

### Profile System

Create reusable profiles containing movement and animation preferences.

Profiles allow Game Masters to establish consistent behaviours across different token types and can simplify setup for frequently used creatures.

Configurable permissions determine whether profiles may be created by:

* Game Masters only.
* GM-approved users.
* All users.

### Interactive Menus

A.D.A.M. provides menu-driven controls within Roll20 chat, allowing users to access movement and state commands without memorising complex syntax.

The interface is designed to encourage quick access during active play.

### Macro Integration

Installable macros provide rapid access to common actions and reduce the amount of manual command entry required during encounters.

This allows players and Game Masters to incorporate A.D.A.M. into their existing Roll20 workflows.

### Localisation Support

A.D.A.M. includes support for more than twenty languages.

Menus, help text, chat output, and configuration interfaces can all be presented in the preferred language of the user.

### Easter Eggs

While A.D.A.M. is designed as a serious utility, it also includes a sense of humour! Let me know if you discover any hidden surprises while using the mod. I won't spoil them here, but I hope they bring a smile to your face during play.

---

## Why Use It?

Tokens are often treated as static markers representing a character's location.

A.D.A.M. expands that role by introducing direction, posture, and intent into everyday gameplay.

A rogue can adopt a sneaking stance before infiltrating an enemy camp. A warrior can turn to face a charging foe. A spellcaster can visibly enter a spellcasting state as magic fills the battlefield.

These small visual enhancements help make encounters feel more alive while providing useful tactical information to everyone at the table.

---

## Development Notes

A.D.A.M. has been developed using a modular architecture and modern JavaScript development practices.

The project includes:

* Extensive localisation support.
* Modular source organisation.
* Automated build processes.
* Detailed testing procedures.
* Persistent configuration management.
* Robust command validation.

The project continues to evolve through practical Roll20 usage and community feedback.

---

## Compatibility

A.D.A.M. is designed for Roll20 API games and is fully compatible with Jumpgate.

The script has been developed to operate safely alongside other API scripts, allowing it to integrate into existing Roll20 environments without disrupting established workflows.
