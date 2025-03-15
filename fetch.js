// let response = fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
// response
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getComment = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );

    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getComment();
