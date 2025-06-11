const API_BASE_URL =
  import.meta.env.PUBLIC_API_URL || "http://localhost:8000/api";

class ApiService {
  async get(endpoint: string, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  async post(endpoint, data, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  // Métodos específicos para tu aplicación
  async getProperties() {
    return this.get("/properties/");
  }

  async getClients() {
    return this.get("/clients/");
  }

  async getDashboardStats() {
    return this.get("/dashboard/stats/");
  }
}

export const apiService = new ApiService();
