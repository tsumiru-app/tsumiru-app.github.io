---
title: Tracking
titleTemplate: Guides
description: Connect AniList, MyAnimeList, and other trackers your Suwayomi server supports, and keep them updated as you read.
---

# Tracking

Open **Settings** from the desktop sidebar or **More → Settings** on phones.

Tsumiru can update your reading trackers as you read.
Connect the services your Suwayomi server supports, bind a tracker to a series, and Tsumiru keeps its progress in step with what you read in the app.

The trackers themselves are configured on your server.
Tsumiru signs in to them through the server and drives them from the manga page, so anything your Suwayomi server supports, such as **AniList** and **MyAnimeList**, is available here.

## Sign in to a tracker

Open **Settings → Tracking** and sign in to the services you want to use.
Each one opens its own login in your browser. Approve it, and Tsumiru reconnects with the tracker linked.

You only sign in once per service.
A connected tracker stays available to bind to any series in your library.

## Bind a tracker to a series

On a series page, tap **Tracking**.
Search the connected service for the matching entry and select it to bind it to this series.
You can bind more than one tracker to the same series.

Once bound, the same panel shows the tracking record and lets you edit it:

* **Status**: reading, completed, on hold, dropped, plan to read.
* **Score**: your rating, in whatever scale the service uses.
* **Chapters read**: your progress, shown against the tracker's chapter total when it has one. Tsumiru keeps it up to date as you read (see below); tap it to set the count by hand.

## Progress updates as you read

When you read or mark chapters read, Tsumiru updates the bound tracker's chapter count automatically.
Marking chapters read in bulk, from the library or the updates list, counts too.

This works offline as well.
Chapters you read with no connection update your trackers the next time you reconnect to the server.

## Migrating a series

Tracker links carry over when **Migrate tracking** is enabled. It is enabled by default.
