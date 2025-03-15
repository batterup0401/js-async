// callback-hell.js를 Promise 객체로 대체해보자

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
    workB(resA)
      .then((resB) => {
        console.log(`resB: ${resB}`);
        workC(resB)
          .then((resC) => {
            console.log(`resC: ${resC}`);
          })
          .catch((errorC) => {
            console.log(errorC);
          });
      })
      .catch((errorB) => {
        console.log(errorB);
      });
  })
  .catch((errorA) => {
    console.log(errorA);
  });
