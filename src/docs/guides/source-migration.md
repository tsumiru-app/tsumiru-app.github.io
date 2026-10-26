---
title: Migrate manga between sources
titleTemplate: Guides
description: Move a series, or a whole source's worth of series, to a different source when one dies or breaks, carrying your read chapters, categories, and more.
---

# Migrate manga between sources

Sources come and go. A site shuts down, an extension breaks, or another source has better scans. Migration moves a series in your library from one source to another **without losing your place**: the new entry takes over, and your reading progress, categories, and reader settings come along.

Whether you're moving one series or clearing out a dead source, it's the same flow: pick where the series should go, review the matches, then migrate or copy.

## Start a migration

There are three ways in:

* **One series**: open it, then tap **Migrate** (the **⋮** menu on phone, the swap-arrows button on tablet and desktop).
* **A selection**: multi-select series in your library and choose **Migrate**.
* **A whole source**: open **Browse → Migrate** and choose a source, then select its series. The picker can sort sources and **Show obsolete only** to find dead extensions. Select-all applies to series. On desktop, sources and series appear side by side. Select the series and use **Migrate N series**.

## Choose the target source

On phones, the **Select sources** screen opens first. On desktop, one migration window contains **Sources and options** followed by **Review matches**. Original sources are excluded from the destinations. In the source picker, move the sources you want to search from **Available** into **Selected**. The shortcuts **Select pinned**, **Select enabled**, **Select all**, and **Select none** speed this up. Tsumiru searches these sources, in the order you pick them, for a match to each series. Tap **Continue**.

Two helpers narrow the results: **Extra search query** appends text to every title before searching, and **Hide entries with no match** and **Hide entries without new chapters** trim the list to what's worth moving.

## Review the matches

The **Migrate** list shows each series next to the match Tsumiru found, including its **Latest chapter**. Where nothing matched, it reads **No match found**. Tap that entry to **Search manually**, or **Skip** it.

Run the whole list from the toolbar's **Migrate** or **Copy** actions, or handle one entry at a time from its menu with **Migrate now** and **Copy now**. All four actions ask for confirmation.

**Copy vs migrate**: **Copy** adds the new entry and keeps the original in your library. **Migrate** replaces the original with the new entry. Copy first if you want to check the new source before dropping the old one.

::: warning No undo
**Migrate** removes the original entry when it finishes, and it can't be reversed. Double-check you picked the right target, or **Copy** instead and remove the old entry yourself once you're happy.
:::

## What carries over

The gear on the migration list opens **Data to migrate**, which decides what moves with each series:

* **Migrate chapters** (on): your read status, last-read page, and bookmarks, matched to the chapters on the new source.
* **Migrate categories** (on): the new entry joins the old one's categories.
* **Migrate tracking** (on): re-point your tracker links (AniList, MyAnimeList, …) at the new entry.
* **Reader settings** (on): the series' per-series reader overrides.
* **Keep-offline rule** (on): the series' offline download rule.
* **Migrate downloads** (off): match downloaded chapters to the new source and carry their on-device files over. If a file cannot be reused, Tsumiru pins the matching target chapter and downloads it again. Unmatched chapters are not transferred, and removing the original can remove those device copies. Leave this off if you prefer fresh downloads from the new source.

A few things to know about matching:

* **Reading progress** is matched chapter by chapter, by number first and then by name. Unmatched read status, bookmarks, or page progress block destructive migration and preserve the original. Empty or unreadable target chapter lists also block migration. The failure explains why and offers **Retry**. **Copy** can remain available for some blocked matches. Matched chapters are only marked read.
* **Categories** are *added* to the new entry. Nothing is removed from the old one.
* If your server sign-in expires mid-run, migration pauses (**Paused — sign in again to continue**) and picks up where it left off once you sign back in.
