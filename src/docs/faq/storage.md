---
title: Storage
titleTemplate: Frequently Asked Questions
description: Where Tsumiru keeps downloads and backups — on your server.
---

# Storage

Tsumiru stores almost nothing on your device. Your library, downloads, and backups all live on your **Suwayomi server**; the app keeps only small UI preferences (server address, sort/filter/display choices, reader settings) locally.

## Where are my downloads kept?

On the **server**, at the path set in **Settings → Downloads → Download location** — described in-app as "the path to the directory on the server where downloaded files should get saved in." You can also choose **Save as CBZ archive** to control the download format. Nothing is written to local device storage by Tsumiru.

## Where are backups kept?

Backups are created and stored by the **server** too. Automatic backups go to the path in **Settings → Backup & Restore → Backup Location** ("the path to the directory on the server where automated backups should get saved in"). When you create a backup manually, the server generates the file and hands it to you to download. See [Backups](/docs/guides/backups).

## Does Tsumiru use much space on my device?

Very little. Pages you're reading are cached temporarily for performance, and your settings are stored locally — but downloaded chapters are not. Because storage is server-side, the space a series takes up is managed on your server, not your phone or computer.
