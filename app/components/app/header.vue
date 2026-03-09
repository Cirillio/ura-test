<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const MAIN_ROUTES: NavigationMenuItem[] = [
  {
    label: 'О нас',
    to: '/about'
  },
  {
    label: 'Кружки',
    to: '/clubs'
  },
  {
    label: 'Галерея',
    to: '/about'
  }

]
</script>

<template>
  <header class="fixed top-0 backdrop-blur-3xl bg-default/50 left-0 right-0 h-(--header-height)">
    <UContainer class="h-full">
      <div class="flex relative w-full h-full items-center justify-between">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 cursor-pointer group header-left rounded-lg bg-white px-6 py-2 outline-0 focus-visible:opacity-90 focus-visible:ring-primary ring-2 ring-transparent"
        >
          <NuxtImg
            src="/Sun.png"
            class="h-12 group-hover:rotate-10 delay-75 duration-300 transition-transform ease-in-out"
          />

          <div class="flex flex-col">
            <h6
              class="text-2xl flex gap-1 font-extrabold text-secondary transition-colors duration-300"
            >
              <span class="flex">
                <span class="text-primary"> У </span>
                лица
              </span>
              <span class="flex">
                <span class="text-primary"> Ра </span>
                <span> дости </span>
              </span>
            </h6>
            <h6 class="text-sm -mt-2.5 text-primary font-bold">
              Центр умного развития
            </h6>
          </div>
        </NuxtLink>
        <div class="header-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-fit flex space-x-6 rounded-lg bg-white px-6 py-2">
          <UButton
            v-for="r in MAIN_ROUTES"
            :key="r.label"

            :label="r.label"
            :to="r.to"

            :variant="'link'"

            class="text-lg font-semibold"
          />
        </div>

        <div class="header-right rounded-lg bg-white px-2 py-2">
          <UButton
            label="Записаться"
            leading-icon="ph:note-pencil-bold"
            class="text-lg font-semibold px-4"
          />
        </div>
      </div>
    </UContainer>
  </header>
</template>
