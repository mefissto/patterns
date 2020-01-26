function getUsers() {
  return fetchData("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return fetchData("https://jsonplaceholder.typicode.com/users", {
    userId
  });
}

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});


// implementation the Facade pattern with fetch api

function fetchData(url, params = {}) {
  const query = Object.entries(params)
    .map(param => `${param[0]}=${param[1]}`)
    .join("&");

  return fetch(`${url}?${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());
}

// implementation the Facade pattern with axios api

// function fetchData(url, params = {}) {
//   return axios({
//     url,
//     method: "GET",
//     params
//   }).then(res => res.data);
// }
