
function Logout() {
    localStorage.removeItem("token");
    window.location.href = " http://localhost:3000"
}

export default Logout;