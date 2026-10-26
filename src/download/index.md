---
title: Download
description: Get the latest Tsumiru release for Android, iOS, Windows, macOS, Linux, and the web.
lastUpdated: false
editLink: false
prev: false
next: false
---

<script setup>
import DownloadButtons from "@theme/components/DownloadButtons.vue";
import IosSources from "@theme/components/IosSources.vue";
import ReleaseDate from "@theme/components/ReleaseDate.vue";
import Changelog from "@theme/components/Changelog.vue";
</script>

# Download

The latest version of **Tsumiru** was released **<ReleaseDate type="stable" />**. Pick your platform below. Tsumiru runs on **Android, iOS ([sideloaded](/docs/guides/install-ios)), Windows, macOS, Linux, and the web**.

Tsumiru is a client for a [Suwayomi server](/docs/guides/getting-started), so you'll need one running to read. New to it? Start with [Getting started](/docs/guides/getting-started).

<DownloadButtons />

::: tip Stay up to date on Android
Tsumiru signs every release with the same key, so updates install cleanly over the top.
For automatic updates, add Tsumiru to [Obtainium](https://github.com/ImranR98/Obtainium) and it installs new releases straight from GitHub.
<a href="obtainium://app/%7B%22id%22%3A%22io.github.aaronbamblett.tsumiru%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2FSuwayomi%2FSuwayomi-Tsumiru%22%2C%22author%22%3A%22Suwayomi%22%2C%22name%22%3A%22Tsumiru%22%7D"><img src="/img/badge_obtainium.png" alt="Get it on Obtainium" width="161" height="48"></a>
:::

## On Linux

The recommended way to run Tsumiru on Linux is the **Flatpak**. It installs from our own signed repo (not Flathub), integrates with your desktop, and **auto-updates**:

```sh
flatpak remote-add --if-not-exists tsumiru https://flatpak.tsumiru.app/index.flatpakrepo
flatpak install tsumiru app.tsumiru.Tsumiru
```

> Added the `tsumiru` remote before? Update its URL with `flatpak remote-modify --url=https://flatpak.tsumiru.app tsumiru`. Existing `io.github.aaronbamblett.tsumiru` installations keep receiving updates. No reinstall is needed.

Then launch it from your app menu, or with `flatpak run app.tsumiru.Tsumiru`. Updates arrive with `flatpak update` (or automatically via your software centre).

For a portable single file, grab the **Linux (AppImage)** above: `chmod +x` it and run. It needs no repo and no install step. To update it, use [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate), which downloads only the parts that changed.

## On iOS

The iOS build is **unsigned** and requires **iOS 14 or later**. Apple requires apps to be signed to your own account before they'll run, so it can't be installed by just opening the file. The [installing on iOS](/docs/guides/install-ios) guide walks through the sideloading tools (SideStore, AltStore, Feather, TrollStore) and the upkeep each one needs.

<IosSources />

The source URL, for any tool that reads AltStore sources, is `https://tsumiru.app/apps.json`.

<Changelog type="stable" />
