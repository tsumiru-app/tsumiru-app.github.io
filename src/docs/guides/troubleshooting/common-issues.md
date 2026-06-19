---
title: Common issues
titleTemplate: Troubleshooting - Guides
description: Facing issues connecting Tsumiru to your server or loading content? Here's how to tackle common challenges.
---

# Common issues

Facing issues connecting Tsumiru to your server or loading content?
Here's how to tackle common challenges.

## Connection issues

### Tsumiru can't connect to my server

Tsumiru requires a running Suwayomi server to function. If you see a connection error:

* **Check the server URL.** Go to **Settings → Server** and verify the address, port, and scheme (`http` vs `https`). A common mistake is using `https://` when the server is only listening on plain `http://`.
* **Check that the server is running.** Open the server's web UI in a browser from the same device. If the browser can't load it either, the server is not running or not reachable.
* **Check your network.** If the server is on your local network, make sure your device is on the same network (not on mobile data). If accessing remotely, confirm your reverse proxy or port forwarding is set up correctly.
* **Check authentication.** If your Suwayomi server requires a login, make sure the credentials in **Settings → Server** are correct.

### Connected but library is empty

Sources and extensions are managed on the **Suwayomi server**, not inside Tsumiru. If your library appears empty:

* Open your Suwayomi server's web UI and confirm that sources/extensions are installed and that you have series in your library.
* If the server library is populated but Tsumiru shows nothing, try refreshing or re-syncing from the Tsumiru library screen.

## Content loading issues

### Images won't load

* Confirm Tsumiru is connected to the server (check **Settings → Server**).
* The server fetches images from the source on demand. If a source is slow or rate-limiting, images may fail to load. Try again after a moment.
* Check that the Suwayomi server has network access to the source.

### Reading is laggy

* High-resolution chapter images can cause lag, especially on lower-end hardware. The Suwayomi server serves images as-is from the source; this is a function of source image sizes.
* Close other apps to free RAM (on Android and other memory-constrained platforms).

### Slow loading

Content loading speed depends on your Suwayomi server's connection to the source and your device's connection to the server. Slowness is usually caused by:

* The source being slow or applying rate limits.
* A slow network connection between your device and the server.
* The server being on hardware with limited resources.

## Update issues

### App updates won't install (Android)

When installing a new version of Tsumiru on Android, the signing certificate of the new APK must match the installed version.

* If you downloaded Tsumiru from a different source than the currently installed version (e.g. switching from a debug build to a release build or vice versa), Android will block the install due to a signature mismatch. Uninstall the existing version first, then install the new one.
* Download the correct APK for your device's CPU architecture, or use the universal APK if unsure.

## HTTP errors from the server

These errors appear when Tsumiru receives an unexpected HTTP response from your Suwayomi server or from a source via the server.

### `HTTP Error: 401` - Unauthorized
Your server credentials are incorrect or have expired. Go to **Settings → Server** and re-enter your username and password.

### `HTTP Error: 403` - Forbidden
The server or the source is refusing the request. Check that your server credentials are correct. If the source itself is returning 403, the source may be enforcing IP-based blocking or rate limits — this is a server-side issue to investigate in the Suwayomi server logs.

### `HTTP Error: 404` - Not Found
The requested resource does not exist. The series or chapter may have been removed from the source.

### `HTTP Error: 429` - Too Many Requests
The source has temporarily rate-limited the server's IP. Pause downloads on the server and wait before retrying.

### `HTTP Error: 5xx`
The Suwayomi server or the upstream source is experiencing an error. Check the server logs for details.

::: warning
For unlisted errors or if the steps above don't resolve your issue, refer to [Diagnosis](/docs/guides/troubleshooting/diagnosis) or open an issue at [github.com/aaronbamblett/tsumiru](https://github.com/aaronbamblett/tsumiru).
:::
