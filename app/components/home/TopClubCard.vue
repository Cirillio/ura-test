<template>
  <NuxtLink
    :to="to"
    class="flex flex-col gap-4 ring-2 ring-transparent hover:ring-primary transition  bg-white rounded-lg p-4 overflow-hidden group"
  >
    <div class="rounded-md relative overflow-hidden h-5/7 min-h-0">
      <NuxtImg
        class="w-full h-full object-center object-cover"
        :src="img"
      />
    </div>
    <div class="text-default  flex  flex-col items-center text-center transition-all">
      <h4 class="font-bold text-primary text-4xl">
        {{ title }}
      </h4>
      <p class="text-lg leading-tight mt-2 font-medium">
        {{ shortDesc }}
      </p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
export type ClubShort = {
  title: string
  shortDesc: string
  img: string
  icon: string // ph:
  iconColor: string // text-color-000
  to: string // /clubs#[club_htmlId]
}

defineProps<ClubShort>()
</script>

<style>

</style>
