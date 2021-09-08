export default {
  pages: [
    'pages/index/index',
    'pages/mine/mine'
  ],
  permission: {
    'scope.userLocation': {
      desc: '你的位置将用于小程序位置接口的效果展示'
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
