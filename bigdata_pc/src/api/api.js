import axios from './index'
import Qs from 'qs'
let base = '/sys'
// 用户综合卡片
export const getUserCart = params => { return axios.get(`${base}/user/get_usercount`, {params: params}) }
// 用户地图
export const getUsermap = params => { return axios.get(`${base}/user/get_user_map`, {params: params}) }
// 用户活跃度
export const getUserActitity = params => { return axios.get(`${base}/user/get_user_liveness`, {params: params}) }
// 用户种植作物
export const getUserPlant = params => { return axios.get(`${base}/user/get_yield_rank`, {params: params}) }
// 用户区域数量
export const getUserArea = params => { return axios.get(`${base}/user/get_usercount_rank`, {params: params}) }
// 用户总数
export const getUserAll = params => { return axios.get(`${base}/user/get_user_rise`, {params: params}) }
// 用户列表
export const getUserList = params => { return axios.get(`${base}/user/listAll`, {params: params}) }
// 用户详情列表
export const getUserDetailList = params => { return axios.get(`${base}/user/userDetail`, {params: params}) }
// 专家综合卡片
export const getExpertCart = params => { return axios.get(`${base}/expert/get_expertcount`, {params: params}) }
// 专家活跃度、好评度排行
export const getExpertOrder = params => { return axios.get(`${base}/expert/get_rank`, {params: params}) }
// 专家按作物分类
export const getExpertCrop = params => { return axios.get(`${base}/expert/get_consistOfCrop`, {params: params}) }
// 专家区域热力地图
export const getExpertHotMap = params => { return axios.get(`${base}/expert/get_heating_map`, {params: params}) }
// 专家分布地图
export const getExpertMap = params => { return axios.get(`${base}/expert/get_expert_map`, {params: params}) }
// 专家列表
export const getExpertList = params => { return axios.get(`${base}/expert/get_expert_list`, {params: params}) }
// 商城综合卡片
export const getMallCart = params => { return axios.get(`${base}/order/get_count`, {params: params}) }
// 商城厂商订单销量
export const getMallCompany = params => { return axios.get(`${base}/order/get_order_company`, {params: params}) }
// 商城肥料占比
export const getMallFertilizer = params => { return axios.get(`${base}/order/get_order_product`, {params: params}) }
// 商城订单走势
export const getMallOrderForm = params => { return axios.get(`${base}/order/get_order_count`, {params: params}) }
// 商城订单排行
export const getMallOrder = params => { return axios.get(`${base}/order/get_order_rank`, {params: params}) }
// 商城订单销售区域地图
export const getMallAreaMap = params => { return axios.get(`${base}/order/get_order_district`, {params: params}) }
// 商城订单飞线地图
export const getMallFlyMap = params => { return axios.get(`${base}/order/get_order_flight`, {params: params}) }
// 监测中心综合卡片
export const getMonitorCart = params => { return axios.get(`${base}/home/get_count`, {params: params}) }
// 监测中心种植方案占比
export const getMonitorPlanPie = params => { return axios.get(`${base}/home/get_suggestion_sales`, {params: params}) }
// 监测中心覆盖面积排行表格
export const getMonitorTable = params => { return axios.get(`${base}/home/get_farmland`, {params: params}) }
// 监测中心用户总数
export const getMonitorUserAll = params => { return axios.get(`${base}/home/get_user_rise`, {params: params}) }
// 监测中心地图
export const getMonitorMap = params => { return axios.get(`${base}/home/get_farmland_spread`, {params: params}) }
// 监测中心解答率
export const getMonitorQuestion = params => { return axios.get(`${base}/home/get_solved_rate_city`, {params: params}) }
