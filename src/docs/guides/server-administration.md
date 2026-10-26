---
title: Server administration
titleTemplate: Guides
description: Manage server sign-in, users, feeds, images, and logs from Tsumiru.
---

# Server administration

Open **Settings → Server** to manage your server.
The available pages and controls depend on your server's capabilities and your account permissions.
**Manage server settings** is required for server administration settings, while **Manage users** controls account administration.
Some OPDS and served-image preferences can be personal settings on servers with accounts.

## Sign-in and users

**Sign-in** controls the server's **Authentication mode**, administrator credentials, and UI login session settings.
Changes to sign-in settings ask for confirmation because they affect everyone using the server.
Browser builds cannot select Basic auth or Simple login here, and some credential changes require the administrator.
To change how this device connects instead, use **Settings → Connection**.

On servers with accounts, open **Users** to manage accounts.
When using **Create account** or **Create registration code**, review **Permissions** before saving if your server supports choosing them.
These permissions control actions such as downloading chapters, installing extensions, managing source preferences, managing server settings, and managing users.
Older servers may not expose permission choices during creation.

## OPDS and Database

**OPDS** configures feeds for OPDS readers, including **Items per page**, chapter sorting, unread and downloaded filters, and reading-progress behavior.
Choose the controls your server supports.

**Database** offers **H2** and **PostgreSQL**, connection details, and connection-pool settings.
Changes ask for confirmation because they can disconnect the server or switch its database.

## Images and WebView

Under **Images**, **Convert downloaded images** controls processing when images are downloaded, while **Convert served images** controls processing when images are sent to a reader.
Conversion rules can target an image format or a conversion URL.
**Clear cache** asks for confirmation and clears cached images on the server and this device.

Under **Network → WebView**, **WebView** enables the server's Chromium-based browser.
**Clear cookies and cache** asks for confirmation and may sign you out of sources.

## Logs

**Logs** includes **Debug logs**, **Log file cleanup**, **Maximum log file size**, and **Maximum size of all log files** when supported.
For the app's own log, use **Settings → Advanced → Copy debug log** instead.
