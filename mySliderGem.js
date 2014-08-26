// $("h4[id^='head-']").each(function(){var id = parseInt(this.id.replace("hello", ""));})


function getHeaders(){

  var headers = []

  $("h4[id^='head-']").each(function(){
    var id = $(this).attr("id")


    headers.push(id)
  })

  var reOrder = headers.push(headers.shift())
  return reOrder
};
