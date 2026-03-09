<script lang="ts" setup>
const CENTER_STATS: {
  icon: string
  textColor: string
  label: string
  value: string
}[] = [
  {
    icon: 'ph:mask-happy',
    textColor: 'text-amber-400',
    label: 'Счастливых ребят',
    value: '300+'
  },
  {
    icon: 'ph:shooting-star',
    textColor: 'text-emerald-500',
    label: 'Работаем с 2023',
    value: '3 года'
  },
  {
    icon: 'ph:book-bookmark',
    textColor: 'text-cyan-500',
    label: 'Пробное занятие',
    value: '1200р'
  }
]
</script>

<template>
  <section class="h-with-header flex w-full">
    <div class="grid  min-w-0 size-full grid-cols-2 grid-rows-2 pb-4 gap-4">
      <!-- Top stretch -->
      <section
        class="relative overflow-hidden col-span-2 flex flex-col gap-6 items-center bg-white rounded-lg p-4 justify-center"
      >
        <UIcon
          name="ph:book-open-duotone"
          class="absolute size-90 floating-element-delayed z-0 text-primary/10 -bottom-24 rotate-15 -left-32"
        />
        <UIcon
          name="ph:balloon-duotone"
          class="absolute size-72 floating-element-delayed z-0 text-primary/10 bottom-18 -rotate-5 -right-32"
        />
        <div class="flex flex-col gap-6 items-center h-full">
          <div class="flex flex-col items-center mt-auto gap-6">
            <div class="flex text-yellow-300 h-fit aspect-square">
              <UIcon
                name="ph:sun-horizon-duotone"
                class="size-10"
              />
            </div>
            <!-- <NuxtImg
              src="/Sun.png"
              class="rotate-15 h-24 shrink z-0 floating-element-delayed"
            /> -->
            <h1
              class="text-2xl items-center flex gap-4 min-[394px]:text-4xl md:text-5xl xl:text-6xl font-extrabold text-secondary leading-[0.7]"
            >
              <span class="flex">
                <span class="text-primary">У</span>
                лица
              </span>

              <span class="flex">
                <span class="text-primary">РА</span>
                дости
              </span>
            </h1>

            <h3
              class="text-xs text-center min-[394px]:text-base md:text-xl font-bold text-default/85 leading-tight max-w-2xl"
            >
              Место, где дети учатся думать, творить и верить в себя.
              Кружки, продлёнка и каникулярные программы для школьников — в уютной атмосфере рядом с домом.
            </h3>
          </div>
          <div class="flex flex-col mt-auto gap-1 mb-4 items-center">
            <span class="font-semibold text-base text-default">
              Абонемент от <span class="text-primary">4000</span>р
            </span>
            <UButton
              size="xl"
              class="px-5 py-2 group"
            >
              <span class="text-xl font-semibold">
                Записаться
              </span>
              <UIcon
                name="ph:user-plus-bold"
                class="size-6 transition group-hover:translate-x-1.5 group-hover:rotate-5 group-hover:scale-110"
              />
            </UButton>
          </div>
        </div>
      </section>

      <!-- Left bottom -->
      <section class="grid relative rounded-lg bg-white overflow-hidden">
        <UIcon
          name="ph:cloud-sun-duotone"
          class="absolute size-80 text-secondary/5 z-0 -top-6 -right-16"
        />
        <div class="grid z-10 relative">
          <button class="cursor-pointer z-20 rotate-5 items-start transition duration-150 hover:bg-primary/5 hover:opacity-75 active:scale-98 flex floating-element backdrop-blur-md text-sky-500 flex-col absolute top-12 left-16 rounded-md bg-default p-4">
            <UIcon
              name="ph:brain-light"
              class="mb-2 size-6"
            />
            <span class="font-semibold text-sm font-mono leading-4.5">Кружок</span>
            <span class="font-semibold text-sm font-mono leading-4.5">мышления</span>
          </button>

          <button class="cursor-pointer z-20 items-center transition duration-150 hover:bg-primary/5 hover:opacity-75 active:scale-98 flex floating-element backdrop-blur-md text-green-600 flex-col gap-2 absolute -translate-x-1/4 top-24 left-1/2 rounded-md bg-default  p-4">
            <UIcon
              name="ph:translate-light"
              class=" size-7"
            />
            <span class="font-semibold text-base font-mono leading-4.5">Английский</span>
            <span class="font-semibold text-base font-mono leading-4.5">язык</span>
          </button>

          <button class="cursor-pointer z-20 -rotate-5 items-start transition duration-150 hover:bg-primary/5 hover:opacity-75 active:scale-98 flex floating-element backdrop-blur-md text-amber-400 flex-col gap-2 absolute top-14 right-16 rounded-md bg-default  p-4">
            <UIcon
              name="ph:sunglasses-light"
              class=" size-6"
            />
            <span class="font-semibold text-sm font-mono leading-4.5">Каникулы</span>
          </button>
          <NuxtImg
            src="/ColorfulHouses.png"
            class="w-full h-full z-10 object-bottom-left translate-y-12 object-contain"
          />
        </div>
      </section>

      <!-- Right bottom -->
      <section class="rounded-lg flex overflow-hidden relative flex-col justify-between items-center bg-white p-4">
        <UIcon
          name="ph:rainbow-light"
          class="absolute size-108 z-0 text-secondary/5 -bottom-36 rotate-15 -left-32"
        />
        <div class="flex flex-col z-10 size-full ">
          <div class="flex gap-4">
            <div
              v-for="stat in CENTER_STATS"
              :key="stat.label + stat.value"
              class="rounded-md bg-default text-center hover:scale-102 transition-all flex-col flex gap-2 items-center justify-center p-4 flex-1"
              :class="[stat.textColor]"
            >
              <UIcon
                :name="stat.icon"
                class="size-12 rotate-5 -translate-x-0.5"
              />
              <span class="text-2xl font-bold">{{ stat.value }}</span>
              <span class="text-lg leading-tight font-bold text-center">{{ stat.label }}</span>
            </div>
          </div>
          <p class="font-bold my-auto text-2xl text-center text-primary">
            Запишитесь на пробное занятие или закажите звонок!
          </p>
          <div class="flex gap-4 w-full">
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
      </section>
    </div>
  </section>
</template>

<style scoped>
.floating-arrow {
  animation: arrow-float 1s ease-in-out infinite;
  animation-delay: 0s;
  transform-origin: center center;
}

@keyframes arrow-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}

.floating-element {
  animation: float 6s ease-in-out infinite;
  transform-origin: center center;
}

.floating-element-delayed {
  animation: float 5s ease-in-out infinite;
  animation-delay: 1s;
  transform-origin: center center;
}

@keyframes float {
  0% {
    transform: translateY(0px) translateX(var(--tw-translate-x, 0));
  }
  50% {
    transform: translateY(-16px) translateX(var(--tw-translate-x, 0));
  }
  100% {
    transform: translateY(0px) translateX(var(--tw-translate-x, 0));
  }
}
</style>
