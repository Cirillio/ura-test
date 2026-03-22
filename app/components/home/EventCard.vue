<template>
  <div>
    <!-- Card -->
    <article
      class="flex flex-col bg-default gap-5 group cursor-pointer ring-2 ring-transparent hover:ring-primary transition rounded-md p-4"
      @click="open = true"
    >
      <!-- Image -->
      <div class="relative overflow-hidden rounded-md aspect-4/3">
        <NuxtImg
          class="w-full h-full object-cover object-center"
          :src="img"
          :alt="label"
        />
        <div class="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <!-- Title & description -->
      <div class="flex flex-col gap-2">
        <h3 class="text-3xl font-extrabold text-secondary leading-[1.1] transition-colors duration-200 group-hover:text-secondary/75">
          {{ label }}
        </h3>
        <p class="text-default/66 font-medium leading-relaxed text-lg line-clamp-2">
          {{ description }}
        </p>
      </div>

      <div class="flex justify-between text-lg uppercase items-center">
        <!-- Meta: date & time -->
        <div class="flex gap-1.5  font-bold  tracking-widest text-default/75">
          <span class="flex items-center gap-1.5">
            <UIcon
              name="ph:calendar-blank"
              class="size-5 text-primary/75 shrink-0"
            />
            {{ formattedDate }}
          </span>

          <span class="flex items-center gap-1.5">
            <UIcon
              name="ph:clock"
              class="size-5 text-primary/75 shrink-0"
            />
            {{ time }}
          </span>
        </div>

        <!-- CTA hint -->
        <span class="flex items-center gap-1.5  font-bold text-primary">
          {{ price ?? 'Бесплатно' }}
          <UIcon
            name="ph:arrow-right"
            class="size-5 mb-0.5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </article>

    <!-- Modal -->
    <UModal
      v-model:open="open"
      :ui="{
        content: 'max-w-4xl rounded-md shadow-none ring-0 overflow-hidden bg-white',
        body: 'p-0',
        overlay: 'bg-black/25 backdrop-blur-xs'
      }"
    >
      <template #content="{ close }">
        <div class="relative p-4 ">
          <!-- Close button -->
          <UButton
            icon="ph:x"
            variant="ghost"
            color="secondary"
            size="sm"
            class="absolute top-4 z-20 right-4"
            @click="close"
          />
          <div class="grid grid-cols-1 md:grid-cols-2 min-h-130  overflow-hidden relative z-10">
            <!-- Left: image + event info -->
            <div class="relative flex flex-col justify-end rounded-md overflow-hidden">
              <NuxtImg
                class="absolute inset-0 w-full h-full object-cover object-center"
                :src="img"
                :alt="label"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black/75 via-black/50 to-transparent" />

              <div class="relative z-10 flex flex-col gap-3 p-4">
                <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                  <UBadge
                    size="xl"
                    class="flex items-center gap-1.5 font-bold uppercase tracking-widest"
                  >
                    <UIcon
                      name="ph:calendar-blank"
                      class="size-5 shrink-0"
                    />
                    <span>{{ formattedDate }}</span>
                  </UBadge>
                  <UBadge
                    size="xl"
                    class="flex items-center gap-1.5 font-bold uppercase tracking-widest"
                  >
                    <UIcon
                      name="ph:clock"
                      class="size-5 shrink-0"
                    />
                    <span>{{ time }}</span>
                  </UBadge>
                </div>
              </div>
            </div>

            <!-- Right: form -->
            <div class="flex flex-col gap-6 p-8 relative">
              <div class="flex flex-col gap-1 pr-8">
                <span class="text-xs font-bold uppercase tracking-widest text-default/35">
                  Запись на мероприятие
                </span>
                <h3 class="text-2xl font-extrabold text-secondary leading-tight">
                  {{ label }}
                </h3>
              </div>

              <!-- Name -->
              <div class="flex flex-col gap-1.5">
                <label class="text-xs font-bold uppercase tracking-widest text-default/40">
                  Ваше имя <span class="text-primary">*</span>
                </label>
                <UInput
                  v-model="form.name"
                  placeholder="Иванова Мария"
                  size="xl"
                  variant="none"
                  class="bg-default rounded-md px-1 "
                  :ui="{ base: 'font-semibold text-base text-default placeholder:text-default/50' }"
                />
              </div>

              <!-- Child name -->
              <div class="flex flex-col gap-1.5">
                <label class="text-xs font-bold uppercase tracking-widest text-default/40">
                  Имя ребёнка <span class="text-primary">*</span>
                </label>
                <UInput
                  v-model="form.childName"
                  placeholder="Иванов Артём"
                  size="xl"
                  variant="none"
                  class="bg-default rounded-md px-1 "
                  согласен
                  :ui="{ base: 'font-semibold text-base text-default placeholder:text-default/50' }"
                />
              </div>

              <!-- Telegram -->
              <div class="flex flex-col gap-1.5">
                <label class="text-xs font-bold uppercase tracking-widest text-default/40">
                  Telegram
                </label>
                <UInput
                  v-model="form.telegram"
                  placeholder="@username"
                  size="xl"
                  variant="none"
                  class="bg-default rounded-md px-1 "
                  leading-icon="ph:telegram-logo"
                  :ui="{
                    base: 'font-semibold text-base text-default placeholder:text-default/50',
                    leadingIcon: 'text-primary/50'
                  }"
                />
              </div>

              <!-- Consent -->
              <label class="flex items-start gap-3 cursor-pointer group/check mt-auto">
                <UCheckbox
                  v-model="form.consent"
                  color="primary"
                  class="mt-0.5 shrink-0"
                  :ui="{
                    base: 'rounded-xs!',
                    indicator: 'p-0.25'
                  }"
                  size="xl"
                />
                <span class="text-xs font-medium text-default/45 leading-relaxed group-hover/check:text-default/65 transition-colors">
                  Согласен(а) на обработку персональных данных и получение сообщений от центра «Улица Радости»
                </span>
              </label>

              <div class="flex flex-col gap-2">
                <span class="text-lg mx-auto font-semibold text-default/65">Стоимость: {{ props.price ?? 'Бесплатно' }}</span>

                <!-- Submit -->
                <UButton
                  size="xl"
                  class="w-full justify-center text-lg font-bold group"
                  :disabled="!isFormValid"
                >
                  Отправить заявку
                  <UIcon
                    name="ph:paper-plane-right-duotone"
                    class="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </template>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
export type EventShort = {
  id: string
  label: string
  description: string
  img: string
  date: string
  time: string
  price: string | null
}

const props = defineProps<EventShort>()

const open = ref(false)

const form = reactive({
  name: '',
  childName: '',
  telegram: '',
  consent: false
})

const isFormValid = computed(() =>
  form.name.trim().length > 1
  && form.childName.trim().length > 1
  && form.consent
)

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long'
  }).format(new Date(props.date))
})
</script>
