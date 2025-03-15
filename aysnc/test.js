const executor = (resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 2000);
};

const asyncFunc = async () => {
  const promise = new Promise(executor);
  const res = await promise;
  console.log(res); // 이 때의 res는 promise 객체의 result 필드를 가리킴
  return res;
};

const res = asyncFunc();
console.log(res); // 이 때의 res는 promise 객체를 가리킴

console.log("Hello in final");
