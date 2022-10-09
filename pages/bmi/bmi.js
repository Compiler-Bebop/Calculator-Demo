// pages/bmi/bmi.js
const heights=[]
const weights=[]
const sexes=["男","女"]
const ages=[]
for (let i=1;i<=200;i++){
  ages.push(i)
}
for (let i=1;i<=200;i++){
    heights.push(i)
  }
for (let i=1;i<=200;i++){
    weights.push(i)
  }
Page({
  data: {
   sex:"",
   sexes,
   age:"",
   ages,
   heights,
   weights,
   height:"",
   weight:"",
   bmi:0,
   tzl:0,
   value:[0,19,159,49],
   src:"",
   tips:""
  },
  bindChange(e) {
    const val = e.detail.value
    var sex1=this.data.sexes[val[0]]
    var bml1=(this.data.weights[val[3]]/((this.data.heights[val[2]]/100)*(this.data.heights[val[2]]/100))).toFixed(1)
    var tzl1=(1.2*(this.data.weights[val[3]]/((this.data.heights[val[2]]/100)*(this.data.heights[val[2]]/100)))+0.23*this.data.ages[val[1]]-5.4-10.8*(this.data.sexes[val[0]]=="男"?1:0)).toFixed(1)
    
    if(sex1=="男"){
      this.setData({
        src:"https://wx1.sinaimg.cn/mw2000/006hYGkFly1h5nhwrjrwij30b40b4gme.jpg",
        tips:"体重偏轻！\n请注意饮食锻炼，努力增重哦~",
      })
    }
    if(tzl1<25&&sex1=="女"){
      this.setData({
        src:"https://wx1.sinaimg.cn/mw2000/006hYGkFly1h5nhwrjrwij30b40b4gme.jpg",
        tips:"体重偏轻！\n请注意饮食锻炼，努力增重哦~",
      })
    }
    if(tzl1<=18&&tzl1>=15&&sex1=="男"){
      this.setData({
        src:"https://wx1.sinaimg.cn/mw2000/006hYGkFly1h5nhwrirx1j30b40b40ti.jpg",
        tips:"身体很健康嘛~\n还请继续保持",
      })
    }
    if(tzl1<=28&&tzl1>=25&&sex1=="女"){
      this.setData({
        src:"https://wx1.sinaimg.cn/mw2000/006hYGkFly1h5nhwrirx1j30b40b40ti.jpg",
        tips:"身体很健康嘛~\n还请继续保持",
      })
    }
    if(tzl1>18&&sex1=="男"){
      this.setData({
        src:"https://wx1.sinaimg.cn/mw2000/006hYGkFly1h5nhwrhptwj30b40b4q3w.jpg",
        tips:"超重啦！\n请注意饮食和锻炼，努力减重哦~",
      })
    }
    if(tzl1>28&&sex1=="女"){
      this.setData({
        src:"https://wx1.sinaimg.cn/mw2000/006hYGkFly1h5nhwrhptwj30b40b4q3w.jpg",
        tips:"超重啦！\n请注意饮食和锻炼，努力减重哦~",
      })
    }

    this.setData({
      bmi: bml1,
      tzl: tzl1,
      sex: this.data.sexes[val[0]],
      age: this.data.ages[val[1]],
      height: this.data.heights[val[2]],
      weight: this.data.weights[val[3]],
    })
    
    
  
  }
})