<template>
  <div class="header-actions wrapper">
    <div class="row">
      <div class="col-3 col-md-4">
        <div class="search">
          <svg xmlns:xlink="http://www.w3.org/1999/xlink" fil="#3a3d46" id="Layer_1" data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.98 18.98" width="25" height="25">
            <g id="Group_5362" data-name="Group 5362">
              <g id="Group_5327" data-name="Group 5327">
                <path
                  d="M13.75,13.91l3.41,3.4c.17.18.36.35.52.53a1,1,0,0,1,.05,1.34,1,1,0,0,1-1.34,0l-.07-.07C15.17,18,14,16.9,12.92,15.73a1,1,0,0,0-1.36-.27l0,0a7.8,7.8,0,1,1,2.84-2.39C14.19,13.35,14,13.59,13.75,13.91Zm-5.84.55a6,6,0,1,0-6-6.06v0a6,6,0,0,0,5.94,6h.06Z"
                  transform="translate(0 -0.49)" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="col-3 col-md-4">
        <div class="user">
          <svg xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20.25" width="25" height="25">
            <defs></defs>
            <path class="cls-1"
              d="M.83,20.12a.7.7,0,0,1-.7-.7h0C.13,14.51,3.28,11.8,9,11.8s8.88,2.71,8.88,7.62a.7.7,0,0,1-.71.7H.83Zm.71-1.39H16.46c-.27-3.67-2.78-5.54-7.46-5.54s-7.19,1.87-7.46,5.54ZM4.39,4.83A4.56,4.56,0,0,1,8.81.13a1.33,1.33,0,0,1,.2,0,4.55,4.55,0,0,1,4.61,4.49v.21A4.83,4.83,0,0,1,9,9.83a4.83,4.83,0,0,1-4.62-5Zm1.39,0A3.44,3.44,0,0,0,9,8.44a3.44,3.44,0,0,0,3.22-3.61A3.2,3.2,0,0,0,9.14,1.52H9A3.17,3.17,0,0,0,5.77,4.6a1.62,1.62,0,0,0,0,.22Z" />
          </svg>
        </div>
      </div>
      <div class="col-3 col-md-4">
        <div class="cart">
          <button @click="openCart()">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" fill="#3a3d46" id="Layer_1" data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="22" height="22">
              <path class="cls-1"
                d="M3,2H17a1,1,0,0,1,1,1V17a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2ZM0,3A3,3,0,0,1,3,0H17a3,3,0,0,1,3,3V17a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3Zm10,7C7.24,10,5,7.31,5,4H7c0,2.57,1.67,4,3,4s3-1.43,3-4h2C15,7.31,12.76,10,10,10Z"
                style="fill-rule: evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Icones",
  components: {},
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    openCart() {
      this.$emit("toggle-cart");
    },
  },
};
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;
}
</style>