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

    if (scroll_to >= 0 && scroll_to <= contact_top){
      $('html, body').animate({
        scrollTop: scroll_to
      }, 200);
    }
  });

  $("#buttom_about").click(function(){
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $(this).addClass("nav_top_menu_item_selected");
    $('html, body').animate({
      scrollTop: $("#block_about").offset().top
    }, 200);
  });
  $("#buttom_experience").click(function(){
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $(this).addClass("nav_top_menu_item_selected");
    $('html, body').animate({
      scrollTop: $("#block_experience").offset().top
    }, 200);
  });
  $("#buttom_project").click(function(){
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $(this).addClass("nav_top_menu_item_selected");
    $('html, body').animate({
      scrollTop: $("#block_project").offset().top
    }, 200);
  });
  $("#buttom_publication").click(function(){
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $(this).addClass("nav_top_menu_item_selected");
    $('html, body').animate({
      scrollTop: $("#block_publication").offset().top
    }, 200);
  });
  $("#buttom_contact").click(function(){
    $('.nav_top_menu_item_selected').removeClass("nav_top_menu_item_selected");
    $(this).addClass("nav_top_menu_item_selected");
    $('html, body').animate({
      scrollTop: $("#block_contact").offset().top
    }, 200);
  });
});