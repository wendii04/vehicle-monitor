const BASE_URL = "https://demo4.traccar.org/api";

export async function loginTraccar() {
  const response = await fetch(
    `${BASE_URL}/session`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: "wendipuello@gmail.com",
        password: "987654321",
      }),
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response;
}

export async function getDevices() {
  const response = await fetch(
    `${BASE_URL}/devices`,
    {
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch devices"
    );
  }

  return response.json();
}