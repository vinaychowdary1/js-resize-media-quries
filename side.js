// $(document).on('resize, ready', function() {
//     // Add class if screen size equals
//     var $window = $(window),
//     $html = $('html');
//     function resize() {
//        $html.removeClass('sidebar-mini sidebar-collapse');
//        if ($window.width() < 767) {
//          return $html.addClass('sidebar-mini sidebar-collapse');
//        }
//        else if ($window.width() > 767 && $window.width() < 1025) {
//          return $html.addClass('sidebar-mini sidebar-collapse');
//        }
//        else if ($window.width() > 1024 && $window.width() < 1200) {
//          return $html.addClass('sidebar-mini');
//        }
//        else if ($window.width() > 1200) {
//          return $html.addClass('sidebar-mini');
//        }
//      }
//      $window.resize(resize).trigger('resize');
//    });
$(document).ready(function() {
  var $window = $(window);

      // Function to handle changes to style classes based on window width
      function checkWidth() {
      if ($window.width() > 767 && $window.width() < 980) {
          $('#mainContent').removeClass('sidebar-mini').addClass('sidebar-mini sidebar-collapse');
          };

      if ($window.width() >= 980) {
          $('#mainContent').removeClass('sidebar-mini sidebar-collapse').addClass('sidebar-mini');
      }
  }

  // Execute on load
  checkWidth();

  // Bind event listener
      $(window).resize(checkWidth);
});