---
title: Getting started
titleTemplate: Guides
description: Connect Tsumiru to your Suwayomi server and start reading.
---

# Getting started

Tsumiru is a **client** for [Suwayomi](https://suwayomi.org/) (also known as Tachidesk). Your sources, extensions, downloads, and library all live on your **Suwayomi server** — Tsumiru is the reader you point at it. Once your server is running, the same library is available from every Tsumiru app: Android, desktop, and the web.

## 1. Set up a Suwayomi server

If you don't already have one, you'll need a running Suwayomi-Server. It's free and open-source, and runs on Windows, macOS, Linux, Docker, or a NAS/home server.

* **Suwayomi-Server:** [github.com/Suwayomi/Suwayomi-Server](https://github.com/Suwayomi/Suwayomi-Server)
* Follow its README to install the server and add your source extensions there.

> Suwayomi-Server is what manages sources and extensions. Tsumiru does not install extensions itself — once they're set up on the server, every connected client can use them.

## 2. Download Tsumiru

Visit the [download page](/download/) and grab the build for your platform:

* **Android** — install the `.apk` (use the universal APK if unsure).
* **Windows / macOS / Linux** — download and extract the desktop build.
* **Web** — host the web build, or open it from wherever you've deployed it.

## 3. Connect to your server

1. Open Tsumiru and go to **Settings → Server**.
2. Enter the address of your Suwayomi server, including the port — for example `http://192.168.1.10:4567` on your local network, or your `https://` domain if you've exposed it.
3. If your server is behind authentication, enter your credentials so Tsumiru can reach it.
4. Save. Tsumiru will connect and pull in your library.

> **Tip:** A local-network address (`http://<server-ip>:4567`) is the simplest place to start. To read away from home, put your server behind a reverse proxy with HTTPS and use that domain instead.

## 4. Browse sources and build your library

Because sources live on the server, anything you've enabled in Suwayomi shows up in Tsumiru automatically.

1. Open the **Browse** tab to see the sources available on your server.
2. Pick a source and use its **Popular** / **Latest** listings, or search for a title.
3. Open a series and tap **Add to library** — it's now in your library on every device.

### Trouble finding a specific series?

* Check your spelling, and try the **romanized** title — some sources index by it.
  > Example: **Boku no Hero Academia** instead of **My Hero Academia**.
* Some sources use slightly different spellings.
  > Example: **3-gatsu no Lion** instead of **Sangatsu no Lion**.

## 5. Read

Open any series, tap a chapter, and you're in. Tsumiru ships a rebuilt continuous reader tuned for long webtoon strips, with smooth vertical scrolling and pinch-to-zoom — see [Reader settings](/docs/guides/reader-settings) to tailor it to how you read.
