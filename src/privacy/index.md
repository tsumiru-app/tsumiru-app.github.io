---
title: Privacy policy
description: How Tsumiru handles server connections, device storage and optional services.
editLink: false
---

# Privacy policy

Updated October 21, 2026.

This policy covers the Tsumiru app and tsumiru.app.
Tsumiru is an open-source client for a [Suwayomi server](/docs/guides/getting-started) you configure.
The Tsumiru project does not operate a reading account or manga catalog service.
The app has no advertising, analytics, crash-reporting service or usage telemetry.
No reading data is automatically sent to project maintainers.

## Your server and account

Tsumiru sends requests to your chosen server address to browse sources, manage your library, record reading progress, download chapters and change server settings.
These requests can include credentials such as passwords, session cookies or access tokens.
Your server operator controls the server's storage, retention, sources and connections to other services.

You do not create an account with the Tsumiru project.
You can sign in to an existing account on your configured Suwayomi server or create a server account through its invitation or administrator features.
Invitation registration sends a registration code, new username and password to that server.
Contact its operator about server account deletion or other server data requests.
Tsumiru has no in-app action to delete your server account.

## Data on your device

Tsumiru stores app settings, server connection details and background-task configuration on your device.
It uses the platform's secure credential store for saved passwords, access tokens and session cookies.
Offline storage can contain downloaded chapter images, cached covers, series metadata and reading progress.
On-device downloads are separate copies from downloads stored on your Suwayomi server.

App settings can also be included in server backups when **App settings** is selected, which is the default when creating a backup.
Debug logs, exported files, backups and information you choose to share for support may contain details about your configuration or reading activity.
Tsumiru does not automatically upload these files to project maintainers.

## Suggestions and optional services

The **Suggestions** feature requests similar titles directly from your device using AniList, MyAnimeList, MangaUpdates, Comick and SimilarManga with MangaDex.
The applicable services receive a series title, identifier or source link, depending on the provider.
Cover images can load from their image hosting services.
These services see normal network request information, such as your IP address, and apply their own privacy and retention policies.

Suggestions is on by default.
Turn off **Show recommendations** in **Settings → Appearance** to stop requests made by this feature.

Reading trackers, SyncYomi and KOReader Sync are separate integrations configured through your Suwayomi server.
Tsumiru sends the configuration and operations needed for those integrations to your server, which connects to the services you enable.
Those providers' policies and your server configuration govern the data they receive.
Server and extension update operations also go through your server.

Opening external links, such as a source website, project page or release notes, connects you to the destination website.
Its own privacy policy applies.

## App updates

Update behavior depends on where you obtain Tsumiru.
If you install Tsumiru from Google Play, Google Play handles app updates.
That edition does not directly check GitHub for new app versions.
Google Play's handling of update requests is covered by Google's privacy policy.

In editions distributed outside Google Play, **Check for updates** on **About** can request the latest release information from GitHub.
On Android, **App update notifications** in **Settings → Notifications** can also check in the background if you enable it.
This setting is off by default.
These requests fetch release metadata and do not include your library or reading progress as request data.
GitHub receives normal network request information.
Project and release-note links can still open GitHub in any edition.

## Connection security

Connections to your Suwayomi server use HTTPS when you configure an HTTPS server address.
You can also configure an HTTP address, which does not encrypt data in transit.
Your choice of server address and the security of that server affect the protection of the credentials and reading data sent to it.

## Retention and deletion

Local downloads and the offline catalog remain until you remove them or configured retention rules remove applicable data.
Use **Remove from device** for individual chapters or **Remove all downloads** in the on-device download settings to remove downloads after confirmation.
In the same settings, use **Delete** under **Inactive account downloads** to remove an inactive account's local downloads and catalog.

Signing out clears active sign-in credentials but keeps local downloads.
It does not delete your server account or library.
Removing the app or local app data does not delete data on your server.
Saved or shared exports and backups are managed separately and may remain after you remove the app.
Your server operator and third-party providers control retention and deletion on their services.

## Website and contact

The tsumiru.app website does not enable analytics or set tracking cookies.
Some pages load third-party content, such as GitHub profile images, which sends normal request information to those hosts.

For privacy inquiries, email [support@tsumiru.app](mailto:support@tsumiru.app).
You can also open a [GitHub issue](https://github.com/Suwayomi/Suwayomi-Tsumiru/issues), but issues are public, so do not post credentials or other sensitive information there.
We use information you voluntarily provide to respond to your inquiry.
Content you post on GitHub is also subject to GitHub's policies.
Updates to this policy will be published on this page.
