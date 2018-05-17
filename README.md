# AQS pure ajax library
Developer by ADham allam
## V0.1 2018

AQS AJAX library

Ex 1 use ajax
include library file
```
    <script src="src/AQs.js"></script>

```
add to index file 

```
<input required="" type="text" class="form-control" name="Username"
 id="Username" placeholder="userName"   value="">
<div id="result"></div>
<div id="result2"></div>
```
## javascript code 
```
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
## Function in Library 
### $.AQs()
this function Ajax use sub parameter 
```javascript
$.AQs({type:'POST OR GET',
url:'use full path or use default',
data:'use parameter ?user='+user+'&email='+email,
sucs:function(Msg) { //this function return result 
  
}
})
```
### $.$()
this function use to select any element in page 
use .class #id
```javascript
$.$('#userName');
var x =$.$('#userName');
```
and more 