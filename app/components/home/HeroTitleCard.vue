<template>
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
          class="text-2xl items-center flex gap-4 min-[394px]:text-4xl md:text-5xl xl:text-7xl font-extrabold text-secondary leading-[0.7]"
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
          <span class="text-2xl font-semibold">
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
</template>

<script lang="ts" setup>

</script>

<style>

</style>
