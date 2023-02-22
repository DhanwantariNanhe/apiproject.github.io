
const form = document.getElementById('myForm');

const loadApi = (event) => {

    event.preventDefault();
    const year = document.forms['myForm']['year'].value;
    
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'bb4fa92b06msh76aabe855568f2ep1d6322jsn2062dd89d67c',
		    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
		}
	};
	
	fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0', options)
		.then(response => response.json())
		.then((response) => {
			if(response == ''){
				document.getElementById('alert').innerHTML=`
				<div class="alert alert-warning alert-dismissible fade show" role="alert">
				<strong>Holy guacamole!</strong>Data Not Found.
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
				
				`
			}
			else{
            
				response.map((cval) => {
					document.getElementById('Cars').innerHTML+=`
					
						
				<div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                       <div class="card-body">
                           <h5 class="card-title">${cval.id}</h5>
                           <h5>${cval.model}</h5>
                           <h5>${cval.type}</h5>
                           <h5>${cval.make}</h5>
                       </div>
                    </div>
                <div>
                
						
					
					
					`
				})
			}
		})
		.catch(err => console.error(err));
		
		
	}
	form.addEventListener('submit', loadApi)