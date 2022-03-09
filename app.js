//this will be where we store the data we collect and filter from the launches api
//let rather than const variable because we want to be able to re-assign it 
let launches = [];

//create function
const loadData = () => {
// we need to fetch where all the data about the launches is
fetch("https://api.spacexdata.com/v5/launches")
// then we want to take the result of that fetch which we are storing in the word result and convert the result into a .jSON as it is easier to read
.then(result => result.json())
// then the result from above which is the result.json() is now being referred to as data and we make the launches array = to this
.then(data => launches = data)

.then(() => {
// then we want to store the selected data from the dom into the variable called list; list is equal to the location of launch list
// creating 'list' variable and setting it to be located at the 'launch-info' element in the DOM
    const list = document.querySelector(".launch-info");
// want to go through the launches array 
// and for each launches element in the array (create new variable called launch) we want to get each of these things 
    launches.forEach(launch => {

        // create an article that we want to append within the list variable 
        // so each section has an article for each launch - this will seperate out the sets of data 
        // every time we go through the array we want to create a new <article> for all the details for a specific launch to be stored within
        const article = document.createElement("article");
        // appending the new article to the 'list' variable
        

        // class tag for article 
        // created for using it within css - call on the article class tag to add all the css features
        // not doing anything of value in the js
        article.classList.add("articleTag");


        // add launch names 
        // creating a h2 element 
        const listItem = document.createElement("h2");
        // want the variable to contain the launch names for each launch
        listItem.innerText = launch.name;
        // appending the 'listItem' variable within the 'article' variable
        article.appendChild(listItem);

        // add launch flight number
        const listFlightNumber = document.createElement("h3");
        listFlightNumber.innerText = ("Flight number: " + launch.flight_number);
        article.appendChild(listFlightNumber); 
   
        // add launch links 
        // creating an anchor element to create a hyperlink
        const hyperLink = document.createElement("a");
        // need to use .href for a hyperlink rather than innerText
        hyperLink.href = launch.links.article;
        // we want the hyperlink to have text so still need innerText for this
        hyperLink.innerText = "Launch-article";
        // append it to the article variable
        article.appendChild(hyperLink);
  
        // add launch images 
        // creating an image so we need the 'img' element 
        const listImage = document.createElement("img");
        // need to specify the source for the image so its 'src' not 'innerText
        listImage.src = launch.links.patch.small;
        article.appendChild(listImage);

        // appending each article into 'list' variable - do it right at the end once article is complete 
        list.appendChild(article);

    })
 

});
}

// calling the function which contains all of these methods
loadData();




// -------------------------------------------

// different method using map() higher function 

// then we're looping through all the launch array and then getting the names within the array, then we put them in the variable called launchNames
// the map function creates a new array populated with results of calling a provided function on every element on the array that you pass in 
//     const launchNames = launches.map(launches => launches.name)
// // so for each name within launch names, we want the 
//             launchNames.forEach((name) => {
//                 const listItem = document.createElement("li")
//                 listItem.innerText = name;
//                 list.appendChild(listItem);
//             });

    



    