import axios from "axios";

const PROVIDER_API_BASE_URL = "http://localhost:8080/api/v4/provider/";
const USER_API_BASE_URL = "http://localhost:8080/api/v4/user/";



class ProviderService {

  addProvider() {
    return axios.post(PROVIDER_API_BASE_URL + "addprovider")
  }

  getProvider() {
    return axios.get(PROVIDER_API_BASE_URL + "getprovider");
  }

  updateProvider(email, details, token) {
    return axios.put(PROVIDER_API_BASE_URL + "update/" + email, details, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  }
  getProviderByEmail(email, token) {
    return axios.get(PROVIDER_API_BASE_URL + "getprovider/" + email, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  }
  getProviderByCategoryAndLocation(category, location, token) {
    return axios.get(PROVIDER_API_BASE_URL + "getdetails/" + category + "/" + location, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
  }

}

export default new ProviderService();