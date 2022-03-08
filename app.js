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
    const list = document.querySelector("#launch-list");
// then we're looping through all the launch array and then getting the names within the array, then we put them in the variable called launchNames
// the map function creates a new array populated with results of calling a provided function on every element on the array that you pass in 

    const launchNames = launches.map(launches => launches.name)
// so for each name within launch names, we want the 
            launchNames.forEach((name) => {
                const listItem = document.createElement("li")
                listItem.innerText = name;
                list.appendChild(listItem);
            });

});
}

loadData();