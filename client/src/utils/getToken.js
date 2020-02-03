export function getToken() {
  try {
    const token = localStorage.getItem("token");
    return JSON.parse(token);
  } catch (error) {
    console.log(error);
  }
}
