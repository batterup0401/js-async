const workA = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("work A");
    }, 3000);
  });

  return promise;
};

const workB = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("work B");
    }, 3000);
  });

  return promise;
};

const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("work C");
    }, 3000);
  });

  return promise;
};

const start = async () => {
  try {
    // await said "해당 promise 객체의 state 필드가 성공/실패 확정날 때까지 기다려!"...
    let resultA = await workA(); // 3초 걸림
    let resultB = await workB(); // 3초 걸림
    let resultC = await workC(); // 3초 걸림

    // 다음의 코드는 한 번에 출력
    console.log(resultA);
    console.log(resultB);
    console.log(resultC);
  } catch (err) {
    console.log(err);
  }
};

start(); // 총 9초 걸림
