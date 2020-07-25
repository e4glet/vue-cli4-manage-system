<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24"><router-view name="top"></router-view></el-col>
    <el-col :span="24" class="main">
      <!--左侧导航-->
      <router-view name="aside"></router-view>
      <!--右侧内容区-->
      <section class="content-container" :class="{'content-collapse':collapse}">
        <v-tags></v-tags>
        <div class="grid-content bg-purple-light">
          <transition name="fade" mode="out-in">
            <keep-alive :include="tagsList">
                  <router-view></router-view>
            </keep-alive>
          </transition>
          <el-backtop target=".grid-content"></el-backtop>
        </div>
      </section>
    </el-col>
  </el-row> 
</template>

<script>
// @ is an alias to /src
import vTags from '@/components/nav/Tags.vue';
import bus from '@/components/nav/bus';

export default {
  name: "Home",
  components: {   
    vTags
  },
  data() {
    return {
      tagsList: [],
      collapse: false,
      loading: false
    };
  },
  created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
