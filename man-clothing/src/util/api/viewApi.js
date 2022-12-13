import axiosClient from "./axiosClient";

const viewApi = {
  createView(data) {
    const url = 'view/'
    return axiosClient.post(url, data)
  }
}

export default viewApi;