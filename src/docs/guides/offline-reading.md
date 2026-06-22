---
title: Offline reading
titleTemplate: Guides
description: Download chapters to your device and keep reading with no server and no connection.
---

# Offline reading

Tsumiru can keep chapters **on your device** so you can read them with no connection to your Suwayomi server — on a plane, underground, or anywhere the server can't be reached. The sources still come from Suwayomi; offline reading just stores the pages locally so the app doesn't need the server in your pocket.

This is separate from [server-side downloads](/docs/faq/downloads). A *server download* tells your Suwayomi server to fetch a chapter and keep it **on the server**. An *offline download* copies that chapter onto **this device**. The two work together: a chapter has to be downloaded on the server before it can be saved to your device, and if it isn't yet, Tsumiru queues the server download for you automatically.

::: tip Where it works
Offline reading is available on the **Android, Windows, macOS, and Linux** apps. It is not available on the **web** app, which always reads from the server.
:::

## Getting chapters onto your device

There are two ways to save chapters offline.

### Keep a whole series offline

On a series page, tap **Keep offline** (next to **In Library**) to choose a rule. Tsumiru then keeps the matching chapters on your device automatically, and tops them up whenever new chapters are downloaded on the server:

* **Keep 3 unread** — the next 3 unread chapters, refilled as you read.
* **Keep all unread** — every unread chapter.
* **Keep all** — every chapter in the series.

To stop keeping a series offline, open the same sheet and choose **Remove downloads**, which clears the rule and deletes that series' chapters from the device. Your server library is untouched.

### Save individual chapters

On the chapter list, each downloaded chapter has a **Save to device** button. Tap it to store just that chapter offline; tap it again (it becomes a filled pin) to remove the device copy. Chapters you save by hand are **pinned** — they stick around regardless of the series' keep rule and are never removed by the storage limits below.

## Reading the chapter list

Each chapter row can show **two** indicators — one for the device, one for the server:

| Indicator | Meaning |
| --- | --- |
| **Save** icon | On the server, not yet on this device — tap to save offline |
| **Spinner** | Saving to this device (fills in as pages arrive) |
| **Filled pin** | Saved on this device — tap to remove the device copy |
| **Checkmark** | Downloaded on the server |

So a chapter that's fully available offline shows both a **pin** (on your device) and a **checkmark** (on the server). Deleting the server download also removes the device copy.

## Reading when the server is offline

When Tsumiru can't reach your server, it falls back to what's stored on the device:

* Your **library** shows the series you have saved offline.
* Opening a saved chapter reads the pages straight from the device — no network needed.
* Your **reading progress** is saved locally and synced back to the server automatically the next time you reconnect.

Chapters that aren't saved offline simply aren't available until the server is reachable again.

To see only what you can read offline, open the library **filter** and turn on **On device**.

## Managing storage

Open **Downloads → On device** to see everything stored locally: total **storage used**, and a row per series with its chapter count and size. From a series page you can **Remove downloads** for that series, and individual chapters can be removed with their pin button.

To configure offline storage, go to **Settings → Offline**:

* **Storage used** — how much space your offline chapters take up.
* **Remove all downloads** — clears every offline chapter from this device in one step (your server library is untouched).
* **Simultaneous downloads** — how many pages download at once (1–8, default 2). Lower it on a slow or metered connection.

### Keeping storage in check

Two optional safety nets keep offline storage from growing without limit. Both are **off** by default, and neither ever removes chapters you've **pinned** by hand:

* **Limit offline storage** — set a ceiling (default 2 GB). When you go over it, the oldest auto-kept chapters are removed first.
* **Auto-remove old downloads** — delete auto-kept chapters older than a set age (default 30 days).

## Downloading in the background

On **Android**, offline downloads keep running when Tsumiru is in the background or closed. A **"Downloading chapters"** notification shows progress (and lets you keep an eye on a long batch without leaving the app open); it clears itself when the batch finishes.

If your connection drops mid-batch, downloading pauses and waits for the network, then resumes on its own when you're back online — no errors, no lost progress. The first time you download in the background, Android may ask you to exempt Tsumiru from battery optimization so it doesn't pause long batches.

On **desktop** (Windows, macOS, Linux), downloads continue as long as the app is running, including when its window is minimized.
