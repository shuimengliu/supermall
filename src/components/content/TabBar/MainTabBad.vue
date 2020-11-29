<template>
  <div>
    <tab-bad>
      <tab-bar-item path="/home" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.svg"
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category_active.svg"
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/shopcart_active.svg"
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.svg"
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bad>
  </div>
</template>


<script>
import TabBad from "components/common/tabbar/TabBad";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBad,
    TabBarItem
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>