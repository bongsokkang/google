import axios from "axios";
const BASEURL = "https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=";
const APIKEY = "2UXG3S363VWNQWICGM";
// https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query );
  }
};
