---
title: Migrate manga between sources
titleTemplate: Guides
description: Move a series to a different source when one dies or breaks, carrying your read chapters, categories, and tracking with it.
---

# Migrate manga between sources

Sources come and go. A site shuts down, an extension breaks, or another source has better scans. Migration moves a series in your library from one source to another **without losing your place**: the new entry takes over, and your reading progress, categories, and tracking come along.

## Start a migration

Open the series you want to move:

* **Phone**: tap the **⋮** menu in the top bar and choose **Migrate**.
* **Tablet / desktop**: tap the swap-arrows **Migrate** button in the top bar.

## Find the series on another source

Tsumiru opens **Search All Sources** and immediately searches every source for the series' title. Each source shows its matches as a row of covers; entries already in your library appear darkened.

If the right match doesn't show up, edit the search yourself — sources often index under slightly different names, so try the romanized title (**Boku no Hero Academia** instead of **My Hero Academia**).

Tap the cover of the series on its new source.

## Review the preview

The **Migration Preview** shows the old and new entries side by side — check the title, source, and chapter details before going further.

Under **Migration Options** you choose what carries over:

* **Migrate Chapters** — copies your read status (plus last-read page and bookmarks) to the matching chapters on the new source.
* **Migrate Categories** — puts the new entry in the same categories as the old one.
* **Migrate Tracking** — points your tracker links (AniList, MyAnimeList, …) at the new entry.
* **Delete Source Manga** — removes the original entry from your library once migration finishes.

By default chapters, categories, and delete are on and tracking is off. The **Quick** preset is the safe pick: chapters and categories on, and the original kept in your library so you can verify the new entry before removing the old one yourself. **Custom** just means you've changed the switches.

Tap **Start Migration** and confirm the from/to titles; the migration runs with a progress screen, and when it finishes you get a summary of what moved, with warnings for anything that couldn't.

::: warning No undo
Migration can't be reversed. If **Delete Source Manga** is on, the original leaves your library when it completes — double-check you picked the right target first.
:::

## What carries over, exactly

* **Reading progress**: chapters are matched between the two sources by chapter number first, then by chapter name. When the two sources number their chapters differently, some read statuses may not find a match — the summary tells you if that happens. Nothing is marked unread; matches are only ever marked read.
* **Categories**: the new entry is *added* to the old entry's categories. Nothing is removed from the old one.
* **Tracking**: each tracker bound to the old entry is bound to the new one.
* **Server downloads do not move.** Chapters your server downloaded came from the old source; queue fresh downloads on the new entry if you want them.
* **Delete Source Manga** removes the old series from your library — it doesn't scrub anything else from your server.
