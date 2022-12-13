import axiosClient from "./axiosClient";

const promotionApi = {
  getAll(params) {
    const url = 'promotion/'
    return axiosClient.get(url, {params})
  }
}

export default promotionApi;