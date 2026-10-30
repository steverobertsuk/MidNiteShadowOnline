---
title: 'Customizable Roll Listener'
summary: 'Run chat commands automatically when a matching roll or message appears in chat: play a sound on a critical hit, roll on a fumble table on a natural 1, or react to a rollable table result.'
order: 5
category: 'Chat automation'
postCategory: 'customizable-roll-listener'
status: 'Active'
versions:
  - label: 'One-Click'
    version: 'v1.1'
    url: ''
  - label: 'GitHub'
    version: 'v2.0.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/tree/CustomizableRollListener-v2.0.0/Customizable-Roll-Listener'
  - label: 'Direct Download'
    version: 'v2.0.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/releases/download/CustomizableRollListener-v2.0.0/CRL_v2.0.0.zip'
lastUpdated: 2026-10-30
compatibility:
  - label: 'Jumpgate'
    url: 'https://pages.roll20.net/redesign'
  - label: 'Legacy'
    url: ''
  - label: 'D&D 5e 2014 sheet'
    url: ''
  - label: 'D&D 5e 2024 sheet'
    url: ''
requirements:
  - label: 'Roll20 Pro'
    url: ''
  - label: 'Roll20 Elite'
    url: ''
credits:
  - name: 'MidNiteShadow7'
    url: 'https://app.roll20.net/users/16506286/midniteshadow7'
  - name: 'Scott C.'
    url: 'https://app.roll20.net/users/459831'
  - name: 'The Aaron'
    url: 'https://app.roll20.net/users/104025'
featuredLinks:
  - label: 'GitHub'
    url: 'https://github.com/Roll20/roll20-api-scripts/tree/master/Customizable-Roll-Listener'
  - label: 'Changelog'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/blob/CustomizableRollListener-v2.0.0/Customizable-Roll-Listener/CHANGELOG.md'
indexMedia: '../../assets/images/mods/mod-customizablerolllistener-cover.jpg'
indexMediaAlt: 'Customizable Roll Listener mod cover image'
hero: '../../assets/images/mods/mod-customizablerolllistener-hero.jpg'
heroAlt: 'Customizable Roll Listener mod hero image'
---

## Customizable Roll Listener Overview

Some moments at the table deserve a reaction: a fanfare on a critical hit, a roll on the fumble table on a natural 1, a reminder when a character uses a certain attack. Doing those by hand means someone has to notice the roll and remember the macro, every time.

Customizable Roll Listener (CRL) does it for you. Each **listener** describes the rolls or messages it is waiting for and the chat commands to run when one appears. CRL reads roll templates, plain chat, emotes, `/roll` results, rollable table results, the output of other mods and the roll cards of Beacon sheets such as D&D 2024.

CRL was created by **Scott C.**, with crit and fumble fixes by **The Aaron** in version 1.1. Version 2.0.0 is a full rewrite by me, MidNiteShadow7, that fixes the "not parseable" errors and missed rolls reported on the Roll20 forums, adds Beacon sheet support and brings chat menus, an inspector and translations. Version 1 listeners are upgraded automatically.

---

## Key Features

### Quick to Set Up

Type `!crl` in chat, or open the **Command Deck** handout, and click **New Listener**. Each listener has a card with a button for every setting, so you never need to remember an option. The same listener can also be made in one line:

```
!crl new Crit Sound --results crit --commands !roll20AM --audio,play|Crit
```

### Filters for Every Kind of Roll

A listener triggers when every filter it has matches:

- **Roll templates**, such as `atkdmg` or `dnd-2024`
- **Message types**: general chat, emotes, whispers, `/roll` results, Beacon roll cards and more
- **Text**, as plain text or regular expressions, with `##` standing for an inline roll
- **Speakers and characters**, including the character named in the roll template
- **Players**
- **Roll results**: `crit`, `fumble`, `success` and `fail`
- **Totals and natural dice**, such as `>=15`, `<=2` or `19-20`
- **Which dice to check**, so damage dice rolling their highest face are not mistaken for crits

Dropped dice from advantage and disadvantage, and rerolled dice, are ignored.

### Placeholders

Commands can include details of the roll that triggered them: `${who}`, `${character}`, `${player}`, `${template}`, `${total}`, `${natural}`, `${result}`, `${expression}`, `${table}`, `${listener}`, and any roll template field with `${field:name}`.

```
!crl new Big Hit --templates atkdmg --text dmg1=## --total >=20 --commands /desc ${character} hits for ${total}!
```

### The Inspector

When a listener does not trigger, `!crl inspect` explains the next chat message: its type, template and fields, every roll with its dice, the text listeners search, and why each listener did or did not match. It is the quickest way to find a sheet's template and field names.

### Control and Safety

- Commands can be sent as CRL or as the character who rolled.
- Each listener has an on/off switch, a cooldown, an order and an option to stop later listeners.
- `!crl test` runs a listener's commands with sample values.
- CRL ignores its own messages, and a listener that keeps triggering itself is switched off instead of looping.
- Problems are whispered to the GM with a hint, and never crash the Mod sandbox.

### Listeners That Survive Copying

Each listener is an ability on the archived **Customizable Roll Listener** character, as in version 1, so its commands can be edited in the Journal. The listener's rules are stored in the ability too, so listeners come with the game when it is copied.

### Available in 24 Languages

Menus, messages and handouts are available in 24 languages, chosen with `!crl config language`. Commands and the values you type stay in English in every language.

### Works With Other Mods

CRL can run commands for any other mod, such as Roll20 Audio Master, ScriptCards or TokenMod. Other mods can also use CRL's API: `CRL.analyse`, `CRL.matches` and `CRL.onMatch`.

---

## What's New in Version 2.0.0

Version 2.0.0 is a full rewrite:

- **"Not parseable" errors** are gone. Version 1 crashed on rolls with a modifier, a group or a comment, then skipped the listener.
- **Beacon sheets** such as D&D 2024 are read.
- **Every inline roll** is found, not just the first ten.
- **Text** is plain text and ignores case, unless a listener asks for a regular expression.
- **Advantage, disadvantage and rerolls** no longer count dropped dice as crits or fumbles.
- **Rollable table results** and `/roll` results can be matched.
- **Chat menus**, the **Command Deck** and **Help** handouts, the inspector, placeholders, filters, cooldowns and ordering are new.
- **GM cards** never spill into public chat.
- **Available in 24 languages**.

The full list is in the changelog.

---

## Compatibility

CRL works in both Jumpgate and Legacy games, with any character sheet. It has been tested with the D&D 5e 2014 and D&D 2024 sheets.

Beacon sheets such as D&D 2024 send their rolls as roll cards, which mods only see in the Mod Script Sandbox v1.5 (the current default). The D&D 5e 2014 sheet rolls advantage as two separate d20s, so CRL checks both.

CRL has no dependencies.

---

## Why Use It?

The best moments at the table are the ones everyone reacts to. CRL lets the game react too: the crit fanfare plays, the fumble table rolls and the reminder appears without anyone reaching for a macro. Set a listener up once, and it is there for every session.
