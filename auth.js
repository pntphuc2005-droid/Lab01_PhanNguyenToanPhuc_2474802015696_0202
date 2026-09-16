function login(username, password) {
    // Kiểm tra dữ liệu rỗng
    if (!username || !password) {
        return false;
    }

    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Đăng nhập đúng
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = { login };
