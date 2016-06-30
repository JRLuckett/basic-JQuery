var $myFiles = $('#my-files');
var $mail = $('#mail');
var $cloud = $('#cloud');
var $signOut = $('#sign-out');
var $lowerTab1 = $('.lower-tab1');
var $lowerTab2 = $('.lower-tab2');

//lower-tabs collapse
// $(document).ready(function(){
  $( "#my-files" ).click(function() {
   $('.lower-tab1').slideToggle('slow');
   $mail.addClass('selected');
});
// });
// $(document).ready(function(){
  $( "#cloud" ).click(function() {
   $('.lower-tab2').slideToggle('slow');
});
// });
