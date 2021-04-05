const axios = require('axios');


const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`;
const USERS_URL = `https://jsonplaceholder.typicode.com/users`;

function combinePostsUsers(posts, users) {
    
    const combinedData = posts.map(post => {
        const user = users.filter(user => user.id === post.userId)[0];

        return {
            ...post,
            user: {...user}
        };
    });

    // print combinedData
    console.log(combinedData)
}

Promise.all([axios.get(POSTS_URL), axios.get(USERS_URL)])
    .then(function (results) {
        const postsData = results[0].data;
        const usersData = results[1].data;

       combinePostsUsers(postsData, usersData);
    }).catch(err => console.log(err));