// import {
//   addressListApi,
//   setDefaultAddressApi
// } from './api.js'

Page({
  data: {
    addressList: [{
        label: '公司',
        detail: '金燕龙写字楼 4层电梯口fss（电梯可…）',
        consignee: '周先生', //姓名
        phone: 18544445566, //手机号
        isDefault: 1, //是否是默认
        sex: '1'
      },
      {
        label: '家',
        detail: '金燕龙写字楼 4层电梯口（电梯可…）',
        consignee: '周先生', //姓名
        phone: 18544445566, //手机号
        isDefault: 0, //是否是默认
        sex: '1'

      },
      {
        label: '学校',
        detail: '金燕龙写字楼 4层电梯口（电梯可…）',
        consignee: '周先生', //姓名
        phone: 18544445566, //手机号
        isDefault: 0, //是否是默认
        sex: '1'

      },
      {
        label: '公司',
        detail: '金燕龙写字楼 4层电梯口（电梯可…）',
        consignee: '周先生', //姓名
        phone: 18544445566, //手机号
        isDefault: 0, //是否是默认
        sex: '0'
      },
      
    ]
  },
 
 
  goBack() {
    wx.navigateBack()
  },

 
  // async setDefaultAddress(e) {
  //   const id = e.currentTarget.dataset.id
  //   if (id) {
  //     const res = await setDefaultAddressApi({
  //       id
  //     })
  //     if (res.code === 1) {
  //       this.initData()
  //     } else {
  //       wx.showToast({
  //         title: res.msg,
  //         icon: 'none'
  //       })
  //     }
  //   }
  // },
  // itemClick(e) {
  //   const url = wx.getStorageSync('url')
  //   if (url.includes('order')) {
  //     this.setDefaultAddress(e)
  //     wx.navigateBack()
  //   }
  // },
  onLoad(options) {
    // this.initData()
   
  },
  // initData() {
  //   addressListApi().then(res => {
  //     console.log(res);
  //     if (res.code === 1) {
  //       this.setData({
  //         addressList: res.data
  //       })
  //     } else {
  //       wx.showToast({
  //         title: res.msg,
  //         icon: 'none'
  //       })
  //     }
  //   })
  // },
  toAddressEditPage(e) {
    var that = this
    const id = e.currentTarget.dataset.id
    // console.log(e);
    wx.navigateTo({
      url: `/zhangNX/pages/newAddress/newAddress?id=${id}`,
      events:{
        someEvent:function(data) { //从其他页面返回的参数
          // console.log('jumpChannel',data)
          that.setData({
            addressList : data.data
          })
        }
      },
      success:function(res) {  //向下一个页面传参
        // console.log(that.data);
        res.eventChannel.emit('getAddList',{data:that.data.addressList})
      }
    })
  },
  toAddressCreatePage(){
    var that = this
    wx.navigateTo({
      url: '/zhangNX/pages/newAddress/newAddress',
      events:{
        someEvent:function(data) { //从其他页面返回的参数
          // console.log('jumpChannel',data)
          that.setData({
            addressList : data.data
          })
        }
      },
      success:function(res) {  //向下一个页面传参
        // console.log(that.data);
        res.eventChannel.emit('getAddList',{data:that.data.addressList})
      }

    })
  }
  ,
  setDefaultAddress(event){
   let addressList = this.data.addressList
   let id = event.currentTarget.dataset.id
    console.log(id);
      for (let i = 0; i < addressList.length; i++) {
        if (i === id) {
          addressList[i].isDefault = 1;
        } else {
          addressList[i].isDefault = 0;
        }
      }this.setData({
        addressList: this.data.addressList
      })

      },
  onShow(){
    this.setData({
      addressList:this.data.addressList
    })
  }
})