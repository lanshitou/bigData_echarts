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
import { getUserList } from '../../api/api'
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
          title: '用户昵称',
          key: 'username',
          align: 'center'
        },
        {
          title: '真实姓名',
          key: 'realusername',
          align: 'center'
        },
        {
          title: '联系方式',
          key: 'tel',
          align: 'center'
        },
        {
          title: '地址',
          align: 'center',
          render: (h, params) => {
            let type = (params.row.privinceName === null ? '' : params.row.privinceName) + (params.row.cityName === null ? '' : params.row.cityName) + (params.row.districtName === null ? '' : params.row.districtName)
            return h('div', type)
          }
        },
        {
          title: '种植面积',
          key: 'plantArea',
          align: 'center'
        },
        {
          title: '种植作物',
          key: 'plantCrop',
          align: 'center'
        },
        // {
        //   title: '用户类型',
        //   key: 'userType',
        //   align: 'center',
        //   render: (h, params) => {
        //     let type = params.row.userType === 0 ? '智慧新农用户' : params.row.userType === 1 ? '智能灌溉用户' : params.row.userType === 2 ? 'VIP用户' : ''
        //     return h('div', type)
        //   }
        // },
        {
          title: '注册时间',
          key: 'creattime',
          align: 'center'
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Tooltip', {
                props: {
                  placement: 'top'
                }
              }, [
                h('Button', {
                  props: {
                    type: 'ghost',
                    size: 'small',
                    shape: 'circle',
                    icon: 'ios-search'
                  },
                  style: {
                    marginLeft: '5px'
                  },
                  on: {
                    click: () => {
                      this.check(params.row)
                    }
                  }
                }),
                h('div', {
                  slot: 'content'
                }, [
                  h('div', [
                    h('div', '查看')
                  ])
                ])
              ])
            ])
          }
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
    check (date) {
      // console.log(date.userType)
      // user_type=1 && iscontract=0 非vip用户
      if (date.userType === 1 && date.isContract === 0) {
        this.$Message.error('此用户非VIP用户！')
      } else {
        this.$router.push({name: 'user_detail', params: {param: this.param, date: date}})
      }
    },
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
      getUserList(p).then((res) => {
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
