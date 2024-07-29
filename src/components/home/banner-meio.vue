<!-- eslint-disable vue/no-parsing-error -->
<template>
   <div class="bannerMeio">
      <img v-if="isMobile" srcset="
        @/assets/img/banner/banner-Meio-mob.webp 600w
      " sizes="(max-width: 300px) 300px, (max-width: 450px) 450px, 600px"
         src="@/assets/img/banner/banner-Meio-mob.webp" alt="bannerMeio" loading="lazy" width="600" height="auto" />
      <img v-else srcset="
        @/assets/img/banner/banner-Meio.webp 6912w
      " sizes="(max-width: 2304px) 2304px, (max-width: 4608px) 4608px, 6912px"
         src="@/assets/img/banner/banner-Meio.webp" alt="bannerMeio" loading="lazy" width="6912" height="auto" />
   </div>
</template>
<script>
export default {
   name: 'BannerMeio',
};
</script>

<style scoped>
.bannerMeio img {
   width: 100%;
   height: auto;
}
</style>