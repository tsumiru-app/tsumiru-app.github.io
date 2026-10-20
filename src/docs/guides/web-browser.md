---
title: Using Tsumiru in a browser
titleTemplate: Guides
description: Run Tsumiru in a browser, sign in with UI login, and know what works differently.
---

# Using Tsumiru in a browser

Tsumiru has a browser version that runs in any modern browser and connects to your Suwayomi server.
It reads from the server while you use it, so it has no offline reading.

## Running the browser version

### Serve the web build

Download `…-web.zip` from the [latest release](https://github.com/Suwayomi/Suwayomi-Tsumiru/releases/latest) and unzip it.
Serve the folder with any static web server, then open its address in a browser.

If you serve the build from an address other than your Suwayomi server, open **More → Connection** and enter the server's address, including its port.
The browser version has no **Search my network** button.

### Install it from your server

Open **Settings → Server** and find **Web interface**.
If your server supports these settings, set **Interface** to **Tsumiru**, then use **Check for update** to install it.
Your server then serves Tsumiru at its own address.
**Update channel** picks between **Stable** and **Preview**, and **Automatic updates** keeps the installed copy current.

Tsumiru appears in the **Interface** list on servers that support it.
If it isn't there, your server can't install it yet.

## Signing in

The browser version signs in with **UI login** only.
It can't use Basic auth or Simple login: those modes need the browser to send credentials with cross-origin requests, and newer Suwayomi servers refuse that.
A server with no authentication connects without a sign-in.

To switch your server to UI login, either:

* Edit `server.conf` and set `server.authMode = "ui_login"`.
  The other values are `none`, `basic_auth`, and `simple_login`.
* In Suwayomi's own WebUI, open **Settings → Server**, find **Authentication**, and set **Authentication Mode** to **UI Login**.

Then open **More → Connection** in Tsumiru, choose **UI Login (recommended)** under **Authentication Type**, and sign in with the server's username and password.

### What the messages mean

* Under the sign-in method picker, the browser version shows *"The browser version only works with UI login (server setting: server.authMode)."*
* If **Test connection** finds a server on Basic auth or Simple login, it says *"This server uses a sign-in method the browser version can't use. Set the server's authentication mode to UI login, or use the Android, iOS or desktop app."*
* If the server answers with a 404, it says *"This server didn't accept the browser's request. If it uses Basic auth or Simple login, set its authentication mode to UI login, or use the Android, iOS or desktop app. Otherwise check the address."*

The first two mean the server's authentication mode needs to change.
The third can also mean a mistyped address, so check the host, port, and any subpath before changing the server.

## What's different from the apps

* **No offline reading.** The browser version always reads from the server and can't keep chapters on the device. See [Offline reading](/docs/guides/offline-reading).
* **No notifications.** Notifications are Android only, so the browser version has none. See [Notifications](/docs/guides/notifications).
* **Updates come from where you run it.** If your server installed Tsumiru as its web interface, the server updates it. A copy on your own static server changes only when you replace its files with a newer release.
