$(document).ready(function(){
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
  
  var slide_to_about = function(){
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $("#buttom_about").addClass("nav_top_menu_item_selected");
    $('html, body').animate({
      scrollTop: $("#block_about").offset().top
    }, 200);
  };
  var slide_to_experience = function(){
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $("#buttom_experience").addClass("nav_top_menu_item_selected");
    $('html, body').animate({
      scrollTop: $("#block_experience").offset().top
    }, 200);
  };
  var slide_to_project = function(){
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $("#buttom_project").addClass("nav_top_menu_item_selected");
    $('html, body').animate({
      scrollTop: $("#block_project").offset().top
    }, 200);
  };
  var slide_to_publication = function(){
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $("#buttom_publication").addClass("nav_top_menu_item_selected");
    $('html, body').animate({
      scrollTop: $("#block_publication").offset().top
    }, 200);
  }
  var slide_to_contact = function(){
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $("#buttom_contact").addClass("nav_top_menu_item_selected");
    $('html, body').animate({
      scrollTop: $("#block_contact").offset().top
    }, 200);
  }
  $("#buttom_about").click(slide_to_about);
  $("#buttom_experience").click(slide_to_experience);
  $("#buttom_project").click(slide_to_project);
  $("#buttom_publication").click(slide_to_publication);
  $("#buttom_contact").click(slide_to_contact);
});