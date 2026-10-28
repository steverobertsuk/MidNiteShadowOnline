---
title: 'SmartAoE'
summary: 'Draw areas of effect at any angle on gridded maps, resolve exactly which squares and creatures are inside, then roll saves, apply damage and add markers automatically.'
order: 5
category: 'Combat automation'
postCategory: 'smartaoe'
status: 'Active'
versions:
  - label: 'One-Click'
    version: 'v0.30'
    url: ''
  - label: 'GitHub'
    version: 'v1.0.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/tree/SmartAoE-v1.0.0/SmartAoE'
  - label: 'Direct Download'
    version: 'v1.0.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/releases/download/SmartAoE-v1.0.0/SmartAoE_v1.0.0.zip'
lastUpdated: 2026-10-28
compatibility:
  - label: 'Jumpgate'
    url: 'https://pages.roll20.net/redesign'
  - label: 'D&D 5e 2014 sheet'
    url: ''
  - label: 'D&D 5e 2024 sheet'
    url: ''
requirements:
  - label: 'Roll20 Pro'
    url: ''
  - label: 'Roll20 Elite'
    url: ''
  - label: 'libInline'
    url: 'https://github.com/Roll20/roll20-api-scripts/tree/master/libInline'
credits:
  - name: 'MidNiteShadow7'
    url: 'https://app.roll20.net/users/16506286/midniteshadow7'
  - name: 'David M.'
    url: 'https://app.roll20.net/users/3987469'
featuredLinks:
  - label: 'GitHub'
    url: 'https://github.com/Roll20/roll20-api-scripts/tree/master/SmartAoE'
  - label: 'Changelog'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/blob/SmartAoE-v1.0.0/SmartAoE/CHANGELOG.md'
  - label: 'Wiki'
    url: 'https://wiki.roll20.net/SmartAoE'
links:
  - label: 'Roll20 Forum Post'
    url: 'https://app.roll20.net/forum/post/12842711/script-update-smartaoe'
indexMedia: '../../assets/images/mods/mod-smartaoe-cover.jpg'
indexMediaAlt: 'SmartAoE mod cover image'
hero: '../../assets/images/mods/mod-smartaoe-hero.jpg'
heroAlt: 'SmartAoE mod hero image'
---

## SmartAoE Overview

Anyone who has dropped a cone or circle template onto a Roll20 map knows the argument that follows: does the square that is only _barely_ covered count? Pre-made grid templates help, but they usually limit you to 90° or 45° angles.

SmartAoE solves both problems. Place a control token, aim it at any angle, and SmartAoE decides which grid squares and which creatures are inside the area using fixed coverage thresholds, so every AoE is ruled the same way, every time.

It can be used simply to draw areas of effect, or it can go much further: rolling saving throws for every creature caught in the blast, applying damage with resistances, vulnerabilities and immunities, adding condition markers and posting a results card to chat. Effects can be applied straight away, or later from buttons on the chat card.

SmartAoE was created by **David M.** (djmoorehead), and version 1.0.0 is a maintenance release by me, MidNiteShadow7, that fixes long-standing bugs reported on the Roll20 forums, improves Jumpgate support, adds D&D 2024 sheet support and tidies up the code, with no breaking changes to existing macros.

---

## Key Features

### Shapes at Any Angle

SmartAoE supports every common area of effect:

- Lines and walls
- Squares and circles, attached to the caster or floating freely
- Cones at any angle, plus the Pathfinder cone (`PFcone`) and the 5e triangular cone (`5econe`)
- Pathfinder-style circles (`PFcircle`)

Move the control token to aim the area. Cones can also rotate their origin around the caster's corners and faces with the **CW** and **CCW** token actions, which is ideal for large creatures.

### Consistent Coverage Rules

A grid square counts as inside the area when at least a set fraction of it is covered (`--minGridArea`), and a token counts when a set fraction of it is inside the area (`--minTokArea`). Decide the rule once, and SmartAoE applies it consistently.

### Saving Throws and Damage

- Per-target saving throws, with built-in shorthands for 5e (`5eDEX`, `5eWIS` and so on) or any custom formula.
- Two damage formulas, each with its own damage type.
- A rule for successful saves (half damage by default).
- Resistance, vulnerability and immunity checks against each target's attributes.
- 5e Magic Resistance is detected automatically on the 2014 sheet, and the save is rolled with advantage.
- Negative damage heals, filling each bar to its maximum before moving on to the next.

### Condition Markers

Add status markers to targets that pass or fail their save, to tokens that drop to 0 HP, or to the caster. Tokens at 0 HP can also be removed from the map automatically.

### Apply Now or Later

Apply damage and markers automatically as soon as the AoE is triggered, or review the results first and apply them per target from the buttons on the chat card.

### Ready to Use Straight Away

On first start, SmartAoE sets everything up for you:

- An **AoEControlToken** character with a reticle token and dozens of ready-made abilities for squares, circles, cones, lines and walls in common sizes.
- Token actions for **CW**, **CCW**, **Trigger-ALL** and **Trigger-Target**.
- An **AoEGenerator** GM macro that whispers a chat menu of those abilities.
- A GM-only **SmartAoE — Help & Reference** handout in the Journal, covering every command, every parameter, example macros and tips. It reads well in both Roll20 light and dark mode, and `!smarthelp` rebuilds it on demand.

### Extras

- Particle FX on every affected square
- Jukebox sounds when an AoE is spawned, moved, triggered or deleted
- Turn Tracker entries, optionally linked to the control token
- Resource costs, such as spell slots on either sheet, that block the AoE if the caster can't pay
- Whisper options and a fully styleable results card
- `!smartquery` to trigger only the AoEs covering a token, for start-of-turn and end-of-turn effects

### Works With Other Mods

SmartAoE exposes `SmartAoE.ObserveTokenChange` so other mods can react to the token changes it makes. **Aura/Tint HealthColors** uses this to update health colours and dead markers as soon as SmartAoE applies area damage or healing, and respects SmartAoE's 0 HP markers.

---

## What's New in Version 1.0.0

Version 1.0.0 brings SmartAoE up to date after two and a half years without a release:

- **Jumpgate**: clicking an AoE square instead of the control token now triggers the AoE, rather than failing with an error.
- **Trigger-Target** no longer breaks when an AoE on the page refers to a deleted square.
- **`--damageFormula2`** now works with plain numbers, rolls and every combination of the two.
- **Inline roll maths** such as `[[2*13d6]]` is rolled correctly.
- **`--removeAtZero`** now removes tokens, which had been broken since version 0.25.
- **Healing** cascades correctly across several bars, and the `(@Max)` note now appears.
- **Status markers** are added and removed reliably, including markers with number badges.
- **Edge squares** of off-centre AoEs and circles smaller than one square are no longer missed.
- **D&D 2024 sheets**: saves include the target's sheet bonus, resistances and immunities are applied, and spell slots are spent.
- **`--resource` limits** let a resource count up to a limit, such as the 2024 sheet's spell slots.
- **Commands with nothing selected** now whisper what to do instead of throwing errors.
- The new **help handout** and the `SmartAoE.ZeroHPMarkers()` function for other mods.
- The code has been refactored and about 1,400 lines of duplicate and dead code removed, with every shape calculation checked to give the same results as before.

The full list is in the changelog.

---

## Compatibility

SmartAoE's saves, damage and markers work in Jumpgate campaigns. Jumpgate has a known layering problem, which Roll20 needs to fix, where the AoE squares can sit on top of the control token and the tokens inside the area. Two workarounds help:

- Add `--aoeLayer|map` to your `!smartaoe` macros so the squares are drawn below all tokens.
- Select one of the AoE's squares and trigger it: from version 1.0.0, a selected square triggers its own AoE.

SmartAoE works with both the 2014 and 2024 D&D 5th Edition sheets. On the 2024 sheet, use the Mod Script Sandbox v1.5 (the current default) and give spell-slot costs a limit, for example `--resource|lvl3_slots_expended, 1, Level 3 slots, lvl3_slots_total`, because that sheet counts the slots you've used. 5e Magic Resistance is only detected on the 2014 sheet. Custom formulas and attribute options also make SmartAoE usable with many other game systems.

SmartAoE requires the **libInline** mod, which the Roll20 One-Click installer adds automatically.

---

## Why Use It?

Areas of effect are some of the most dramatic moments in combat, and some of the slowest to resolve: working out who is caught, rolling a save for each creature, halving damage, checking resistances and updating every token.

SmartAoE turns all of that into a single click. The table sees the area drawn on the map, everyone agrees on who is inside, and the results card shows each save and the damage dealt. The GM spends less time on bookkeeping and more time describing the fireball.
