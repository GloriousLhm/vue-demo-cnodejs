<template>
  <div class="jq">
    <!-- 测试jq -->
    <div class="love">
      <p>
        这里是初始文字
      </p>
      <button @click="testJq">
        看看jquery有没有工作
      </button>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {

      }
    },
    created() {
      this.testJq()
    },
    methods: {
      testJq() {
        $(".love p").html('jquery在正常工作')
      }
    },
    components: {

    }
  }
</script>

<style>
</style>

