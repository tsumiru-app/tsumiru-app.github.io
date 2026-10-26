---
title: Sync your library and progress
titleTemplate: Guides
description: Keep your library and reading progress in sync with SyncYomi or KOReader Sync.
---

# Sync your library and progress

Tsumiru can sync through two extra services.
**SyncYomi** syncs your library and reading progress through a SyncYomi server.
**KOReader Sync** syncs reading progress with KOReader.
Both are configured on the server, and Tsumiru drives them from its settings.

## SyncYomi

Open **Settings → Sync**.

* **Sync with SyncYomi** turns syncing on.
* **Host** is your SyncYomi server address.
It must start with `http://` or `https://`.
* **API key** is hidden and only shows whether one is set.
* **Sync interval** sets how often Tsumiru syncs: **Manual only**, **Every 30 minutes**, **Every hour**, **Every 3 hours**, **Every 6 hours**, **Every 12 hours**, **Daily**, or **Weekly**.
* **Sync data** chooses what a sync carries: **Library entries**, **Chapters**, **Categories**, **History**, and **Tracking**.
* **Sync now** starts a sync right away.

The status line shows the current step while a sync runs, and afterwards it shows when the last sync finished or why it failed.
On servers with accounts these settings are saved per account.
On older servers without accounts they are saved globally.

While **Sync with SyncYomi** is on, Library and Updates show a sync button in the top bar.
It turns into a spinner during a sync and refreshes the list when the sync finishes.

If your server does not support SyncYomi, the screen says so instead of failing.
Update Suwayomi to use it.

## KOReader Sync

On the same **Settings → Sync** page, the **KOReader Sync** section sits below SyncYomi.

* **Sync status** shows who is connected and to which server.
Tap it to connect or disconnect.
A wrong password keeps the dialog open with the error, and what you typed stays.
* **Sync to a newer state** and **Sync to an older state** decide what happens when your progress and the server disagree: **Prompt**, **Keep local**, **Keep remote**, or **Disabled**.
* **Document matching method** decides how books are matched: **Binary** or **Filename**.
* **Percentage tolerance** accepts a value from 0 to 1.
Smaller progress differences than this do not trigger a sync.

Like SyncYomi, these settings are saved per account on servers with accounts and globally on older servers.
If your server does not support KOReader Sync, the screen says so instead of failing.

With KOReader Sync connected, reader and chapter actions offer **Push progress to KOReader** and **Pull progress from KOReader**. Both ask for confirmation: pushing replaces KOReader progress, while pulling replaces the chapter's local and server progress.
