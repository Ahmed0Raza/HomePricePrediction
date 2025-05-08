const API_BASE_URL = "http://localhost:5000/model";

const predictHousePrice = async (houseDetails) => {
  try {

    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      throw new Error("Authentication token is missing");
    }

    const response = await fetch(`${API_BASE_URL}/predictHousePrice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${authToken}`, 
      },
      body: JSON.stringify(houseDetails), 
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Prediction failed");
    }

    return data; 
  } catch (error) {
    console.error("Prediction Error:", error.message);
    throw error;
  }
};

export { predictHousePrice };
