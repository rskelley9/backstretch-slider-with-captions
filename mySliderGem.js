
// ----- Notes -----

// use classes 'caps' and 'headers' to identify headers and paragraphs
// that are used as slides

// identify each unique caption with id #cap-number
// and each unique header with id #head-number
// e.g caption for the first image slider would have id 'cap-1'

// getDuration() method retrieves slider fade duration from BackStretch object
// and then the fade duration of the captions are set equal to that

// if backstretch div has class 'clickable' then it will pause on mouseenter
// and will be able to be clicked to cycle through photos

// ------------------

backStretchDiv = $(".backstretch").parent()

backStretchInstance = backStretchDiv.data('backstretch')

//hide all slider text

function hideSlides(){
  $('.caps').hide()
  $('.headers').hide();
};

//get the ids of the headers and put them in an array with a specific order

function getHeaderIds(){

  var headers = []

  $(":header[id^='header-']").each(function(){
    var id = $(this).attr("id")


    headers.push(id)
  })

  headers.push(headers.shift())
  return headers
};

function getDuration(){

  return backStretchInstance.options.duration

}

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

  headers = getHeaderIds();

  captions = getCapIds();

  // run slider

  $(window).on("backstretch.before", function (e, instance) {

    hideSlides();

    $("#"+captions[instance.index]+"").fadeIn(getDuration);
    $("#"+headers[instance.index]+"").fadeIn(getDuration);
  });

// add click/cycle with css class functionality
// todo expand animation
  if (backStretchDiv.hasClass("clickable"))
  {
    backStretchDiv.mouseenter(function(){
      backStretchDiv.backstretch("pause")
    }).click(function() {
     backStretchDiv.backstretch("next")

   }).mouseleave(function() {
     backStretchDiv.backstretch("resume")

   });
 }


});


