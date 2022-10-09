// pages/index/index.js
Page({
  data: {
   history:"0",
   result:"0",
   id1:"clear",
   id2:"back",
   id3:"time",
   id4:"div",
   id5:"mul",
   id6:"sub",
   id7:"add",
   id8:"dot",
   id9:"eql",
   id10:"num_0",
   id11:"num_1",
   id12:"num_2",
   id13:"num_3",
   id14:"num_4",
   id15:"num_5",
   id16:"num_6",
   id17:"num_7",
   id18:"num_8",
   id19:"num_9",
   buttonDot:false,
   is_time:false
  },
  clickButton: function (e) {
   console.log(e);//打印
   var buttonVal = e.target.id;//注意id和dataset是event中的同级属性...
   var res = this.data.result;
   if(this.data.is_time==true){
    res=0
  }
   var newbuttonDot=this.data.buttonDot;//var类型任意，不需要提前知道
   var sign;
   if (buttonVal =="time"){
    var a=this.data.history;
    var l=res.length;
    if (res[l-1]=="+"||res[l-1]=="-"||res[l-1]=="×"||res[l-1]=="÷"){
      res=res+a;
    }
    else{
      res=a;
    }      
  }
  
  
   if (buttonVal >= "num_0" && buttonVal <= "num_9") {
    var num=buttonVal.split('_')[1];//若为数值按钮，分组字符串，赋值所得数字
    if (res == "0" ) {//0直接转为按下数字
     res = num;
    }
    else {
     res = res + num;
    }
   }
   else{
    if(buttonVal=="dot")
    {
     if(!newbuttonDot)
     {
      res = res + '.';
      newbuttonDot=true;
     }//Q：+-*/后跟.仍可计算
    }
    else if(buttonVal=="clear")
    {
     res='0';
     newbuttonDot=false;
    }
    else if(buttonVal=="back")//Q：运算后的结果会直接清零（？
    {
     var length=res.length;
     if(length>1)
     {
      res=res.substr(0,length-1);
     }
     else{
      res='0'; 
     }
    }
    else if (buttonVal == "div" || buttonVal == "mul" || buttonVal == "sub" || buttonVal == "add")
    {
      newbuttonDot=false;
      if(res.length){}
      else{
        res=JSON.stringify(res)
      }  
      var is_sign=res.substr(res.length-1,res.length)
      if(is_sign=="+"||is_sign=="-"||is_sign=="×"||is_sign=="÷"){
        res=res.substr(0,res.length-1);
      }
     switch(buttonVal){
      case "div":
       sign ='÷';
       break;
      case "mul":
       sign ='×';
       break;
      case "sub":
       sign='-';
       break;
      case "add":
       sign='+';
       break;
     }
     if(!isNaN(res.length))
     {
      res.length-1;
      res=res+sign;
     }
    }
   }
   this.setData({
    is_time:false,
    result: res,
    buttonDot:newbuttonDot,
   });
  },

  equal: function(e){
    
   var str=this.data.result;
   var item= '';
   var strArray = [];
   var temp=0;
   for(var i=0;i<=str.length;i++){
    var s=str.charAt(i);
    if((s!='' && s>='0' && s<='9') || s=='.'){
     item=item+s;
    }
    else{
     strArray[temp]=item;
     temp++;
     strArray[temp]=s;
     temp++;
     item='';
    }
   }
   if(isNaN(strArray[strArray.length-1]))
   {
    strArray.pop();
   }
   var num;
   var res=strArray[0]*1;
   for(var i=1;i<=strArray.length;i=i+2){
    num=strArray[i+1];
    switch(strArray[i]){
     case "-":
      res = (res-0)- (num-0);
      break;
     case "+":
      res = (res-0) + (num-0);
      break;
     case "×":
      res = (res-0)* (num-0);
      break;
     case "÷":
     if(num!='0')
     {
      res = (res-0)/ (num-0);
     }
     else
     {
      res ='∞';
      break;
     } 
      break;
    }
   }
   var newbuttonDot=this.data.buttonDot;
   newbuttonDot=false;
   this.setData({
    buttonDot:newbuttonDot, 
    result:res,
    history:res,
   });
  },
})