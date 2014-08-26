$(document).ready(function() {

  $("#slider-bs").backstretch(["<%= asset_path 'block.jpeg' %>", "<%= asset_path 'concrete-repairs.jpg' %>", "<%= asset_path 'barren-construction.jpg' %>" ], {duration: 7000, fade: "slow", lazyload: true});

  var texts = [
  "two", "three", "one"
  ]

  $(window).on("backstretch.before", function (e, instance) {
    $('.caps').hide()
    $('.overlay-header').hide();
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