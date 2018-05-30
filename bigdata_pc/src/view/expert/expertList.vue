<template>
  <div class="body">
    <Table border :columns="columns" :data="dataTable" size="small"></Table>
    <div class="pages-block">
      <div class="pages-right">
        <Page :total="total" :page-size="param.rows" @on-page-size-change="doPageSizeChange" @on-change="change" show-sizer show-total
              ref="tablePage" show-elevator ></Page>
      </div>
    </div>
  </div>
</template>

<script>
import { getExpertList } from '../../api/api'
export default {
  data () {
    return {
      total: 0,
      param: {
        page: 1,
        rows: 10
      },
      columns: [
        {
          title: '编号',
          width: 65,
          key: 'id',
          align: 'center'
        },
        {
          title: '专家姓名',
          key: 'realname',
          align: 'center'
        },
        {
          title: '联系方式',
          key: 'mobilePhone',
          align: 'center'
        },
        {
          title: '专家地址',
          align: 'center',
          render: (h, params) => {
            let type = (params.row.provinceName === null ? '' : params.row.provinceName) + (params.row.cityName === null ? '' : params.row.cityName) + (params.row.districtName === null ? '' : params.row.districtName)
            return h('div', type)
          }
        },
        {
          title: '专家类型',
          key: 'expertType',
          align: 'center'
        },
        {
          title: '擅长作物',
          key: 'cropName',
          align: 'center'
        },
        {
          title: '专家评分',
          key: 'avg',
          align: 'center'
        },
        {
          title: '认证时间',
          key: 'verifiedTime',
          align: 'center'
        }
      ],
      dataTable: []
    }
  },
  created () {
    if (this.$route.params.param !== '' && this.$route.params.param !== undefined) {
      this.param = this.$route.params.param
    }
    this.getTableDatas(this.param)
  },
  methods: {
    // 查询公用方法
    getTableDatas: function (param) {
      let vm = this
      let p = {
        // 每页显示条数
        pageSize: param.rows,
        // 当前页
        pageNum: param.page
      }
      vm.$Loading.start()
      getExpertList(p).then((res) => {
        vm.$Loading.finish()
        if (res.data.code !== 30000) {
          vm.dataTable = []
          vm.total = 0
        } else if (res.data.code === 30000) {
          vm.dataTable = res.data.content.list
          vm.total = res.data.content.total
          vm.$refs.tablePage.currentPage = vm.param.page
        }
      })
    },
    // 点击分页页码
    change (page) {
      this.param.page = page
      this.getTableDatas(this.param)
    },
    // 改变当前显示的行数
    doPageSizeChange: function (size) {
      this.param.rows = size
      this.getTableDatas(this.param)
    }
  }
}
</script>

<style scoped>
.body {
  padding: 20px;
  text-align: left;
  height: 90%;
}
.pages-block {
  margin: 0px;
  overflow: hidden;
  margin-top: 10px;
  margin-left: 1px;
  margin-bottom: 140px;
  text-align: center;
}
.pages-right {
  vertical-align: middle;
}

</style>
