import axios from "axios";

const getData = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    }
    return { userId: 1, id: 1, title: "Dummy", completed: false };
  } catch (error) {
    return { userId: 1, id: 1, title: "Dummy", completed: false };
  }
};

export default getData;
