<template>
  <div class="body">
    <Row :gutter="32" >
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>订单总交易额</span>
          <br><br><br>
          <span style="font-size: 40px;">{{expertAll}}</span>
        </p>
        <Tooltip content="平台订单总交易额" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月增长 &nbsp;&nbsp;&nbsp;{{expertNum}}</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>农业种植解决方案数目</span>
          <br><br><br>
          <span style="font-size: 40px;">{{areaAll}}</span>
        </p>
        <Tooltip content="平台农业种植解决方案数目" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月新增方案 &nbsp;&nbsp;&nbsp;{{addAreaNum}}</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>商品总数</span>
          <br><br><br>
          <span style="font-size: 40px;">{{plantAll}}</span>
        </p>
        <Tooltip content="平台商品总数" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月上架 &nbsp;&nbsp;&nbsp;{{plantNum}} 件</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>总订单数</span>
          <br><br><br>
          <span style="font-size: 40px;">{{questionAll}}</span></p>
        <Tooltip content="平台总订单数" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月订单数 &nbsp;&nbsp;&nbsp;{{questionNum}}</p>
      </Card>
      </Col>
    </Row>
    <Row :gutter="32" style="margin-top: 20px">
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>出售肥料总质量</span>
          <br><br><br>
          <span style="font-size: 40px;">{{serviceAll}}</span>
        </p>
        <Tooltip content="平台出售肥料总质量" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月出售 &nbsp;&nbsp;&nbsp;{{serviceNum}}次</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>自提点数量</span>
          <br><br><br>
          <span style="font-size: 40px;">{{adoptAll}}</span>
        </p>
        <Tooltip content="平台自提点数量" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月新增自提点 &nbsp;&nbsp;&nbsp;{{adoptNum}}</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>站长/服务人员数量</span>
          <br><br><br>
          <span style="font-size: 40px;">{{evaluateAll}}</span>
        </p>
        <Tooltip content="平台站长/服务人员数量" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月增长 &nbsp;&nbsp;&nbsp;{{evaluateNum}}个</p>
      </Card>
      </Col>
      <Col span="6" >
      <Card>
        <p slot="title" style="height: 90px">
          <span>肥料销售区域</span>
          <br><br><br>
          <span style="font-size: 40px;">{{videoAll}}</span></p>
        <Tooltip content="平台专家在线视频教学时长" placement="left-end"  slot="extra">
          <Icon type="ios-information-outline" size="24"></Icon>
        </Tooltip>
        <p>本月最增 &nbsp;&nbsp;&nbsp;{{videoNum}}</p>
      </Card>
      </Col>
    </Row >
    <div style="background-color: #404a59;">
      <!--地图=================================================================================================-->
      <Row style="margin-top: 20px;" type="flex" justify="center" v-if="button === '0'">
        <Col span="24" >
        <div >
          <div id="map" style="height:800px;" >
          </div>
        </div>
        </Col>
      </Row>
      <!--地图=================================================================================================-->
      <Row style="margin-top: 20px;" type="flex" justify="center"  v-if="button === '1'">
        <Col span="24" >
        <div style="position: relative">
          <div id="map1" style="height:800px;"></div>
        </div>
        </Col>
      </Row>

      <Row type="flex" justify="start" >
        <Col span="4">
        <div style="padding-bottom: 50px;padding-left: 30px">
          <RadioGroup v-model="button" type="button" @on-change="changeMap">
            <Radio label="0">订单飞线</Radio>
            <Radio label="1">销售区域</Radio>
          </RadioGroup>
        </div>
        </Col>
      </Row>

    </div>
    <!--订单 排行、折线图=================================================================================================-->
    <Row style="margin-top: 20px;" type="flex" justify="center">
      <Col span="24" >
      <Card>
        <p slot="title">订单走势图</p>
        <div  slot="extra">
          <Button type="text" @click="month">近一个月</Button>
          <Button type="text" @click="quarter">近三个月</Button>
          <Button type="text" @click="todayYear">今年</Button>
          <Button type="text" @click="lastYear">去年</Button>
          <DatePicker v-model="time" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px" :editable="false" @on-change="timeChange" ></DatePicker>
        </div>
        <Row>
          <Col span="12">
          <div id="userAll" style="height:400px;"></div>
          </Col>
          <Col span="12">
          <div id="order" style="height:400px;"></div>
          </Col>
        </Row>
      </Card>
      </Col>
    </Row>

    <Row :gutter="32" style="margin-top: 20px">
      <!--饼图=================================================================================================-->
      <Col span="12" >
      <Card>
        <p slot="title" >订单肥料类型占比</p>
        <p><div id="activity" style="height:500px;"></div></p>
      </Card>
      </Col>
      <!--柱状排行榜图=================================================================================================-->
      <Col span="12" >
      <Card>
        <p slot="title" >
          <span>肥料提供商销量分析</span>
          <br>
        </p>
        <p><div id="plant" style="height:500px;"></div></p>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  import { FormateGroupData } from '../../framework/utils'
  import echarts from 'echarts'
  import china from 'echarts/map/js/china'
  import { getMallCompany, getMallFertilizer, getMallOrder, getMallOrderForm, getMallCart, getMallAreaMap, getMallFlyMap} from '../../api/api'
  export default {
    data () {
      return {
        expertName: '专家活跃度排行榜',
        button: '0',
        para: {
          beginTime: '',
          endTime: ''
        },
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
      drawCompany (id, edata) {
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
            axisPointer: {
              lineStyle: {
                color: '#57617B'
              }
            }
          },
          legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            right: '4%',
            // data: [],
            textStyle: {
              fontSize: 12,
              color: 'red'
            }
          },
          grid: {
            left: '3%',
            right: '9%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            name: '时间',
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#57617B'
              }
            },
            data: edata.x
          }],
          yAxis: [{
            type: 'value',
            name: '订单数量 (/条)',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#57617B'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            },
            splitLine: {
              lineStyle: {
                color: '#57617B'
              }
            }
          }],
          series: [{
            name: edata.name[0],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(137, 189, 27, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,27,0.27)',
                borderWidth: 12

              }
            },
            data: edata.y[0]
          }, {
            name: edata.name[1],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0, 136, 212, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

              }
            },
            data: edata.y[1]
          }, {
            name: edata.name[2],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(219, 50, 51, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
              }
            },
            data: edata.y[2]
          }, {
            name: edata.name[3],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(160, 32, 240, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(160, 32, 240, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(160, 32, 240)',
                borderColor: 'rgba(160, 32, 240,0.27)',
                borderWidth: 12

              }
            },
            data: edata.y[3]
          }, {
            name: edata.name[4],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(255, 165, 0, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(255, 165, 0, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(255, 165, 0)',
                borderColor: 'rgba(255, 165, 0,0.27)',
                borderWidth: 12

              }
            },
            data: edata.y[4]
          }, {
            name: edata.name[5],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(34, 139, 34, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(34, 139, 34, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(34, 139, 34)',
                borderColor: 'rgba(34, 139, 34,0.27)',
                borderWidth: 12

              }
            },
            data: edata.y[5]
          }, {
            name: edata.name[6],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0,0,0, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(0,0,0, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(0,0,0)',
                borderColor: 'rgba(0,0,0,0.27)',
                borderWidth: 12

              }
            },
            data: edata.y[6]
          }, {
            name: edata.name[7],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(255,255,0, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(255,255,0, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(255,255,0)',
                borderColor: 'rgba(255,255,0,0.27)',
                borderWidth: 12

              }
            },
            data: edata.y[7]
          }, {
            name: edata.name[8],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0,0,255, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(0,0,255, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(0,0,255)',
                borderColor: 'rgba(0,0,255,0.27)',
                borderWidth: 12

              }
            },
            data: edata.y[8]
          }, {
            name: edata.name[9],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(139, 69 ,19, 0.3)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(139, 69 ,19, 0)'
                  }], false),
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(139, 69 ,19)',
                  borderColor: 'rgba(139, 69 ,19,0.27)',
                  borderWidth: 12

                }
              }
            },
            data: edata.y[9]
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
          backgroundColor: '#fff',
          title: {
            text: '肥料分类占比',
            subtext: '2018年',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              fontSize: 16
            }
          },
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{b}: {c}kg ({d}%)"
          },
          legend: {
            orient: 'horizontal',
            bottom: '0%'
            // data:
          },
          series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['25%', '58%'],
            color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

            label: {
              normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 14
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: edata
          }, {
            type: 'pie',
            radius: ['58%', '83%'],
            itemStyle: {
              normal: {
                color: '#F2F2F2'
              },
              emphasis: {
                color: '#ADADAD'
              }
            },
            label: {
              normal: {
                position: 'inner',
                formatter: '{c}kg',
                textStyle: {
                  color: '#777777',
                  fontWeight: 'bold',
                  fontSize: 14
                }
              }
            },
            data: edata
          }]
        })
      },
      drawMap (id, edata) {
        var geoCoordMap = {}
        var mapFeatures = echarts.getMap('china').geoJson.features
        mapFeatures.forEach(function(v) {
          // 地区名称
          var name = v.properties.name
          // 地区经纬度
          geoCoordMap[name] = v.properties.cp

        });
        var convertData = function(data) {
          var res = []
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name]
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
              })
            }
          }
          return res
        }
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
            text: '智 慧 农 业 订 单 分 布 图',
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
              if (params.seriesIndex === 1) {
                if (params.data !== undefined) {
                  datas = params.name + '<br />订单数量 : ' + params.data.value[0] + '<br />交易总额 : ' + params.data.value[1] + '<br />总重量 : ' + params.data.value[2] + 'kg<br />方案条目 : ' + params.data.value[3] + '<br />排名 : ' + params.data.value[4]
                }
              } else {
                datas = params.name + '<br />订单数量 : ' + params.data.value[2] + '<br />交易总额 : ' + params.data.value[3] + '<br />总重量 : ' + params.data.value[4] + 'kg<br />方案条目 : ' + params.data.value[5] + '<br />排名 : ' + params.data.value[6]
              }
              return datas
            }
          },
          visualMap: {
            show: false,
            min: 0,
            max: 100,
            calculable: true,
            seriesIndex: [1],
            inRange: {
              color: ['#00467F', '#A5CC82']
            },
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            //  地图随着鼠标滚动缩放
            // roam: true,
            label: {
              normal: {
                show: false,
                color: '#c1c4c8'
              },
              emphasis: {
                show: false,
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#031525',
                borderColor: '#3B5077',
              },
              emphasis: {
                areaColor: '#2B91B7',
              }
            }
          },
          series: [
            {
              name: '散点',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: convertData(edata),
              symbolSize: function(val) {
                return val[2] / 10;
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#05C3F9'
                }
              }
            },
            {
              type: 'map',
              map: 'china',
              geoIndex: 0,
              aspectScale: 0.75, //长宽比
              showLegendSymbol: false, // 存在legend时显示
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: false,
                  textStyle: {
                    color: '#fff'
                  }
                }
              },
              // roam: true,
              itemStyle: {
                normal: {
                  areaColor: '#031525',
                  borderColor: '#3B5077',
                },
                emphasis: {
                  areaColor: '#2B91B7'
                }
              },
              animation: false,
              data: edata
            },
            {
              name: '点111',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin', //气泡
              symbolSize: function(val) {
                var a = (100 - 20) / (480 - 9);
                var b = 20 - a * 9;
                b = 100 - a * 480;
                return a * val[2] + b;
              },
              label: {
                normal: {
                  show: true,
                  formatter:function (params) {
                    return params.value[6]
                  },
                  textStyle: {
                    color: '#fff',
                    fontSize: 9,
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#F62157', //标志颜色
                }
              },
              zlevel: 6,
              data: convertData(edata),
            }
          ]
        })
      },
      drawMapArea (id, edata) {
        var geoCoordMap = {}
        var mapFeatures = echarts.getMap('china').geoJson.features
        mapFeatures.forEach(function(v) {
          // 地区名称
          var name = v.properties.name
          // 地区经纬度
          geoCoordMap[name] = v.properties.cp
        })
        // console.log(JSON.stringify(geoCoordMap))
        var data = edata.data
        var convertData = function(data) {
          var res = []
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];

            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              })
            }
          }
          return res
        }
        let vm = this
        if (document.getElementById(id) === null) {
          return false
        }
        let _chart = {}
        _chart[id] = echarts.init(document.getElementById(id))
        vm.chart = Object.assign({}, vm.chart, _chart)
        var option = {
          backgroundColor: '#404a59',
          title: {
            text: '智 慧 农 业 订 单 飞 线 图',
            x:'center',
            top: '10%',
            textStyle: {
              color: '#fff',
              fontWeight: 'lighter'
            }
          },

          tooltip: {
            trigger: 'item'

          },

          visualMap: {
            show: false,
            min: 0,
            max: 100,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            inRange: {
              color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
            }
          },
          geo: {
            map: 'china',
            zoom: 1.2,
            label: {
              normal: {
                show: false,
                color: '#c1c4c8'
              },
              emphasis: {
                show: false,
                // color: '#292929'
              }
            },
            // roam: true,
            itemStyle: {
              normal: {
                areaColor: '#031525',
                borderColor: '#3B5077'
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            }
          },
          series: [
            {
              name: '目的地点',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              // name value [经纬度]
              data: convertData(data),
              symbolSize: 8,
              showEffectOn: 'render',
              rippleEffect: {
                scale: 5,
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#c60fff',
                  shadowBlur: 20,
                  shadowColor: '#333'
                }
              }
            },
            {
              type: 'map',
              mapType: 'china',
              geoIndex: 0,
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              }
            }
          ]
        }
        for (var j = 0; j < edata.length - 1; j++) {
          var opp ={
            name: edata[j][0].name,
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0
            },
            lineStyle: {
              normal: {
                color:'#c60fff',
                width: 2,
                opacity:0.5,
                curveness:0.2
              }
            },
            data: edata[j].map(function (dataItem) {
              // console.log(geoCoordMap['重庆市'])
              return {
                fromName: edata[j][0].name,
                toName: dataItem.name,
                coords: [
                  geoCoordMap[edata[j][0].name],
                  geoCoordMap[dataItem.name]
                ]
              }
            })
          }
          option.series.push(opp)
        }
        vm['chart'][id].setOption(option)
      },
      changeMap () {
        if (this.button === '1') {
          getMallAreaMap().then((res) => {
            var edatae = res.data.content
            for (var i = 0; i < edatae.length; i++) {
              edatae[i].name = edatae[i].name.slice(0, edatae[i].name.length - 1)
            }
            this.drawMap('map1', edatae)
          })
        } else if (this.button === '0') {
          getMallFlyMap().then((resg) => {
            var edata = resg.data.content
            edata.data = []
            for (var i = 0; i < edata.length; i++) {
              for (var j = 0; j < edata[i].length; j++) {
                edata[i][j].name = edata[i][j].name.slice(0, edata[i][j].name.length - 1)
                edata.data.push(edata[i][j])
              }
            }
            this.drawMapArea('map', edata)
          })
        }
      },
      drawLineAll (id, edata) {
        let vm = this
        if (document.getElementById(id) === null) {
          return false
        }
        let _chart = {}
        _chart[id] = echarts.init(document.getElementById(id))
        vm.chart = Object.assign({}, vm.chart, _chart)
        vm['chart'][id].setOption({
          title: {
            text: '订单走势图',
            textStyle: {
              fontWeight: 'lighter',
              fontSize: 14
            }
          },
          color:['#fbceb2','#dbb0e3'],
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            top: '15%',
            containLabel: true
          },
          calculable: true,
          xAxis: [
            {
              name: '时间',
              type: 'category',
              boundaryGap: false,
              data: edata.xAxis
            }
          ],
          yAxis: {
            name: '订单数量',
            type: 'value'
          },
          series: [
            {
              name: '签约用户',
              type: 'line',
              areaStyle: {
                normal: {
                  type: 'default',
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(199, 37, 50,0.2)'
                  }, {
                    offset: 1,
                    color: 'rgba(199, 37, 50,0.2)'
                  }], false)
                }
              },
              smooth: true,
              itemStyle: {
                normal: {areaStyle: {type: 'default'}}
              },
              data: edata.series[0].data
            }
          ]
        })
      },
      drawOrder (id, edata) {
        let vm = this
        if (document.getElementById(id) === null) {
          return false
        }
        let _chart = {}
        _chart[id] = echarts.init(document.getElementById(id))
        vm.chart = Object.assign({}, vm.chart, _chart)
        vm['chart'][id].setOption({
          title : {
            text: '订单数量排行榜',
            textStyle: {
              fontWeight: 'lighter',
              fontSize: 14
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          yAxis: {
            name: '区域',
            data: edata.xAxis.reverse()
          },
          xAxis: {
            name: '数量',
            type: 'value',
            axisLine: {
              show: true
            },
            axisTick: {
              show: true
            },
            axisLabel: {
              show: true
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
            name: '数量',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                textStyle: {
                  color: 'white' //color of value
                }
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#EF8CD0' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#FFB7A6' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 15,15, 0],
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
              }
            },
            data: edata.series[0].data.reverse()
          }]
        })
      },
      month () {
        this.time = ''
        let edata
        this.para.endTime = this.formatDate(new Date())
        this.para.beginTime = this.formatDateLastMonth(new Date())
        getMallOrderForm(this.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else if (res.data.code !== 30000) {
            edata = {}
            edata.xAxis = []
            edata.series = [{}]
            edata.series[0].data = []
          }
          this.drawLineAll('userAll', edata)
        })
        getMallOrder(this.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else if (res.data.code !== 30000) {
            edata = {}
            edata.xAxis = []
            edata.series = [{}]
            edata.series[0].data = []
          }
          this.drawOrder('order', edata)
        })
      },
      quarter () {
        this.time = ''
        let edata
        this.para.endTime = this.formatDate(new Date())
        this.para.beginTime = this.formatDateLastMonthThr(new Date())
        getMallOrderForm(this.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else if (res.data.code !== 30000) {
            edata = {}
            edata.xAxis = []
            edata.series = [{}]
            edata.series[0].data = []
          }
          this.drawLineAll('userAll', edata)
        })
        getMallOrder(this.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else if (res.data.code !== 30000) {
            edata = {}
            edata.xAxis = []
            edata.series = [{}]
            edata.series[0].data = []
          }
          this.drawOrder('order', edata)
        })
      },
      todayYear () {
        this.time = ''
        let edata
        this.para.endTime = this.formatDate(new Date())
        this.para.beginTime = this.formatDateTodayYear(new Date())
        getMallOrderForm(this.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else if (res.data.code !== 30000) {
            edata = {}
            edata.xAxis = []
            edata.series = [{}]
            edata.series[0].data = []
          }
          this.drawLineAll('userAll', edata)
        })
        getMallOrder(this.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else if (res.data.code !== 30000) {
            edata = {}
            edata.xAxis = []
            edata.series = [{}]
            edata.series[0].data = []
          }
          this.drawOrder('order', edata)
        })
      },
      lastYear () {
        this.time = ''
        let edata
        this.para.beginTime = this.formatDateLastYear(new Date())
        this.para.endTime = this.formatDateLastYearEnd(new Date())
        getMallOrderForm(this.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else if (res.data.code !== 30000) {
            edata = {}
            edata.xAxis = []
            edata.series = [{}]
            edata.series[0].data = []
          }
          this.drawLineAll('userAll', edata)
        })
        getMallOrder(this.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else if (res.data.code !== 30000) {
            edata = {}
            edata.xAxis = []
            edata.series = [{}]
            edata.series[0].data = []
          }
          this.drawOrder('order', edata)
        })
      },
      // 日期格式转换-------------------
      formatDate (date) {
        var y = date.getFullYear()
        var m = date.getMonth() + 1
        m = m < 10 ? '0' + m : m
        var d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        var newDate = y + '-' + m + '-' + d
        return newDate
      },
      formatDateLastMonth (date) {
        var y = date.getFullYear()
        var m = date.getMonth() + 1 - 1
        m = m < 10 ? '0' + m : m
        var d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        var newDate = y + '-' + m + '-' + d
        return newDate
      },
      formatDateLastMonthThr (date) {
        var y = date.getFullYear()
        var m = date.getMonth() + 1 - 3
        m = m < 10 ? '0' + m : m
        var d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        var newDate = y + '-' + m + '-' + d
        return newDate
      },
      formatDateTodayYear (date) {
        var y = date.getFullYear()
        // var m = date.getMonth() + 1 - 3
        // m = m < 10 ? '0' + m : m
        // var d = date.getDate()
        // d = d < 10 ? ('0' + d) : d
        var newDate = y + '-01-01'
        return newDate
      },
      formatDateLastYear (date) {
        var y = date.getFullYear() - 1
        var newDate = y + '-01-01'
        return newDate
      },
      formatDateLastYearEnd (date) {
        var y = date.getFullYear() - 1
        var newDate = y + '-12-31'
        return newDate
      },
      timeChange (change) {
        let edata
        if (change[0] !== '' && change[1] !== undefined) {
          this.para.beginTime = this.formatDate(new Date(change[0]))
          this.para.endTime = this.formatDate(new Date(change[1]))
        } else {
          this.para.beginTime = ''
          this.para.endTime = ''
        }
        getMallOrderForm(this.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else if (res.data.code !== 30000) {
            edata = {}
            edata.xAxis = []
            edata.series = [{}]
            edata.series[0].data = []
          }
          this.drawLineAll('userAll', edata)
        })
        getMallOrder(this.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else if (res.data.code !== 30000) {
            edata = {}
            edata.xAxis = []
            edata.series = [{}]
            edata.series[0].data = []
          }
          this.drawOrder('order', edata)
        })
      }
    },
    created () {
      getMallCart().then((res) => {
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
      // 肥料提供商++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      vm.$nextTick(function () {
        getMallCompany().then((resp) => {
          vm.drawCompany('plant', resp.data.content[0])
        })
      })
      // 类别饼图++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      vm.$nextTick(function () {
        getMallFertilizer().then((ress) => {
          vm.drawpie('activity', ress.data.content)
        })
      })
      // 订单排行++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      vm.$nextTick(function () {
        getMallOrder(vm.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else {
            edata.xAxis = []
            edata.series[0].data = []
          }
          vm.drawOrder('order', edata)
        })
      })
      // 订单走势++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      vm.$nextTick(function () {
        getMallOrderForm(vm.para).then((res) => {
          if (res.data.code === 30000) {
            edata = FormateGroupData(res.data.content, 'line', false)
          } else {
            edata.xAxis = []
            edata.series[0].data = []
          }
          vm.drawLineAll('userAll', edata)
        })
      })
      // 地图++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      vm.$nextTick(function () {
        getMallFlyMap().then((resg) => {
          edata = resg.data.content
          edata.data = []
          for (var i = 0; i < edata.length; i++) {
            // edata[i].name = edata[i].name.slice(0, edata[i].name.length - 1)
            for (var j = 0; j < edata[i].length; j++) {
              edata[i][j].name = edata[i][j].name.slice(0, edata[i][j].name.length - 1)
              edata.data.push(edata[i][j])
            }
          }
          vm.drawMapArea('map', edata)
        })
      })
      // 地图++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      vm.$nextTick(function () {
        getMallAreaMap().then((res) => {
          var edatae = res.data.content
          for (var i = 0; i < edatae.length; i++) {
            edatae[i].name = edatae[i].name.slice(0, edatae[i].name.length - 1)
          }
          this.drawMap('map1', edatae)
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
