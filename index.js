'use strict';

const options = {
    results: 10,
    seed: 'abc',
    page: 1,
}
loadUsers(options);




const [btnPrev, btnNext] = document.querySelectorAll('button');
btnPrev.addEventListener('click', btnPrevHandler);
btnNext.addEventListener('click', btnNextHandler);

 function btnPrevHandler(e){
     if(options.page >=1){
    options.page--;
    loadUsers(options);
}
 } 
function btnNextHandler(e){
    options.page++;
    loadUsers(options);
}

function loadUsers({page,results, seed }){
fetch(`https://randomuser.me/api/?page=${page}&results=${results}&seed=${seed}`)
.then(response => response.json())
.then(({results}) => renderUsers(results));
}

// function renderUsers(users){
//     constliUserCollection = users.map(user => createUserListItem(user));
//     const userList = document.getElementById('userList');

//     userList.append(...liUserCollection);
// }
    function createUserListItem({name:{first:firstName,last: lastName}, picture:{large:userImageSrc},
    }){
        
        const userListItem =document.createElement('li');
        userListItem
        .classList.add('userListItem');
        userListItem.append(createUserImage(userImageSrc));
        userListItem.append(createUserFullName(firstName, lastName));

        return userListItem;
    }


function createUserImage(userImageSrc){
    const img = new Image();
        img.src = userImageSrc;
        img.alt = 'user profile image';
        return img;
}

function createFullName(firstName, lastName){
    // const div = document.createElement(firstName, lastName);
    // div.classList.add('userFullName');
    const userList = document.getElementById('userList');
    if(userList){
        userList.remove();
    }

    const newUserList = document.createElement('ul');
    newUserList.classList.add('userList');
    document.getElementById('root').prepend(newUserList);

}

function renderUsers(users){
    const userList = document.querySelector('.userList');
    if(userList){
        userList.remove();
    }
}
