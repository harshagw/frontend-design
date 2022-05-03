$(document).ready(function(){
    var allPanels = $('.sub-list').hide();

    $('.list-heading').click(function(){
      if ($(this).parent().children('.sub-list').css('display') === 'none') {
        allPanels.slideUp();
        $(this).parent().children('.sub-list').slideDown();
      }else{
        $(this).parent().children('.sub-list').slideUp();
      }
    });

    $('.user-menu-trigger').click(function(){
      $('.user-menu').toggle();
    });


    $('.pages').masonry({
      itemSelector: '.page',
      columnWidth: 240
    });

    $('.panel-trigger').click(function(){
      $(".panel").removeClass('panel--is-visible');
      var panelName = $(this).attr('id').replace('-trigger', '');
      $('.'+ panelName).addClass('panel--is-visible');
    });

    $('.panel-close').click(function(){
      $(this).parent().parent().removeClass('panel--is-visible');
    });

});


  $(document).mouseup(function(e){
      var container =  $('.user-menu');
      if (!container.is(e.target) && container.has(e.target).length === 0){
          container.hide();
      }
  });
