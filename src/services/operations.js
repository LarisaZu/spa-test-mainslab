const BASE_URL = "https://httpbin.org";

export async function getApi() {

  try {
    const response = await fetch(`${BASE_URL}/get`);

    if (!response.ok) {
      throw new Error("Error fetching data");
    } else {
      return response.text();
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function postApi(data) {
  try {
    const response = await fetch(`${BASE_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error fetching data");
    } else {
      return response.text();
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function deleteApi(data) {
  try {
    const response = await fetch(`${BASE_URL}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: data.id }),
    });
    if (!response.ok) {
      throw new Error("Error fetching data");
    } else {
      return response.text();
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function imagesApi(params) {
  const requests = await params.map((param) =>
    fetch(`${BASE_URL}/image/${param}`)
  );
  const result = await Promise.all(requests);
  return result.map((el) => el.url);
}

