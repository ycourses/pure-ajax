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

```haml
<input type="text" class="form-control" name="Username"
 id="Username" placeholder="userName"   value="">
<div id="result"></div>
<div id="result2"></div>
```
## javascript code 
```javascript
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
##EX2 to use
add to index file 
```haml
<input   type="text"  name="Search" id="Search" placeholder="Enter Search value...">
<button id="ADDuser"  >add New Usere</button>
<div id="res1" class="Re1"></div>
```
add javascript code 
```javascript
    var ADDuser =$.$('#ADDuser');
    ADDuser.onclick = function () {
        'use strict';
        var urls='Server.php',userName =$.$('#Search').value,uN =$._val('#Search');
        $.AQs({type:'POST',url:urls, data:'?Username='+userName+'&uN='+uN,sucs:function (Msg)
            {
                $.$('.Re1').innerHTML=Msg;
            }
        })
    }

```
add file server.php
```php
$un=@$_REQUEST['Username'];
$un2=@$_REQUEST['uN'];
echo "<h2>$un &&  $un2 </h2>";
```
### $.$()
this function use to select any element in page 
use .class #id
```javascript
$.$('#userName');
var x =$.$('#userName');
```
### $.sc()
print Result to console
```javascript
$.sc('Hello Ajax ')
// or use 
$.sc(Msg);
    //example
    var btc=9850, walt=5;
    $.sc(9000*5);
    $.sc(btc*walt);
```
### $._val()
thi's function get input value 
Example
```haml
<input  type="text" class="form-control" name="SearshText"
 id="Searsh" placeholder="Searsh..."   value="">
<button class="btn btn-success" type="button" id="Searsh"> Searsh  </button>

```
javascript code 
```javascript
var btn = $.$('#Searsh'), searsh, e;
btn.onclick = function () {
    'use strict';
    searsh = $._val("#SearshText");
    
    $.AQs({type: 'GET', url: 'Search.php?', data: 'SE=' + searsh, sucs: function (Msg) {
        $.$('#result').innerHTML = Msg;
    } });

};
```
more example 
```haml
<input type="text" class="Search" name="Search" id="Search" placeholder="Search value..." value="">

```
```javascript
    var Search =$.$('#Search');
    Search.addEventListener("blur", function() {
       $.$('.Re1').innerHTML= $._val('#Search');
    })
```
### $.gTr()
This function get getAttribute value 
example to use 
```javascript
var  x=$.gTr('#SearshText','placeholder'),
    x2=$.gTr('#SearshText','value'),
    x3=$.gTr('#SearshText','name');
$.sc(x);
$.sc(x2);
$.sc(x3);
//OR 
var vl =$.gTr("#Username",'placeholder');
        $.sc($.gTr("#Username",'placeholder'));
        alert(vl);
```
### $.sTr()
This function set Attribute in element 
example to use 
```javascript
    $.sTr('#Username',['placeholder','enter new user name ..']);
```
### $.cTxt()
This function get text in element
example to use function 
```haml
<div id="res1" class="Re1"></div>
<div id="res2" class="Re2">Hello ADham Allam 2018</div>

```
```javascript
    var ct = $.cTxt('.Re2');
    var ct2 = $.cTxt('#result2');
    $.sc(ct2);
    $.$('.Re1').innerHTML=ct;    
```
### $.typing()
This function is the work of the impact of the typewriter, Writing
Take some variables when used
this method is used
```haml
TextArray, Repeat, SpedTying, selector
```
```haml
<div id="typing_txt"></div>
```
example to use Typing
```javascript
window.onload = function () {
    'use strict';
    $.typing([
        'The impact of the writer god typing experience practical example 1',
        'typing experience the impact of the god of the writer practical example 2',
        'typing experience the impact of the god of the writer practical example 3'
        ], true, 100, '#typing_txt');
};

```
and more 