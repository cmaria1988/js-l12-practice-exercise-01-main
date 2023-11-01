const randomFolks = document.querySelector(".random-peeps");

const getData = async function(){
    const userRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await userRequest.json();    

    const userResult = data.results;
    displayUser(userResult);
};

getData();

const displayUser = function(userResult){
    randomFolks.innerHTML = "";
    for (const user of userResult){
        const name = user.name.first;
        const country = user.location.country;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar"/>
        `;
        randomFolks.append(userDiv);
    }
};



