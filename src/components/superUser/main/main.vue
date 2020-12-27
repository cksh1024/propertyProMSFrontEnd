<template>
  <div>
    <div>
      <TopSpace />
    </div>
    <div style="margin-top: 20px">
      <WebDataSpace/>
    </div>
  </div>
</template>

<script>
import TopSpace from './TopSpace.vue'
import WebDataSpace from './WebDataSpace.vue'

export default{
  components: {
    TopSpace,
    WebDataSpace
  }
}
</script>

<style>

</style>
