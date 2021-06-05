import axios from "axios";
//recieve for the random users
export default {
  getAll: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
