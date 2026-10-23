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

### Serve it from your server with the Custom interface

Suwayomi's **Custom** interface option serves whatever is in the server's `webUI` folder and never overwrites it, so the web build can live there and open at the server's own address with nothing else to host.
Because app and server then share an origin, this works on servers that cannot install Tsumiru directly.

1. Open **More → Settings → Server**, find **Web interface** and set **Interface** to **Custom**.
(In Suwayomi's WebUI the same setting is **Settings → WebUI → Flavor**.)
2. Stop the server.
3. Unzip the `…-web.zip` from the latest release and replace the contents of the server's `webUI` folder with it.
`index.html` must end up directly inside `webUI`, not in a subfolder.
4. Start the server and open its address in a browser.
The setup wizard pre-fills the server address, including any sub-path the server uses.

The `webUI` folder sits inside the server's data folder:

* Windows: `C:\Users\<Account>\AppData\Local\Tachidesk`
* macOS: `/Users/<Account>/Library/Application Support/Tachidesk`
* Linux: `/home/<account>/.local/share/Tachidesk`
* Docker (official image): the volume mounted at `/home/suwayomi/.local/share/Tachidesk` inside the container.

With **Custom** selected the server never updates the interface on its own, so repeat steps 2 to 4 for each new release.
To go back, set **Interface** to **WebUI** and restart the server, and it downloads WebUI again on its own.

### Install it from your server

Open **More → Settings → Server** and find **Web interface**.
If your server supports these settings, set **Interface** to **Tsumiru**, then use **Check for update** to install it.
Your server then serves Tsumiru at its own address.
**Update channel** picks between **Stable** and **Preview**, and **Automatic updates** keeps the installed copy current.

Tsumiru appears in the **Interface** list on servers that support it.
If it isn't there, your server can't install it yet.
Use the Custom interface above instead.

## Signing in

How you sign in depends on where the web build is served from.

If your Suwayomi server serves the web build (the Custom interface above, or a server that installed Tsumiru), the server signs the browser in before Tsumiru loads.
With Basic auth the browser shows its own username and password prompt.
With Simple login the server shows its login page first.
With UI login, Tsumiru asks you to sign in.
A server with no authentication connects without a sign-in.
In the first two cases Tsumiru itself shows no sign-in and needs none.

If the web build is served from any other address, Tsumiru signs in with **UI login** only.
It can't use Basic auth or Simple login, because those need the browser to send credentials with cross-origin requests, and newer Suwayomi servers refuse that.

The steps below apply when the web build is served from another address.
To switch your server to UI login, either:

* Edit `server.conf` and set `server.authMode = UI_LOGIN`.
  The other values are `NONE`, `BASIC_AUTH` and `SIMPLE_LOGIN`.
* In Suwayomi's own WebUI, open **Settings → Server**, find **Authentication**, and set **Authentication Mode** to **UI Login**.

Then open **More → Connection** in Tsumiru, choose **UI Login (recommended)** under **Authentication type**, and sign in with the server's username and password.

### What the messages mean

* Under the sign-in method picker, the browser version shows *"The browser version only works with UI login (server setting: server.authMode)."*
* If **Test connection** finds a server on Basic auth or Simple login, it says *"This server uses a sign-in method the browser version can't use. Set the server's authentication mode to UI login, or use the Android, iOS or desktop app."*
* If the server answers with a 404, it says *"This server didn't accept the browser's request. If it uses Basic auth or Simple login, set its authentication mode to UI login, or use the Android, iOS or desktop app. Otherwise check the address."*

The first two mean the server's authentication mode needs to change.
The third can also mean a mistyped address, so check the host, port, and any subpath before changing the server.
These messages only apply when the web build is served from an address other than the server.

## What's different from the apps

* **No offline reading.** The browser version always reads from the server and can't keep chapters on the device. See [Offline reading](/docs/guides/offline-reading).
* **No notifications.** Notifications are Android only, so the browser version has none. See [Notifications](/docs/guides/notifications).
* **Updates come from where you run it.** If your server installed Tsumiru as its web interface, the server updates it.
  A copy you placed with the Custom interface, or on your own static server, changes only when you replace its files with a newer release.
