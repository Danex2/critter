import decode from "jwt-decode";

export default function checkAuth() {
  try {
    const token = localStorage.getItem("token");
    const decoded = decode(JSON.parse(token));
    if (token === null) {
      return false;
    }
    if (decoded.exp < Date.now() / 1000) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}
