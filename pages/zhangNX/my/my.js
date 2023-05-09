// zhangNX/pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      phone: '',
      code: ''
    },
    msgFlag: false,
    order: [{
      orderTime: '3433-3-3-13:33', //下单时间
      status: 4, //订单状态 1已结账，2未结账，3已退单，4已完成，5已取消
      orderDetails: [{
        name: 'aadsfa', //菜品名称
        number: 2, //数量
      }, {
        name: 'hghfgh', //菜品名称
        number: 4, //数量
      }], //明细
      amount: 133, //实收金额
      sumNum: 2, //菜品总数
    }],
    //   order:[{
    //     orderTime:'',//下单时间
    //     status:undefined,//订单状态 1已结账，2未结账，3已退单，4已完成，5已取消
    //     orderDetails:[{
    //         name:'',//菜品名称
    //         number:undefined,//数量
    //     }],//明细
    //     amount:undefined,//实收金额
    //     sumNum:0,//菜品总数
    // }],
  },
  toAddressPage(){
    wx.navigateTo({
      url: '/zhangNX/pages/address/address',
    })
  },
  toOrderPage(){
    wx.switchTab({
      url: '/pages/zhangNX/viewOrder/viewOrder',
    })
  },
  toPageLogin(){
        wx.redirectTo({
            url: '/shenFK/pages/landing/landing',
          })
      },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // this.getTabBar().setData({
    //   active:2
    // })

     this.getTabBar()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})