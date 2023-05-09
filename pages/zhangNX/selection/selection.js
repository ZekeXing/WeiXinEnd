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
        name: '湘菜',
        type: '1'
      },
      {
        id: 2,
        name: '川菜',
        type: '1'
      },
      {
        id: 3,
        name: '粤菜',
        type: '1'
      },
      {
        id: 4,
        name: '饮品',
        type: '1'
      },
      {
        id: 5,
        name: '商务套餐',
        type: '2'
      },
      {
        id: 6,
        name: '主食',
        type: '1'
      },
      {
        id: 7,
        name: '儿童套餐',
        type: '2'
      },
      {
        id: 8,
        name: '新鲜果蔬',
        type: '1'
      },
      {
        id: 9,
        name: '鲁菜',
        type: '1'
      },
      {
        id: 10,
        name: '拌酱佐料',
        type: '2'
      },
      {
        id: 11,
        name: '乳豆制品',
        type: '1'
      },
      {
        id: 12,
        name: '其他',
        type: '2'
      },
      {
        id: 13,
        name: '西餐',
        type: '2'
      },

    ],
    categoryId: undefined,
    // dishList:[],
    dishList: [{
        id: 1,
        cateName: '	辣子鸡	',
        cateId: 2,
        price: 3600,
        img: "/asset/dishImages/	15b97f0e-0d3b-473d-89cb-f70bdc87f10c.jpg	",
        remarks: '	来自鲜嫩美味的小鸡，值得一尝，辣子辣子辣子鸡？？	',
        saleNum: 5,
        number: 0
      },
      {
        id: 2,
        cateName: '	毛氏红烧肉	',
        cateId: 1,
        price: 6800,
        img: "/asset/dishImages/	0a3b3288-3446-4420-bbff-f263d0c02d8e.jpg	",
        remarks: '	毛氏红烧肉毛氏红烧肉，确定不来一份？	',
        saleNum: 5,
        number: 0
      },
      {
        id: 3,
        cateName: '	组庵鱼翅	',
        cateId: 1,
        price: 4800,
        img: "/asset/dishImages/	740c79ce-af29-41b8-b78d-5f49c96e38c4.jpg	",
        remarks: '	组庵鱼翅，看图足以表明好吃程度	',
        saleNum: 5,
        number: 0
      },
      {
        id: 4,
        cateName: '	霸王别姬	',
        cateId: 1,
        price: 12800,
        img: "/asset/dishImages/	057dd338-e487-4bbc-a74c-0384c44a9ca3.jpg	",
        remarks: '	还有什么比霸王别姬更美味的呢？	',
        saleNum: 5,
        number: 0
      },
      {
        id: 5,
        cateName: '	全家福	',
        cateId: 1,
        price: 11800,
        img: "/asset/dishImages/	a53a4e6a-3b83-4044-87f9-9d49b30a8fdc.jpg	",
        remarks: '	别光吃肉啦，来份全家福吧，让你长寿又美味	',
        saleNum: 5,
        number: 0
      },
      {
        id: 6,
        cateName: '	邵阳猪血丸子	',
        cateId: 1,
        price: 13800,
        img: "/asset/dishImages/	2a50628e-7758-4c51-9fbb-d37c61cdacad.jpg	",
        remarks: '	看，美味不？来嘛来嘛，这才是最爱吖	',
        saleNum: 5,
        number: 0
      },
      {
        id: 7,
        cateName: '	口味蛇	',
        cateId: 1,
        price: 16800,
        img: "/asset/dishImages/	0f4bd884-dc9c-4cf9-b59e-7d5958fec3dd.jpg	",
        remarks: '	爬行界的扛把子，东兴-口味蛇，让你欲罢不能	',
        saleNum: 5,
        number: 0
      },
      {
        id: 8,
        cateName: '	辣子鸡丁	',
        cateId: 2,
        price: 8800,
        img: "/asset/dishImages/	ef2b73f2-75d1-4d3a-beea-22da0e1421bd.jpg	",
        remarks: '	辣子鸡丁，辣子鸡丁，永远的魂	',
        saleNum: 5,
        number: 0
      },
      {
        id: 9,
        cateName: '	麻辣兔头	',
        cateId: 2,
        price: 19800,
        img: "/asset/dishImages/	2a2e9d66-b41d-4645-87bd-95f2cfeed218.jpg	",
        remarks: '	麻辣兔头的详细制作，麻辣鲜香，色泽红润，回味悠长	',
        saleNum: 5,
        number: 0
      },
      {
        id: 10,
        cateName: '	蒜泥白肉	',
        cateId: 2,
        price: 9800,
        img: "/asset/dishImages/	d2f61d70-ac85-4529-9b74-6d9a2255c6d7.jpg	",
        remarks: '	多么的有食欲啊	',
        saleNum: 5,
        number: 0
      },
      {
        id: 11,
        cateName: '	鱼香肉丝	',
        cateId: 2,
        price: 3800,
        img: "/asset/dishImages/	8dcfda14-5712-4d28-82f7-ae905b3c2308.jpg	",
        remarks: '	鱼香肉丝简直就是我们童年回忆的一道经典菜，上学的时候点个鱼香肉丝盖饭坐在宿舍床上看着肥皂剧，绝了！现在完美复刻一下上学的时候感觉	',
        saleNum: 5,
        number: 0
      },
      {
        id: 12,
        cateName: '	麻辣水煮鱼	',
        cateId: 2,
        price: 14800,
        img: "/asset/dishImages/	1fdbfbf3-1d86-4b29-a3fc-46345852f2f8.jpg	",
        remarks: '	鱼片是买的切好的鱼片，放几个虾，增加味道	',
        saleNum: 5,
        number: 0
      },
      {
        id: 13,
        cateName: '	鱼香炒鸡蛋	',
        cateId: 2,
        price: 2000,
        img: "/asset/dishImages/	0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg	",
        remarks: '	鱼香菜也是川味的特色。里面没有鱼却鱼香味	',
        saleNum: 5,
        number: 0
      },
      {
        id: 14,
        cateName: '	脆皮烧鹅	',
        cateId: 3,
        price: 12800,
        img: "/asset/dishImages/	e476f679-5c15-436b-87fa-8c4e9644bf33.jpeg	",
        remarks: '	“广东烤鸭美而香，却胜烧鹅说古冈（今新会），燕瘦环肥各佳妙，君休偏重便宜坊”，可见烧鹅与烧鸭在粤菜之中已早负盛名。作为广州最普遍和最受欢迎的烧烤肉食，以它的“色泽金红，皮脆肉嫩，味香可口”的特色，在省城各大街小巷的烧卤店随处可见。	',
        saleNum: 5,
        number: 0
      },
      {
        id: 15,
        cateName: '	白切鸡	',
        cateId: 3,
        price: 6600,
        img: "/asset/dishImages/	9ec6fc2d-50d2-422e-b954-de87dcd04198.jpeg	",
        remarks: '	白切鸡是一道色香味俱全的特色传统名肴，又叫白斩鸡，是粤菜系鸡肴中的一种，始于清代的民间。白切鸡通常选用细骨农家鸡与沙姜、蒜茸等食材，慢火煮浸白切鸡皮爽肉滑，清淡鲜美。著名的泮溪酒家白切鸡，曾获商业部优质产品金鼎奖。湛江白切鸡更是驰名粤港澳。粤菜厨坛中，鸡的菜式有200余款之多，而最为人常食不厌的正是白切鸡，深受食家青睐。	',
        saleNum: 5,
        number: 0
      },
      {
        id: 16,
        cateName: '	烤乳猪	',
        cateId: 3,
        price: 38800,
        img: "/asset/dishImages/	2e96a7e3-affb-438e-b7c3-e1430df425c9.jpeg	",
        remarks: '	广式烧乳猪主料是小乳猪，辅料是蒜，调料是五香粉、芝麻酱、八角粉等，本菜品主要通过将食材放入炭火中烧烤而成。烤乳猪是广州最著名的特色菜，并且是“满汉全席”中的主打菜肴之一。烤乳猪也是许多年来广东人祭祖的祭品之一，是家家都少不了的应节之物，用乳猪祭完先人后，亲戚们再聚餐食用。	',
        saleNum: 5,
        number: 0
      },
      {
        id: 17,
        cateName: '	脆皮乳鸽	',
        cateId: 3,
        price: 10800,
        img: "/asset/dishImages/	3fabb83a-1c09-4fd9-892b-4ef7457daafa.jpeg	",
        remarks: '	“脆皮乳鸽”是广东菜中的一道传统名菜，属于粤菜系，具有皮脆肉嫩、色泽红亮、鲜香味美的特点，常吃可使身体强健，清肺顺气。随着菜品制作工艺的不断发展，逐渐形成了熟炸法、生炸法和烤制法三种制作方法。无论那种制作方法，都是在鸽子经过一系列的加工，挂脆皮水后再加工而成，正宗的“脆皮乳鸽皮脆肉嫩、色泽红亮、鲜香味美、香气馥郁。这三种方法的制作过程都不算复杂，但想达到理想的效果并不容易。	',
        saleNum: 5,
        number: 0
      },
      {
        id: 18,
        cateName: '	清蒸河鲜海鲜	',
        cateId: 3,
        price: 38800,
        img: "/asset/dishImages/	1405081e-f545-42e1-86a2-f7559ae2e276.jpeg	",
        remarks: '	新鲜的海鲜，清蒸是最好的处理方式。鲜，体会为什么叫海鲜。清蒸是广州最经典的烹饪手法，过去岭南地区由于峻山大岭阻隔，交通不便，经济发展起步慢，自家打的鱼放在锅里煮了就吃，没有太多的讲究，但却发现这清淡的煮法能使鱼的鲜甜跃然舌尖。	',
        saleNum: 5,
        number: 0
      },
      {
        id: 19,
        cateName: '	老火靓汤	',
        cateId: 3,
        price: 49800,
        img: "/asset/dishImages/	583df4b7-a159-4cfc-9543-4f666120b25f.jpeg	",
        remarks: '	老火靓汤又称广府汤，是广府人传承数千年的食补养生秘方，慢火煲煮的中华老火靓汤，火候足，时间长，既取药补之效，又取入口之甘甜。 广府老火汤种类繁多，可以用各种汤料和烹调方法，烹制出各种不同口味、不同功效的汤来。	',
        saleNum: 5,
        number: 0
      },
      {
        id: 20,
        cateName: '	上汤焗龙虾	',
        cateId: 3,
        price: 108800,
        img: "/asset/dishImages/	5b8d2da3-3744-4bb3-acdc-329056b8259d.jpeg	",
        remarks: '	上汤焗龙虾是一道色香味俱全的传统名菜，属于粤菜系。此菜以龙虾为主料，配以高汤制成的一道海鲜美食。本品肉质洁白细嫩，味道鲜美，蛋白质含量高，脂肪含量低，营养丰富。是色香味俱全的传统名菜。	',
        saleNum: 5,
        number: 0
      },
      {
        id: 21,
        cateName: '	北冰洋	',
        cateId: 4,
        price: 500,
        img: "/asset/dishImages/	c99e0aab-3cb7-4eaa-80fd-f47d4ffea694.png	",
        remarks: '		',
        saleNum: 5,
        number: 0
      },
      {
        id: 22,
        cateName: '	王老吉	',
        cateId: 4,
        price: 500,
        img: "/asset/dishImages/	00874a5e-0df2-446b-8f69-a30eb7d88ee8.png	",
        remarks: '		',
        saleNum: 5,
        number: 0
      },
      {
        id: 23,
        cateName: '	米饭	',
        cateId: 6,
        price: 200,
        img: "/asset/dishImages/	ee04a05a-1230-46b6-8ad5-1a95b140fff3.png	",
        remarks: '		',
        saleNum: 5,
        number: 0
      },



    ],
    showDishList: [],
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
  categoryClick(event) {
    let id = event.currentTarget.dataset.id
    let dishList = this.data.dishList

    console.log(id);

    this.setData({
      activeType: id,
      showDishList: []
    })
    for (let index = 0; index < dishList.length; index++) {
      const element = dishList[index];
      if (element.cateId - 1 === id) {
        this.data.showDishList.push(element)
      }
    }
    this.setData({
      showDishList: this.data.showDishList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      activeType: 0,
      showDishList: []
    })
    let dishList = this.data.dishList
    for (let index = 0; index < dishList.length; index++) {
      const element = dishList[index];
      if (element.cateId - 1 === 0) {
        this.data.showDishList.push(element)
      }
    }
    this.setData({
      showDishList: this.data.showDishList
    })
  },
  ImgError(event) {
    let id = event.currentTarget.dataset.id
    let dish = this.data.dishList[id]
    // console.log(id);
    dish.img = "/asset/images/noImg.png"
    // console.log(dish.img)
    this.setData({
      showDishList: this.data.showDishList
    })
  },
  toUserPage() {
    wx.switchTab({
      url: '/pages/zhangNX/my/my',
    })
  },
  dishDetails() {

  },
  addCart(event) {
    let id = event.currentTarget.dataset.dish.id
    let dish = this.data.dishList[id-1]
    dish.number+=1
    console.log(dish);
    // dish.number = dish.number +1
    //  let cartData = this.data.cartData
    //  cartData.push(dish)
    // let dish = this.data.dishList[id]
    // console.log(event);
    // console.log(id);
    // console.log(dish.number);
    // console.log(dish.number);

    this.setData({
      
      cartData: this.data.dishList,
      showDishList: this.data.showDishList
    })

  },
  subtractCart(event){
    let id = event.currentTarget.dataset.dish.id
    let dish = this.data.dishList[id-1]
    dish.number-=1
    // console.log(dish);
    this.setData({
      cartData: this.data.dishList,
      showDishList: this.data.showDishList
    })
  },
  submit(){
   let cartList =  this.data.cartData
  //  console.log(cartList);
    wx.setStorageSync('cartData',cartList)
    wx.navigateTo({
      url: '/shenFK/pages/submit/submit',
    })
    
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