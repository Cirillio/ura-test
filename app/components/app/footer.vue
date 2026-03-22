<script lang="ts" setup>
const currentYear = new Date().getFullYear()

const FOOTER_GROUPS = [
  {
    title: 'Навигация',
    links: [
      { label: 'Кружки', to: '/clubs' },
      { label: 'О нас', to: '/about' },
      { label: 'Галерея', to: '/gallery' }
    ]
  },
  {
    title: 'Информация',
    links: [
      { label: 'События', to: '/#events' },
      { label: 'Фото', to: '/#gallery' },
      { label: 'Частые вопросы', to: '/#faq' }
    ]
  },
  {
    title: 'Контакты',
    links: [
      { label: '+7 (913) 452-60-39', to: 'tel:+79134526039' },
      { label: 'info@ulitsa-radosti.ru', to: 'mailto:info@ulitsa-radosti.ru' }
    ]
  }
]

const SOCIAL_LINKS = [
  { icon: 'simple-icons:vk', href: '#', label: 'ВКонтакте' },
  { icon: 'simple-icons:telegram', href: 'https://t.me/MakukhaNG', label: 'Telegram' }
]
</script>

<template>
  <footer class="bg-default z-10">
    <UContainer class="py-12">
      <!-- Top row: link groups + brand -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
        <!-- Link groups -->
        <div
          v-for="group in FOOTER_GROUPS"
          :key="group.title"
          class="flex flex-col gap-3"
        >
          <h4 class="text-sm font-bold uppercase tracking-widest text-default/90">
            {{ group.title }}
          </h4>
          <nav class="flex flex-col gap-1.5">
            <NuxtLink
              v-for="link in group.links"
              :key="link.label"
              :to="link.to"
              class="text-base font-medium text-default/70 hover:text-primary transition-colors w-fit"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Brand + socials (right column) -->
        <div class="flex flex-col items-start sm:items-end gap-4 col-span-2 sm:col-span-1">
          <NuxtLink
            to="/"
            class="flex items-center gap-2.5 group"
          >
            <NuxtImg
              src="/Sun.png"
              class="h-12 group-hover:rotate-10 duration-300 transition-transform"
            />
            <span class="text-3xl font-extrabold text-secondary leading-tight">
              <span class="text-primary">У</span>лица
              <span class="text-primary">Ра</span>дости
            </span>
          </NuxtLink>

          <p class="text-base font-medium text-default/75 sm:text-right">
            Место, где дети учатся думать,<br>
            творить и верить в себя.
          </p>

          <!-- Social icons -->
          <div class="flex gap-2">
            <UButton
              v-for="social in SOCIAL_LINKS"
              :key="social.label"
              :to="social.href"
              :aria-label="social.label"
              :variant="'ghost'"
              :icon="social.icon"
              target="_blank"
              class="p-2"
            />
          </div>
        </div>
      </div>

      <!-- Divider + bottom row -->
      <div class="mt-10 pt-5 border-t border-default flex flex-col sm:flex-row items-center justify-between gap-3">
        <a
          href="https://yandex.ru/maps/-/CPRON8mX"
          target="_blank"
          class="text-xs font-medium text-default/35 transition hover:text-primary"
        >
          г. Новосибирск, ул Ильича, 23-4
        </a>
        <span class="text-xs font-medium text-default/35">
          &copy; {{ currentYear }} Улица Радости. Все права защищены.
        </span>
      </div>
    </UContainer>
  </footer>
</template>
