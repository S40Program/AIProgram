//pages/chat/chat.js
const app = getApp()
Page({
  /*页面的初始数据*/
  data:{
    chatlists:[
      {
        avatar:"../images/head sculpture/li.jpg",
        nickname:'李大龙',
        content:'各位同学大家好！'
      },
      {
        avatar:"../images/head sculpture/chen.jpg",
        nickname:'陈杰',
        content:'听说你们最近研发了一个可爱的机器人哦。'
      },
      {
        avatar:"../images/head sculpture/yuan.jpg",
        nickname:'袁爽',
        content:'真的嘛，赶快拿出来看看。'
      },
      {
        avatar:"../images/head sculpture/xue.jpg",
        nickname:'薛键帮',
        content:'+1'
      },
      
    ],
  //用户信息
    userInfo:{},
    inputvalue:''
  },
  //绑定数据
bindInputData:function(e){
    this.setData({
    inputvalue:e.detail.value
  });
},
/*清空输入框数据
cleanInputDate:function(){
  this.setData({
    inputvalue:''
    })
},*/
  //发送数据
sendMsg:function(){
    if(this.data.inputvalue == ''){
      wx.showToast({
        title: '消息不能为空~~~',
        duration: 2000
      })
      return ;
    }
  let nickname = this.data.userInfo.nickName;
  let avatar = this.data.userInfo.avatarUrl;
  let content = this.data.inputvalue;
  let obj = {
    nickname:nickname,
    avatar,
    content
  };
  let chatlists = this.data.chatlists;
  let query = this.data.inputvalue;
  chatlists.push(obj);
  //使用setData更新数据，才会触发数据驱动
  this.setData({
    chatlists:chatlists,
    inputvalue:''
  });
  //需要把数据提供给服务器
  let _this = this;
    wx.request({
      url: 'http://localhost:8888/chat',
      data: {
        query: query
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        let obj = {
          nickname:'2053寝室小程序',
          avatar:'../images/head sculpture/robot.jpg',
          content:res.data.Reply
        };
        let chatlists = _this.data.chatlists;
        chatlists.push(obj);
        // 使用setdata更新数据，才会触发数据驱动
        _this.setData({
          chatlists:chatlists
        });
        // 将屏幕往上滚动，使屏幕底端的显示内容显示出来
        wx.pageScrollTo({
          scrollTop: 1000000000,
          duration: 300
        })
      }
    });
  },

/*生命周期函数--监听页面加载*/
onLoad:function(options){
  console.log(app.globalData.userInfo);
  this.setData({
    userInfo:app.globalData.userInfo
  });
},
  /**
   * 组件的方法列表
   */
  methods: {
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
 /**
  * 生命周期函数--监听页面显示
  */
 onShow: function() {
 
 },
 
 /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
 onPullDownRefresh: function() {
 
 },
 
 /**
  * 页面上拉触底事件的处理函数
  */
 onReachBottom: function() {
 
 },

})