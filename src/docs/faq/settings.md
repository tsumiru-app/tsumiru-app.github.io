---
title: Settings
titleTemplate: Frequently Asked Questions
description: A tour of Tsumiru's settings.
---

# Settings

Tsumiru's settings are grouped into **App**, **Library**, **Suwayomi**, and **Advanced**.
Open **Settings** from the desktop sidebar or **More → Settings** on phones.

**App** covers the app itself:

* **General**: **Lock to portrait**, **Persistent search bar**, and **Quick search**.
* **Appearance**: **App language**, theme mode and themes, **Pure black (AMOLED)**, **Manga grid size**, and **Show recommendations**.
* **Reader**: global reader defaults for every series (see [Reader settings](/docs/guides/reader-settings)).
* **Keyboard shortcuts**: the shortcut reference, shown on desktop and in the browser (see [Keyboard shortcuts](/docs/guides/keyboard-shortcuts)).
* **Notifications**: new-chapter checks and alerts, on Android only (see [Notifications](/docs/guides/notifications)).

**Library** covers your collection:

* **Library**: **Fuzzy search**, **Ignore filters when searching**, **Categories**, **Global update** with automatic updates and skip rules, and **Behavior** such as chapter swipe actions and **Refresh chapters from source**.
* **Downloads**: server downloads and auto-download on the **Server** tab, and offline storage on the **On device** tab (see [Offline reading](/docs/guides/offline-reading)).
* **Tracking**: tracker accounts like AniList (see [Tracking](/docs/guides/tracking)).
* **Browse**: sources, extensions, extension stores, and the NSFW toggle.
* **Backup and restore**: manual and scheduled server backups (see [Backups](/docs/guides/backups)).

**Suwayomi** covers the server connection:

* **Connection**: server address, sign-in and authentication type, custom headers, and timeouts. It is also reachable from **More**.
* **Sync**: **SyncYomi** and **KOReader Sync** in one place (see [Sync your library and progress](/docs/guides/sync)).
* **Server**: the server's own admin config across hub pages (**Users**, **Sign-in**, **Network**, **Web interface**, **OPDS**, **Images**, **Database**, **Logs**). Available controls depend on server capabilities and your permissions. See [Server administration](/docs/guides/server-administration).

**Advanced** holds **Clear cache**, **Remove custom covers**, **Copy debug log**, and **Clear debug log**.
**Remove custom covers** restores server covers on all your Tsumiru clients.

## How do I connect to my server?

Open **Settings → Connection**. Under **Server**, set the **Server URL** to the full address of your server, port included: `http://192.168.1.10:4567`. There's no separate port field. The port is part of the URL.

## Can I have one address at home and another away?

Yes, and Tsumiru switches between them for you. Under **Server**, tap **Add a local network address** and fill in the **Internal / LAN URL** (for example `http://192.168.1.100:4567`); the **Server URL** above it stays as the address that works from anywhere else. On non-web platforms the LAN row has an auto-discovery button to find a server on your network.

Once both are set, an **Active connection** row appears showing which one Tsumiru is on: **Using LAN** or **Using remote**.

## My server needs a login: how do I authenticate?

Under **Settings → Connection → Authentication**, pick an **Authentication type**:

* **None**: no authentication.
* **Basic Auth**: HTTP basic auth (username + password), e.g. when your server sits behind a reverse proxy.
* **Simple Login**: the server's older username-and-password sign-in.
* **UI Login (recommended)**: the sign-in the server's own web UI uses. Tsumiru signs in once and stays signed in.

Enter your **Username** and **Password** for the chosen type. Use **Sign out** to clear stored credentials. Credentials are kept in your device's secure storage.

If your sign-in expires while you're using Tsumiru, an inline banner asks you to sign in again. It doesn't log you out — sign in from the banner and you carry on where you were.
After a device restore or a reinstall, sign in again the same way: credentials are kept in secure storage on the device and do not survive the move.

## My server sits behind a gateway that needs extra headers: how do I add them?

Add them under **Settings → Connection → Custom HTTP headers**. Tap **Add header**, fill in the **Header name** and **Header value**, and save. They're sent with every request Tsumiru makes to your server, and you only need them when the server sits behind an authentication gateway, Zero Trust guard, or reverse proxy that expects extra headers.
For the wider picture, see [Reaching your server from anywhere](/docs/guides/remote-access).

## What about proxy or advanced connection settings?

Proxy, Cloudflare, and binding options are **server-side**, configured under **Settings → Server → Network**. Tsumiru surfaces whatever settings your server exposes; the server does the work. **Custom HTTP headers** is the exception: it's a setting on this device, on the Connection screen, because it decides how Tsumiru reaches the server in the first place.

## Why are some requests timing out?

At the bottom of **Settings → Connection**, the **Timeouts** section holds **Server request timeout**, **Auto-refresh on timeout**, and **Auto-refresh retry delay**. Raise the timeout and turn on auto-refresh to ride out slow connections or a busy server.

## How do I change the theme?

**Settings → Appearance** controls how the app looks:

* **Theme mode**: **System**, **Light**, or **Dark**.
* **Pure black (AMOLED)**: swap dark backgrounds for true black to save power on OLED screens (shown in the dark and system modes).
* **Theme**: pick from the built-in themes — **Indigo Night** (the default), **Carbon**, **Plum**, **Regression**, **Ember**, **Synthwave**, **Terminal**, **Catppuccin Mocha**, **Nord**, **Gruvbox**, **Dracula**, **Monochrome**, **Royal**, or **Custom**.
* **Custom color**: with **Custom** picked, choose your own accent color from the wheel.
* **Manga grid size**: how large the covers are in the library grid.
* **Show recommendations**: show a row of similar titles on a series' details page (on by default; see [reading suggestions](/docs/faq/library#can-tsumiru-suggest-similar-titles)). **Recommendations in overflow** tucks that row into the overflow menu instead.

## What is Quick search?

**Quick search** is an overlay you open with `Ctrl` + `F` or `Ctrl` + `P` (see [Keyboard shortcuts](/docs/guides/keyboard-shortcuts)). It searches your **library**, offers **Go to** jumps to screens, settings, and categories, and can hand your text to a full source search across your extensions. It understands the same `key:value` [search operators](/docs/faq/library#how-do-i-search-my-library) as the library search box. Turn it on or off with **Quick search** in **Settings → General**. Since a keyboard shortcut is the only way to open it, it's hidden on phones and tablets.

## Can I search settings?

Yes. Tap the search button at the top of **Settings** and type to filter every page down to what matches.
On desktop and in the browser, Settings opens as a window over the app, with its own search field and page list.
Press `Esc` to close it.

## Does Tsumiru have an incognito mode?

On phones, enable **More → Incognito mode**. On desktop, use **Incognito** in the sidebar. Tsumiru stops recording reading history and "last read" progress while it's active. You can read or catch up on something without it showing up in your history or reordering your library. While it's on, an app-wide banner keeps the state visible. Tap the banner to switch it back off. It's **session-only**, so it also resets whenever you restart the app.

Incognito works well with **hideable categories** (see [Categories](/docs/guides/categories)), which keep chosen library tabs off the main view entirely.

## How do I hide adult content?

Turn off **Show NSFW extensions and sources** in **Settings → Browse**. This hides adult sources entirely, not just adult extensions, so their entries stay out of browse and search.

## Is there an app lock / biometric lock?

Not yet. Tsumiru has no app-lock or screenshot-blocking today (though it does have an [incognito mode](#does-tsumiru-have-an-incognito-mode)). If app-lock matters to you, [open an issue](https://github.com/Suwayomi/Suwayomi-Tsumiru/issues).
