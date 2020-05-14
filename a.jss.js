var button =document.getElementsByTagName("button");
var ul = document.querySelector("ul");
var input = document.getElementsByTagName("input")
var li = document.getElementsByTagName("li")


button[0].style.backgroundColor="Yellow";
input[0].style.backgroundColor="Yellow";

function length()
{
	return input[0].value.length;
}

function createNewItem(){

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input[0].value));
	ul.appendChild(li);
	input.value="";
}

function click()
{
	if(length()>2)
	{
		createNewItem();
	}
}

function keyboard(event)
{
	if(length()>0 && event.keyCode===13 )
	{
		createNewItem();
	}
}

function removeelement(id){
	var item = document.getElementById(id);
	item.parentNode.removeChild(item);
}

.

button[0].addEventListener("click",click);
input[0].addEventListener("keypress",keyboard);


// button[0].addEventListener("click",function(){
// 	 if(input[0].value.length >2)
	//  {
	//     var li = document.createElement("li");
	// 	li.appendChild(document.createTextNode(input[0].value));
	// 	ul.appendChild(li);
	// 	input[0].value="";
 		// }

