<template>
  <div id="banner">
    <div class="container">
      <div class="slogan">
        <span class="text-red"> </span>
        <span class="text-blue"></span>
      </div>
      <div class="grade">
        <span>上海市医保定点医院</span>
        <span>上海市普陀区"十二五规划"重点民生项目</span>
      </div>
      <div class="search">
        <div class="search_box">
          <i class="icon"></i>
          <span>我要搜索</span>
          <input type="text">
          <button>搜索</button>
        </div>
        <div class="hotkey">

          <ul>热门关键词：
          <li v-for="(item,i) in hotkey" :key="i" class="item">{{ item}}</li>
          </ul>
        </div>
        <div class="link">
          <ul>
            <li v-for="(item, i) in link" :key="i">
              <img :src="`./static/images/banner/${item.icon}`" alt="">
              {{ item.item }}
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div class="sidebar">
      <i class="counsel"></i>
      <div class="content">
        <ul>
          <button>在线预约挂号</button>
          <li v-for="(item,i) in sidebarList" :key="i" class="sidebarItem">
            <a href="">
              {{item.item }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        hotkey:['癫痫','德济脑科','胶质瘤','脊髓肿瘤','动脉瘤'],
        link:[
          {item:'门诊时间',icon:'banner_time.png'},
          {item:'专家会诊',icon:'banner_expert.png'},
          {item:'特约门诊',icon:'see_doctor.png'},
          {item:'在线咨询',icon:'banner_counsel.png'},
          {item:'QQ咨询',icon:'banner_qq.png'},
          {item:'专家预约',icon:'banner_expert_.png'},
          {item:'来院路线',icon:'banner_addr.png'},
          {item:'住院须知',icon:'banner_notice.png'}
        ],
        sidebarList:[
          {item:'脑肿瘤神经外科'},
          {item:'脑血管病中心'},
          {item:'功能神经外科'},
          {item:'癫痫病中心'},
          {item:'神经内科'},
          {item:'神经康复医学'},
          {item:'心血管病中心'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
%clear::after{
    content: '';
    display: block;
    visibility: hidden;
    height: 0;
    line-height: 0;
    clear: both;
    
}
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
  #banner{
    background: no-repeat center/cover url('../assets/banner/banner_bg.jpg');
    height: 70%;
    position: relative;
  }
  .container{
    width: 70%;
    height: 100%;
    background: no-repeat 80% 37%/25% url('../assets/banner/banner_nurse.png');
    margin: 0 auto;
    position: relative;
    .slogan{
      position:absolute;
      background:url('../assets/banner/banner_text_03.png')  no-repeat center/120%;
      height: 35%;
      width: 45%;
      top: 10%;
      left: 5%;
      .text-red{
        @include absolute(35px ,105px);
        width: 50px;
        height: 50px;
        background: url('../assets/banner/banner_text_consult.png') no-repeat center;
        &:hover{
          top:36px;
          @include pointer;
        }
      }
      .text-blue{
        @include absolute(25px, 25px);
        width: 50px;
        height: 50px;
        background: url('../assets/banner/banner_text__expert.jpg');
        &:hover{
          top:26px;
          @include pointer;
        }
      }
    }
    .grade{
      @include absolute(240px,auto , auto,50px);
      display: inline-block;
      width: 50%;
      span{
        display: block;
        width: 100%;
        &:first-child{
          margin-left: -100px
        }
      }
    }
    .search{
      @include absolute(auto, auto, 10px,50px );
      background-image: 
      url('../assets/banner/banner_hotline.jpg'),url('../assets/banner/banner_text_bg.png') ;
      
      background-repeat: no-repeat,no-repeat;
      background-position: right bottom,center;
      background-size:30%, cover;
      width: 80%;
      height: 30%;
        
        
      @extend %clear;
      .search_box{
        padding-top: 20px;
        padding-left: 100px;
        color: #7D4793;
        float: left;
        span{
          @include pointer;
          border: 2px solid transparent;
          display: inline-block;
          width: 80px;
          height: 20px;
          line-height: 20px;
          &:hover{
            border:2px solid #DBCCE7;
            border-radius: 15px;
          }
        }
        input{
          border-radius: 15px;
          height: 25px;
          margin-left: 15px;
          margin-right: 15px;
          padding-left: 15px;
        }
        button{
          border: 1px solid #DBCCE7;
          background: #ECE4F1;
          border-radius: 15px;
          color: #804D9B;
          width: 70px;
          height: 25px;
          &:hover{
            background: #804D9B;
            color: floralwhite;
            @include pointer;
          }
        }
      }
      .icon{
        @include absolute(18px, auto, auto,30px );
        width: 35px;
        height: 35px;
        background: url('../assets/banner/search.png') no-repeat center;
        @include pointer;
      }
      .hotkey{
        @include absolute(60px,auto,auto,50px);
        ul{
          font-size: 12px;
          font-weight: bold;
          color: #7D4793;
          display: flex;
          justify-content: space-between;
          width: 425px;
          li{
            font-weight: 400;
            color: #aaa;
            @include pointer;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
      .link{
        @include absolute(auto,auto,0,0);
        font-size: 12px;
        width: 100%;
        height: 30%;
        
        ul{
          width: 68%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          li{
            position: relative;
            padding-top: 15px;
            color: #A067B6;
            @include pointer;
            &:hover{
              padding-top:14px;
            }
          }
        
          img{
            width: 50%;
            height: 65%;
            @include absolute(-10px,auto,auto,10px);
            &:hover{
              top: -9px;
            }
          }
        }
      }
    }
  }

  .sidebar{
    @include absolute(15px, auto, auto,87.5% );
    height: 80%;
    width: 10%;
    background:url('../assets/slidebar/sidebar_bg.jpg'),url('../assets/slidebar/sidebar_hotline.jpg'),#fff;
    background-repeat: no-repeat,no-repeat;
    background-position:-18px 0, 15px 95%;
    background-size: 325px 225px,120px 50px;
    border:1px solid #D9C1E4;
    border-radius: 3px;
    padding: 5px;
    &::before{
      content: '';
      width: 0;
      height: 0;
      border-right: 50px solid transparent;
      border-top: 50px solid #A067B6;
      @include absolute(0,auto, auto,0 )
    }
    .counsel{
      @include absolute(0,auto,auto,0);
      width: 32px;
      height: 32px;
      background: url('../assets/slidebar/consult.png') no-repeat center;
      &:hover{
        top: 2px;
      }
    }
    .content{
      background: #fff;
      margin-top:90px;
      margin-left: -5px;
      margin-right: -5px;
      padding-top: 18px;
      text-align: center;
      font-size: 12px;
      button{
        border:1px solid transparent;
        border-radius: 5px;
        outline: none;
        color: #fff;
        background: #649FD7;
        width: 100px;
        height: 30px;
        &:hover{
          background: rgb(61, 121, 233);
          font-weight: bold;
        }
      }
      li{
          margin: 5px auto 5px;
          padding-left: 15px;
          text-align: left;
         a{
           display: inline-block;
           width: 80%;
           padding-left: 5px;
           padding-bottom: 2px;
          border-bottom: 1px dashed #D8D8D8;
          @include pointer;
         }
      }
   
       
      }
    }
</style>
