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
      },
      {
        label: '家',
        detail: '金燕龙写字楼 4层电梯口（电梯可…）',
        consignee: '周先生', //姓名
        phone: 18544445566, //手机号
        isDefault: 0, //是否是默认
      },
      {
        label: '学校',
        detail: '金燕龙写字楼 4层电梯口（电梯可…）',
        consignee: '周先生', //姓名
        phone: 18544445566, //手机号
        isDefault: 0, //是否是默认
      },
      {
        label: '公司',
        detail: '金燕龙写字楼 4层电梯口（电梯可…）',
        consignee: '周先生', //姓名
        phone: 18544445566, //手机号
        isDefault: 0, //是否是默认
      },
      {
        label: '公司',
        detail: '金燕龙写字楼 4层电梯口（电梯可…）',
        consignee: '周先生', //姓名
        phone: 18544445566, //手机号
        isDefault: 0, //是否是默认
      },
      {
        label: '公司',
        detail: '金燕龙写字楼 4层电梯口（电梯可…）',
        consignee: '周先生', //姓名
        phone: 18544445566, //手机号
        isDefault: 0, //是否是默认
      }
    ]
  },
  // onLoad() {
  //   this.initData()
  // },
  // initData() {
  //   addressListApi().then(res => {
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
  // goBack() {
  //   wx.navigateBack()
  // },
  // toAddressEditPage(e) {
  //   const id = e.currentTarget.dataset.id
  //   wx.navigateTo({
  //     url: `/pages/address-edit/address-edit?id=${id}`
  //   })
  // },
  // toAddressCreatePage() {
  //   wx.navigateTo({
  //     url: '/pages/address-edit/address-edit'
  //   })
  // },
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
  // }

  toAddressCreatePage(){
    wx.navigateTo({
      url: '/zhangNX/pages/newAddress/newAddress',
    })
  }
})