# AQS pure-ajax LIB

#Deviloper by ADham allam
cood_ip@hotmail.com
# V0.1 2018

AQS AJAX LIB


exampel 1 use ajax
```
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
```
