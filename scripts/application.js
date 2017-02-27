$(document).ready(function($) {

  $('#upwork a').hover(
    function() { $(document.body).addClass('upwork-bg'); },
    function() { $(document.body).removeClass('upwork-bg'); }
  );

  $('#github a').hover(
    function() { $(document.body).addClass('github-bg'); },
    function() { $(document.body).removeClass('github-bg'); }
  );

  $('#linkedin a').hover(
    function() { $(document.body).addClass('linkedin-bg'); },
    function() { $(document.body).removeClass('linkedin-bg'); }
  );
})
