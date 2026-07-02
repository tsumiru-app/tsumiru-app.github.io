---
title: Library
titleTemplate: Frequently Asked Questions
description: Frequently Asked Questions about the Library in Tsumiru.
---

# Library
Frequently Asked Questions about the Library.

## How do I sort, filter, and change the layout?

Tap the organizer icon in the Library toolbar for four tabs:

* **Filter**: show/hide by **Unread**, **Started**, **Completed**, **Bookmarked**, **Downloaded**, and **On device** (each toggles include / exclude / off), filter by **tracker**, and include or exclude specific **categories**.
* **Sort**: **Alphabetical**, **Date Added**, **Unread**, **Last Updated**, **Last Chapter Date**, **Total Chapters**, **Last Read** (the default), **Random**, or **Tracker score** (ascending or descending).
* **Display**: **Grid**, **Cover-only grid**, **List**, or **Descriptive List**; column-count sliders for portrait and landscape; badges for **Downloaded**, **Unread**, **Language**, **Local**, and **Source**; the continue-reading button; and tab options (category tabs, item counts, showing hidden categories).
* **Group**: group the library by **Source**, **Status**, or **Tracker status**, or leave it ungrouped.

## Can library entries jump to my next chapter?

Yes. Turn on the **continue-reading button** in the library display settings (off by default), and each entry gets a button that opens your next unread chapter directly, without going through the series page first.

## What happens when a source site is down?

If a source can't be reached but your server is up, Tsumiru shows the chapters already stored on your server instead of an empty list, so you can keep reading what's there.

Opening a series also checks the source for new chapters by default, which can be slow when a source is struggling. To make opens faster, turn off **Refresh chapters from source** in **Settings → Library**; Tsumiru then shows the server's chapter list and only checks the source when you refresh by hand.

## How do I update my library?

From the Library (or Updates) overflow menu choose **Global Update** to refresh everything, or **Category Update** to refresh just the category you're viewing. Updating runs as a job on your **Suwayomi server**. Tsumiru kicks it off and shows progress.

You can also enable **Automatic Update** in **Settings → Library** to refresh on an interval, and **Automatically refresh metadata** to pull new covers and details during updates.

## Why is the update skipping some entries?

In **Settings → Library → Skip updating entries** you can skip entries:

* **With Completed status**
* **That haven't been started**
* **With unread chapter(s)**

This reduces unnecessary requests. We recommend reading your unread chapters and letting the server update the rest.

## Where do I see recently updated chapters?

The **Updates** tab lists newly fetched chapters grouped by date, newest first. You can multi-select chapters there for bulk actions.

## Can I sync between devices?

There's nothing to enable: your library, read progress, bookmarks, categories, and download state all live on the **Suwayomi server**. Any device pointed at the same server sees the same state automatically. Only UI preferences (sort, filter, display) are stored per-device.

## How do I handle duplicate chapters from the same series?

Bookmark or mark-as-read the chapters you don't want, then use the **Filter** to hide bookmarked or read chapters so they're out of the way as you read.

## Why were some chapters marked unread again?

If a source changes a chapter's URL, the server sees it as a new chapter, so it can reappear as unread. This is expected when a source reorganizes its content.
