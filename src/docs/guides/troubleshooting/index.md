---
title: Troubleshooting
titleTemplate: Guides
description: Facing connection or app issues with Tsumiru? Here's how to troubleshoot.
---

# Troubleshooting

Facing connection or app issues with Tsumiru? Here's how to troubleshoot.

Be sure to check the [Frequently Asked Questions](/docs/faq/general) for how to address common issues too.

## Server connection

Tsumiru connects to your Suwayomi server over the network. Most issues trace back to the connection between the app and the server.

### Verifying your server URL

1. Open **Tsumiru** and navigate to **Settings → Server**.
1. Confirm the server URL matches the address and port your Suwayomi server is running on (e.g. `http://192.168.1.100:4567`).
1. Make sure you are using `http://` or `https://` as appropriate — mixing them up is a common source of connection errors.

### Checking that the server is reachable

* Confirm the Suwayomi server is running.
* On the same device, open a browser and navigate to the server URL. If the web UI loads, the server is up and reachable.
* Make sure your device and the server are on the same network, or that the server is properly exposed if you are accessing it remotely.

### Authentication errors

If your Suwayomi server has authentication enabled:

1. Navigate to **Settings → Server** in Tsumiru.
1. Enter the correct username and password.
1. Save and try reconnecting.

## General

### Obtaining crash/error logs

For crash investigations, navigate to <nav to="advanced"> and tap **Dump crash logs**.

<img
  class="only-light"
  src="/docs/guides/troubleshooting/dump-crash-logs.dark.webp"
  alt="Dump crashlogs"
  width="512"
  height="386"
  loading="lazy"
  decoding="async"
/>
<img
  class="only-dark"
  src="/docs/guides/troubleshooting/dump-crash-logs.dark.webp"
  alt="Dump crashlogs"
  width="512"
  height="386"
  loading="lazy"
  decoding="async"
/>

### Obtaining more logs

To diagnose abnormal app behavior on Android, record device logs using a [Logcat Reader](https://github.com/darshanparajuli/LogcatReader/releases).
