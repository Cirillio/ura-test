<template>
  <section class="rounded-lg flex overflow-hidden relative flex-col justify-between items-center bg-white p-4">
    <UIcon
      name="ph:rainbow-light"
      class="absolute size-108 z-0 text-sky-400/5 -bottom-36 rotate-15 -left-32"
    />
    <div class="flex flex-col z-10 size-full ">
      <div class="flex gap-4">
        <div
          v-for="stat in CENTER_STATS"
          :key="stat.label + stat.value"
          class="rounded-md bg-default text-center hover:scale-102 transition-all flex-col flex gap-2 items-center justify-center p-4 flex-1"
          :class="stat.textColor"
        >
          <UIcon
            :name="stat.icon"
            class="size-12 rotate-5 -translate-x-0.5"
          />
          <span class="text-2xl font-bold">{{ stat.value }}</span>
          <span class="text-lg leading-tight font-bold text-center">{{ stat.label }}</span>
        </div>
      </div>
      <div class="flex flex-col my-auto gap-4 w-full">
        <p class="font-bold my-auto text-balance text-2xl text-center text-primary">
          Запишитесь на пробное занятие или закажите звонок!
        </p>
        <div class="flex gap-4">
          <UButton
            size="xl"
            color="primary"
            variant="soft"
            class="py-2 items-center justify-center flex-1"
          >
            <span class="text-lg font-semibold">Познакомиться</span>
            <UIcon
              class="size-5.5"
              :name="'ph:hand-heart-light'"
            />
          </UButton>
          <UButton
            size="xl"
            color="secondary"
            class="py-2 items-center justify-center  flex-1"
          >
            <span class="text-lg font-semibold">Заказать звонок</span>
            <UIcon
              class="size-5.5"
              :name="'ph:phone-light'"
            />
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const CENTER_STATS: {
  icon: string
  textColor: string
  label: string
  value: string
}[] = [
  {
    icon: 'ph:mask-happy-duotone',
    textColor: 'text-amber-400',
    label: 'Счастливых ребят',
    value: '300+'
  },
  {
    icon: 'ph:shooting-star-duotone',
    textColor: 'text-emerald-500',
    label: 'Работаем с 2023',
    value: '3 года'
  },
  {
    icon: 'ph:book-bookmark-duotone',
    textColor: 'text-cyan-500',
    label: 'Пробное занятие',
    value: '1200р'
  }
]
</script>

<style>

</style>
