export async function postAPI(
  title: string,
  textOfEachParagraph: any,
  categories: any
) {
  const data = { title, textOfEachParagraph, categories };

  const getTokenFromStorage = localStorage.getItem("token");

  try {
    const request = await fetch(
      "https://my-philosophy-backend.onrender.com/createPost",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenFromStorage}`,
        },
        body: JSON.stringify(data),
      }
    );

    const response = await request.json();
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
