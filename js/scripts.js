$(document).ready(function() {

  /*
  *   function
  *   open & close sidebar
  */
  var sidebar = $('.sidebar');
  var bars = $('.sidebar .fa-bars');
  var main = $('main');
  var sidebarInitialPosition = sidebar.position().left;

  bars.on('click', drawSidebar);
  main.on('click', hideSidebar);

  function hideSidebar(e) {
    if (sidebar.position().left !== sidebarInitialPosition) {
      sidebar.css('left', sidebarInitialPosition+'px');
    }
  }

  function drawSidebar(e) {
    if (sidebar.position().left !== 0) {
      sidebar.css('left', '0');
    }
    else if (sidebar.position().left !== sidebarInitialPosition) {
      sidebar.css('left', sidebarInitialPosition+'px');
    }
  }

});
