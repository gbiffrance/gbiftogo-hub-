//# sourceMappingURL=colourPicker.js.map
/*
:
http://creativecommons.org/licenses/by/3.0/

@copyright:
2008 Andreas Lagerkvist (andreaslagerkvist.com)

@requires:
jquery, jquery.colourPicker.css, jquery.colourPicker.gif

@does:
Use this plug-in on a normal <select>-element filled with colours to turn it in to a colour-picker widget that allows users to view all the colours in the drop-down as well as enter their own, preferred, custom colour. Only about 1k compressed.

@howto:
jQuery('select[name="colour"]').colourPicker({ico: 'my-icon.gif', title: 'Select a colour from the list'}); Would replace the select with 'my-icon.gif' which, when clicked, would open a dialogue with the title 'Select a colour from the list'.

You can close the colour-picker without selecting a colour by clicking anywhere outside the colour-picker box.

Here's a handy PHP-function to generate a list of "web-safe" colours:

[code]
function gwsc() {
 $cs = array('00', '33', '66', '99', 'CC', 'FF');

 for($i=0; $i<6; $i++) {
  for($j=0; $j<6; $j++) {
   for($k=0; $k<6; $k++) {
    $c = $cs[$i] .$cs[$j] .$cs[$k];
    echo "<option value=\"$c\">#$c</option>\n";
   }
  }
 }
}
[/code]

Use it like this: <select name="colour"><?php gwsc(); ?></select>.

@exampleHTML:
<p>
 <label>
  Pick a colour<br />
  <select name="colour">
   <option value="ffffff">#ffffff</option>
   <option value="ffccc9">#ffccc9</option>
   <option value="ffce93">#ffce93</option>
   <option value="fffc9e">#fffc9e</option>
   <option value="ffffc7">#ffffc7</option>
   <option value="9aff99">#9aff99</option>
   <option value="96fffb">#96fffb</option>
   <option value="cdffff">#cdffff</option>
   <option value="cbcefb">#cbcefb</option>
   <option value="cfcfcf">#cfcfcf</option>
   <option value="fd6864">#fd6864</option>
   <option value="fe996b">#fe996b</option>
   <option value="fffe65">#fffe65</option>
   <option value="fcff2f">#fcff2f</option>
   <option value="67fd9a">#67fd9a</option>
   <option value="38fff8">#38fff8</option>
   <option value="68fdff">#68fdff</option>
   <option value="9698ed">#9698ed</option>
   <option value="c0c0c0">#c0c0c0</option>
   <option value="fe0000">#fe0000</option>
   <option value="f8a102">#f8a102</option>
   <option value="ffcc67">#ffcc67</option>
   <option value="f8ff00">#f8ff00</option>
   <option value="34ff34">#34ff34</option>
   <option value="68cbd0">#68cbd0</option>
   <option value="34cdf9">#34cdf9</option>
   <option value="6665cd">#6665cd</option>
   <option value="9b9b9b">#9b9b9b</option>
   <option value="cb0000">#cb0000</option>
   <option value="f56b00">#f56b00</option>
   <option value="ffcb2f">#ffcb2f</option>
   <option value="ffc702">#ffc702</option>
   <option value="32cb00">#32cb00</option>
   <option value="00d2cb">#00d2cb</option>
   <option value="3166ff">#3166ff</option>
   <option value="6434fc">#6434fc</option>
   <option value="656565">#656565</option>
   <option value="9a0000">#9a0000</option>
   <option value="ce6301">#ce6301</option>
   <option value="cd9934">#cd9934</option>
   <option value="999903">#999903</option>
   <option value="009901">#009901</option>
   <option value="329a9d">#329a9d</option>
   <option value="3531ff">#3531ff</option>
   <option value="6200c9">#6200c9</option>
   <option value="343434">#343434</option>
   <option value="680100">#680100</option>
   <option value="963400">#963400</option>
   <option value="986536" selected="selected">#986536</option>
   <option value="646809">#646809</option>
   <option value="036400">#036400</option>
   <option value="34696d">#34696d</option>
   <option value="00009b">#00009b</option>
   <option value="303498">#303498</option>
   <option value="000000">#000000</option>
   <option value="330001">#330001</option>
   <option value="643403">#643403</option>
   <option value="663234">#663234</option>
   <option value="343300">#343300</option>
   <option value="013300">#013300</option>
   <option value="003532">#003532</option>
   <option value="010066">#010066</option>
   <option value="340096">#340096</option>
  </select>
 </label>
</p>

@exampleJS:
jQuery('#jquery-colour-picker-example select').colourPicker({
 ico:	WEBROOT + 'aFramework/Modules/Base/gfx/jquery.colourPicker.gif', 
 title:	false
});
**/
jQuery.fn.colourPicker=function(h){var b=jQuery.extend({id:"jquery-colour-picker",ico:"ico.gif",title:"Pick a colour",inputBG:!0,speed:500,openTxt:"Open colour picker"},h),e=function(a){var b=a.substr(0,2),c=a.substr(2,2);a=a.substr(4,2);return.5>.212671*b+.71516*c+.072169*a?"ffffff":"000000"},d=jQuery("#"+b.id);d.length||(d=jQuery('<div id="'+b.id+'"></div>').appendTo(document.body).hide(),jQuery(document.body).click(function(a){jQuery(a.target).is("#"+b.id)||jQuery(a.target).parents("#"+b.id).length||
d.hide(b.speed)}));return this.each(function(){var a=jQuery(this),f=jQuery('<a href="#"><img src="'+b.ico+'" alt="'+b.openTxt+'" /></a>').insertAfter(a),c=jQuery('<input type="text" name="'+a.attr("name")+'" value="'+a.val()+'" size="6" />').insertAfter(a),g="";jQuery("option",a).each(function(){var b=jQuery(this),a=b.val(),b=b.text();g+='<li><a href="#" title="'+b+'" rel="'+a+'" style="background: #'+a+"; colour: "+e(a)+';">'+b+"</a></li>"});a.remove();b.inputBG&&(c.change(function(){c.css({background:"#"+
c.val(),color:"#"+e(c.val())})}),c.change());f.click(function(){var a=f.offset();d.html((b.title?"<h2>"+b.title+"</h2>":"")+"<ul>"+g+"</ul>").css({position:"absolute",left:a.left+"px",top:a.top+"px"}).show(b.speed);jQuery("a",d).click(function(){var a=jQuery(this).attr("rel");c.val(a);b.inputBG&&c.css({background:"#"+a,color:"#"+e(a)});c.change();d.hide(b.speed);return!1});return!1})})};