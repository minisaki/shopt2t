import axiosClient from "./axiosClient";

const sizeApi = {
  getAll(params) {
    const url = 'size/'
    return axiosClient.get(url, {params})
  }
}

export default sizeApi;