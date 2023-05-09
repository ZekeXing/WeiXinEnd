// shenFK/pages/submit/submit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice: 0,
    address: [{
      detail: '大连东软信息学院三期', //详细地址
      consignee: '蒸汽波', //姓名
      phone: '13130476190', //手机号

    }],
    finishTime: '19:25', //送达时间
    cartData: [],
    note: ' ', //备注信息
    order: [{
      orderTime: '2023.10.29晚上6:50', //下单时间
      status: 4, //订单状态 1已结账，2未结账，3已退单，4已完成，5已取消
      orderDetails: [{
        name: '杭州西湖醋鱼(大份)', //菜品名称
        number: 1, //数量
      }, {
        name: '阳澄湖大闸蟹(大只)', //菜品名称
        number: 2, //数量
      }], //明细
      amount: 133, //实收金额
      sumNum: 3, //菜品总数
    }],
    showList: []
  },
  sum() {
    this.reDown()
    this.setData({
      totalPrice: 0
    })

    for (let index = 0; index < this.data.cartList.length; index++) {
      const element = this.data.cartList[index];
      this.setData({
        totalPrice: this.data.totalPrice + (element.retail_price * element.quantity)
      })

    }
  },
  createorder() {
    wx.redirectTo({
      url: '/pages/zhangNX/viewOrder/viewOrder',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // let showList = []
    // let cartData = this.data.cartData

    let cartData = wx.getStorageSync('cartData')
    // console.log(cartData);
    this.setData({
    cartDat: cartData

    })

    // for (let index = 0; index < cartData.length; index++) {
    //   const element = cartDat[index];
    //   console.log(element);
    //   console.log(123);

    // }
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
   
    
    this.setData({
      // showList:
    })
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

  },
  goBack() {
    wx.navigateBack()
  },
})