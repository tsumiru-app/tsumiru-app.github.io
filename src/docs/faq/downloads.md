---
title: Downloads
titleTemplate: Frequently Asked Questions
description: How downloading works in Tsumiru.
---

# Downloads

Downloads are performed by your **Suwayomi server**, not by Tsumiru. When you download chapters, Tsumiru tells the server to fetch them. The files are stored **on the server** and streamed to whichever device you read on. A download you start on your phone is therefore available in the desktop and web apps too.

::: tip Reading without a connection?
This page covers **server** downloads. To keep chapters **on your device** and read them with no connection to the server, see [Offline reading](/docs/guides/offline-reading).
:::

## How do I download chapters?

* **A single chapter**: tap the download icon on the chapter row. Tap it again while it's queued to cancel, or once it's downloaded to delete it.
* **A batch from a series**: on the series page, tap the **download** button in the toolbar and choose a preset: **Next chapter**, **Next 5 / 10 / 25 chapters**, **Unread**, or **All**.
* **Hand-picked chapters**: long-press a chapter to enter selection mode, then pick the ones you want (use **Select next 10**, **Select Unread**, or **Select in between** to help), and tap the download icon in the bottom bar.

Queueing a large batch asks you to confirm first, so you don't kick off a huge download by accident.

## Can I download multiple chapters or series at once?

Tsumiru sets no limit of its own. How many downloads run in parallel, and any throttling, is configured on your Suwayomi server.

## How do I manage what's downloading?

The **Downloads** screen has two tabs: **Server** for the server queue, and **On device** for chapters saving to this device (see [Offline reading](/docs/guides/offline-reading)). On the **Server** tab you can:

* Reorder items with the up/down arrows, or **Move to top** / **Move to Bottom**.
* **Delete** an item from the queue, or **Retry** one that errored.
* **Pause** / **Resume** the whole queue with the floating button.
* **Clear** the entire queue with the sweep icon in the toolbar.

The server queue lives on the server, so it's the same from every device. The on-device queue is per device, and it can be paused and resumed too.

## Can Tsumiru download new chapters automatically?

In **Settings → Downloads → Auto-download**, turn on **Download new chapters**. You can set a **Chapter download limit**, and **Ignore automatic chapter downloads for entries with unread chapters** skips series you're behind on.

You can also choose **which categories** download on their own, so only the ones you pick fetch new chapters automatically.

Series you keep on your device top themselves up too: after every library update, new chapters for kept series are fetched and older ones past the keep rule are removed. See [Offline reading](/docs/guides/offline-reading).

## Why did a download stop or fail?

Because downloads run on the server, a failure usually means the server lost access to the source, or Tsumiru lost its connection to the server. Confirm your Suwayomi server is running and reachable, then **Retry** the item from the Downloads screen.

## Where are downloaded files stored?

On the **server**, in the path set under **Settings → Downloads → Download location**. Tsumiru shows your series and chapters from the server's metadata, so there's nothing to manage in local files on your device.
