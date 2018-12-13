<template>
  <div id="header">
    <div class="container">
      <div class="header-top">
        <div class="logo">
          <img :src="`./static/images/header/top_${logo.src}`" :alt="logo.alt">
        </div>
        <div class="link">
          <span v-for="(item, index) in link" :key="index">
            <img :src="`./static/images/header/top_${item.src}`" :alt="item.item">
          </span>
        </div>
      </div>
    <div class="nav">
      <ul>
        <li v-for="(item, index) in nav" :key="index" class="nav-item">
          <a :href="item.link">{{ item.item }}</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        logo: { src:'logo.jpg', link: '#', alt: 'logo' },
        link: [
          {item: 'hotline', src:'hotline.jpg', href:'#'},
          {item: 'webo', src:'webo.jpg', href:'#'},
          {item: 'wx', src:'wx.jpg', href:'#'}
        ],
        nav: [
          {item: '首页', link:'#'},
          {item: '医院概况', link:'#'},
          {item: '媒体报道', link:'#news'},
          {item: '科室介绍', link:'#'},
          {item: '脑科专家', link:'#disease'},
          {item: '经典病例', link:'#case'},
          {item: '精彩专题', link:'#'},
          {item: '医患沟通', link:'#'},
          {item: '就医指南', link:'#'},
          {item: '联系我们', link:'#'}
        ]
      }
    }
   
  }
</script>

<style lang="scss" scoped>
@mixin pointer{
  cursor: pointer;
}
%clear::after{
    content: '';
    display: block;
    visibility: hidden;
    height: 0;
    line-height: 0;
    clear: both;
}
#header{
  width: 100%;
  background: #7D4699;
  overflow: hidden;
  .container{
    width: 70%;
    padding-top: 15px;
    margin: 0 auto;
  }
}
.header-top{
  @extend %clear;
   .logo{
    float: left;
    padding-left: 15px;
    @include pointer
  }
  .link{
    float: right;
    padding-right: 15px;
    span{
      display: inline-block;
      height: 100%;
      @include pointer
    }
  }
}
.nav{
  background: #fff;
  border-top-right-radius:15px;
  border-top-left-radius:15px;
  margin-top: 15px;
  padding: 15px ;
  ul{
    display: flex;
    justify-content: space-between;
  }

}

</style>
