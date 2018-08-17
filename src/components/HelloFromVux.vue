<template>
  <div>
    <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
<!--    <group>
      <cell title="keyword">{{ value }}</cell>
    </group>-->
    <swiper loop height="100px" auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    <p>current index: {{demo06_index}}</p>
    <grid :show-lr-borders="false">
      <grid-item label='九宫格' link="/hello" v-for="i in 4" :key="i">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
    </grid>
    <group>
      <cell is-link title="Simple" link="/component/tabbar-simple"></cell>
      <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
    </group>
    <myfoot></myfoot>
  </div>
</template>

<script>
  import myfoot from '../components/foot'
  import { Search, Swiper, SwiperItem, Grid, GridItem, Group, Cell } from 'vux'
  const baseList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]
  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `(可点击)${item.title}`
  }))
  export default {
    components: {
      Search,
      Swiper,
      SwiperItem,
      Grid,
      GridItem,
      Group,
      Cell,
      myfoot
    },
    data () {
      return {
        demo06_index: 0,
        demo06_list: urlList,
        demo01_list: baseList,
        results: [],
        value: 'test',
        autoFixed: false
      }
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : []
      },
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      },
      demo06_onIndexChange (index) {
        this.demo06_index = index
      }
    }
  }

  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
