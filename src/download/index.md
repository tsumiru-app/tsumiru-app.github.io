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

The latest version of **Tsumiru** was released **<ReleaseDate type="stable" />**. Pick your platform below. Tsumiru runs on **Android, Windows, macOS, Linux, and the web**.

Tsumiru is a client for a [Suwayomi server](/docs/guides/getting-started); you'll need one running to read. New to it? Start with [Getting started](/docs/guides/getting-started).

<DownloadButtons />

::: tip Stay up to date on Android
Tsumiru signs every release with the same key, so updates install cleanly over the top. For automatic update checks, point an app like [Obtainium](https://github.com/ImranR98/Obtainium) at the [GitHub releases](https://github.com/Suwayomi/Suwayomi-Tsumiru/releases).
:::

## On Linux

The recommended way to run Tsumiru on Linux is the **Flatpak**. It installs from our own signed repo (not Flathub), integrates with your desktop, and **auto-updates**:

```sh
flatpak remote-add --if-not-exists tsumiru https://suwayomi.github.io/Suwayomi-Tsumiru/index.flatpakrepo
flatpak install tsumiru io.github.aaronbamblett.tsumiru
```

> Added the `tsumiru` remote before? It may still point at the old `tsumiru-app.github.io` URL. Run `flatpak remote-delete tsumiru` first, then the commands above.

Then launch it from your app menu, or with `flatpak run io.github.aaronbamblett.tsumiru`. Updates arrive with `flatpak update` (or automatically via your software centre).

Prefer a portable single file? Grab the **Linux (AppImage)** above: `chmod +x` it and run. No repo, no install, but no auto-update.

<Changelog type="stable" />
