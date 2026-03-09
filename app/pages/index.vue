<script lang="ts" setup>
const CENTER_STATS: {
  icon: string
  bgColorFrom: string
  bgColorTo: string
  label: string
  value: string
}[] = [
  {
    icon: 'ph:mask-happy-light',
    bgColorFrom: 'from-amber-400',
    bgColorTo: 'to-amber-200',
    label: 'Счастливых ребят',
    value: '300+'
  },
  {
    icon: 'ph:shooting-star-light',
    bgColorFrom: 'from-emerald-500',
    bgColorTo: 'to-emerald-300',
    label: 'Работаем с 2023',
    value: '3 года'
  },
  {
    icon: 'ph:book-bookmark-light',
    bgColorFrom: 'from-cyan-500',
    bgColorTo: 'to-cyan-300',
    label: 'Пробное занятие',
    value: '1200р'
  }
]
</script>

<template>
  <section class="h-[calc(100dvh-var(--header-height))] flex w-full">
    <div class="grid  min-w-0 size-full grid-cols-2 grid-rows-2 py-6 gap-6">
      <section
        class="relative flex flex-col gap-6 items-center bg-white rounded-lg p-12 justify-center"
      >
        <span class="absolute bottom-3 font-semibold text-default right-1/2 translate-x-1/2">
          Абонемент от 4000р
        </span>
        <UBadge
          variant="soft"
          color="secondary"
          size="xl"
          label="Центр умного развития"
          leading-icon="ph:sun-horizon"
        />
        <h1
          class="text-2xl mt- items-center flex flex-col gap-4 min-[394px]:text-4xl md:text-5xl xl:text-8xl font-extrabold text-secondary leading-[0.7]"
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
          class="text-xs text-center my-auto min-[394px]:text-base md:text-3xl font-bold text-default/85 leading-tight max-w-2xl"
        >
          <!-- Здесь мы помогаем школьникам формулировать желания, оценивать их
          актуальность, планировать этапы их реализации, пробовать, принимать
          любой результат, рефлексировать, экологично справляться с эмоциями,
          бережно и с заботой относиться к себе и другим. -->

          Место, где дети учатся думать, творить и верить в себя.
          Кружки, продлёнка и каникулярные программы для школьников — в уютной атмосфере рядом с домом.
        </h3>
        <div class="flex gap-3 items-center">
          <UButton
            size="xl"
            class="px-5 py-2.5 group"
          >
            <span class="text-2xl font-semibold">
              Записаться
            </span>
            <UIcon
              name="ph:arrow-right"
              class="size-6 transition group-hover:translate-x-1.5"
            />
          </UButton>
        </div>
      </section>

      <div class="rounded-lg flex flex-col items-center justify-between gap-6 bg-white p-12">
        <div
          class="relative grid min-h-0 w-full flex-1"
        >
          <!-- Hurray -->
          <NuxtImg
            src="/URA.png"
            class="rotate-14 absolute h-42 left-1/2 drop-shadow-2xl/5 z-10 -translate-x-1/4 top-12 floating-element"
          />
          <!-- Sun -->
          <NuxtImg
            src="/Sun.png"
            class="rotate-5 object-contain min-h-0 drop-shadow-2xl drop-shadow-black translate-y-2 h-full scale-90 flex-1 drop-shadow-2xl/5 object-center w-full z-0 floating-element-delayed"
          />
        </div>
      </div>

      <div class="flex rounded-lg bg-white overflow-hidden">
        <div class="grid relative">
          <button class="cursor-pointer rotate-5 items-start transition duration-150 flex floating-element backdrop-blur-md text-white flex-col absolute top-12 left-28 rounded-md bg-sky-300 hover:to-sky-100 hover:from-sky-400 active:scale-99 active:to-sky-100 active:from-sky-400 bg-linear-to-tr p-4">
            <UIcon
              name="ph:brain-light"
              class="mb-2 size-10"
            />
            <span class="font-semibold text-lg font-mono leading-4.5">Кружок</span>
            <span class="font-semibold text-lg font-mono leading-4.5">мышления</span>
          </button>

          <button class="cursor-pointer items-center transition duration-150 flex floating-element backdrop-blur-md text-white flex-col gap-2 absolute -translate-x-1/4 top-38 left-1/2 rounded-md from-lime-300 to-lime-300 hover:to-lime-100 hover:from-lime-400 active:scale-99 active:to-lime-100 active:from-lime-400 bg-linear-to-tr p-4">
            <UIcon
              name="ph:translate-light"
              class=" size-10"
            />
            <span class="font-semibold text-xl font-mono leading-4.5">Английский</span>
            <span class="font-semibold text-xl font-mono leading-4.5">язык</span>
          </button>

          <button class="cursor-pointer -rotate-5 items-start transition duration-150 flex floating-element backdrop-blur-md text-white flex-col gap-2 absolute top-12 right-24 rounded-md from-yellow-300 to-yellow-300 hover:to-yellow-100 hover:from-yellow-400 active:scale-99 active:to-yellow-100 active:from-yellow-400 bg-linear-to-tr p-4">
            <UIcon
              name="ph:sunglasses-light"
              class=" size-8"
            />
            <span class="font-semibold text-lg font-mono leading-4.5">Каникулы</span>
          </button>
          <NuxtImg
            src="/ColorfulHouses.jpg"
            class="w-full h-full object-bottom-left object-contain"
          />
        </div>
      </div>

      <div class="rounded-lg flex flex-col justify-between items-center bg-white p-12">
        <div class="flex gap-6">
          <div
            v-for="stat in CENTER_STATS"
            :key="stat.label + stat.value"
            class="rounded-md text-white bg-linear-to-tr hover:scale-102 transition-all flex-col flex gap-3 items-center justify-center p-6 flex-1"
            :class="[stat.bgColorFrom, stat.bgColorTo]"
          >
            <UIcon
              :name="stat.icon"
              class="size-16 rotate-5"
            />
            <span class="text-4xl font-bold">{{ stat.value }}</span>
            <span class="text-2xl font-semibold text-center">{{ stat.label }}</span>
          </div>
        </div>
        <p class="font-bold text-3xl text-center text-primary">
          Запишитесь на пробное занятие или закажите звонок!
        </p>
        <div class="flex gap-6 w-full">
          <UButton
            size="xl"
            color="primary"
            class="py-2.5 items-center justify-center flex-1"
          >
            <span class="text-2xl font-semibold">Познакомиться</span>
            <UIcon
              class="size-7"
              :name="'ph:hand-heart-light'"
            />
          </UButton>
          <UButton
            size="xl"
            color="secondary"
            class="py-2.5 items-center justify-center  flex-1"
          >
            <span class="text-2xl font-semibold">Заказать звонок</span>
            <UIcon
              class="size-7"
              :name="'ph:phone-light'"
            />
          </UButton>
        </div>
      </div>
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
