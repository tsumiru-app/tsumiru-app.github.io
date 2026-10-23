<script setup lang="ts">
import { computed } from 'vue'
import { data as release } from '../data/release.data'

const iosAsset = computed(() =>
  (release.stable.assets ?? []).find(a => /-ios\.ipa$/.test(a.name)),
)
const downloadUrl = computed(
  () => iosAsset.value?.browser_download_url ?? release.stable.html_url,
)
</script>

<template>
  <div class="ios-sources">
    <div class="ios-sources-item">
      <img src="/img/sideload/sidestore.png" alt="SideStore">
      <div class="ios-sources-text">
        <b>SideStore</b>
        <span>Free Apple ID, refreshes on its own over Wi-Fi</span>
      </div>
      <a class="ios-sources-btn" href="sidestore://source?url=https://tsumiru.app/apps.json">Add source</a>
    </div>
    <div class="ios-sources-item">
      <img src="/img/sideload/altstore.png" alt="AltStore">
      <div class="ios-sources-text">
        <b>AltStore</b>
        <span>Free Apple ID, needs a computer nearby to refresh</span>
      </div>
      <a class="ios-sources-btn" href="altstore://source?url=https://tsumiru.app/apps.json">Add source</a>
    </div>
    <div class="ios-sources-item">
      <img src="/img/sideload/feather.png" alt="Feather">
      <div class="ios-sources-text">
        <b>Feather</b>
        <span>Signs on the device, needs a developer certificate</span>
      </div>
      <a class="ios-sources-btn" href="feather://source/https://tsumiru.app/apps.json">Add source</a>
    </div>
    <div class="ios-sources-item">
      <div class="ios-sources-text">
        <b>TrollStore or another tool</b>
        <span>Download the .ipa and install it by hand</span>
      </div>
      <a class="ios-sources-btn" :href="downloadUrl" rel="noopener">Download .ipa</a>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.ios-sources {
  background: var(--vp-c-bg-soft)
  border: 1px solid var(--vp-c-divider)
  border-radius: 14px
  max-width: 560px
  overflow: hidden
}

.ios-sources-item {
  display: flex
  align-items: center
  gap: 12px
  padding: 12px 16px
  border-top: 1px solid var(--vp-c-divider)
}

.ios-sources-item:first-child {
  border-top: 0
}

.ios-sources-item img {
  width: 32px
  height: 32px
  border-radius: 8px
}

.ios-sources-text {
  flex: 1
}

.ios-sources-text b {
  display: block
  font-size: 15px
}

.ios-sources-text span {
  font-size: 13px
  color: var(--vp-c-text-2)
}

.ios-sources-btn {
  background: var(--vp-button-brand-bg)
  color: var(--vp-button-brand-text)
  border-radius: 16px
  padding: 0 14px
  line-height: 32px
  font-size: 13px
  font-weight: 600
  text-decoration: none
  white-space: nowrap
}

.ios-sources-btn:hover {
  background: var(--vp-button-brand-hover-bg)
}

@media (max-width 480px) {
  .ios-sources-item {
    flex-wrap: wrap
  }

  .ios-sources-btn {
    margin-left: auto
  }
}
</style>
