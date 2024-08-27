import axios from "axios";
import { PostDataProps } from "./types";

export async function postAPI(postData: PostDataProps) {
  const getTokenFromStorage = localStorage.getItem("token");

  console.log(postData);

  try {
    const request = await axios.post(
      "http://localhost:8181/post/create",
      postData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenFromStorage}`,
        },
      }
    );

    const response = await request.data;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function getAPI() {
  try {
    const request = await fetch("https://my-philosophy-backend.onrender.com/");

    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
