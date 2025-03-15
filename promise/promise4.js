//  Promise 객체 Promise 헬(?)을 해결해보자.
// -> Promise Chaining(프로미스 체이닝)

const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 1000);
  });

  return promise;
};

const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 2000);
  });

  return promise;
};

const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 2000);
  });

  return promise;
};

workA(10)
  .then((resA) => {
    console.log(`resA: ${resA}`);
    return workB(resA);
  })
  .then((resB) => {
    console.log(`resB: ${resB}`);
    return workC(resB);
  })
  .then((resC) => {
    console.log(`resC: ${resC}`);
  });
