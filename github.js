const container = document.querySelector('.container');
//console.log(container);


fetch('https://api.github.com/users/fmuwanguzi')
.then(response => {
    return response.json();
})
.then(githubData => {
    const felixObj ={
        name: githubData.name,
        username: githubData.login,
        id: githubData.id
    }
    console.log(felixObj);
    
    const newElement = document.createElement('p');
    newElement.textContent = felixObj.name;
    //append new elemnt tp container
    container.appendChild(newElement);
})
.catch(error => {
    console.log(error)
})
