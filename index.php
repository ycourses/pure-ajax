<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>AQs puer javascript Lib</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="scr/AQs.js"></script>
</head>
<body>
<h1>AQs Puer javascript ajax Lib </h1>
<input required="" type="text" class="form-control" name="Username" id="Username" placeholder="userName"   value="">
<div id="result"></div>
<div id="result2"></div>

<script type="text/javascript">
    var axjson = $.$("#Username");
    var result = $.$("#result");
   // var result2 = $.$("#result2");
    var url='http://www.scv.net/users/chackUserjax/';

    axjson.addEventListener("blur", function(){
        'use strict';
        $.AQs({type: 'post', url: url, data: '?Username='+this.value,imsg:0, sucs: function (Msg) {
                result.innerHTML=Msg;
                $.$("#result2").innerHTML = Msg;
            }

        });
    });
</script>
</body>
</html>