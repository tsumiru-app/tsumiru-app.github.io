---
title: Settings
titleTemplate: Frequently Asked Questions
description: A tour of Tsumiru's settings.
---

# Settings

Tsumiru's settings are split into these sections:

* **General** — app language, quick search, and request-timeout behaviour.
* **Appearance** — theme and look of the app.
* **Library** — global update interval, skip rules, and category management.
* **Downloads** — download location (on the server), CBZ option, and auto-download.
* **Reader** — reading mode and all reader behaviour (see [Reader settings](/docs/guides/reader-settings)).
* **Browse** — source/server browse options.
* **Backup & Restore** — create and restore server backups (see [Backups](/docs/guides/backups)).
* **Server** — how Tsumiru connects to your Suwayomi server.

## How do I connect to my server?

Open **Settings → Server**. Set the **Server URL** and **Server Port** (for example `http://192.168.1.10` and `4567`). On non-web platforms there's an auto-discovery button to find a server on your network.

## My server needs a login — how do I authenticate?

Under **Settings → Server → Authentication**, pick an **Authentication Type**:

* **None** — no authentication.
* **Basic Auth** — HTTP basic auth (username + password), e.g. when your server sits behind a reverse proxy.
* **Simple Login** — Suwayomi's native simple login.
* **UI Login (recommended)** — Suwayomi's native UI login.

Enter your **Credentials** for the chosen type. Use **Log out** to clear stored credentials. Credentials are kept in your device's secure storage.

## What about proxies or Cloudflare-protected sources?

Those are **server-side** concerns, configured under **Settings → Server**: a **SOCKS Proxy** section, and a **Cloudflare Bypass** section for FlareSolverr. Tsumiru just surfaces the server's settings — the server does the work.

## Why are some requests timing out?

Under **Settings → General → Timeout Settings** you can raise the **Server Request Timeout** and enable **Auto-refresh on Timeout** (with a retry delay). This helps on slow connections or a busy server.

## Is there an app lock / biometric lock?

Not currently. Tsumiru has no app-lock, screenshot-blocking, or incognito feature today. If that's important to you, [open an issue](https://github.com/aaronbamblett/tsumiru/issues).
