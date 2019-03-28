import axios from "axios";

const url = "https://api.giphy.com/v1/gifs/search?q=";
const apikey = "&api_key=dc6zaTOxFJmzC&limit=12";

export default {
  search: query => axios.get(url + query + apikey)
};