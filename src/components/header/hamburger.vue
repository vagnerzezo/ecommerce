<template>
  <div id="icone-hamburger">
    <button aria-label="Menu hamburger" @click=" toggleMenu()">
      <svg width="64px" height="64px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
            fill="#000000"></path>
          <path
            d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
            fill="#000000"></path>
          <path
            d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
            fill="#000000"></path>
        </g>
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuShow: false,
    };
  },
  methods: {
    toggleMenu() {
      this.$emit('openMenu');
    },
  },
};
</script>


<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.menu-mobile {
  position: absolute;
}

button {
  border: none;
  background: transparent;
}

svg {
  width: 32px;
  height: 32px;
}
</style>