import axios from "axios";

const USER_API_BASE_URL = "http://localhost:5050/api/v4/user/";

class UserService {
  saveUser(user) {
    return axios.post(USER_API_BASE_URL + "add", user);
  }

  getUsers() {
    return axios.get(USER_API_BASE_URL + "get");
  }

  getUserByEmail(email) {
    return axios.get(USER_API_BASE_URL + "get/"+ email);
  }

  deleteUser(id, user) {
    return axios.delete(USER_API_BASE_URL + "del/" + id, user);
  }

  updateUser(id, user) {
    return axios.put(USER_API_BASE_URL + "edit/" + id, user);
  }

  loginUserWithEmailAndPassword(user) {
    return axios.post(USER_API_BASE_URL + "login", user);
  }
}

export default new UserService();