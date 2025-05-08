const API_BASE_URL = "http://localhost:5000/auth";

// Login function
const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    // Store token in localStorage
    localStorage.setItem("authToken", data.token);

    return data;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

// Signup function
const signup = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Signup failed");
    }

    // Store token in localStorage
    localStorage.setItem("authToken", data.token);

    return data;
  } catch (error) {
    console.error("Signup Error:", error.message);
    throw error;
  }
};


const logout = () => {
  localStorage.removeItem("authToken");
};

export {
  login,
  signup,
  logout,
};
