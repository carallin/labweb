$(document).ready(function () {
  $("#form1").submit(function(){
    var options = {
      url: 'test1.php',
      type: 'post',
      dataType: 'text',
      data: $("#form1").serialize(),
      success: function (data) {
        $("#phpBack").text(data);
      }
    };
    $.ajax(options);
    return false;
  });
});


// $(document).ready(function () {
//     $("#btnAjaxSubmit").click(function () {
//         var options = {
//             url: 'async_submit_test1.aspx?action=SaveUserInfo',
//             type: 'post',
//             dataType: 'text',
//             data: $("#form1").serialize(),
//             success: function (data) {
//                 if (data.length > 0)
//                     $("#responseText").text(data);
//             }
//         };
//         $.ajax(options);
//         return false;
//     });
// });
