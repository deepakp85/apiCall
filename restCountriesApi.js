/*Load the rest countries' data using your HTML and script.js file 
and run a for loop on the data and print all the country names in the console.*/

//step 1. Create a request variable
let request = new XMLHttpRequest();

//step 2. Create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//step 3. Send the request
request.send();

//Step 4. Load the response
request.onload = function(){
    let data = JSON.parse(this.response);
    console.log(data);

    for (let ele of data){
        console.log(ele.name);
    }
}
