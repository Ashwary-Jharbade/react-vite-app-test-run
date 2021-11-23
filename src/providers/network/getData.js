const getData = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return {};
  }
};

export default getData;
