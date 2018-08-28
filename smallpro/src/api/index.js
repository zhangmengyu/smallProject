//使用axios请求数据
import axios from 'axios'
import qs from 'qs'

//配置基础路径
// axios.defaults.baseURL = 'http://i.66rpg.com';
// axios.defaults.baseURL = 'http://test-service.cgapi.cn/qc-community';
axios.defaults.baseURL = 'http://test-service.cgapi.cn:19096';

axios.interceptors.response.use((res) => res.data);

//编推页整页加载
export let getEditPageData = (data) => {
  return axios.post('/v1/qingcheng/community/index/get_page_by_editor_default', qs.stringify(data));
};
//根据游戏标签加载信息
export let getEditDatabyType = (data) => {
  return axios.post('/v1/qingcheng/community/index/get_page_by_type', qs.stringify(data));
};
//收藏
export let setCollection = (data) => {
  return axios.post('/v1/qingcheng/community/detail/set_collection', qs.stringify(data));
};
//取消收藏
export let cannelCollection = (data) => {
  return axios.post('/v1/qingcheng/community/detail/cancel_collection', qs.stringify(data));
};
//点赞
export let praiseGame = (data) => {
  return axios.post('/v1/qingcheng/community/detail/praise_game', qs.stringify(data));
};
//获取热门搜索
export let getHotSearch = (data) => {
  return axios.post('/v1/qingcheng/community/search/get_hot_search', qs.stringify(data));
};
//智能联想匹配
export let getGameName = (data) => {
  return axios.post('/v1/qingcheng/community/search/get_game_name', qs.stringify(data));
};


