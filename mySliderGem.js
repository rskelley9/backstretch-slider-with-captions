
var backStretch = $(".backstretch").parent()

//hide all slider text

function hideSlides(){
 $('.caps').hide()
 $('.headers').hide();
}

//get the ids of the headers and put them in an array with a specific order

function getHeaderIds(){

  var headers = []

  $("h4[id^='head-']").each(function(){
    var id = $(this).attr("id")


    headers.push(id)
  })

  headers.push(headers.shift())
  return headers
};


// get the ids for each caption

function getCapIds(){

  var caps = []

  $("p[id^='cap-']").each(function(){
    var id = $(this).attr("id")


    caps.push(id)
  })

  caps.push(caps.shift())
  return caps
};

$(document).ready(function() {

  $("#slider-bs").backstretch(["<%= asset_path 'block.jpeg' %>", "<%= asset_path 'concrete-repairs.jpg' %>", "<%= asset_path 'barren-construction.jpg' %>" ], {duration: 7000, fade: "slow", lazyload: true});

  var texts = [
  "two", "three", "one"
  ]

  $(window).on("backstretch.before", function (e, instance) {
    $('.caps').hide()
    $('.headers').hide();
    $("#"+texts[instance.index]+"").fadeIn("slow");
    $("#head-"+texts[instance.index]+"").fadeIn("slow");
  });

  $('#polaroid-slide').mouseenter(function(){
    $('#slider-bs').backstretch("pause")
  }).click(function() {
   $('#slider-bs').backstretch("next")

 }).mouseleave(function() {
   $('#slider-bs').backstretch("resume")

 });
});


