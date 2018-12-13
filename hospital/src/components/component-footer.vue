<template>
  <div id="footer">
    <Links/>
    <div class="box">
      <div class="about">
        <ul>
          <li v-for="(item,i) in about" :key="i">
            {{ item.item }}
          </li>
        </ul>
      </div>
      <div class="copyright">
        <ul>
          <li>
            <span>上海xx医院地址：</span>
            {{ addr.addr }}
          </li>
          <li>
            <span>邮编：</span>
            {{ addr.postcode }}
          </li>
          <li>
             <span>传真：</span>
            {{ addr.fax }}
          </li>
          <li>
            <span>邮箱：</span>
            {{ addr.email }}
          </li>
          <li>
            @2013&nbsp;&nbsp;xxxx.org&nbsp;&nbsp;上海xx医院版权所有&nbsp;&nbsp;沪ICP备12345678号
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</template>

<script>
import Links from './links';
  export default{
    components: {Links},
    data(){
      return {
        about: [
          {item: '关于德济',link:''},
          {item: '院长寄语',link:''},
          {item: '门诊流程',link:''},
          {item: '专家门诊',link:''},
          {item: '医院信息',link:''},
          {item: '来院路线',link:''},
          {item: '在线投诉',link:''},
          {item: '联系我们',link:''},
        ],
        addr:{
          addr: '上海市xx区古浪路xxx号',
          postcode: '200331',
          tel: '021-6000000',
          fax: '021-6222222',
          email: 'service@xxx.com'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

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
// %center{
//   width: 70%;
//   position: relative;
//   left: 50%;
//   margin-left: -35%;
// }
%footer-center{
     float: left;
      margin-left: 19%;
   }
#footer{
  @extend %clear;
  overflow: hidden;
  .box{
  background:#9D68B6 ;
  overflow: hidden;
  font-size: 16px;
  color: #E7DFEF;
   
    .about{
      @extend %footer-center;
      @include pointer;
      height: 40px;
      line-height: 40px;
      ul{
        display: flex;
      }
      li{
        margin-right: 30px;
        &:hover{
          color: #fff;
        }
      }
    }

    .copyright{
      clear: both;
      border-top: 1px solid #A671BF;
      @extend %clear;
      ul{
        @extend %footer-center;
        display: flex;
        width: 35%;
        flex-wrap: wrap;
        li{
          align-content: space-between;
          padding-top: 5px;
          padding-bottom: 5px;
        }
      }
    }
  }
}

</style>
