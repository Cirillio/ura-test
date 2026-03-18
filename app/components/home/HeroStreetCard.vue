<template>
  <section class="grid relative rounded-lg bg-white overflow-hidden">
    <UIcon
      name="ph:cloud-sun-duotone"
      class="absolute size-80 text-yellow-500/10 z-0 -top-6 -right-16"
    />
    <div class="grid z-10 relative">
      <button class="cursor-pointer focus-visible:outline-0 focus-visible:ring-2 ring-primary/50  z-20 rotate-5 items-start transition duration-150 hover:bg-primary/5 hover:opacity-75 active:scale-98 flex floating-element backdrop-blur-md text-sky-500 flex-col absolute top-12 left-16 rounded-md bg-default p-4">
        <UIcon
          name="ph:brain-light"
          class="mb-2 size-6"
        />
        <span class="font-semibold text-sm font-mono leading-4.5">Кружок</span>
        <span class="font-semibold text-sm font-mono leading-4.5">мышления</span>
      </button>

      <button class="cursor-pointer focus-visible:outline-0 focus-visible:ring-2 ring-primary/50  z-20 items-center transition duration-150 hover:bg-primary/5 hover:opacity-75 active:scale-98 flex floating-element backdrop-blur-md text-green-600 flex-col gap-2 absolute -translate-x-1/4 top-24 left-1/2 rounded-md bg-default  p-4">
        <UIcon
          name="ph:translate-light"
          class=" size-7"
        />
        <span class="font-semibold text-base font-mono leading-4.5">Английский</span>
        <span class="font-semibold text-base font-mono leading-4.5">язык</span>
      </button>

      <button class="cursor-pointer focus-visible:outline-0 focus-visible:ring-2 ring-primary/50  z-20 -rotate-5 items-start transition duration-150 hover:bg-primary/5 hover:opacity-75 active:scale-98 flex floating-element backdrop-blur-md text-amber-400 flex-col gap-2 absolute top-14 right-16 rounded-md bg-default  p-4">
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
</template>

<script lang="ts" setup>

</script>

<style>

</style>
