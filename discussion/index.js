console.log("Hello World!");

// Current date for title
const dateElement = document.getElementById('date')
console.log(dateElement);
let currentDate = new Date();


// Approach 1
// console.log(currentDate);
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth();
// const day = currentDate.getDate();
// dateElement.textContent = month + "/" + day + "/" + year;

// Approach 2
let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);


// RAPID API code to retrieve trending twitter topics
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '8e37c5c2ddmshd4d14456234f507p1a88a6jsn4f03425ea886',
		'X-RapidAPI-Host': 'twitter-trends5.p.rapidapi.com'
	},
	body: new URLSearchParams({woeid: '23424934'})
};

let graphData = [];

fetch(url, options)
.then(res => res.json())
.then(data => {
	console.log(data);

	for(let i = 0; i < 25; i++){
		graphData.push({
			"name": data.trends[i].name,
	       "volume": data.trends[i].volume
		});
	};

	// Dummy Data
	// let myPost = {
	//     name: "Lee Sung Kyung",
	//     queryUrl: "search?q=%22Lee+Sung+Kyung%22",
	//     volume: 31799,
	//     followers: 3895734
	// }

	// console.log(myPost);
	// console.log(myPost.name);

	// let graphData = [
	//     {name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
	//     {name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
	// ];
	// console.log(graphData);
	// console.log(graphData[0].name);
	// console.log(graphData[1].name);

	// graphData.push(myPost);
	// console.log(graphData);

	// // For Loop
	// for (let i = 0; i < 2; i++) {
	// console.log(graphData[i]);
	// console.log(graphData[i].name);
	// console.log(graphData[i].queryUrl);
	// console.log(graphData[i].volume);
	// }
	// End of Dummy Data to comment out

	// Map Method creating new array and its content is came from another array
	let topics = graphData.map(object => {
		console.log(object.name);
		return object.name
	});
	console.log(topics);

	let volumes = graphData.map(object => {
	console.log(object.volume);
	return object.volume
	});
	console.log(volumes);

	// CHART JS
    const myChart = document.getElementById('myChart');

	  new Chart(myChart, {
	    type: 'bar',
	    data: {
	      labels: topics,
	      datasets: [{
	        label: '# of Tweets/Xeets',
	        data: volumes,
	        borderWidth: 1,
	        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        	],
        	borderColor: [
           'rgb(255, 99, 132)',
           'rgb(255, 159, 64)',
           'rgb(255, 205, 86)',
           'rgb(75, 192, 192)',
           'rgb(54, 162, 235)',
           'rgb(153, 102, 255)',
           'rgb(201, 203, 207)'
  			],
       		hoverBackgroundColor: [
           'rgb(255, 99, 132)',
           'rgb(255, 159, 64)',
           'rgb(255, 205, 86)',
           'rgb(75, 192, 192)',
           'rgb(54, 162, 235)',
           'rgb(153, 102, 255)',
           'rgb(201, 203, 207)'
       		]
	      }]
	    },
	    options: {
	    	indexAxis: 'y',
	      scales: {
	        y: {
	          beginAtZero: true
	        }
	      }
	    },
	  });

});

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }