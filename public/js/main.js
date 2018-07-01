let app = {
	init:() => {

		// add listener to delete buttons
		let elements = document.getElementsByClassName("deleteUser");
		for(let el of elements){

			el.onclick = (event) => {

				let id = event.currentTarget.getAttribute("data-id");

				let c = confirm("Are You Sure?");
				if(!c){
					return false;
				}

				var req = new XMLHttpRequest();
				req.onreadystatechange = () => {
					if(req.readyState == XMLHttpRequest.DONE){
						if(req.status == 200){
							window.location.replace("/");
							// window.location.reload(true);
						}
					}else if(req.status == 400){
						console.log("error 400");
					}else{
						console.log("some other than 200 or 400 was returned");
					}
				}

				req.open("DELETE","/users/delete/"+id,true);
				req.send();
			}
		}

		console.log("app init");
	},
}

document.addEventListener("DOMContentLoaded",app.init);
