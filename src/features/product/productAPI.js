import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchProducts() {
  //JSON Server is used as backend. Please start JSON sever first with command -- json-server db.json -p 8080
  return axios.get("http://localhost:8080/products");
}
