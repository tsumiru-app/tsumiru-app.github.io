---
title: Tsumiru vs Suwayomi WebUI
description: "Compare Tsumiru and the Suwayomi WebUI: offline reading, platforms, setup, and server access."
---

# Tsumiru vs Suwayomi WebUI

Both clients use the same Suwayomi server. Choose between them based on the device and whether you need offline reading.

## At a glance

| | Tsumiru | Suwayomi WebUI |
|---|---|---|
| **Library and progress** | Uses the server's shared state ([account note](/docs/faq/library#can-i-sync-between-devices)) | Uses the same server state |
| **Offline reading** | Per-series keep rules and manual chapter saves on native apps | Requires a connection to the server |
| **Platforms** | Android, iOS (sideload), Windows, macOS, Linux, and web | Any browser |
| **Reader** | Paged and continuous modes; the continuous reader supports mid-scroll pinch-to-zoom and loads chapters in sequence | Browser-based paged and continuous modes |
| **Setup** | Install Tsumiru, then connect it to the server | Included with Suwayomi-Server |
| **Updates** | Android in-app checks or Obtainium; desktop builds from GitHub | Updates with Suwayomi-Server |

## Use Tsumiru when

Tsumiru is useful when you want a native app, need chapters saved on the device, or read across phone and desktop. Its native apps can keep selected series or chapters offline. The web build still requires the server.

You install Tsumiru separately and enter your server address. Sources, extensions, the library, and server downloads remain on Suwayomi.

## Use the WebUI when

The WebUI works in any modern browser and ships with Suwayomi-Server. It needs no separate client install and stays matched to the server version.

Use it for server administration or on a device where you do not need offline reading. Because it runs in a browser, it must be able to reach the server while you read.

## Use both

You can switch between Tsumiru and the WebUI on the same server. Both show the same library, categories, reading progress, and server downloads. Device-local Tsumiru downloads and interface preferences stay on that device.
