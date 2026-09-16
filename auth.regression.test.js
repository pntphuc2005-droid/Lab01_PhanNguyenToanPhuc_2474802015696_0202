const { login } = require("./auth");

describe("Regression Test - Login", () => {
    test("Đăng nhập đúng", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Sai mật khẩu", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Username rỗng", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Password rỗng", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Mật khẩu chứa ký tự đặc biệt", () => {
        expect(login("admin", "123@")).toBe(false);
    });

    test("Tài khoản bị khóa", () => {
        expect(login("locked", "123")).toBe(false);
    });
});
