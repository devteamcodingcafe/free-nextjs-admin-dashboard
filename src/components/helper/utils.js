export const getCurrentUser = () => {
    if (typeof window !== "undefined") {
        const user = localStorage.getItem("currentUser");
        return user ? JSON.parse(user) : null;
    }
    return null;
};
export const setCurrentUser = (user) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("currentUser", JSON.stringify(user));
    }
};
export const removeCurrentUser = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("currentUser");
    }
};
