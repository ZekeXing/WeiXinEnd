// zhangNX/pages/newAddress/newAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      consignee: '', //联系人
      phone: undefined, //手机号
      sex: '1', //0表示女 1 表示男
      detail: '', //收货地址
      label: '', //标签
    },
    labelList: [
      '无', '公司', '家', '学校'
    ],
    id: undefined,
    activeIndex: 0,
    isDefault: 0

  },
  inPutCont(e) {
    // let 
    // console.log(e.detail);
    this.setData({
      ['form.consignee']: e.detail.value

    })
  },
  inPutPhone(e) {
    this.setData({
      ['form.phone']: +e.detail.value
    })
  },
  inPutDet(e) {
    this.setData({
      ['form.detail']: e.detail.value
    })
  },
  saveAddress() {
    const eventChannel = this.getOpenerEventChannel()
    // console.log(this.data.addressList)
    eventChannel.emit('someEvent', {
      data: this.data.addressList
    })
    if (this.checkALL()) {
      if (this.data.id === undefined) {
        this.data.addressList.push(this.data.form)
        console.log('地址列表新增一条数据');
      }
      wx.navigateBack()
    } else {
      wx.showToast({
        icon: 'error',
        title: '请确认信息完整',
      })
    }


  },
  checkALL() {
    var form = this.data.form
    for (const key in form) {
      if (Object.hasOwnProperty.call(form, key)) {
        const element = form[key];
        // console.log(element);
        // console.log(element == undefined);
        // console.log( element == "");
        // console.log( 0 == "");
        if (element === undefined || element === "") {
          console.log("空缺位置：");
          console.log(key); 
          return false
        }
      }
    }
    return true



  },

  onLabelClick(event) {
    //  console.log( event.currentTarget.dataset.index);
    var index = event.currentTarget.dataset.index
    this.setData({
      ['form.label']: this.data.labelList[index],
      activeIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('getAddList', function (data) {
      // console.log('address', data)
      that.setData({
        addressList: data.data
      })
    })
    if (Object.keys(options).length!==0) {
      // console.log(this.findLabel(this.data.form.label));
      // console.log(this.data.form.label);
      this.setData({
        form: this.data.addressList[options.id],
        id: options.id
      })
      let activeIndex = this.findLabel(this.data.form.label)
      this.setData({
        activeIndex: activeIndex
      })


    }
  },
  findLabel(label) {
    // console.log(label);
    let lableList = this.data.labelList
    for (let index = 0; index < lableList.length; index++) {
      const element = lableList[index];
      if (label == element) {
        return +index
      }
    }
    return 0
  },
  onSexClick(event) {
    // console.log(event.currentTarget.dataset.sex);
    this.setData({
      ['form.sex']: event.currentTarget.dataset.sex
    })
  },
  deleteAddress(){
    
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