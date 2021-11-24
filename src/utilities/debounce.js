const cacher = (func) => {
  let debounceTimer;
  return () => {
    console.log(debounceTimer);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, 3000);
  };
};

const apiLogger = () => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=1`;
  console.log(url);
};

debouncing = cacher(apiLogger);

for (let i = 0; i < 10; i++) {
  debouncing();
}
