$(document).ready(function () {

  $("#form-insert").submit(function(){
    var options8 = {
      url: 'insert.php',
      type: 'post',
      dataType: 'json',
      data: $("#form-insert").serialize(),
      success: function (data) {
        $("#insert-phpBack-p").html(data);
      }
    };
    $.ajax(options8);
    return false;
    $("#insert-msg").html($("#form-insert").serialize());
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
