---
title: "Browse: sources & extensions"
titleTemplate: Guides
description: Install manga source extensions on your Suwayomi server from Tsumiru, manage repositories, pin sources, and search every source at once.
---

# Browse: sources & extensions

The **Browse** tab is where you find manga. It has two tabs: **Sources** lists every source you can browse, and **Extensions** is where you install the extensions that provide those sources.

One thing to understand up front: **extensions don't install into Tsumiru — they install onto your Suwayomi server.** Install an extension from your phone and its sources appear on the desktop and web apps too, because every client shares the server's set.

## The Extensions tab

Extensions are listed in groups: **Updates pending** at the top, then **Installed**, then everything available, grouped by language. The search icon in the toolbar filters the list as you type.

* **Install**: tap **Install** on the extension's row. Its source appears in the Sources tab right away (installing an extension also enables its language for you, so the new source isn't hidden by the language filter).
* **Update**: rows with a pending update show an **Update** button. Pull down on the list to make the server re-check for updates.
* **Uninstall**: tap **Uninstall** on an installed row. When a row shows **Update** instead, use the trash icon next to it.
* **Obsolete** (in red) means the extension was removed from its repository. It may keep working for a while, but the only action left is to uninstall it.

Extensions with adult content are marked **18+** in red.

### Install from a file

Have an extension as an `.apk` file that isn't in any repository? On the Extensions tab, tap the **+** icon in the toolbar and pick the file. It uploads to your server and installs like any other extension.

## Extension repositories

The Extensions tab lists whatever the repositories configured on your server provide. If it's empty, no repository is set yet.

Manage them under **More → Settings → Browse → Extension Repository**:

* Tap the **+** button and paste a repository URL to add it.
* Each repository row has a copy button and a delete button.

This is a server setting, so repositories you add here apply to every client connected to your server.

## NSFW and language filters

Two controls decide what Browse shows you:

* **NSFW**: **More → Settings → Browse → Show NSFW extensions and sources** hides 18+ extensions and their sources when off.

  ::: warning Best effort
  This filter relies on extensions being flagged correctly. It doesn't stop an unofficial or mislabeled extension from surfacing 18+ content.
  :::

* **Languages**: the translate icon in the Browse toolbar opens a language list; only checked languages appear. The Sources and Extensions tabs each have their own list, so you can browse sources in two languages while still seeing every extension.

## The Sources tab

Every source from your installed extensions, with **Pinned** and **Last Used** groups at the top, then sources grouped by language. Tap a source to browse it; the **Latest** button on a row jumps straight to its newest releases.

### Pin your favorites

Tap the pin icon on a source's row to pin it. Pinned sources sit in their own group at the top of the list, and global search can be scoped to just them. Tap the pin again to unpin.

### Browsing a source

Inside a source:

* **Popular** and **Latest** chips switch listings; **Filter** switches to the source's own filtered browse.
* The search icon searches within this source.
* On the Filter listing, the **Filter** button opens the source's filters (genre, status, and whatever else that source offers) in a sheet.
* The display icon switches between grid and list.
* Some sources have their own settings — if one does, a gear icon appears in its toolbar.

## Global search

To search every source at once, tap the search icon on the **Sources** tab, type a title, and submit. **Global Search** queries each source and shows a row of results per source.

Three chips control the scope:

* **Pinned sources** searches only your pinned sources (shown when you have any).
* **All** searches every enabled source.
* **Has results** hides sources that found nothing.

Results already in your library are shown darkened, so you can tell what you have at a glance. Only sources in your enabled languages are searched — trim the language list to keep global search fast.
