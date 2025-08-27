export const auth = {
    login: async (id: string, pw: string) => {
      // TODO: 실제 API 연동
      if (id && pw) {
        const token = "demo-token";
        localStorage.setItem("accessToken", token);
        return token;
      }
      throw new Error("Invalid credentials");
    },
    logout: () => {
      localStorage.removeItem("accessToken");
      location.href = "/login";
    },
    token: () => localStorage.getItem("accessToken"),
  };
  