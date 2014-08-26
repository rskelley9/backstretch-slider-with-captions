// $("h4[id^='head-']").each(function(){var id = parseInt(this.id.replace("hello", ""));})


function getHeaders(){

  var headers = []

  $("h4[id^='head-']").each(function(){
    var id = $(this).attr("id")


    headers.push(id)
  })

  headers.push(headers.shift())
  return headers
};
