---
title: Settings
titleTemplate: Frequently Asked Questions
description: A tour of Tsumiru's settings.
---

# Settings

Tsumiru's settings are split into these sections:

* **General**: app language, quick search, and request-timeout behaviour.
* **Appearance**: theme and look of the app.
* **Library**: global update interval, skip rules, and category management.
* **Downloads**: server and on-device download options, split into **Server** and **On device** tabs (see [Offline reading](/docs/guides/offline-reading)).
* **Reader**: reading mode and all reader behaviour (see [Reader settings](/docs/guides/reader-settings)).
* **Browse**: source/server browse options.
* **Backup & Restore**: create and restore server backups (see [Backups](/docs/guides/backups)).
* **Server**: the Suwayomi server's own admin config (bindings, proxy, Cloudflare, and so on). This configures the server itself, not how this app connects to it.

How Tsumiru **connects** to the server (the address, port, and sign-in) lives separately under **More → Connection**.

## How do I connect to my server?

Open **More → Connection**. Set the **Server URL** and **Server Port** (for example `http://192.168.1.10` and `4567`). On non-web platforms there's an auto-discovery button to find a server on your network.

## My server needs a login: how do I authenticate?

Under **More → Connection → Authentication**, pick an **Authentication Type**:

* **None**: no authentication.
* **Basic Auth**: HTTP basic auth (username + password), e.g. when your server sits behind a reverse proxy.
* **Simple Login**: Suwayomi's native simple login.
* **UI Login (recommended)**: Suwayomi's native UI login.

Enter your **Credentials** for the chosen type. Use **Log out** to clear stored credentials. Credentials are kept in your device's secure storage.

## What about proxy or advanced connection settings?

Advanced network options are **server-side**, configured under **Settings → Server**. Tsumiru surfaces whatever settings your server exposes; the server does the work.

## Why are some requests timing out?

Under **Settings → General → Timeout Settings** you can raise the **Server Request Timeout** and enable **Auto-refresh on Timeout** (with a retry delay). This helps on slow connections or a busy server.

## Does Tsumiru have an incognito mode?

**Yes.** Turn on **Incognito mode** from the **More** menu and Tsumiru stops recording reading history and "last read" progress while it's active. You can read or catch up on something without it showing up in your history or reordering your library. While it's on, an app-wide banner keeps the state visible; tap the banner to switch it back off. It's **session-only**, so it also resets whenever you restart the app.

Incognito works well with **hideable categories** (see [Categories](/docs/guides/categories)), which keep chosen library tabs off the main view entirely.

This is a [Komikku](https://github.com/komikku-app/komikku)-style feature. Mihon doesn't have it.

## How do I hide adult content?

Turn off adult content in **Settings → Browse**. This hides adult sources entirely, not just adult extensions, so their entries stay out of browse and search.

## Is there an app lock / biometric lock?

Not yet. Tsumiru has no app-lock or screenshot-blocking today (though it does have an [incognito mode](#does-tsumiru-have-an-incognito-mode)). If app-lock matters to you, [open an issue](https://github.com/Suwayomi/Suwayomi-Tsumiru/issues).
