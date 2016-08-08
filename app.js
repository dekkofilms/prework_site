$(document).ready(function () {
  $('#filters').on('click', '.every', function() {
    $('.darken').removeClass('darken');
  });

  $('#filters').on('click', '.films', function() {
    $('.darken').removeClass('darken');
    $('.art').filter('.notfilm').addClass('darken');
  });

  $('#filters').on('click', '.photographs', function() {
    $('.darken').removeClass('darken');
    $('.art').filter('.notphoto').addClass('darken');
  });
});
