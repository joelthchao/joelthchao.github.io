$(document).ready(function(){

  var highlight_item = function(item){    
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $(item).addClass("nav_top_menu_item_selected");
  }

  var slide_to_about = function(){    
    highlight_item($("#buttom_about"));
    $('html, body').animate({
      scrollTop: $("#block_about").offset().top
    }, 200);
  };
  var slide_to_experience = function(){
    highlight_item($("#buttom_experience"));
    $('html, body').animate({
      scrollTop: $("#block_experience").offset().top
    }, 200);
  };
  var slide_to_project = function(){
    highlight_item($("#buttom_project"));
    $('html, body').animate({
      scrollTop: $("#block_project").offset().top
    }, 200);
  };
  var slide_to_publication = function(){
    highlight_item($("#buttom_publication"));
    $('html, body').animate({
      scrollTop: $("#block_publication").offset().top
    }, 200);
  }
  var slide_to_contact = function(){
    highlight_item($("#buttom_contact"));
    $('html, body').animate({
      scrollTop: $("#block_contact").offset().top
    }, 200);
  }

  // Scroll and highlight item
  $(document).scroll(function(){
    // Get top information
    var current_top = $(document).scrollTop();
    var about_top = $('#block_about').offset().top;
    var experience_top = $('#block_experience').offset().top;
    var project_top = $('#block_project').offset().top;
    var publication_top = $('#block_publication').offset().top;
    var contact_top = $('#block_contact').offset().top;

    // Find current closest block 
    var top_arr = [about_top, experience_top, project_top, publication_top, contact_top];
    var closest = top_arr.reduce(function (prev, curr) {
      return (Math.abs(curr - current_top) < Math.abs(prev - current_top) ? curr : prev);
    });

    // Highlight it
    if (closest == about_top) highlight_item($('#buttom_about'));
    if (closest == experience_top) highlight_item($('#buttom_experience'));
    if (closest == project_top) highlight_item($('#buttom_project'));
    if (closest == publication_top) highlight_item($('#buttom_publication'));
    if (closest == contact_top) highlight_item($('#buttom_contact'));    
  });
  
  // Sliding for up/down arrow, page up/down evnets 
  $(document).keydown(function(event){
    var scroll_up = true;
    if (event.which == 33 || event.which == 38){
      event.preventDefault();
      scroll_up = true;
    }
    else if (event.which == 34 || event.which == 40){
      event.preventDefault();
      scroll_up = false;
    }
    else
      return;

    var current_top = $(document).scrollTop();    
    var about_top = $('#block_about').offset().top;
    var experience_top = $('#block_experience').offset().top;
    var project_top = $('#block_project').offset().top;
    var publication_top = $('#block_publication').offset().top;
    var contact_top = $('#block_contact').offset().top;

    //console.log("current_top: "+current_top);
    //console.log("scroll_up: "+scroll_up);
    
    if (scroll_up){
      var top_arr = [];
      if (current_top - about_top > 0) top_arr.push(about_top);
      if (current_top - experience_top > 0) top_arr.push(experience_top);
      if (current_top - project_top > 0) top_arr.push(project_top);
      if (current_top - publication_top > 0) top_arr.push(publication_top);
      if (current_top - contact_top > 0) top_arr.push(contact_top);
      scroll_to = Math.max.apply(Math, top_arr);
    } else {
      var top_arr = [];
      if (current_top - about_top < 0) top_arr.push(about_top);
      if (current_top - experience_top < 0) top_arr.push(experience_top);
      if (current_top - project_top < 0) top_arr.push(project_top);
      if (current_top - publication_top < 0) top_arr.push(publication_top);
      if (current_top - contact_top < 0) top_arr.push(contact_top);
      scroll_to = Math.min.apply(Math, top_arr);
    }

    //console.log("scroll_to: "+scroll_to);
    if (scroll_to == about_top) slide_to_about();
    if (scroll_to == experience_top) slide_to_experience();
    if (scroll_to == project_top) slide_to_project();
    if (scroll_to == publication_top) slide_to_publication();
    if (scroll_to == contact_top) slide_to_contact();
  });

  // Register click event for top menu buttom
  $("#buttom_about").click(slide_to_about);
  $("#buttom_experience").click(slide_to_experience);
  $("#buttom_project").click(slide_to_project);
  $("#buttom_publication").click(slide_to_publication);
  $("#buttom_contact").click(slide_to_contact);
});