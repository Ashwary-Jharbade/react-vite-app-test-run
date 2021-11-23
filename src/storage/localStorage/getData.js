const getData = (key) => {
  if (!key) {
    return null;
  }
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, "0");
    return 0;
  }
  const deSerializeData = JSON.parse(data);
  return deSerializeData;
};

export default getData;
