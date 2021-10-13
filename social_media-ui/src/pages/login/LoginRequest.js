export const LoginRequest = async (email, password, setter) => {
    try {
      console.log("fetch invoked");
      const response = await fetch("http://localhost:8800/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
      setter(data);
      console.log(data.username);
      console.log(setter);
    } catch (error) {
      console.log(error);
    }
  };
