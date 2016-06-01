
//control the visibility of the content
function divShow(str) {
    //document.getElementById('phpBack').innerHTML = "这是divshow函数运行时。。。";
/*    var books = [
        {
            title:"aa",
            author:"AA"
        },
        {
            title:"bb",
            author:"BB"
        }
    ];
    var jsonbook0=JSON.stringify(books);
    var jsonbook=JSON.parse(jsonbook0);*/
    // //alert(jsonbook[0].title);
    // alert(jsonbook);
    document.getElementById('selected').innerHTML = "<p>> 这里将显示你选择的信息</p>";
    document.getElementById('phpBack-p').innerHTML = "> 这里将显示服务器返回的查询结果";
    document.getElementById('search-table').style.display = "none";
    var btnN=Array(4);
    btnN=["section-2-1","section-2-2","section-2-3","section-2-4"];
    for (var i = 0; i < btnN.length; i++) {
        if (btnN[i]==str) {
            document.getElementById(btnN[i]).style.display="block";
        }
        else
            document.getElementById(btnN[i]).style.display="none";
    }
};

// var btn_21 = document.getElementById('btn-section-2-1');
// var btn_22 = document.getElementById("btn-section-2-2");
// document.getElementById('btn-section-2-3').addEventListener("click",divShow("section-2-3"),false);
// var btn_24 = document.getElementById('btn-section-2-4');
//
// btn_22.addEventListener("click",divShow("section-2-2"),false);
// btn_21.onclick = divShow('section-2-1');
// btn_22.onclick = divShow('section-2-2');
// btn_23.onclick = divShow('section-2-3');
// btn_24.onclick = divShow('section-2-4');
//document.getElementById("phpBack").innerHTML="<p>此处显示服务器返回信息</p>";
// $(function () {
//   $("btn-section-2-5").click(function () {
//     var options = {
//       url: 'query.php',
//       type: 'post',
//       success:jsonBack;
//     }
//   });
// });

$(document).ready(function () {
  $("#form1 :radio").change(function () {
    $.ajax({
      url: 'queryAll.php',
      type: 'post',
      //dataType: 'json',
      data: 'toolname = $("#form1 :radio:checked").val()',
      success: jsonBack
    });
    var str = "你选择的搜索条件是： ";
    $(':radio:checked').each(function () {
        str = str + $(this).val()+" ";
    });
    $("#selected").html("<p>"+str+"</p>");
    $(":radio").attr('checked',false);
  });

  $("#form1").submit(function(){
    // $("#phpBack-p").html("这里将显示服务器返回的查询结果，加载中..."+"*****向服务器传送的数据为"+$("#form1").serialize());
    var options1 = {
      url: 'php/queryAll.php',
      type: 'post',
      //dataType: 'json',
      data: $("#form1").serialize(),
      success: jsonBack
      // success: function (data) {
      //   $("#phpBack-p").html(data);
      // }
            // error: function (XMLHttpRequest,textStatus,errorThrown){
            //      $("#phpBack").html("error"+XMLHttpRequest+"***********"+textStatus+"******"+errorThrown);
            //  }
    };
    $.ajax(options1);
    var str1 = "你选择的搜索条件是：    ";
    $(':radio:checked').each(function () {
        str1 = str1 + $(this).val()+" ";
    });
    if ($('#form1 input:text').val()) {
      str1 = str1 + "ID=" + $('input:text').val();
      $('input:text').val("").focus();
    };
    $("#selected").html("<p>"+str1+"</p>");
    $(":radio").attr('checked',false);
    $("#search-table tr:gt(0)").remove();
    return false;
  });

    $("#form2").submit(function(){
    // $("#phpBack-p").html("这里将显示服务器返回的查询结果，加载中..."+"*****向服务器传送的数据为"+$("#form2").serialize());
    var options2 = {
      url: 'query.php',
      type: 'post',
      //dataType: 'json',
      data: $("#form2").serialize(),
      success: jsonBack
    };
    $.ajax(options2);
    var str2 = "你选择的搜索条件是：光学元件 ";
    $(':radio:checked').each(function () {
        str2 = str2 + $(this).val()+" ";
    });
    // if ($("#form2 input:number")) {
    //   str2 = str2 + $('#form2 input:number').val();
    // } else {
    //   str2 = str2;
    // };
    // str2 = str2 + $('#form2 input:number').val();
    // $('#form2 input:number').val("");
    $("#selected").html("<p>"+str2+"</p>");
    $(":radio").attr('checked',false);
    $("#search-table tr:gt(0)").remove();
    return false;
  });

    $("#form3").submit(function(){
    // $("#phpBack-p").html("这里将显示服务器返回的查询结果，加载中..."+"*****向服务器传送的数据为"+$("#form1").serialize());
    var options3 = {
      url: 'query.php',
      type: 'post',
      //dataType: 'json',
      data: $("#form3").serialize(),
      success: jsonBack
    };
    $.ajax(options3);
    var str3 = "你选择的搜索条件是：光机平台 ";
    $(':radio:checked').each(function () {
        str3 = str3 + $(this).val()+" ";
    });
    $("#selected").html("<p>"+str3+"</p>");
    $(":radio").attr('checked',false);
    $("#search-table tr:gt(0)").remove();
    return false;
  });

    $("#form4").submit(function(){
     $("#phpBack-p").html("这里将显示服务器返回的查询结果，加载中..."+"*****向服务器传送的数据为"+$("#form4").serialize());
    var options4 = {
      url: 'query.php',
      type: 'post',
      //dataType: 'json',
      data: $("#form4").serialize(),
      success: jsonBack
    };
    $.ajax(options4);
    var str4 = "你选择的搜索条件是：电子元件 ";
    $(':radio:checked').each(function () {
        str4 = str4 + $(this).val()+" ";
    });
    $("#selected").html("<p>"+str4+"</p>");
    $(":radio").attr('checked',false);
    $("#search-table tr:gt(0)").remove();
    return false;
  });

  $("#form-insert").submit(function(){
    var insertData = $("#form-insert").serialize();
    var insertDataArray = insertData.split(/[&=]/);
    // var insertDataArray =decodeURI(insertData.split(/[&=]/));
    // var insertDataObject = insertDataArray;
    var insertDataString = "填入的信息为：<br/>";
    for (var i = 0; i < insertDataArray.length/2; i++) {
      insertDataString = insertDataString + decodeURI(insertDataArray[i*2]) + ':' + decodeURI(insertDataArray[i*2+1]) + '<br/>';
    };
    // var insertDataString = insertDataArray[1] + '|' +insertDataArray[3] + '|' + insertDataArray[5] + '|' + insertDataArray[7] + '|' +
    //   insertDataArray[9] + '|' + insertDataArray[11] + '|' + insertDataArray[13] + '|' + insertDataArray[15] + '|' + insertDataArray[17] + '|' ;
    $("#insert-msg").html("这里将显示服务器返回的查询结果，加载中..."+"*****向服务器传送的数据为"+ insertDataString);
  var options5 = {
    url: 'insert.php',
    type: 'post',
    //dataType: 'json',
    data: insertData,
    success: function (data) {
       $("#insert-phpBack-p").html(data);
     }
  };
  $.ajax(options5);

  return false;
  });



});

function jsonBack (data){
    var jsonObject = JSON.parse(data);
    var newRow=["没有符合条件的结果"];
    //$("#phpBack p").html(data+"<br>"+jsonObject+"<br>"+jsonObject[0].category);
    //$("#phpBack p").html(data);
    //$("#phpBack p").html(jsonObject[0].msg);
    // $("#phpBack-p").html("一共查询到 "+jsonObject.length+" 条结果:");
    // $("#search-table").show();

    // ***************用来判断是否有符合条件的查询结果*********************************
    if (jsonObject.length > 0) {
      $("#phpBack-p").html("一共查询到 "+jsonObject.length+" 条结果:");
      $("#search-table").show();
      for (var i = 0; i < jsonObject.length; i++) {
        newRow[i] = "<tr><td>"+(i+1)+"</td><td>"+jsonObject[i].category+"</td><td>"+jsonObject[i].toolname+"</td><td>"+jsonObject[i].ids+"</td><td>"+jsonObject[i].detail
        +"</td><td>"+jsonObject[i].brand+"</td><td>"+jsonObject[i].owner+"</td><td>"+jsonObject[i].number+"</td><td>"+jsonObject[i].buytime+"</td><td>"+jsonObject[i].warranty+"</td></tr>";
        $("#search-table tr:last").after(newRow[i]);
      }
    } else {
      $("#search-table").hide();
      $("#phpBack-p").html("没有符合该搜索条件的结果，请重新选择。");
    }
};


//不能实现阻止submit提交数据-----------放弃
/*function postData(formId) {
    //document.getElementById("phpBack").innerHTML="此处显示服务器返回信息";
    var form = document.getElementById(formId);
    alert(formId+"***"+form);
    //alert(new formData(form));

    document.getElementById("phpBack").innerHTML="<p>此处显示服务器返回信息js版</p>";
    document.getElementById("selected").innerHTML="serialize(form)";

    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange == function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("phpBack").innerHTML = xhr.responseText;
        }else {
            alert("Request was 不成功" + xhr.status);
        }
    }
    xhr.open("POST","test.php",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(new formData(form));
    return false;
    }*/


/****、jquery form
// prepare the form when the DOM is ready
$(document).ready(function() {
    var options = {
        target:        '#section-2',   // target element(s) to be updated with server response
        beforeSubmit:  showRequest,  // pre-submit callback
       // success:       showResponse  // post-submit callback

        // other available options:
        //url:       url         // override for form's 'action' attribute
        //type:      type        // 'get' or 'post', override for form's 'method' attribute
        //dataType:  null        // 'xml', 'script', or 'json' (expected server response type)
        //clearForm: true        // clear all form fields after successful submit
        //resetForm: true        // reset the form after successful submit

        // $.ajax options can be used here too, for example:
        //timeout:   3000
    };

    // bind to the form's submit event
    $('#form1').submit(function() {
        // inside event callbacks 'this' is the DOM element so we first
        // wrap it in a jQuery object and then invoke ajaxSubmit
        $(this).ajaxSubmit(options);

        // !!! Important !!!
        // always return false to prevent standard browser submit and page navigation
        return false;
    });
});

// pre-submit callback
function showRequest(formData, jqForm, options) {
    // formData is an array; here we use $.param to convert it to a string to display it
    // but the form plugin does this for you automatically when it submits the data
    var queryString = $.param(formData);

    // jqForm is a jQuery object encapsulating the form element.  To access the
    // DOM element for the form do this:
    // var formElement = jqForm[0];

    alert('About to submit: \n\n' + queryString);

    // here we could return false to prevent the form from being submitted;
    // returning anything other than false will allow the form submit to continue
    return true;
}
*/ //jquery form

/*/ post-submit callback
function showResponse(responseText, statusText, xhr, $form)  {
    // for normal html responses, the first argument to the success callback
    // is the XMLHttpRequest object's responseText property

    // if the ajaxSubmit method was passed an Options Object with the dataType
    // property set to 'xml' then the first argument to the success callback
    // is the XMLHttpRequest object's responseXML property

    // if the ajaxSubmit method was passed an Options Object with the dataType
    // property set to 'json' then the first argument to the success callback
    // is the json data object returned by the server

    alert('status: ' + statusText + '\n\nresponseText: \n' + responseText +
        '\n\nThe output div should have already been updated with the responseText.');
} */
