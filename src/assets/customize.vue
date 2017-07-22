<template>
   <div class="hello">
     <heads></heads>
    <div class='con'></div>
   <foot></foot>
  </div>
</template>

<script>

import heads from './header2'
import foot from './footer'
export default {
  name: 'hello',
  components:{
    foot,heads
  }
}
</script>

<style>
  
</style>
