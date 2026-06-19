---
title: Library
titleTemplate: Frequently Asked Questions
description: Frequently Asked Questions about the Library in Tsumiru.
---

# Library
Frequently Asked Questions about the Library.

## How do I sort, filter, and change the layout?

Tap the organizer icon in the Library toolbar for three tabs:

* **Filter** — show/hide by **Unread**, **Started**, **Completed**, **Bookmarked**, and **Downloaded** (each toggles include / exclude / off).
* **Sort** — **Alphabetical**, **Date Added**, **Unread**, **Last Updated**, **Last Chapter Date**, **Total Chapters**, or **Last Read** (ascending or descending).
* **Display** — **Grid**, **List**, or **Descriptive List**, plus **Downloaded** and **Unread** badges.

## How do I update my library?

From the Library (or Updates) overflow menu choose **Global Update** to refresh everything, or **Category Update** to refresh just the category you're viewing. Updating runs as a job on your **Suwayomi server** — Tsumiru just kicks it off and shows progress.

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

There's nothing to enable — your library, read progress, bookmarks, categories, and download state all live on the **Suwayomi server**. Any device pointed at the same server sees the same state automatically. Only UI preferences (sort, filter, display) are stored per-device.

## How do I handle duplicate chapters from multiple scanlators?

Bookmark or mark-as-read the chapters you don't want, then use the **Filter** to hide bookmarked or read chapters so they're out of the way as you read.

## Why were some chapters marked unread again?

If a source changes a chapter's URL, the server sees it as a new chapter, so it can reappear as unread. This is expected when a source reorganizes its content.
