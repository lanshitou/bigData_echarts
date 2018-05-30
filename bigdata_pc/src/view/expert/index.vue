<template>
  <div class="body">
    <Row :gutter="32" >
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>专家数量</span>
          <br><br><br>
          <span style="font-size: 40px;">{{expertAll}}</span>
        </p>
        <Tooltip content="平台注册所有专家数" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月认证 &nbsp;&nbsp;&nbsp;{{expertNum}}</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>覆盖区域</span>
          <br><br><br>
          <span style="font-size: 40px;">{{areaAll}}</span>
        </p>
        <Tooltip content="平台覆盖的区域" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月新增城市 &nbsp;&nbsp;&nbsp;{{addAreaNum}}</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>覆盖作物领域</span>
          <br><br><br>
          <span style="font-size: 40px;">{{plantAll}}</span>
        </p>
        <Tooltip content="平台覆盖作物的区域" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>今日增长 &nbsp;&nbsp;&nbsp;{{plantNum}}</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>解答问题数</span>
          <br><br><br>
          <span style="font-size: 40px;">{{questionAll}}</span></p>
        <Tooltip content="平台专家解答问题数" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月解答 &nbsp;&nbsp;&nbsp;{{questionNum}}</p>
      </Card>
      </Col>
    </Row>
    <Row :gutter="32" style="margin-top: 20px">
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>线下服务次数</span>
          <br><br><br>
          <span style="font-size: 40px;">{{serviceAll}}</span>
        </p>
        <Tooltip content="平台专家现在服务次数" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月线下服务 &nbsp;&nbsp;&nbsp;{{serviceNum}}次</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>总被采纳数</span>
          <br><br><br>
          <span style="font-size: 40px;">{{adoptAll}}</span>
        </p>
        <Tooltip content="平台专家回答问题被采纳数" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月新增采纳 &nbsp;&nbsp;&nbsp;{{adoptNum}}</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>被评价次数</span>
          <br><br><br>
          <span style="font-size: 40px;">{{evaluateAll}}</span>
        </p>
        <Tooltip content="平台专家回答问题被评价数" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月被评价 &nbsp;&nbsp;&nbsp;{{evaluateNum}}次</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>在线视频教学时长</span>
          <br><br><br>
          <span style="font-size: 40px;">{{videoAll}}</span></p>
        <Tooltip content="平台专家在线视频教学时长" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月最新视频 &nbsp;&nbsp;&nbsp;{{videoNum}}mins</p>
      </Card>
      </Col>
    </Row >

    <div style="background-color: #404a59">
      <!--地图=================================================================================================-->
      <Row style="margin-top: 20px;" type="flex" justify="center">
        <Col span="24" >
        <div style="position: relative">
          <div style="width: 20%;height: 10%;position: absolute;left:20px;bottom:0;z-index:1">
            <RadioGroup v-model="button" type="button" @on-change="changeMap">
              <Radio label="0">区域热力</Radio>
              <Radio label="1">专家分布</Radio>
            </RadioGroup>
          </div>
          <div id="map" style="height:800px;" >
          </div>
        </div>
        </Col>
      </Row>

    </div>

    <Row :gutter="32" style="margin-top: 20px">
      <!--柱状排行榜图=================================================================================================-->
      <Col span="12" >
      <Card>
        <p slot="title" style="height: 70px">
          <span>专家排行榜</span>
          <br>

          <RadioGroup v-model="expert" type="button" @on-change="changeExpert" style="margin-top: 18px">
            <Radio label="1">活跃度</Radio>
            <Radio label="2">好评度</Radio>
          </RadioGroup>
        </p>
        <p><div id="plant" style="height:400px;"></div></p>
      </Card>
      </Col>
      <!--饼图=================================================================================================-->
      <Col span="12" >
      <Card>
        <p slot="title" style="height: 70px">专家组成结构图</p>
        <p><div id="activity" style="height:400px;"></div></p>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  import { FormateGroupData } from '../../framework/utils'
  import echarts from 'echarts'
  import china from 'echarts/map/js/china'
  import { getExpertCart, getExpertHotMap, getExpertMap, getExpertOrder, getExpertCrop } from '../../api/api'
  export default {
    data () {
      return {
        expert: '1',
        button: '0',
        time: '',
        chart: {},
        expertAll: '',
        areaAll: '',
        plantAll: '',
        questionAll: '',
        expertNum: '300',
        addAreaNum: '20',
        plantNum: '90',
        questionNum: '40',
        serviceAll: '',
        adoptAll: '',
        evaluateAll: '',
        videoAll: '',
        serviceNum: '300',
        adoptNum: '20',
        evaluateNum: '90',
        videoNum: '40'
      }
    },
    methods: {
      drawBarOrder (id, edata) {
        let vm = this
        if (document.getElementById(id) === null) {
          return false
        }
        let _chart = {}
        _chart[id] = echarts.init(document.getElementById(id))
        vm.chart = Object.assign({}, vm.chart, _chart)
        vm['chart'][id].setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          yAxis: {
            data: edata.xAxis.reverse(),
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#ffb069'
              }
            }
          },
          xAxis: {
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          grid: {
            left: '3%',
            right: '9%',
            bottom: '3%',
            containLabel: true
          },
          series: [{
            name: '活跃度',
            type: 'bar',
            barCategoryGap: "35%",
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                formatter: function(params) {
                  return params.data.name
                },
                textStyle: {
                  color: 'white' //color of value
                }
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#ffb069' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#ec2e85' // 100% 处的颜色
                }], false)
              }
            },
            data: edata.series[0].data.reverse()
          }]
        })
      },
      drawpie (id, edata) {
        let vm = this
        if (document.getElementById(id) === null) {
          return false
        }
        let _chart = {}
        _chart[id] = echarts.init(document.getElementById(id))
        vm.chart = Object.assign({}, vm.chart, _chart)
        vm['chart'][id].setOption({
          // title: {
          //   text: '专家组成结构图',
          //   textStyle: {
          //     fontWeight: 'lighter',
          //     fontSize: 14
          //   }
          // },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'right'
          },
          series: [
            {
              name:'专家类别',
              type:'pie',
              radius: ['40%', '55%'],
              //  饼图 带线提示
              label: {
                normal: {
                  formatter: '{b}\n\n  数量:{c}  百分比:{d}%  ',
                }
              },
              data: edata
            }
          ]
        })
      },
      drawMap (id, edata) {
        let vm = this
        if (document.getElementById(id) === null) {
          return false
        }
        let _chart = {}
        _chart[id] = echarts.init(document.getElementById(id))
        vm.chart = Object.assign({}, vm.chart, _chart)
        vm['chart'][id].setOption({
          backgroundColor: '#404a59',
          title: {
            text: '专 家 分 布 信 息 图',
            x:'center',
            top: '10%',
            textStyle: {
              color: '#fff',
              fontWeight: 'lighter'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              params.value[2] = params.value[2] === null ? '' : params.value[2]
              params.value[3] = params.value[3] === null ? '' : params.value[3]
              params.value[4] = params.value[4] === null ? '' : params.value[4]
              params.value[5] = params.value[5] === null ? '' : params.value[5]
              params.value[6] = params.value[6] === null ? '' : params.value[6]
              let datas = params.name + '<br />' + params.value[2] + '<br />擅长作物 : ' + params.value[3] + '<br />负责区域 : ' + params.value[4] + '<br />综合评分 : ' + params.value[6] + '<br />联系电话 : ' + params.value[5]
              return datas
            }
          },
          visualMap: {
            show: false,
            min: 0,
            max: 100,
            calculable: true,
            inRange: {
              color: ['#50a3ba', '#2d86d8','#fff']
            },
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            //  地图随着鼠标滚动缩放
            roam: false,
            label: {
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: '#111'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          series: [
            {
              name: 'pm2.5',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: edata,
              symbolSize: 4,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                emphasis: {
                  borderColor: '#fff',
                  borderWidth: 1
                }
              }
            }
          ]
        })
      },
      drawMapArea (id, edata) {
        let vm = this
        if (document.getElementById(id) === null) {
          return false
        }
        let _chart = {}
        _chart[id] = echarts.init(document.getElementById(id))
        vm.chart = Object.assign({}, vm.chart, _chart)
        vm['chart'][id].setOption({
          backgroundColor: '#404a59',
          title: {
            text: '专 家 区 域 分 布 热 力 图',
            x:'center',
            top: '10%',
            textStyle: {
              color: '#fff',
              fontWeight: 'lighter'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              let datas
              if (params.data !== undefined) {
                datas = params.name + '<br />覆盖专家 : ' + params.data.value[3] + '位<br />提供服务 : ' + params.data.value[0] + '次<br />解决用户疑难 : ' + params.data.value[1] + '次<br />全国热力排行 : ' + params.data.value[2]
              }
              return datas
            }
          },
          visualMap: {
            show: false,
            min: 0,
            max: 50,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true,
            color:['#3C3B3F','red']
          },
          series: [
            {
              name: '专家区域热力',
              type: 'map',
              mapType: 'china',
              coordinateSystem: 'geo',
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data: edata
            }
          ]})
      },
      changeMap (map) {
        if (map === '1') {
          getExpertMap().then((resg) => {
            this.drawMap('map', resg.data.content)
          })
        } else {
          getExpertHotMap().then((resg) => {
            var edata = resg.data.content
            for (var i = 0; i < edata.length; i++) {
              edata[i].name = edata[i].name.slice(0, edata[i].name.length - 1)
            }
            this.drawMapArea('map', edata)
          })
        }
      },
      changeExpert () {
        let par = {
          id: this.expert
        }
        getExpertOrder(par).then((resp) => {
          var edata = FormateGroupData(resp.data.content, 'line', false)
          this.drawBarOrder('plant', edata)
        })
      }
    },
    created () {
      getExpertCart().then((res) => {
        this.expertAll = res.data.content[0].count
        this.areaAll = res.data.content[1].count
        this.plantAll = res.data.content[2].count
        this.questionAll = res.data.content[3].count
        this.serviceAll = res.data.content[4].count
        this.adoptAll = res.data.content[5].count
        this.evaluateAll = res.data.content[6].count
        this.videoAll = res.data.content[7].count
        this.expertNum = res.data.content[0].monthCount
        this.addAreaNum = res.data.content[1].monthCount
        this.plantNum = res.data.content[2].monthCount
        this.questionNum = res.data.content[3].monthCount
        this.serviceNum = res.data.content[4].monthCount
        this.adoptNum = res.data.content[5].monthCount
        this.evaluateNum = res.data.content[6].monthCount
        this.videoNum = res.data.content[7].monthCount
      })
    },
    mounted () {
      let edata
      let vm = this
      // 专家活跃度排行榜++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      vm.$nextTick(function () {
        let par = {
          id: vm.expert
        }
        getExpertOrder(par).then((resp) => {
          edata = FormateGroupData(resp.data.content, 'line', false)
          vm.drawBarOrder('plant', edata)
        })
      })
      // 专家类别饼图++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      vm.$nextTick(function () {
        getExpertCrop().then((ress) => {
          // edata = FormateGroupData(ress.data, 'line', false)
          vm.drawpie('activity', ress.data.content)
        })
      })
      // 地图++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      vm.$nextTick(function () {
        getExpertHotMap().then((resg) => {
          edata = resg.data.content
          for (var i = 0; i < edata.length; i++) {
            edata[i].name = edata[i].name.slice(0, edata[i].name.length - 1)
          }
          // console.log(edata)
          vm.drawMapArea('map', edata)
        })
      })
    }
  }
</script>

<style scoped>
  .body {
    padding: 20px;
    text-align: left;
  }
</style>
