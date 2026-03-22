<script lang="ts" setup>
import type { ClubShort } from '~/components/home/TopClubCard.vue'

const galleryImages: { src: string, alt: string }[] = [
  { src: 'club_1.jpg', alt: 'Настольные игры' },
  { src: 'event-1.jpeg', alt: 'Театральные игры' },
  { src: 'club_2.jpg', alt: 'Рисование' },
  { src: 'event-4.jpg', alt: 'Космическая лекция' }
]

// --- FAQ ---
const faqItems = [
  {
    label: 'С какого возраста можно записаться?',
    icon: 'ph:baby',
    content: 'Мы принимаем детей от 2 лет. Для самых маленьких есть специальные развивающие и сенсорные занятия с педагогом, а для ребят постарше — кружки, продлёнка и каникулярные программы.'
  },
  {
    label: 'Как записаться на пробное занятие?',
    icon: 'ph:pencil-simple',
    content: 'Оставьте заявку через форму на сайте или закажите обратный звонок — мы свяжемся с вами и подберём удобное время. Пробное занятие стоит 1 200 ₽.'
  },
  {
    label: 'Есть ли абонементы и скидки?',
    icon: 'ph:ticket',
    content: 'Да! Мы предлагаем абонементы на 4 и 8 занятий со скидкой до 20%. Для многодетных семей и при записи на несколько направлений — дополнительные скидки.'
  },
  {
    label: 'Какие направления у вас есть?',
    icon: 'ph:compass',
    content: 'Настольные игры, рисование, пианино, каникулярные программы, театральные игры и многое другое. Полный список — на странице «Кружки».'
  },
  {
    label: 'Где вы находитесь и как добраться?',
    icon: 'ph:map-pin',
    content: 'Наш центр расположен по адресу, который указан на странице «О нас». Мы находимся в шаговой доступности от остановок общественного транспорта. Есть парковка для автомобилей.'
  }
]

// club_1.jpg - настольные игры, club_2.jpg - рисование, club_3.jpg - пианино, club_4.jpg - каникулы

const clubs: ClubShort[] = [
  {
    title: 'Настольные игры',
    shortDesc: 'Развиваем логику и стратегическое мышление через увлекательные настольные игры',
    img: 'club_1.jpg',
    icon: 'ph:game-controller',
    iconColor: 'text-blue-500',
    to: '/clubs#board-games'
  },
  {
    title: 'Каникулы',
    shortDesc: 'Организуем яркий и полезный досуг во время школьных каникул. Enter your description',
    img: 'club_4.jpg',
    icon: 'ph:sun',
    iconColor: 'text-orange-500',
    to: '/clubs#holidays'
  },
  {
    title: 'Рисование',
    shortDesc: 'Раскрываем творческий потенциал через живопись и художественное творчество',
    img: 'club_2.jpg',
    icon: 'ph:paint-brush',
    iconColor: 'text-pink-500',
    to: '/clubs#drawing'
  },
  {
    title: 'Пианино',
    shortDesc: 'Обучаем игре на фортепиано с нуля',
    img: 'club_3.jpg',
    icon: 'ph:piano-keys',
    iconColor: 'text-purple-500',
    to: '/clubs#piano'
  }
]

const carousel = useTemplateRef('carousel')
const carouselIndex = ref(0)

function goPrev() {
  if (carouselIndex.value === 0) {
    carousel.value?.emblaApi?.scrollTo(clubs.length - 1)
    return
  }
  carousel.value?.emblaApi?.scrollPrev()
}

function goNext() {
  if (carouselIndex.value === clubs.length - 1) {
    carousel.value?.emblaApi?.scrollTo(0)
    return
  }
  carousel.value?.emblaApi?.scrollNext()
}

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

// event-1.jpeg - театральные игры, event-2.jpg - игры для самых маленьких, event-3.jpg - игровой клуб, event-4.jpg - космическая лекция

const events: {
  id: string
  label: string
  description: string
  img: string
  date: string
  time: string
  price: string | null
}[] = [
  {
    id: 'event-1',
    label: 'Театральные игры',
    description: 'Интерактивные занятия с элементами актёрского мастерства для детей 6–10 лет.',
    img: 'event-1.jpeg',
    date: '2026-04-12',
    time: '11:00',
    price: '500р'
  },
  {
    id: 'event-2',
    label: 'Игры для самых маленьких',
    description: 'Развивающие и сенсорные игры для детей 2–4 лет с педагогом.',
    img: 'event-2.jpg',
    date: '2026-04-15',
    time: '10:00',
    price: '300р'
  },
  {
    id: 'event-3',
    label: 'Игровой клуб',
    description: 'Свободная игровая зона и настольные игры для семейных посещений.',
    img: 'event-3.jpg',
    date: '2026-04-18',
    time: '17:00',
    price: null
  },
  {
    id: 'event-4',
    label: 'Космическая лекция',
    description: 'Путешествие по Солнечной системе с демонстрациями и мастер-классом.',
    img: 'event-4.jpg',
    date: '2026-04-20',
    time: '18:30',
    price: '700р'
  }
]

const showAllEvents = ref(false)
const visibleEvents = computed(() => showAllEvents.value ? events : events.slice(0, 3))
</script>

<template>
  <div class="flex flex-col w-full min-w-0">
    <!-- Hero -->
    <!-- <HomeHeroSection /> -->

    <section class="z-0 bg-linear-to-br from-primary/5 via-default to-secondary/10 flex w-full overflow-hidden py-(--header-height) items-center justify-center h-dvh">
      <UContainer class="grid h-full grid-cols-2">
        <!-- Title block -->
        <div class="flex flex-col justify-center gap-4 sm:gap-8 px-2 sm:px-4">
          <!-- Main heading -->
          <h1
            class="flex flex-col font-extrabold leading-[0.88] text-secondary text-5xl min-[480px]:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span>
              <span class="text-primary">У</span>лица
            </span>
            <span>
              <span class="text-primary">РА</span>дости
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="text-sm sm:text-base md:text-xl font-semibold text-default/75 leading-snug max-w-[18rem] sm:max-w-sm">
            Место, где дети учатся думать, творить и верить в себя.
            Кружки, продлёнка и каникулярные программы — в уютной атмосфере рядом с домом.
          </p>

          <!-- Mini social proof -->
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-bold text-default/55">
            <span
              v-for="(stat, i) in CENTER_STATS"
              :key="stat.label"
              class="flex items-center gap-1.5"
              :class="[i === 1 && 'hidden sm:flex', i === 2 && 'hidden md:flex']"
            >
              <UIcon
                :name="stat.icon"
                class="size-4 shrink-0"
                :class="stat.textColor"
              />
              {{ stat.value }} {{ stat.label }}
            </span>
          </div>

          <!-- CTAs -->
          <div class="flex gap-4 items-center">
            <UButton
              size="xl"
              class="px-5 py-2.5 w-fit group"
            >
              <span class="text-xl font-bold">Записаться</span>
              <UIcon
                name="ph:rocket-launch-duotone"
                class="size-6 transition group-hover:translate-x-1.5 group-hover:rotate-5 group-hover:scale-110"
              />
            </UButton>
            <UButton
              size="lg"
              color="secondary"
              class="px-4 py-2 w-fit group"
            >
              <span class="text-lg font-bold">Оформить абонемент</span>
              <UIcon
                name="ph:pencil-duotone"
                class="size-5.5 transition group-hover:translate-x-1.5 group-hover:rotate-5 group-hover:scale-110"
              />
            </UButton>
          </div>

          <div class="flex flex-col gap-1">
            <span class="text-default/75 ml-4 text-lg font-bold">Или закажите звонок!</span>

            <HomeCallbackForm bg="white" />
          </div>
        </div>

        <!-- Image block -->
        <div class="relative flex flex-col justify-center size-full">
          <div class="relative aspect-square rounded-md p-4 flex items-center justify-center">
            <picture
              id="hero_main_bg"
              class="rounded-full p-4 z-10 bg-linear-to-b from-amber-100 via-sky-50 to-default relative size-full overflow-hidden aspect-square"
            >
              <img
                class="scale-120 w-full h-full z-10 relative translate-y-8 object-bottom object-contain"
                src="/ColorfulHouses.png"
                alt="joy_street_hero"
              >

              <div class="rounded-full absolute z-0 top-2 left-2 right-2 bottom-2 border-6 border-white" />
            </picture>

            <!-- SUN -->
            <picture
              class="absolute floating-element size-100 rotate-15 z-10 -top-16 left-2/3 -translate-x-1/4"
            >
              <img
                src="/Sun.png"
                alt="joy_street_hero"
                class="size-full object-bottom object-contain"
              >
            </picture>

            <!-- URA -->
            <picture
              class="absolute floating-element -rotate-10 size-92 z-10 -top-72 left-1/2 -translate-x-1/5"
            >
              <img
                src="/URA.png"
                alt="joy_street_hero"
                class="size-full object-bottom object-contain"
              >
            </picture>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Short About Us Section -->
    <section class="bg-white flex overflow-hidden w-full relative py-20 z-10">
      <UIcon
        name="ph:flower-tulip-duotone"
        class="absolute top-8 left-0 -translate-x-1/2 z-0 opacity-25 size-120 text-primary"
      />

      <UContainer class="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
        <!-- Left: text content -->
        <div class="flex h-full flex-col gap-6">
          <span
            class="w-fit flex  items-center mb-carouselIndexauto font-semibold"
          >
            <UIcon
              name="ph:dot-duotone"
              class="size-5 mr-1 mb-0.5 text-primary animate-pulse"
            />
            <span class="text-default">О нашем центре</span>

          </span>

          <h2 class="font-extrabold leading-[0.9] text-secondary text-4xl lg:text-5xl xl:text-6xl">
            Место, где каждый<br>
            ребёнок <span class="text-primary">раскрывается</span>
          </h2>

          <p class="text-default/65 font-semibold text-lg leading-relaxed max-w-md">
            «Улица Радости» — это центр умного развития для детей, где уютная атмосфера,
            внимательные педагоги и интересные занятия помогают каждому ребёнку найти
            своё призвание и поверить в себя.
          </p>

          <div class="flex flex-col gap-1">
            <span class="text-default/80 font-semibold ml-4">Мы на карте:</span>

            <UButton
              size="xl"
              variant="ghost"
              to="https://yandex.ru/maps/-/CPRON8mX"
              target="_blank"
              :trailing-icon="'ph:map-pin-area-duotone'"
              class="w-fit"
            >
              г. Новосибирск, ул Ильича, 23-4
            </UButton>
          </div>

          <UButton
            to="/about"
            size="xl"
            class="px-5 py-2.5 mt-auto w-fit group"
          >
            <span class="text-lg font-bold">Узнать больше</span>
            <UIcon
              name="ph:arrow-right-bold"
              class="size-5 transition group-hover:translate-x-1"
            />
          </UButton>
        </div>

        <!-- Right: VK embed video -->
        <div class="aspect-square rounded-lg flex ring-2 ring-transparent transition hover:ring-primary overflow-hidden w-full">
          <iframe
            src="https://vkvideo.ru/video_ext.php?oid=-182596799&id=456239953&hash=83002f9ccf49043e&hd=2"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
            class="h-full w-full object-cover"
          />
        </div>
      </UContainer>
    </section>

    <!-- Popular Clubs Section -->
    <section class="bg-default flex w-full relative overflow-hidden py-20 z-10">
      <UIcon
        name="ph:puzzle-piece-duotone"
        class="absolute top-8 left-0 -translate-x-1/2 z-0 opacity-15 size-120 text-secondary"
      />

      <UContainer class="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
        <!-- Left: text content -->
        <div class="flex h-full flex-col gap-6">
          <span class="w-fit flex items-center font-semibold">
            <UIcon
              name="ph:dot-duotone"
              class="size-5 mr-1 mb-0.5 text-primary animate-pulse"
            />
            <span class="text-default">Для вашего ребёнка</span>
          </span>

          <h2 class="font-extrabold leading-[0.9] text-secondary text-4xl lg:text-5xl xl:text-6xl">
            Популярные<br>
            <span class="text-primary">направления</span>
          </h2>

          <p class="text-default/65 font-semibold text-lg leading-relaxed max-w-md">
            Самые любимые кружки наших учеников. Выбирайте то, что по душе вашему ребёнку —
            мы найдём занятие для каждого характера и таланта.
          </p>

          <div class="flex mt-auto items-center justify-between">
            <UButton
              to="/clubs"
              size="xl"
              class="px-5 py-2.5  w-fit group"
            >
              <span class="text-lg font-bold">Все кружки</span>
              <UIcon
                name="ph:arrow-right-bold"
                class="size-5 transition group-hover:translate-x-1"
              />
            </UButton>

            <div class="flex gap-2 items-center">
              <UButton
                class="aspect-square justify-center"
                icon="ph:arrow-left"
                color="secondary"
                size="lg"
                @click="goPrev"
              />
              <UButton
                class="aspect-square justify-center"
                icon="ph:arrow-right"
                color="secondary"
                size="lg"
                @click="goNext"
              />
            </div>
          </div>
        </div>

        <!-- Right: carousel -->
        <div class="rounded-lg ring-2 ring-transparent transition hover:ring-primary bg-white w-full">
          <UCarousel
            v-slot="{ item: club }"
            ref="carousel"
            :items="clubs"
            :autoplay="{ delay: 5000 }"
            :watch-drag="true"
            :aling="'start'"
            :ui="{
              container: 'ms-0 [&>*]:pl-6 [&>*:last-child]:px-6 py-4',
              item: 'ps-0 basis-[60%]'
            }"
            class="focus-visible:ring-primary ring-2 ring-transparent transition overflow-hidden rounded-lg"
            @select="(i:number) => (carouselIndex = i)"
          >
            <HomeTopClubCard
              v-bind="club"
              class="h-120 my-2 "
            />
          </UCarousel>
        </div>
      </UContainer>
    </section>

    <!-- Near Events Section -->
    <section
      id="events"
      class="bg-white flex w-full relative overflow-hidden py-20 z-10"
    >
      <UIcon
        name="ph:balloon-duotone"
        class="absolute top-8 left-0 -translate-x-1/2 z-0 opacity-15 size-120 text-primary"
      />

      <UContainer class="relative z-10 flex flex-col gap-12">
        <!-- Section header -->
        <div class="flex flex-col gap-4">
          <span class="w-fit flex items-center font-semibold">
            <UIcon
              name="ph:dot-duotone"
              class="size-5 mr-1 mb-0.5 text-primary animate-pulse"
            />
            <span class="text-default">Ближайшие мероприятия</span>
          </span>

          <h2 class="font-extrabold leading-[0.9] text-secondary text-4xl lg:text-5xl xl:text-6xl">
            События<br>
            <span class="text-primary">в нашем центре</span>
          </h2>

          <p class="text-default/65 font-semibold text-lg leading-relaxed max-w-md">
            Интересные встречи, мастер-классы и праздники — следите за расписанием
            и приходите с детьми.
          </p>
        </div>

        <!-- Events grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-12 lg:gap-x-4">
          <HomeEventCard
            v-for="event in visibleEvents"
            :key="event.id"
            v-bind="event"
          />
        </div>

        <!-- Toggle button -->
        <div
          v-if="events.length > 3"
          class="flex justify-center pt-2"
        >
          <UButton
            size="xl"
            variant="ghost"
            color="secondary"
            class="px-8 group"
            @click="showAllEvents = !showAllEvents"
          >
            <span class="text-lg font-bold">
              {{ showAllEvents ? 'Скрыть' : 'Все события' }}
            </span>
            <UIcon
              name="ph:caret-down-bold"
              class="size-5 transition-transform duration-300"
              :class="showAllEvents ? 'rotate-180' : ''"
            />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Mini Gallery Section -->
    <section
      id="gallery"
      class="bg-default flex w-full relative overflow-hidden py-20 z-10"
    >
      <UIcon
        name="ph:camera-duotone"
        class="absolute top-8 left-0 -translate-x-1/2 z-0 opacity-15 size-120 text-secondary"
      />

      <UContainer class="relative z-10 flex flex-col gap-12">
        <!-- Section header -->
        <div class="flex flex-col gap-4">
          <span class="w-fit flex items-center font-semibold">
            <UIcon
              name="ph:dot-duotone"
              class="size-5 mr-1 mb-0.5 text-primary animate-pulse"
            />
            <span class="text-default">Наши моменты</span>
          </span>

          <h2 class="font-extrabold leading-[0.9] text-secondary text-4xl lg:text-5xl xl:text-6xl">
            Фото<br>
            <span class="text-primary">из центра</span>
          </h2>

          <p class="text-default/65 font-semibold text-lg leading-relaxed max-w-md">
            Загляните в нашу жизнь — яркие занятия, счастливые лица
            и уютная атмосфера «Улицы Радости».
          </p>
        </div>

        <!-- Gallery grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(photo, i) in galleryImages"
            :key="photo.src"
            class="overflow-hidden rounded-lg group"
            :class="{ 'col-span-2 row-span-2': i === 0,
                      'col-span-2': i === galleryImages.length - 1 }"
          >
            <NuxtImg
              :src="photo.src"
              :alt="photo.alt"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              :class="i === 0 ? 'aspect-square' : 'aspect-4/3'"
            />
          </div>
        </div>

        <!-- CTA -->
        <div class="flex justify-center">
          <UButton
            to="/gallery"
            size="xl"
            class="px-8 py-2.5 group"
          >
            <span class="text-lg font-bold">Вся галерея</span>
            <UIcon
              name="ph:arrow-right-bold"
              class="size-5 transition group-hover:translate-x-1"
            />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- FAQ Section -->
    <section
      id="faq"
      class="bg-white flex w-full relative overflow-hidden py-20 z-10"
    >
      <UIcon
        name="ph:lightbulb-filament-duotone"
        class="absolute top-8 left-0 -translate-x-1/2 z-0 opacity-15 size-80 text-primary"
      />

      <UContainer class="relative z-10 grid grid-cols-1 md:grid-cols-2 items-start gap-12 md:gap-16">
        <!-- Left: text content -->
        <div class="flex flex-col gap-6">
          <span class="w-fit flex items-center font-semibold">
            <UIcon
              name="ph:dot-duotone"
              class="size-5 mr-1 mb-0.5 text-primary animate-pulse"
            />
            <span class="text-default">Частые вопросы</span>
          </span>

          <h2 class="font-extrabold leading-[0.9] text-secondary text-4xl lg:text-5xl xl:text-6xl">
            Вопросы<br>
            <span class="text-primary">и ответы</span>
          </h2>

          <p class="text-default/65 font-semibold text-lg leading-relaxed max-w-md">
            Собрали самые популярные вопросы от родителей.
            Не нашли ответ? Свяжитесь с нами — мы всегда на связи!
          </p>

          <HomeCallbackForm bg="default" />
        </div>

        <!-- Right: accordion -->
        <UAccordion
          :items="faqItems"
          :ui="{
            root: 'space-y-4',
            item: 'border-0 bg-default rounded-md',
            trigger: 'py-4 px-4 text-lg font-bold text-secondary hover:text-primary transition-colors rounded-t-md cursor-pointer',
            body: 'text-default/80 font-medium text-base leading-relaxed px-6 pb-6 pt-4 border-t-2 border-white'
          }"
        />
      </UContainer>
    </section>
  </div>
</template>
