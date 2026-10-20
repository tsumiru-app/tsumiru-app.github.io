<script setup lang="ts">
defineProps<{ title: string, description?: string, dir?: string, home?: boolean, logo?: string, desktop?: string, phone?: string }>()
</script>

<template>
  <div style="position:relative;overflow:hidden;display:flex;flex-direction:column;width:100%;height:100%;background:linear-gradient(135deg, #0b0d1a, #02061d)">
    <div style="position:absolute;left:0;top:0;width:1200px;height:628px;display:flex;background:radial-gradient(900px 600px at 85% 25%, rgba(124,123,255,0.25), transparent 60%)" />
    <div style="position:absolute;left:0;top:0;width:1200px;height:628px;display:flex;background:radial-gradient(700px 500px at 0% 100%, rgba(51,214,255,0.1), transparent 60%)" />

    <div v-if="home" style="position:relative;display:flex;flex-grow:1;min-height:0;width:100%">
      <div style="position:absolute;left:540px;top:40px;width:720px;height:560px;display:flex;background:radial-gradient(360px 300px at 50% 50%, rgba(124,123,255,0.25), transparent 70%)" />
      <div style="position:absolute;left:581px;top:60px;width:806px;height:518px;display:flex;border-radius:16px;overflow:hidden">
        <img :src="desktop" style="display:flex;width:806px;height:518px">
        <div style="position:absolute;left:0;top:0;width:806px;height:518px;display:flex;border-radius:16px;border:1px solid rgba(255,255,255,0.12)" />
      </div>
      <div style="position:absolute;left:514px;top:165px;width:206px;height:416px;display:flex;padding:8px;border-radius:32px;background:#000">
        <div style="display:flex;width:190px;height:400px;border-radius:25px;overflow:hidden">
          <img :src="phone" style="display:flex;width:190px;height:400px">
        </div>
      </div>
      <div style="position:absolute;left:68px;top:0;bottom:0;width:420px;display:flex;flex-direction:column;justify-content:center">
        <img :src="logo" style="width:100px;height:100px;margin-bottom:26px">
        <div style="display:flex;font-size:80px;font-weight:700;letter-spacing:-1.5px;line-height:1;color:#eef0fb">
          Tsumiru
        </div>
        <div v-if="description" style="display:flex;font-size:30px;font-weight:500;line-height:1.35;color:#d4d8f0;margin-top:26px">
          {{ description }}
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;width:420px;margin-top:30px">
          <span style="display:flex;font-size:16px;font-weight:600;color:#eef0fb;padding:7px 14px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14)">Android</span>
          <span style="display:flex;font-size:16px;font-weight:600;color:#eef0fb;padding:7px 14px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14)">iOS</span>
          <span style="display:flex;font-size:16px;font-weight:600;color:#eef0fb;padding:7px 14px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14)">Linux</span>
          <span style="display:flex;font-size:16px;font-weight:600;color:#eef0fb;padding:7px 14px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14)">macOS</span>
          <span style="display:flex;font-size:16px;font-weight:600;color:#eef0fb;padding:7px 14px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14)">Windows</span>
          <span style="display:flex;font-size:16px;font-weight:600;color:#eef0fb;padding:7px 14px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14)">Web</span>
        </div>
      </div>
    </div>

    <div v-else style="position:relative;display:flex;flex-direction:column;justify-content:space-between;flex-grow:1;min-height:0;width:100%;padding:56px 64px">
      <div v-if="logo" style="position:absolute;right:80px;top:160px;width:300px;height:300px;display:flex;opacity:0.1">
        <img :src="logo" style="width:100%;height:100%">
      </div>
      <div style="position:relative;display:flex;justify-content:space-between;align-items:center;width:100%">
        <div style="display:flex;align-items:center">
          <img v-if="logo" :src="logo" style="width:56px;height:56px">
          <div v-if="title !== 'Tsumiru'" style="display:flex;font-size:40px;font-weight:600;color:#eef0fb;margin-left:16px">
            Tsumiru
          </div>
        </div>
        <div v-if="dir" style="display:flex;align-items:center;color:#9aa0c4">
          <div style="display:flex;font-size:36px;font-weight:600;margin-right:8px" v-html="dir" />
          <svg v-if="dir === 'FAQ'" width="48" height="48" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M120-55.5q-15.5 0-26.5-11T82.5-93q0-15.5 11-26.5t26.5-11h720q15.5 0 26.5 11t11 26.5q0 15.5-11 26.5t-26.5 11H120ZM207-170q-15.5 0-26.5-11t-11-26.5v-193q-32.5-54-50.75-114.25T100.5-639.5q0-59 15.25-117.5t36.75-116q7.5-20 24.5-32.25t38-12.25q26.5 0 44.75 18.5T276-854.5l-5.5 92q-3 48.5 11 93t41.75 78Q351-558 391-537.75t89 20.25q59.5 0 116.5 11.5T697-471.5q43.5 23 68.25 58.5T790-326v118.5q0 15.5-11 26.5t-26.5 11h-355v-32q0-35 24-60.25T480-287.5h120q15.5 0 26.5-11t11-26.5q0-15.5-11-26.5t-26.5-11H480q-66 0-111.75 47T322.5-202v32H207Zm273-392.5q-65.5 0-111.5-46t-46-111.5q0-65.5 46-111.5t111.5-46q65.5 0 111.5 46t46 111.5q0 65.5-46 111.5t-111.5 46Z" /></svg>
          <svg v-else-if="dir === 'Guide'" width="48" height="48" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M831-327.5V-558L516-386.5q-17 9-36 9t-36-9l-329.5-180q-10-5.5-14.5-14.25t-4.5-18.75q0-10 4.5-18.75t14.5-14.25l330-179.5q8.5-5 17.25-7t18.25-2q9.5 0 18.25 2t17.25 7l371 202q9 5 14.25 13.75T906-577v249.5q0 15.5-11 26.5t-26.5 11q-15.5 0-26.5-11t-11-26.5Zm-387 173-197-107q-18.5-10-28.75-27.75T208-328v-149.5L444-349q17 9 36 9t36-9l236-128.5V-328q0 21-10.25 38.75T713-261.5l-197 107q-8.5 5-17.5 7t-18.5 2q-9.5 0-18.5-2t-17.5-7Z" /></svg>
          <svg v-else-if="dir === 'News'" width="48" height="48" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M157.5-122.5q-31 0-53-22t-22-53v-614q0-6.5 5.5-9t10.5 2.5l35.5 35.5q5.5 5.5 13 5.25t13-5.75l40-40q5.5-5.5 13-5.75t13 5.25l41 41q5.5 5.5 13 5.5t13-5.5l41-41q5.5-5.5 13-5.25t13 5.75l40 40q5.5 5.5 13 5.75t13-5.25l41-41q5.5-5.5 13-5.5t13 5.5l41 41q5.5 5.5 13 5.25t13-5.75l40-40q5.5-5.5 13-5.75t13 5.25l41 41q5.5 5.5 13 5.5t13-5.5l41-41q5.5-5.5 13-5.25t13 5.75l40 40q5.5 5.5 13 5.75t13-5.25l35.5-35.5q5-5 10.5-2.5t5.5 9v614q0 31-22 53t-53 22h-645Zm0-75h285v-245h-285v245Zm360 0h285v-85h-285v85Zm0-160h285v-85h-285v85Zm-360-160h645v-125h-645v125Z" /></svg>
          <svg v-else-if="dir === 'Changelog'" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M5 7h5v6H5zm14 10H5v-2h14zm0-4h-7v-2h7zm0-4h-7V7h7z" /></svg>
        </div>
      </div>
      <div
        :style="`position:relative;display:flex;flex-direction:column;align-items:flex-start;width:100%;max-width:700px;${dir === 'Changelog' ? 'margin-top:auto;margin-bottom:auto;' : ''}`"
      >
        <div style="display:flex;font-size:60px;font-weight:700;line-height:1.15;color:#eef0fb" v-html="title" />
        <div v-if="description" style="display:flex;flex-direction:column;margin-top:12px;font-size:36px;color:#9aa0c4" v-html="description" />
      </div>
      <div v-if="dir === 'Changelog'" style="position:relative;display:flex;width:100%;justify-content:flex-end;font-size:36px;color:#9aa0c4">
        View full changelog for all changes
      </div>
    </div>
    <div style="display:flex;flex-shrink:0;height:8px;width:100%;background:linear-gradient(90deg, #7c7bff, #33d6ff)" />
  </div>
</template>
