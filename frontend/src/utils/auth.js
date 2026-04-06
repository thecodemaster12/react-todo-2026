export function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

export function isAuthenticated() {
    return !!localStorage.getItem("user")
}

export function logout() {
    localStorage.removeItem("user")
}