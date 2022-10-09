var myFunction={
  filterDate: function(data,i){
    var data = data
    if(data == null || data== "" || data== undefined || data == "null" || data == " "){
      return 
    }
    if(data.indexOf('-') > 0){
      data = data.replace(/-/g, '/')
    }
    var date = new Date(data)
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    var d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    var h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    var minute = date.getMinutes()
    var second = date.getSeconds()
    minute = minute < 10 ? ('0' + minute) : minute
    second = second < 10 ? ('0' + second) : second
    var result
    if(i == 1){
      result = y + '-' + m + '-' + d + ' ' + h + ':' + minute+':' + second
    }else if(i == 2){
      result = y + '-' + m + '-' + d
    }else if(i == 3){
      result =  h + ':' + minute
    }else if(i == 4){
      result = y + '-' + m + '-' + d + ' ' + '00:00:00'
    }else if(i == 5){
      result = y + '-' + m + '-' + d + ' ' + h + ':' + minute
    }else if(i == 6){
      result = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ":00"
    }
    return result
    
  }
}

module.exports={
  myFunction:myFunction
}