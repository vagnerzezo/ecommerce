export default {
  data() {
    return {
      isMobile: window.innerWidth < 1024
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 1024;
    }
  }
};