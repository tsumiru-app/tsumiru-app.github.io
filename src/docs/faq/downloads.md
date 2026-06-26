---
title: Downloads
titleTemplate: Frequently Asked Questions
description: How downloading works in Tsumiru.
---

# Downloads

Downloads are performed by your **Suwayomi server**, not by Tsumiru. When you download chapters, Tsumiru tells the server to fetch them; the files are stored **on the server** and streamed to whichever device you read on. A download you start on your phone is therefore available in the desktop and web apps too.

::: tip Reading without a connection?
This page covers **server** downloads. To keep chapters **on your device** and read them with no connection to the server, see [Offline reading](/docs/guides/offline-reading).
:::

## How do I download chapters?

* **A single chapter**: tap the download icon on the chapter row. Tap it again while it's queued to cancel, or once it's downloaded to delete it.
* **A batch from a series**: on the series page, tap the **download** button in the toolbar and choose a preset: **Next chapter**, **Next 5 / 10 / 25 chapters**, **Unread**, or **All**.
* **Hand-picked chapters**: long-press a chapter to enter selection mode, then pick the ones you want (use **Select next 10**, **Select unread**, or **Select in between** to help), and tap the download icon in the bottom bar.

## Can I download multiple chapters or series at once?

Yes. Tsumiru imposes no artificial download limit of its own. How many downloads run in parallel is governed by your **Suwayomi server**, not the app. Since the content you're downloading comes from your own server, throttling is something you tune server-side, not something the client restricts.

## How do I manage what's downloading?

Open the **Downloads** screen to see the queue. You can:

* Reorder items with the up/down arrows, or **Move to top** / **Move to bottom**.
* **Delete** an item from the queue, or **Retry** one that errored.
* **Pause** / **Resume** the whole queue with the floating button.
* **Clear** the entire queue with the sweep icon in the toolbar.

The queue lives on the server, so it's the same from every device.

## Can Tsumiru download new chapters automatically?

Yes. In **Settings → Downloads → Auto-download**, turn on **Auto-download new chapters**. You can set a **Chapter download limit** and optionally **ignore entries that still have unread chapters**. The server downloads new chapters when it finds them during a library update.

## Why did a download stop or fail?

Because downloads run on the server, a failure usually means the server lost access to the source, or Tsumiru lost its connection to the server. Confirm your Suwayomi server is running and reachable, then **Retry** the item from the Downloads screen.

## Where are downloaded files stored?

On the **server**, in the path set under **Settings → Downloads → Download location**. Tsumiru shows your series and chapters from the server's metadata, so there's nothing to manage in local files on your device.
