interface userDataProps {
  email: string;
  password: string;
}

export async function login(userData: userDataProps, setIsLoading: any) {
  try {
    setIsLoading(true);
    const request = await fetch(
      "https://my-philosophy-backend.onrender.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const response = await request.json();
    if (response.token) localStorage.setItem("token", response.token);

    console.log(response);
    return { token: response.token };
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
}
