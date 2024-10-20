<!-- eslint-disable vue/no-parsing-error -->
<template>
   <div class="fullbanner">
      <ClientOnly>
         <div v-if="isMobile">
            <img srcset="
          @/assets/img/banner/fullbanner-mob.webp 600w
        " sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, 1200px"
               src="@/assets/img/banner/fullbanner-mob.webp" alt="fullbanner" loading="lazy" width="1200"
               height="auto" />
         </div>
         <div v-else>
            <img srcset="
          @/assets/img/banner/fullbanner.webp 800w
        " sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, 1900px"
               src="@/assets/img/banner/fullbanner.webp" alt="fullbanner" loading="lazy" width="1903" height="750" />
         </div>
         <template #placeholder>
            <Skeleton />
         </template>
      </ClientOnly>
   </div>
</template>

<script>
import Skeleton from "@/components/skeleton/skeleton-fullbanner.vue";
export default {
   name: 'Fullbanner',
   components: {
      Skeleton
   }
};
</script>

<style scoped>
.fullbanner {
   min-height: 539px;
}

.fullbanner img {
   width: 100%;
   height: auto;
}

@media (max-width:1023px) {
   .fullbanner {
      min-height: 262px;
   }
}
</style>