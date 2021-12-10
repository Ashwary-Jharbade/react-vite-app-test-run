const getData = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    if (!result.results.length) {
      return null;
    }
    return result;
  } catch (error) {
    return null;
  }
};

export default getData;
