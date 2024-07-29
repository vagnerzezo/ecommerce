<!-- eslint-disable vue/no-parsing-error -->
<template>
   <div class="fullbanner">
      <div v-if="isMobile">
         <img srcset="
          @/assets/img/banner/fullbanner-mob.webp 600w,
        " sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, 1200px"
            src="@/assets/img/banner/fullbanner-mob.webp" alt="fullbanner" loading="lazy" />
      </div>
      <div v-else>
         <img srcset="
          @/assets/img/banner/fullbanner.webp 800w
        " sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, 1900px"
            src="@/assets/img/banner/fullbanner.webp" alt="fullbanner" loading="lazy" />
      </div>
   </div>
</template>

<script>
export default {
   name: 'Fullbanner',
};
</script>

<style scoped>
.fullbanner img {
   width: 100%;
   height: auto;
}
</style>