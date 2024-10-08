import axios from "axios";

const API_URL = "http://localhost:3000/testResults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  console.log("resultData!!!!", resultData);
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  console.log("id@", id);
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, view) => {
  const response = await axios.patch(`${API_URL}/${id}`, { view });
  return response.data;
};
