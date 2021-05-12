/*
getElementById()+
getElementsByName()+
getElementsByTagName()+
getElementsByClassName()+
characterSet->UTF-8+

inputEncoding+
 var x = document.inputEncoding;->UTF-8

compatMode                      ?
documentMode                    ?
defaultView+
documentURI+
baseURI+
URL+

lastModified+
Get the date and time the current document was last modified:

readyState+
Get the loading status of the current document:complete cixir

designMode+
document.designMode = "on"; sehifeni editlemeye icaze verir

hasFocus()+
<script>
setInterval("myFunction()", 1);
function myFunction() {
  var x = document.getElementById("demo");
  if (document.hasFocus()) {
    x.innerHTML = "The document has focus.";
  } else {
    x.innerHTML = "The document DOES NOT have focus.";
  }
}
</script> sehifenion herhansi yerine basanda has fokus gosterir sehufeden kenara basanda dont have fokus gosterir


activeElement+
 var x = document.activeElement.tagName;
  document.getElementById("demo").innerHTML = x;meselen inputun ustune basdiqda input sozu cixir

anchors+
var x = document.anchors.length; a taglarinin sayini gosterir

links+
var x = document.links.length; linklerin sayini gosterir
scripts+

embeds+ 
embed elementlerinin sayini gosterir .length 

forms+
images+
plugins

createAttribute()+
<script>
function myFunction() {
  var h1 = document.getElementsByTagName("H1")[0];
  var att = document.createAttribute("class");
  att.value = "democlass";
  h1.setAttributeNode(att)}
</script>

createElement() ve createTextNode()+
<script>
function myFunction() {
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
}
</script>
<script>
function myFunction() {
  var t = document.createTextNode("Hello World");
  document.body.appendChild(t);
}
</script>

createComment()
<script>
function myFunction() {
  var c = document.createComment("My personal comments");
  document.body.appendChild(c);
  var x = document.getElementById("demo");
  x.innerHTML = "A comment was added to this document, but as you know, comments are invisible.";
}
</script>

addEventListener()+

removeEventListener()+
<p>This document has an onmousemove event handler that displays a random number every time you move your mouse in this document.</p>

<p>Click the button to remove the event handler.</p>

<button onclick="removeHandler()">Try it</button>

<p><strong>Note:</strong> The addEventListener() and removeEventListener() methods are not supported in Internet Explorer 8 and earlier versions.</p>

<p id="demo"></p>

<script>
document.addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  document.removeEventListener("mousemove", myFunction);
}
</script>

dir->metni sagdan solami soldan sagami olsun rtl-sagdansola ltr-soldan saga+
<script>
function myFunction() {
  document.getElementById("myP").dir = "rtl";
}
</script>

open() ve close()+
styleSheets
querySelector() ve querySelectorAll()+

adoptNode()
<script>
function myFunction() {
  var frame = document.getElementsByTagName("IFRAME")[0]
  var h = frame.contentWindow.document.getElementsByTagName("H1")[0];
  var x = document.adoptNode(h);
  document.body.appendChild(x);
}
</script>
importnode hemin secilmis h1 i frameden silmir
importNode()
normalize()                                      
function normPara() {
  document.normalize();
  var x = document.body;
  var y = document.getElementById("cc");
  y.innerHTML = x.childNodes.length;
}
cookie                                    
length+
name+
value+
specified
<script>
function myFunction() {
  var btn = document.getElementsByTagName("BUTTON")[0];
  var x = btn.getAttributeNode("onclick").specified;
  document.getElementById("demo").innerHTML = x;
} //true cixir
</script>

getNamedItem()+
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
  var a = document.getElementsByTagName("BUTTON")[0];
  var x = a.attributes.getNamedItem("onclick").value;  
  document.getElementById("demo").innerHTML = x;
} //myFunction cixir
</script>

setNamedItem()+
<script>
function myFunction() {
  var h = document.getElementsByTagName("H1")[0];
  var typ = document.createAttribute("class");
  typ.value = "democlass";
  h.attributes.setNamedItem(typ);
}
</script>
removeNamedItem()+ class id type bunlari silmek yaratmaq ucun setnameditem removenameditem istifade olunur
item()+
<button onclick="myFunction()" class="example">Try it</button>
<script>
function myFunction() {
  var a = document.getElementsByTagName("BUTTON")[0];
  var x = a.attributes.item(0).name;  
  document.getElementById("demo").innerHTML = x;// onclick cixir
} 
</script>

style+
accessKey+
<script>
document.getElementById("w3s").accessKey = "w";
</script>

focus() 
a elementi ucun fokuslandirir
<script>
function getfocus() {
  document.getElementById("myAnchor").focus();
}

function losefocus() {
  document.getElementById("myAnchor").blur();
}
</script>

blur() yuxaridakini legv edir
classList
Add the "mystyle" class to a <div> element:
document.getElementById("myDIV").classList.add("mystyle");

tagName+
Get the tagName of an element:
id+
title+
lang+
tabIndex                                           ?
contentEditable ve  isContentEditable+ //true cixartir
 document.getElementById("myP").contentEditable = true;

className+ class elave edir
nodeType                                           ?
nodeName+ //tagin adini cixardir
nodeValue+ //tagin icindekini cixartir
childElementCount+
hasChildNodes() //her hansi bir tagin icinde nodelarin olub olmamasini oyrenin true or false
children+
childNodes+ //burda meselen tagin typenida cixartir meselen: #text 
firstElementChild +
<script>
function myFunction() {
  var list = document.getElementById("myList").firstElementChild.innerHTML;
  document.getElementById("demo").innerHTML = list;
}
</script>

firstChild+ // eyni seydi yuxaridakiynan
lastElementChild+
lastChild+
nextElementSibling+
<ul>
  <li id="item1">Coffee (first li)</li>
  <li id="item2">Tea (second li)</li>
</ul>
<script>
function myFunction() {
  var x = document.getElementById("item1").nextElementSibling.innerHTML; 
  document.getElementById("demo").innerHTML = x;
}
</script>

nextSibling+
previousElementSibling+
previousSibling+
offsetParent //offsetParent is: [object HTMLBodyElement]
contains()//hansisa divin icinde paranmetr hissesine yazdigimiz tag varsa true cixartir
textContent+
compareDocumentPosition()                       ?
parentElement+        
parentNode+
appendChild()+
removeChild()+
<script>
function myFunction() {
  var list = document.getElementById("myList");
  list.removeChild(document.getElementById("myList").childNodes[0]);
}
</script>

replaceChild()
<script>
function myFunction() {
  var textnode = document.createTextNode("Water");
  var item = document.getElementById("myList").childNodes[0];
  item.replaceChild(textnode, item.childNodes[0]);
}
</script>

cloneNode()
<script>
function myFunction() {
  var itm = document.getElementById("myList2").lastChild;
  var cln = itm.cloneNode(true);
  document.getElementById("myList1").appendChild(cln);
}
</script>

insertBefore()+
<script>
function myFunction() {
  var newItem = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  newItem.appendChild(textnode);

  var list = document.getElementById("myList");
  list.insertBefore(newItem,list.childNodes[0]);
}
</script>

hasAttribute() ve hasAttributes()=>2ci bodyde olub olmadigini yoxluyur
<button id="myBtn" onclick="myFunction()">Try it</button>
<script>
function myFunction() {
  var x = document.getElementById("myBtn").hasAttribute("onclick");
  document.getElementById("demo").innerHTML = x;
}//true
</script>

getAttribute()+
Get the value of the class attribute of an <h1> element:
getAttributeNode()+
setAttribute()+
document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
setAttributeNode()+
removeAttribute()+
removeAttributeNode()+
clientLeft ve clientTop+
clientWidth ve clientHeight+
offsetLeft ve offsetTop+
offsetWidth ve offsetHeight+
scrollLeft ve scrollTop+
scrollWidth ve scrollHeight+
onclick ve ondblclick+
onmousedown+
oncontextmenu                                        ?
onmouseover ve onmouseout+
onmouseenter, onmouseleave ve onmousemove+
onmouseup+
onwheel ve onmousewheel+                    onmousewheel?
button ve buttons+                                    ?
screenX ve screenY+
clientX ve clientY+
pageX ve pageY+
onkeydown, onkeypress ve onkeyup+
key, charCode ve keyCode+
which ve location                           location?
Find out which mouse button that was pressed when a mouse event was triggered:
altKey, ctrlKey, shiftKey ve metaKey
onload, onunload ve onbeforeunload
onhashchange
oldURL ve newURL
onpageshow ve onpagehide
ononline ve onoffline // bu bizde islemir
onresize
onscroll
ontoggle
oncanplay, onplay ve onpause
onvolumechange
onratechange
<video id="myVideo" width="320" height="240" autoplay controls onratechange="myFunction()">
<button onclick="setPlaySpeed()" type="button">Set video to be play in slow motion</button>
var x = document.getElementById("myVideo");
function setPlaySpeed() { 
  x.playbackRate = 0.3;
} 

onseeked ve onseeking                             ?
ontimeupdate
<script>
function myFunction(event) {
  document.getElementById("demo").innerHTML = event.currentTime;
}
</script>

onended
onloadstart
onprogress                                 ?downloading ama yuklenmir
onloadedmetadata, onloadeddata ve oncanplaythrough         ?
onwaiting
onplaying
onsuspend                                           ?
onerror, onemptied, onstalled ve onabort
ondurationchange                                    ?
onfocus
onblur
onfocusin ve onfocusout
onchange 
<script>
function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}
</script>

oninput
oninvalid
 <input type="text" oninvalid="alert('You must fill out the form!');"
onsearch
onsubmit-inputu submit etdikde
onreset- resetledikde alert
onselect, oncopy, oncut ve onpaste
ondrag                                         ?
ondragstart ve ondragend
ondragenter ve ondragleave
ondragover
ondrop                                         ?
onbeforeprint ve onafterprint
type, currentTarget ve target
<script>
function myFunction(event) { 
  alert(event.currentTarget.nodeName);
}
</script>
timeStamp//sened yuklendikde millisaniye ile vaxti
cancelable                                     ?
preventDefault()
<script>
document.getElementById("myAnchor").addEventListener("click", function(event){
  event.preventDefault()
});
</script>
defaultPrevented



*/

// <!DOCTYPE html>
// <html>
// <body>

// <p>Click the button to get the tag names of the body element's children.</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   var c = document.body.children;
//   var txt = "";
//   var i;
//   for (i = 0; i < c.length; i++) {
//     txt = txt + c[i].tagName + "<br>";
//   }
//   document.getElementById("demo").innerHTML = txt;
// }
// </script>

// </body>
// </html>


{/* <details ontoggle="myFunction()">
<summary>Copyright 1999-2014.</summary>
<p> - by Refsnes Data. All Rights Reserved.</p>
<p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
</details> */}