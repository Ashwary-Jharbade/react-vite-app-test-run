const serializeData = (data) => {
  const newData = JSON.stringify(data);
  return newData;
};

const setData = (key, data) => {
  if (!key || !data) {
    return;
  }
  const sData = serializeData(data);
  localStorage.setItem(key, sData);
};

export default setData;
