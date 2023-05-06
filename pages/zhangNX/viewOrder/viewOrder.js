// zhangNX/pages/viewOrder/viewOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paging:{
      page:1,
      pageSize:5
  },
  orderList:[
    {
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
    },
    {
      orderTime: '3433-3-3-13:33', //下单时间
      status: 3, //订单状态 1已结账，2未结账，3已退单，4已完成，5已取消
      orderDetails: [{
        name: 'aadsfa', //菜品名称
        number: 2, //数量
      }, {
        name: 'hghfgh', //菜品名称
        number: 4, //数量
      }], //明细
      amount: 133, //实收金额
      sumNum: 2, //菜品总数
    },
    {
      orderTime: '3433-3-3-13:33', //下单时间
      status: 2, //订单状态 1已结账，2未结账，3已退单，4已完成，5已取消
      orderDetails: [{
        name: 'aadsfa', //菜品名称
        number: 2, //数量
      }, {
        name: 'hghfgh', //菜品名称
        number: 4, //数量
      }], //明细
      amount: 133, //实收金额
      sumNum: 2, //菜品总数
    },
    {
      orderTime: '3433-3-3-13:33', //下单时间
      status: 2, //订单状态 1已结账，2未结账，3已退单，4已完成，5已取消
      orderDetails: [{
        name: 'aadsfa', //菜品名称
        number: 2, //数量
      }, {
        name: 'hghfgh', //菜品名称
        number: 4, //数量
      }], //明细
      amount: 133, //实收金额
      sumNum: 2, //菜品总数
    },
    {
      orderTime: '3433-3-3-13:33', //下单时间
      status: 2, //订单状态 1已结账，2未结账，3已退单，4已完成，5已取消
      orderDetails: [{
        name: 'aadsfa', //菜品名称
        number: 2, //数量
      }, {
        name: 'hghfgh', //菜品名称
        number: 4, //数量
      }], //明细
      amount: 133, //实收金额
      sumNum: 2, //菜品总数
    }
  ],
  
  loading:false,
  finished:false
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