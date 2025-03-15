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
    // await 키워드를 쓰더라도 비동기 작업들이 병렬로 실행
    // -> async1보다 훨씬 빠르게 작업을 완료
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};

start(); // 총 3초 걸림
