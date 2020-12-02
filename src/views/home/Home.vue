<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends" />
    <home-feature-view />
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" ></tab-control>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template> 

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    NavBar,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    };
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>
