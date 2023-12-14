export default {
    async signUp(email, password) {
      const data = { email, password };
  
      try {
        const response = await fetch("http://localhost:3000/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          const responseData = await response.json();
  
          if (responseData.error && responseData.error.message) {
            // If the response is JSON and contains an error message
            return { success: false, message: responseData.error.message };
          } else {
            // If the response is JSON but doesn't contain a specific error message
            return { success: false, message: 'An error occurred during signup.' };
          }
        }
  
        console.log('Success:', await response.json());
        return { success: true, message: 'Signup successful.' };
      } catch (error) {
        // Handle other errors (e.g., network error)
        console.error('Error during signup:', error);
        return { success: false, message: 'An error occurred during signup.' };
      }
    },
  };
  