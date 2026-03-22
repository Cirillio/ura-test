<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'
import { useWindowScroll } from '@vueuse/core'

// ЗАКОН: Нет "магическим числам".
// Устанавливаем порог скролла. Значение больше 0 предотвращает
// ложные срабатывания (микро-дребезг) при касании на мобильных устройствах (iOS bounce effect).
const SCROLL_THRESHOLD: number = 10

// VueUse безопасно возвращает 0 при SSR-рендеринге, обращение к window не вызовет ошибку 500.
const { y } = useWindowScroll()

// ЗАКОН: Изоляция бизнес-логики и типизация.
// Вычисляемое свойство выступает единым источником истины для UI.
const isScrolled = computed<boolean>(() => y.value > SCROLL_THRESHOLD)

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})

const MAIN_ROUTES: NavigationMenuItem[] = [
  {
    label: 'Кружки',
    to: '/clubs'
  },
  {
    label: 'События',
    to: '/#events'
  },
  {
    label: 'О нас',
    to: '/about'
  },
  {
    label: 'Галерея',
    to: '/gallery'
  }

]
</script>

<template>
  <header
    class="fixed z-99 top-0 left-0 right-0 flex  justify-center transition-all duration-300"
    :class="{ 'bg-white/75 backdrop-blur-sm': isScrolled && isMounted,
              'bg-white': !isMounted }"
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

        <UTooltip
          :content="{
            align: 'end'
          }"
          :delay-duration="75"
          :ui="{
            content: 'shadow-none ring-0 bg-secondary text-white p-4'
          }"
        >
          <UButton
            color="secondary"
            icon="ph:pencil-duotone"
            class="text-base h-full font-semibold p-2"
            :ui="{
              trailingIcon: 'size-5'
            }"
          />
          <template #content>
            <span class="text-base font-bold">Оформить абонемент</span>
          </template>
        </UTooltip>
        <UTooltip
          :content="{
            align: 'end'
          }"
          :delay-duration="75"
          :ui="{
            content: 'shadow-none ring-0 bg-primary text-white p-4'
          }"
        >
          <UButton
            variant="ghost"
            icon="ph:ticket"
            class="text-base h-full font-semibold p-2"
            :ui="{
              trailingIcon: 'size-5'
            }"
          />
          <template #content>
            <span class="text-base font-bold">Мой абонемент</span>
          </template>
        </UTooltip>
      </div>
    </UContainer>
  </header>
</template>
