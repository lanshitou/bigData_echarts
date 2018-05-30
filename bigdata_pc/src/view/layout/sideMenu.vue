<template>
  <div class="classname">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">智慧农业数据中心
              <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24" color="#fff"></Icon>

            </div>
            <div class="layout-nav">
              <!--<MenuItem name="1">-->
              <!--<Icon type="ios-search" size="24"></Icon>-->
              <!--</MenuItem>-->
              <!--<MenuItem name="2">-->
              <!--<Icon type="ios-bell" size="24"></Icon>-->
              <!--</MenuItem>-->
              <!--<MenuItem name="3">-->
              <!--&lt;!&ndash;<Icon type="ios-analytics" ></Icon>&ndash;&gt;-->
              <!--&lt;!&ndash;Item 3&ndash;&gt;-->
              <!--</MenuItem>-->
            </div>
          </Menu>
        </Header>
      </Layout>
      <Layout >
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" class="sidemenu">
          <Menu theme="dark" width="auto" style="text-align:left" :class="menuitemClasses" :open-names="[getCurrentMenu()]" :active-name="getCurrentMenu()" accordion @on-select="clickMenuItems" ref="sideMenu"  >
            <MenuItem name="monitor_index">
              <Icon type="speedometer"></Icon>
              <span>监测中心</span>
            </MenuItem>
            <!--<MenuItem name="monitor_index">-->
            <!--<Icon type="compose"></Icon>-->
            <!--<span>地块数据中心</span>-->
            <!--</MenuItem>-->
            <MenuItem name="mall_index">
              <Icon type="ios-keypad"></Icon>
              <span>商城数据中心</span>
            </MenuItem>
            <MenuItem name="expert_index" v-show="isCollapsed">
              <Icon type="ios-list-outline"></Icon>
              <span>专家数据中心</span>
            </MenuItem>
            <MenuItem name="user_index"  v-show="isCollapsed">
              <Icon type="ios-analytics"></Icon>
              <span>用户数据中心</span>
            </MenuItem>
            <Submenu name="expert_index" v-show="!isCollapsed">
              <template slot="title">
                <Icon type="ios-list-outline"></Icon>
                专家数据中心
              </template>
              <MenuItem name="expert_index">专家数据仪表盘</MenuItem>
              <MenuItem name="expert_list">专家信息列表</MenuItem>
            </Submenu>
            <Submenu name="user_index" v-show="!isCollapsed">
              <template slot="title">
                <!--<Icon type="ios-checkmark-outline"></Icon>-->
                <Icon type="ios-analytics"></Icon>
                用户数据中心
              </template>
              <MenuItem name="user_index">用户数据仪表盘</MenuItem>
              <MenuItem name="user_list">用户信息列表</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
      </Layout>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ];
    },
    menuitemClasses () {
      return [
        'menu-item',
        'submenu',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  created () {
    this.clickMenuItems(this.getCurrentMenu())
  },
  methods: {
    collapsedSider () {
      this.$emit('menu', 1)
      this.$refs.side1.toggleCollapse();
    },
    clickMenuItems (key) {
      key = key.indexOf('/') === 0 ? key : '/' + key
      this.$router.push({ path: key })
    },
    getCurrentMenu () {
      let path = this.$route.path
      path = (path === '/') ? 'monitor_index' : path
      path = path.indexOf('/') === 0 ? path.substr(1) : path
      this.clickMenuItems(path)
      return path
    }
  }
}
</script>

<style lang='scss'>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    font-size: 17px;
    letter-spacing: 3px;
    color: #fff;
    float: left;
    position: relative;
    left: 20px;
    height: 30px;
  }
  .layout-nav{
    float: right;
    margin: 0 auto;
    margin-right: 20px;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    /*width: 69px;*/
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .ivu-menu-horizontal {
    height: 0px !important;
  }
  .ivu-layout-header {
    padding: 0px !important;
    height: 59px !important;
  }
  .sidemenu {
    background-color: #1c2438;
    height:calc(100vh - 61px);
    width: 100%;
  }
  .ivu-menu-dark {
    background-color: #1c2438 !important;
  }

  .ivu-menu {
    z-index: 0 !important;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
    background-color: black !important;
  }
  .classname.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
    color: #fff !important;
    background-color: black !important;
  }
  .ivu-menu-submenu-title span>i, .ivu-menu-submenu-title>i {
    margin-right: 6px !important;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
    color: #fff !important;
    background-color: black !important;
  }

</style>
