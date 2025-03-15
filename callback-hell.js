const workA = (value, callback) => {
  setTimeout(() => {
    callback(value + 5);
  }, 1000);
};

const workB = (value, callback) => {
  setTimeout(() => {
    callback(value - 3);
  }, 2000);
};

const workC = (value, callback) => {
  setTimeout(() => {
    callback(value + 10);
  }, 3000);
};

workA(10, (resA) => {
  console.log(`resA: ${resA}`);
  workB(resA, (resB) => {
    console.log(`resB: ${resB}`);
    workC(resB, (resC) => {
      console.log(`resC: ${resC}`);
    });
  });
});
