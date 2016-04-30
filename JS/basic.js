
//control the visibility of the content
function divShow(str) {
	document.getElementById('phpBack').innerHTML = "这是divshow函数运行时。。。";
	var btnN=Array(4);
	btnN=["section-2-1","section-2-2","section-2-3","section-2-4"];
	for (var i = 0; i < btnN.length; i++) {
		if (btnN[i]==str) {
			document.getElementById(btnN[i]).style.display="inline-block";
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

$(document).ready(function () {
  $("#form1").submit(function(){
		$("#phpBack").html("这里将显示服务器返回的查询结果，加载中..."+"*****向服务器传送的数据为"+$("#form1").serialize());
    var options = {
      url: 'test1.php',
      type: 'post',
      dataType: 'text',
      data: $("#form1").serialize(),
      success: function (data) {
        $("#phpBack").html(data);
      }
			// error: function (XMLHttpRequest,textStatus,errorThrown){
			// 	$("#phpBack").html(XMLHttpRequest+"***********"+textStatus+"******"+errorThrown);
			// }
    };
    $.ajax(options);
		var str = "你选中的是:	\r\n";
		$(':checkbox:checked').each(function () {
			str = str + $(this).val()+"  ";
		});
		$("#selected").html(str);
		$(":checkbox").attr('checked',false);
    return false;
  });



});


//不能实现阻止submit提交数据-----------放弃
function postData(formId) {
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
	}


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
