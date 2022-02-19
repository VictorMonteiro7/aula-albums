import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
export const Api = {
  getApi: async (endpoint: string) => {
    try {
      const res = await axios.get(endpoint);
      return res;
    } catch (e: any) {
      throw new Error(e);
    }
  },
};
