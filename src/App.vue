<template>
  <navbarcomponents/>
  <router-view>
  </router-view>
</template>

<script>
import navbarcomponents from '@/components/layout/navbar.vue'
export default {
  data(){
    return{
      publicPath: import.meta.env.BASE_URL
    }
  },
  components:{
    navbarcomponents,
  }
}
</script>
