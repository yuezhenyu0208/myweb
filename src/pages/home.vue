<template>
    <div>
      <search  @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
      <!--    <group>
            <cell title="keyword">{{ value }}</cell>
          </group>-->
      <swiper loop height="100px" auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
      <!--<p>current index: {{demo06_index}}</p>-->
      <grid :show-lr-borders="false">
        <grid-item label='购买帐号' link="/hello">
          <img slot="icon" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534945714414&di=8f0735b912d94bde8cd9e79151883451&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2014%2F12%2F31%2FFj9bgkAtudpEHyIBvw8kX_xLIB3A.jpg%2521580x580.jpg">
        </grid-item>
        <grid-item label='查询时长' link="/hello">
          <img slot="icon" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2007344536,1296212301&fm=26&gp=0.jpg">
        </grid-item>
        <grid-item label='在线咨询' link="/hello">
          <img slot="icon" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534945777428&di=86e04c3172f38bbbb8b23c43b92c5a42&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3837576131%2C973269822%26fm%3D214%26gp%3D0.jpg">
        </grid-item>
        <grid-item label='留言aaa' link="/hello">
          <img slot="icon" src="../assets/grid_icon.png">
        </grid-item>
      </grid>
      <group>
        <cell is-link title="注意事项" link="/component/tabbar-simple"></cell>
      </group>
      <panel header="最新文章" :footer="footer" @on-click-item="detail" @on-click-footer="getMore" :list="list" :type="type" @on-img-error="onImgError"></panel>
    </div>
</template>

<script>
  import { Search, Swiper, SwiperItem, Grid, GridItem, Group, Cell, Panel } from 'vux'
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
    title: `${item.title}`
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
      Panel
    },
    data () {
      return {
        demo06_index: 0,
        demo06_list: urlList,
        demo01_list: baseList,
        results: [],
        value: 'test',
        autoFixed: false,
        type: '1',
        list: [],
       /* list: [{
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534757052800&di=cc23f70d03e8c7f797803908eb9412b7&imgtype=0&src=http%3A%2F%2Fask.qcloudimg.com%2Fhttp-save%2Fyehe-1148782%2Fqfwcb4xrqw.png',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
          // url: '/component/cell'
        }, {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534757052800&di=cc23f70d03e8c7f797803908eb9412b7&imgtype=0&src=http%3A%2F%2Fask.qcloudimg.com%2Fhttp-save%2Fyehe-1148782%2Fqfwcb4xrqw.png',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }], */
        footer: {
          title: '查看更多'
        }
      }
    },
    created: function () {
      this.getMore()
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      },
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
      },
      getMore () {
        console.log('展示更多')
        this.$http.get('/blog').then(({data}) => {
          this.list = data.data.list
          console.log(data.data.list)
        })
        /* this.list.push({
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534757052800&di=cc23f70d03e8c7f797803908eb9412b7&imgtype=0&src=http%3A%2F%2Fask.qcloudimg.com%2Fhttp-save%2Fyehe-1148782%2Fqfwcb4xrqw.png',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        }) */
      },
      detail (item) {
        console.log(item.cid)
        this.$router.push({path: '/blog/detail', query: {cid: item.cid}})
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
