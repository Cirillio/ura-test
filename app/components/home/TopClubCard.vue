<template>
  <NuxtLink
    :to="to"
    class="flex flex-col gap-4 bg-default rounded-md focus-visible:outline-primary overflow-hidden group"
  >
    <div class="rounded-md relative overflow-hidden  h-5/7 min-h-0">
      <NuxtImg
        class="w-full h-full object-center object-cover"
        :src="img"
      />
    </div>
    <div class="text-default h-2/7 flex px-4 flex-col items-start text-start transition-all">
      <h4 class="font-bold group-hover:text-primary/75 transition text-primary text-4xl">
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
