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
  <header class="fixed top-0 backdrop-blur-3xl bg-default/50 left-0 right-0 h-(--header-height-full)">
    <UContainer class="h-full flex items-center justify-center flex-col">
      <div class="flex relative w-full  max-h-(--header-height) items-center justify-between">
        <!-- LOGO -->
        <NuxtLink
          to="/"
          class="flex items-center h-full gap-2 cursor-pointer group header-left rounded-lg bg-white px-6 py-2 outline-0 focus-visible:opacity-90 focus-visible:ring-primary ring-2 ring-transparent"
        >
          <NuxtImg
            src="/Sun.png"
            class="h-full group-hover:rotate-10 delay-75 duration-300 transition-transform ease-in-out"
          />

          <div class="flex items-center flex-col">
            <h6
              class="text-xl flex gap-1 font-extrabold text-secondary transition-colors duration-300"
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
            <h6 class="text-xs -mt-1.5 text-primary font-bold">
              Центр умного развития
            </h6>
          </div>
        </NuxtLink>

        <!-- NAV -->
        <nav class="header-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex space-x-2 rounded-lg bg-white p-2">
          <UButton
            v-for="r in MAIN_ROUTES"
            :key="r.label"

            :label="r.label"
            :to="r.to"

            :variant="'ghost'"

            class="text-base min-h-full flex-1 px-5 font-semibold"
          />
        </nav>

        <!-- ACTION -->

        <div class="header-right h-full rounded-lg bg-white p-2">
          <UButton
            label="Записаться"
            trailing-icon="ph:user-plus-bold"
            class="text-base h-full font-semibold px-4"
            :ui="{
              trailingIcon: 'size-5'
            }"
          />
        </div>
      </div>
    </UContainer>
  </header>
</template>
