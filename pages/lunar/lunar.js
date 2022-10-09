// pages/lunar/lunar.js
var myglobalfunctions= require('../../utils/globalfunctions')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateString: "",
    spot: [],
    spot1:[]
  },
  
  
  dateChange(e) {
    
    var spot1=[]
    var comedate =e.detail.dateString
    for(let i=9;i<=18;i++){
      var basedate =comedate;
      var FormattedDateTime=new Date(basedate)
      //var FormattedDateTime=new Date(comedate.replace(/-/g, "/"))
      FormattedDateTime.setDate(FormattedDateTime.getDate()+i)
      //spot1.push(myglobalfunctions.myFunction.filterDate(FormattedDateTime,i)) 
      let yy=FormattedDateTime.getFullYear()
      let mm=FormattedDateTime.getMonth()+1
      let dd =FormattedDateTime.getDate()
      basedate=`${yy}-${mm}-${dd}`
      spot1.push(basedate)
    }
    this.setData({
      dateString: e.detail.dateString,
      spot:spot1,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    myglobalfunctions.myFunction.filterDate('data','i')
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

  }
})