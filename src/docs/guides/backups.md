---
title: Backups
titleTemplate: Guides
description: Back up and restore your library, right from Tsumiru.
---

# Backups

Your library (series, categories, and read history) lives on your **Suwayomi server**, and Tsumiru can create and restore the server's backups directly. Open **Settings → Backup and restore**.

A backup is a standard Suwayomi (Tachidesk) backup file, so it can be restored to any Suwayomi server.

## Create a backup

1. Go to **Settings → Backup and restore → Create backup**.
2. Choose what to include: **Library entries**, **Chapters**, **Tracking**, **History**, **Categories**, **Client data**, **Server settings**, and **User settings** when supported. All are enabled by default.
3. The server generates the backup file and hands it to you to download. Save it somewhere safe.

## Restore a backup

1. Go to **Settings → Backup and restore → Restore backup**.
2. Pick your backup file (`.gz` or `.tachibk`).
3. Tsumiru validates it first and warns you about any **Missing extensions** (you'd want those installed on the server for everything to resolve). Choose which backup contents to restore and confirm. Tsumiru then uploads the file and the server restores it, showing progress as it goes.

::: warning
Restoring merges/overwrites library data on the server. Create a fresh backup first if you're unsure.
:::

## Automatic backups

Under **Settings → Backup and restore → Automated backup** you can have the server back up on a schedule:

* **Backup location**: a path on the server where automatic backups are saved.
* **Backup time**: the time of day to run.
* **Backup interval**: how often, in days.
* **Backup data**: choose which content to include, using the same choices as a manual backup.
* **Backup cleanup**: how long to keep old backups before they're pruned.

## What isn't in a backup

The backup covers your **server-side** library, including per-series reader settings. Tsumiru's device-local preferences, such as global reader defaults and library sort, filter, and display choices, are not included. A new device connected to your server already sees its library and progress without restoring a backup.

Your server sign-in is kept in your device's secure storage, outside the files device backups carry.
After a device restore or a reinstall, sign in again under **Settings → Connection**.
