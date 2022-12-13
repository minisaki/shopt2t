import axiosClient from "./axiosClient";

const profileApi = {
  get(id) {
    const url = `profile/${id}`
    return axiosClient.get(url)
  },
  create() {
    const url = `profile/`
    return axiosClient.post(url)
  },
  update(data, id) {
    const url = `profile/${id}/`
    return axiosClient.put(url, data)
  }
}

export default profileApi;