const fetchDatta = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => displyaData(json));
};

// const fetchData = async () => {
//     try{ const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok){
//         throw new Error(`Error status: ${response.status}`);
//     }
//     const data = await response.json();
//     displyaData(data);
// }catch (error){
//     console.log(error);
// }
// }

fetchDatta();

const displyaData = (data) => {
  console.log(data);
  // const container = document.querySelector("#blogContainer");

  // data.forEach((post) => {
  //   const postElement = document.createElement("div");
  //   postElement.innerHTML = `<h2>${post.id}</h2>
  //   <p>${post.title}</p> <p>${post.userName}</p> <p>${post.address}</p>`;
  //   container.appendChild(postElement);
  // });
};
