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

    const list = document.querySelector("#launch-list");
     
    const launchNames = launches.map(launches => launches.name)

            launchNames.forEach((name) => {
                const listItem = document.createElement("li")
                listItem.innerText = name;
                list.appendChild(listItem);
            });

});
}

loadData();