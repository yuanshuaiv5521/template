<template>
  <div class="control" @click="clickHandle">
    <i :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
  </div>
</template>

<script>
export default {
  props: {
    collapse: Boolean
  },

  methods: {
    clickHandle () {
      this.$emit('toggle-collapse')
      // this.$store.commit()
    }
  }
}
</script>

<style>


</style>