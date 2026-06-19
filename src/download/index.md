---
title: Download
description: Download page that allows users to access and install the latest version of the app.
lastUpdated: false
editLink: false
prev: false
next: false
---

<script setup>
import DownloadButtons from "@theme/components/DownloadButtons.vue";
import ReleaseDate from "@theme/components/ReleaseDate.vue";
import Changelog from "@theme/components/Changelog.vue";
</script>

# Download

The latest version of **Tsumiru** was released **<ReleaseDate type="stable" />**. Pick your platform below — Tsumiru runs on **Android, Windows, macOS, Linux, and the web**.

Tsumiru is a client for a [Suwayomi server](/docs/guides/getting-started); you'll need one running to read. New to it? Start with [Getting started](/docs/guides/getting-started).

<DownloadButtons />

::: tip Stay up to date on Android
Tsumiru signs every release with the same key, so updates install cleanly over the top. For automatic update checks, point an app like [Obtainium](https://github.com/ImranR98/Obtainium) at the [GitHub releases](https://github.com/tsumiru-app/tsumiru/releases).
:::

## On Linux

The recommended way to run Tsumiru on Linux is the **Flatpak** — it installs from our own signed repo (not Flathub), integrates with your desktop, and **auto-updates**:

```sh
flatpak remote-add --if-not-exists tsumiru https://tsumiru-app.github.io/tsumiru/index.flatpakrepo
flatpak install tsumiru io.github.aaronbamblett.tsumiru
```

Then launch it from your app menu, or with `flatpak run io.github.aaronbamblett.tsumiru`. Updates arrive with `flatpak update` (or automatically via your software centre).

Prefer a portable single file? Grab the **Linux (AppImage)** above — `chmod +x` it and run, no repo and no install, but no auto-update.

<Changelog type="stable" />
