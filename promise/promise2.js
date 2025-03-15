const executor = (resolve, reject) => {
  console.log("executor start");

  setTimeout(() => {
    resolve("성공");
    reject("실패");
  }, 2000);

  console.log("executor end");
};

const promise = new Promise(executor);
console.log(promise); // resolve 혹은 reject 함수를 호출하지 못했으므로 promise 객체의 state 필드는 pending일 것이다.

/* 
then 메서드
- 성공 시 호출할 callback을 인자로 넘겨준다.
catch 메서드
- 실패 시 호출할 callback을 인자로 넘겨준다.
*/
promise
  .then((result) => {
    console.log(promise);
    console.log(result);
  })
  .catch((error) => {
    console.log(promise);
    console.log(error);
  });
