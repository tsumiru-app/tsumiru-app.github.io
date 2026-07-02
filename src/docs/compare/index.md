---
title: Tsumiru vs Mihon vs Suwayomi WebUI
description: "An honest comparison of Tsumiru, Mihon/Komikku, and Suwayomi WebUI: where sources run, multi-device sync, offline reading, platforms, and setup effort."
---

# Tsumiru vs Mihon vs Suwayomi WebUI

These three overlap a lot, and each is genuinely the right choice for someone. Here's the honest version.

A note on names: **Komikku** is a Mihon fork with extra features (a richer library organizer, among other things). For this comparison they behave the same way, so they're treated as one column. **Suwayomi WebUI** is the web interface that ships with Suwayomi-Server itself.

## At a glance

| | Tsumiru | Mihon / Komikku | Suwayomi WebUI |
|---|---|---|---|
| **Where sources run** | On your Suwayomi server | On your phone | On your Suwayomi server |
| **Multi-device sync** | Built in — library, categories, and progress live on the server, every device sees the same thing | None built in; move devices via backup files | Built in, same server model |
| **Offline reading** | Download to device with per-series keep rules, pinning, and storage limits (all native platforms; not the web build) | Yes, chapters download to the phone | No — you need to reach the server |
| **Platforms** | Android, iOS (sideload), Windows, macOS, Linux, web | Android only | Any browser |
| **Webtoon reading** | Continuous webtoon reader (one of eight modes): no gaps, pinch-to-zoom mid-scroll, chapters load as you go | Yes, webtoon and paged modes | Yes, in the browser |
| **Tracking** | AniList, MyAnimeList, and more, via the server | AniList, MyAnimeList, Kitsu, and more, built in | Via the server |
| **Setup effort** | You need a running Suwayomi server first | Install one APK and you're reading | Comes with the server; nothing extra to install |
| **Updates / app stores** | No app stores. Android via in-app update check or Obtainium; desktop builds from GitHub | Not on the Play Store; APK from GitHub, commonly updated via Obtainium | Updates with the server |

## Pick Mihon (or Komikku) if…

You read on **one Android device** and don't want to run a server. That's most people, and it's a completely reasonable place to be. Setup is one APK, everything lives on the phone, and the ecosystem around it is the largest of the three. Komikku is worth a look over stock Mihon if you want more library organization out of the box.

The cost you're accepting: your phone is the single copy of your library, and moving to a second device means shuttling backup files by hand.

## Pick Tsumiru if…

You read on **more than one device**, or you already self-host. Your library, categories, progress, and downloads live on your Suwayomi server; Tsumiru clients on your phone, desktop, and browser all see the same state, with no sync step. Offline reading is per-series keep rules rather than manual download queues, and webtoon reading is what the app is built around.

The cost you're accepting: you have to run Suwayomi-Server somewhere, and keep it running. If that sentence sounds like a chore rather than a Tuesday, start with Mihon.

Already on Mihon and curious? Your library moves over in one backup file: [Coming from Mihon or Komikku](/docs/guides/migrate-from-mihon).

## The WebUI is for…

**Reading and managing your server from any browser with zero installs.** It's the interface Suwayomi ships with, it's always version-matched to your server, and it's the natural place for server administration. As a day-to-day reader it gives you the essentials; Tsumiru adds what a browser tab can't, like offline reading and a native app on each platform. Many Tsumiru users keep the WebUI around for quick access from machines that aren't theirs.

## Where Tsumiru sits

Tsumiru is a fork of Tachidesk-Sorayomi, heavily extended, and younger than Mihon. It doesn't try to replace your server; it never talks to sources directly, and your device's content is always a subset of what the server has. If the client-server model fits how you read, that's the pitch. If it doesn't, one of the other two columns is your answer, and that's fine.
