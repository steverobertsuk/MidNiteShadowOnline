---
title: 'TaskAutomation'
summary: 'Automate your game without JavaScript: describe a task as data and let it run on time, on an event or at the press of a button, even across API restarts.'
order: 10
category: 'Game automation'
postCategory: 'taskautomation'
status: 'Active'
versions:
  - label: 'GitHub'
    version: 'v1.0.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/tree/TaskAutomation-v1.0.0/TaskAutomation'
  - label: 'Direct Download'
    version: 'v1.0.0'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/releases/download/TaskAutomation-v1.0.0/TaskAutomation_v1.0.0.zip'
lastUpdated: 2026-10-30
compatibility:
  - label: 'Jumpgate'
    url: 'https://pages.roll20.net/redesign'
  - label: 'Legacy'
    url: ''
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
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/tree/TaskAutomation-v1.0.0/TaskAutomation'
  - label: 'Changelog'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/blob/TaskAutomation-v1.0.0/TaskAutomation/CHANGELOG.md'
links:
  - label: 'Authoring Guide'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/blob/TaskAutomation-v1.0.0/TaskAutomation/docs/AUTHORING.md'
  - label: 'Worked Examples'
    url: 'https://github.com/steverobertsuk/roll20-api-scripts/blob/TaskAutomation-v1.0.0/TaskAutomation/docs/EXAMPLES.md'
indexMedia: '../../assets/images/mods/mod-taskautomation-cover.jpg'
indexMediaAlt: 'TaskAutomation mod cover image'
hero: '../../assets/images/mods/mod-taskautomation-hero.jpg'
heroAlt: 'TaskAutomation mod hero image'
---

## TaskAutomation Overview

Every session has small jobs that are easy to forget: a torch that burns out after an hour, a door that should creak open while the music fades, a token that should be marked as dead the moment its hit points reach zero, or a reminder that the game starts in fifteen minutes.

TaskAutomation lets the GM hand those jobs to Roll20. Each one is a **task**: a short description, written as data rather than JavaScript, of what should happen and when. Start a task with a button, at a set time, on a schedule or when something changes in the game, and TaskAutomation carries it out, even if the API sandbox restarts part-way through.

TaskAutomation is a new Mod by me, MidNiteShadow7. It works in Jumpgate and Legacy games and needs no other Mods.

---

## Key Features

### Tasks as Data

A task lists its steps, the tokens or characters it acts on, what starts it and who may use it. Tasks are checked before they are saved, edits are kept as a draft until you publish them, and each published version is numbered, so a run that has already started keeps the version it began with. Tasks can be exported as JSON and imported into other games.

### Steps

- Wait for a set time, or until a particular moment
- Wait for an event or a signal, with a timeout
- Branch on a condition
- Loop a set number of times, while or until something is true
- Call another task, and wait for it or let it run on its own
- Run branches in parallel and continue when all, the first successful one or the first to finish is done

### Actions

- Chat messages: say, emote, describe, whisper and GM commands
- Token properties, multi-sided token sides and status markers (with counters)
- Character attributes: set, adjust or read
- Pings and visual effects
- Jukebox tracks: play, stop and change the volume
- Start, pause or cancel other tasks
- Commands to other Mods, such as TokenMod, and calls to trusted Mod adapters

### Triggers

- A button on the dashboard, or a chat command
- A set time, a repeating interval, or a daily or weekly time at a fixed UTC offset
- Token, attribute, turn order, turn tracker, player page and player events
- Signals from macros or other Mods, and (optionally) chat messages

Event triggers have cooldowns, debouncing and burst limits, so a flurry of changes doesn't flood the chat.

### One Timer for Everything

All waiting work sits in a single queue with one timer. However many tasks are waiting, the game only ever holds one timer, and an idle game holds none.

### Survives API Restarts

Runs carry on from the step they had reached, on their original deadlines. If the sandbox stopped part-way through an action, TaskAutomation checks whether it actually happened. When it can't be sure, such as with a chat message that may already have been sent, the run stops and asks you instead of repeating it.

### Missed Work

When scheduled times pass while the sandbox is off or a schedule is paused, each task decides what to do:

- **Skip** the missed times and carry on with the next one
- **Run once** for the latest missed time
- **Catch up** a few missed times, spaced apart
- **Ask** the GM
- **Expire** them

Missed work is always reported on the dashboard, with a preview and a single-use confirmation before anything is run late.

### The Dashboard

A GM-only **TaskAutomation - Dashboard** handout shows what is running, waiting, paused, missed or needs a decision, with buttons to pause, resume and cancel runs, decide reviews and deal with missed work. An optional **Player View** handout lists only the tasks shared with players, and a GM-only **TaskAutomation - Help** handout lists every command, step and trigger.

### Ready-Made Templates

| Template          | What it does                                                                           |
| ----------------- | -------------------------------------------------------------------------------------- |
| Adventure montage | Cycles up to five multi-sided tokens through their sides, eight seconds apart.         |
| Torch reminder    | Warns after 50 minutes and puts the torch out after 10 more.                           |
| HP threshold      | Marks a token dead and tells the GM when bar 1 drops to 0.                             |
| Turn response     | Pings the token whose turn it is, after an optional "ready" signal.                    |
| Parallel scene    | Fades a jukebox track while a door opens, then stops the music.                        |
| Session reminder  | Reminds everyone every Friday at 19:00, at the UTC offset you choose.                  |
| Other-Mod command | Sends a TokenMod command for the selected token.                                       |
| Door sequence     | Waits up to a minute for the lever to be pulled, then opens the door or keeps it shut. |

Add one with **Templates** on the dashboard, try it, then change it to suit your game.

### Safe by Default

Tasks are GM-only unless you choose otherwise. A task can be shared with named players, who can then use it only on tokens they control. Commands to other Mods are GM-only, values inserted into them are checked, and an emergency **Stop all** cancels every run and holds new starts until you allow them again.

### Works With Other Mods

Other Mods can start tasks, send signals and register their own actions, triggers and adapters through the `TaskAutomation` object. The authoring guide in the GitHub repository explains how.

---

## Getting Started

1. Install TaskAutomation and save. The **Dashboard** and **Help** handouts appear in the Journal.
2. Type `!taskautomation` for the menu, or open the dashboard.
3. Click **Templates** and add **Adventure montage**.
4. Select a multi-sided token and click **Start**.

Templates that start by themselves, such as the HP threshold and the session reminder, are added switched off. Enable them when you are ready.

---

## Compatibility

TaskAutomation works in Jumpgate and Legacy games, and doesn't depend on a particular character sheet: you choose which bar or attribute a task reads.

The **Other-Mod command** template needs TokenMod. TokenMod only accepts token IDs from other Mods when its `players-can-ids` option is on (`!token-mod --config players-can-ids|on`), which also lets players use IDs in their own TokenMod commands.

---

## Why Use It?

The GM already has plenty to track. TaskAutomation looks after the timed reminders, scene changes and routine reactions that are easy to forget mid-session, carries them through API restarts, and always tells you when something couldn't happen on time. You decide what should happen once, and spend the session on the story instead.
