import axiosClient from "./axiosClient";

const colorApi = {
  getAll(params) {
    const url = 'color/'
    return axiosClient.get(url, {params})
  }
}

export default colorApi;