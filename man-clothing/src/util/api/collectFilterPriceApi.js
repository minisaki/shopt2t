import axiosClient from "./axiosClient";

const priceApi = {
  getAll(params) {
    const url = 'price/'
    return axiosClient.get(url, {params})
  }
}

export default priceApi;