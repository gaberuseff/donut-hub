export function getUserFromLocalStorage() {
    const user = JSON.parse(localStorage.getItem("username"));

    return user
}

export function deleteUserFromLocalStorage() {
    localStorage.removeItem("username");
}