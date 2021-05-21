function FunctionGet()
{	
	var request = new XMLHttpRequest();
	var url = "http://localhost:3002/users";
	
	if (document.getElementById("Num").checked)
	{
		url += "?num=";
		url += document.getElementById("number").value;
	}

    console.log(url);
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function()
    {
    	console.log(request.response); 
		var result = request.response;
		document.getElementById("results").innerHTML = "<label class=\"results_label\"><b><u>Результат выполнения запроса GET</u></b></label><br>";
		for (var i = 0; i < result.users.length; ++i)
		{
			document.getElementById("results").innerHTML += `
			<br><div class = \"results_item\">
				<lable class=\"results_items\"><b>Фамилия</b> : <i>${result.users[i].surname}</i></label><br>
				<lable class=\"results_items\"><b>Имя</b>     : <i>${result.users[i].name}</i></lable><br>
				<lable class=\"results_items\"><b>e-mail</b>  : <i>${result.users[i].email}</i></lable><br>
				<label class=\"results_items\"><b>Телефон</b> : <i>${result.users[i].phone}</i></label><br>
			</div>
			`
		}
    }
}

function FunctionPost()
{
	var request = new XMLHttpRequest();
	var url = "http://localhost:3002/users";

	url += "?surname=";
	url += document.getElementById("surname").value;
	url += "&name=";
	url += document.getElementById("name").value;
	url += "&email=";
	url += document.getElementById("email").value;
	url += "&phone=";
	url += document.getElementById("phone").value;

    console.log(url);

	request.open('POST', url);
	request.responseType = 'json';
    request.send();

    request.onload = function()
    {
    	console.log(request.response); 
    }
}

function FunctionDelete()
{
	var request = new XMLHttpRequest();
	var url = "http://localhost:3002/users";


	url += "?surname=";
	url += document.getElementById("surname").value;
	url += "&name=";
	url += document.getElementById("name").value;
	url += "&email=";
	url += document.getElementById("email").value;
	url += "&phone=";
	url += document.getElementById("phone").value;

    console.log(url);

	request.open('DELETE', url);
	request.responseType = 'json';
    request.send();

    request.onload = function()
    {
    	console.log(request.response); 
    }
}

function FunctionPut()
{
	var request = new XMLHttpRequest();
	var url = "http://localhost:3002/users";


	url += "?surname=";
	url += document.getElementById("surname").value;
	url += "&name=";
	url += document.getElementById("name").value;
	url += "&email=";
	url += document.getElementById("email").value;
	url += "&phone=";
	url += document.getElementById("phone").value;

    console.log(url);

	request.open('PUT', url);
	request.responseType = 'json';
    request.send();

    request.onload = function()
    {
    	console.log(request.response); 
    }
}