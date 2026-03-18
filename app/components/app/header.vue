<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

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
    to: '/gallery'
  }

]
</script>

<template>
  <header
    class="fixed z-99 top-0 left-0 right-0 flex justify-center transition-all duration-150"
    :class="scrolled ? 'bg-white/75 backdrop-blur-sm' : 'bg-transparent'"
  >
    <UContainer class="flex relative w-full items-center p-2 justify-between h-(--header-height)">
      <!-- LOGO -->
      <NuxtLink
        to="/"
        class="flex items-center h-full gap-4 cursor-pointer rounded-md group header-left outline-0 focus-visible:opacity-90 focus-visible:ring-primary ring-2 ring-transparent"
      >
        <NuxtImg
          src="/Sun.png"
          class="h-full group-hover:rotate-10 delay-75  duration-300 transition-transform ease-in-out"
        />

        <div class="flex items-start flex-col">
          <h6
            class="text-3xl flex gap-1 font-extrabold text-secondary transition-colors duration-300"
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
          <h6 class="text-sm -mt-1.5 text-primary font-bold">
            Центр умного развития
          </h6>
        </div>
      </NuxtLink>

      <div class="header-right flex gap-4 items-center">
        <!-- NAV -->
        <nav class=" h-full flex space-x-2">
          <UButton
            v-for="r in MAIN_ROUTES"
            :key="r.label"

            :label="r.label"
            :to="r.to"

            :variant="'ghost'"
            :active-variant="'soft'"

            class="text-base min-h-full flex-1 px-5 font-semibold"
          />
        </nav>

        <!-- ACTION -->

        <UButton
          label="Записаться"
          trailing-icon="ph:rocket-launch-duotone"
          class="text-base h-full font-semibold py-2 px-4"
          :ui="{
            trailingIcon: 'size-5'
          }"
        />
      </div>
    </UContainer>
  </header>
</template>
