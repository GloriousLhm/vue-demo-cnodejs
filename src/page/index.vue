<template>
  <div>
    index page
    <Header></Header>

    <div class="article_list">
      <ul>
        <li v-for="(item,index) in list">
          <time v-text="$utils.goodTime(item.create_at)"></time>
          <router-link :to="'/content/'+item.id">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getData()
      // this.$api.get('topics', null, r => {
      //   console.log(r)
      // })
    },
    components: {
      Header,
      Footer
    },
    methods: {
      getData() {
        this.$api.get('topics', null, r => {
          this.list = r.data
        })
      }
    }
  }

</script>
