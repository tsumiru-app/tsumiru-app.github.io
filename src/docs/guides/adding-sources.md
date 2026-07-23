---
title: Extension stores
titleTemplate: Guides
description: Add an extension store to your Suwayomi server so its extensions install without per-extension trust warnings.
---

# Extension stores

An extension store is a catalog of extensions your Suwayomi server can install from.

## Add a store

1. Open **Settings → Browse → Extension stores**.
2. Tap the **+** button and paste the store's index URL.

You can also reach this screen from the extension stores icon in the Extensions tab toolbar.

::: tip Older servers
This screen appears when your Suwayomi server supports extension stores. Older servers keep the previous **Extension Repository** screen until you update the server.
:::

## Trust and content ratings

Extensions from a store you've added install without a per-extension trust warning, since your server already trusts the store's signing key. Those extensions also carry content ratings, so the **Show NSFW extensions and sources** setting applies to them like any other extension.
