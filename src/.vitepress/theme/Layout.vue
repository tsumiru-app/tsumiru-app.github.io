<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { provide, watch } from 'vue'

const route = useRoute()

watch(() => route.path, (path, referrer) => {
  window.goatcounter?.count?.({ path, referrer })
})

const { isDark } = useData()

provide('toggle-appearance', () => {
  isDark.value = !isDark.value
})
</script>

<template>
  <DefaultTheme.Layout>
    <!-- Replace the default hero icon with the desktop window and the tilted phone over its lower left.
         The hero's indigo→cyan glow (.image-bg) is a sibling slot and stays put. -->
    <template #home-hero-image>
      <div class="ts-shots">
        <div class="ts-window">
          <img src="/img/hero-desktop.webp" alt="The Tsumiru library on desktop" width="1120" height="720" fetchpriority="high">
        </div>
        <div class="ts-hero-phone">
          <div class="ts-frame">
            <img src="/img/hero-library.webp" alt="The Tsumiru library on Android" width="688" height="1368" fetchpriority="high">
          </div>
        </div>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
/* Percentages are of the image column, so the composition scales with VitePress's .image-container */

.ts-shots {
  position: relative;
  z-index: 1;
  display: grid;
  width: 100%;
}

.ts-shots > * {
  grid-area: 1 / 1;
}

.ts-window {
  justify-self: end;
  width: 90%;
}

.ts-window img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.12),
    0 30px 70px rgba(0, 0, 0, 0.55);
}

.ts-hero-phone {
  justify-self: start;
  align-self: start;
  width: 30%;
  margin-top: 15%;
}

/* Dark device bezel — gradient rim + soft shadow, tilted like the mockup */

.ts-frame {
  padding: 7px;
  border-radius: 30px;
  background: linear-gradient(160deg, #23263f, #0c0e1c);
  border: 1px solid #2b2f4d;
  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(124, 123, 255, 0.1);
  transform: rotate(-7deg);
}

.ts-frame img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 23px;
}

@media (min-width: 960px) {
  .ts-shots {
    transform: translate(32px, 32px);
  }

  .ts-hero-phone {
    width: min(45%, 10rem);
    margin-left: 24px;
  }

  .ts-frame {
    transform-origin: top left;
  }
}
</style>

<!-- Non-scoped: tame VitePress's mobile hero negative margins. By default the
     stacked hero pulls the image up (margin-top:-76px → the tilted phone's top
     leaks into the nav) and pulls the heading up (margin-bottom:-48px → the
     phone's bottom overlaps "Your Suwayomi library"). Our screenshot is taller
     and tilted, so those overlaps are severe. Reset the margins and let the
     image container reserve the phone's real height, with a clean gap below. -->
<style>
@media (max-width: 959px) {
  .VPHero .image {
    margin: 0 auto 2rem;
  }

  .VPHero .image-container {
    height: auto;
  }
}
</style>
