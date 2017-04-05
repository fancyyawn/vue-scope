<template>
  <el-row class="row">
    <el-col :span="7" v-for="(product,index) in products"
            :key="product.id" class="column">
      <el-card :body-style="{ padding: '0px'}">
        <img v-if="product.imageUrl"
             :src="product.imageUrl"
             :alt="product.description"
             class="image">
        <div style="padding: 14px;">
          <h3>{{product.name}}</h3>
          <div class="bottom clearfix">
            <span class="price">￥{{product.price}}</span>
            <el-button @click.stop.prevent="addToCart(product)"
                       type="text" class="button">
              Add to cart
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'getProducts'
  }),
  methods: mapActions([
    'fetchProducts',
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>

  .row{
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .column{
    margin-left: 25px;
  }
  .bottom {
    margin-top: 13px;
    line-height: 14px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
</style>
