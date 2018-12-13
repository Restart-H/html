<template>
  <div id="links">
    <div class="title">
      <h3>友情链接</h3>
    </div>
    <div class="hospital list-box">
      <span>医院网站</span>
      <ul>
        <li v-for="(item,i) in hospitalSite" :key="i">
          <a href="#">{{ item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="hospital-blog list-box">
      <span>医院博客</span>
      <ul>
        <li v-for="(item,i) in hospitalBlog" :key="i">
          <a href="#">{{ item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="experts-blog list-box">
      <span>专家微博</span>
      <ul>
       <li v-for="(item,i) in expertsBlog" :key="i">
         <a href="#">{{ item.name}}</a>
       </li>
      </ul>
    </div>
    <div class="company list-box">
      <span>合作伙伴</span>
      <ul>
        <li v-for="(item,i) in company" :key="i">
          <a href="#">{{ item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        hospitalSite: [
          { name: '中华癫痫病友之家', link:''},
          { name: '面肌痉挛三叉神网', link:''},
          { name: '中华帕金森病论坛', link:''},
          { name: '上海脑科网', link:''},
          { name: '中华癫痫病友之家', link:''},
          { name: '面肌痉挛三叉神网', link:''},
          { name: '中华帕金森病论坛', link:''},
          { name: '上海脑科网', link:''}
        ],
        hospitalBlog: [
          { name: '脑动脉瘤', link:''},
          { name: '动静脉畸形', link:''},
          { name: '外伤性颈内动脉海绵窦', link:''},
          { name: '硬脑膜动脉', link:''},
          { name: '颈椎动脉狭窄', link:''},
          { name: '烟雾病', link:''}
        ],
        expertsBlog: [
          { name: '徐启武教授微博', link:''},
          { name: '宋冬雷教授微博', link:''},
          { name: '郭辉5教授微博', link:''},
          { name: '苗琳教授微博', link:''},
          { name: '郝中顺教授微博', link:''},
           { name: '宋冬雷教授微博', link:''},
          { name: '郭辉5教授微博', link:''}
        ],
        company: [
          { name: '39健康网', link:''},
          { name: '百度健康', link:''},
          { name: '好大夫', link:''},
          { name: '寻医问药网', link:''},
          { name: '中国脑科学会', link:''},
          { name: '39健康网', link:''},
          { name: '百度健康', link:''}
        ]
      }
    }
  }
</script>

<style lang="scss">
@mixin pointer{
  cursor: pointer;
  
}
@mixin absolute($t:auto,$r:auto,$b:auto,$l:auto){
  position: absolute;
  top:$t;
  right: $r;
  bottom: $b;
  left: $l;
}
%clear::after{
    content: '';
    display: block;
    visibility: hidden;
    height: 0;
    line-height: 0;
    clear: both;
}
  #links{
    margin:30px auto;
    width: 70%;
    min-height: 145px;
    position: relative;
    color: #80459F;
    a{
      color: #444;
      &:hover{
        color: #80459F;
      }
    }
    .title{
      padding-left: 50px;
      h3{
        float: left;
      }
      &::before{
        content: 'Links';
        @include absolute(-17px,auto,auto,50px);
      }
    }
    .list-box{
      width: 100%;
      padding: 0 50px;
      @include absolute;
      span{
        float: left;
      }
      ul{
        display: flex;
        justify-content: left;
        font-size: 12px;
      }
      li{
        margin-left: 20px;
      }
    }
    .hospital{
      top: 30px;
    }
    .hospital-blog{
      top: 55px;
    }
    .experts-blog{
      top: 80px;
    }
    .company{
      top: 105px;
    }
  }
   
</style>
