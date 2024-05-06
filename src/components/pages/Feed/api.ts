export async function getPosts(setPosts: any, setLoad: any) {
  try {
    setLoad(true);
    const request = await fetch(
      "https://my-philosophy-backend.onrender.com/getPosts"
    );
    const response = await request.json();
    console.log(request, response);
    setPosts(response?.allPosts);
  } catch (err) {
    console.log(err);
  } finally {
    setLoad(false);
  }
}
