// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    tabbarList: [{
        "pagePath": "/pages/wangSX/selection/selection",
        "text": "首页",
        "icon": "home-o"
      },
      {
        "pagePath": "/pages/zhangNX/viewOrder/viewOrder",
        "text": "订单",
        "icon": "apps-o"
      },      
      {
        "pagePath": "/pages/zhangNX/my/my",
        "text": "我的",
        "icon": "user-o"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e){
      wx.switchTab({
        url:this.data.tabbarList[e.detail].pagePath,
      })
    }
  }
})
