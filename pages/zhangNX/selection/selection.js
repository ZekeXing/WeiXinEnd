// pages/wangSX/selection/selection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //左边菜品类别index
    activeType: 0,
    // categoryList: [],
    categoryList: [{
      id: 1,
      name: '电视',
      type: 'tv'
    },
    {
      id: 2,
      name: '手机',
      type: 'phone'
    },
    {
      id: 3,
      name: '电脑',
      type: 'computer'
    },
    {
      id: 4,
      name: '家具',
      type: 'furniture'
    },{
      id: 1,
      name: '电视',
      type: 'tv'
    },
    {
      id: 2,
      name: '手机',
      type: 'phone'
    },
    {
      id: 3,
      name: '电脑',
      type: 'computer'
    },
    {
      id: 4,
      name: '家具',
      type: 'furniture'
    },{
      id: 1,
      name: '电视',
      type: 'tv'
    },
    {
      id: 2,
      name: '手机',
      type: 'phone'
    },
    {
      id: 3,
      name: '电脑',
      type: 'computer'
    },
    {
      id: 4,
      name: '家具',
      type: 'furniture'
    },{
      id: 1,
      name: '电视',
      type: 'tv'
    },
    {
      id: 2,
      name: '手机',
      type: 'phone'
    },
    {
      id: 3,
      name: '电脑',
      type: 'computer'
    },
    {
      id: 4,
      name: '家具',
      type: 'furniture'
    },
    ],
    categoryId: undefined,
    dishList: [],
    cartData: [],
    dialogFlavor: {
      name: '',
      flavors: [],
      dishId: undefined,
      price: undefined,
      show: false,
      image: ''
    },
    cartDialogShow: false,
    detailsDialog: {
      show: false,
      item: {
        image: ''
      }
    },
    setMealDialog: {
      show: false,
      item: {}
    }
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