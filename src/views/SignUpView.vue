<template>
  <div>
    <div class="signup-content">
      <form @submit.prevent="submitForm" class="login-form">
        <input type="email" placeholder="Email" name="email" required v-model="email"><br><br>
        <input type="password" placeholder="Password" name="password" v-model="password" required><br><br>
        <button type="submit" id="login-button">Sign Up</button>
        <div v-if="!isPasswordValid" class="validation-message">{{ validationMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      email: '',
      password: '',
      isPasswordValid: true,
      validationMessage: '',
    };
  },
  methods: {
    submitForm() {


      // Password validation
      if (!this.validatePassword()) {
        this.isPasswordValid = false;
        return;
      }
      // Sign up logic
      this.signUp();
    },

    validatePassword() {
      const password = this.password;

      // Check the password is correct
      if (password.length < 8 || password.length >= 15) {
        this.validationMessage = 'Password must be between 8 and 15 characters.';
        return false;
      }

      if (!/[A-Z]/.test(password)) {
        this.validationMessage = 'Password must include at least one uppercase letter.';
        return false;
      }

      if ((password.match(/[a-z]/g) || []).length < 2) {
        this.validationMessage = 'Password must include at least two lowercase letters.';
        return false;
      }

      if (!/\d/.test(password)) {
        this.validationMessage = 'Password must include at least one numeric value.';
        return false;
      }

      if (!/^[A-Z]/.test(password)) {
        this.validationMessage = 'Password must start with an uppercase letter.';
        return false;
      }

      if (!/_/.test(password)) {
        this.validationMessage = 'Password must include the character "_".';
        return false;
      }

      this.validationMessage = 'Success';
      return true;
    },

    async signUp() {
  if (this.validatePassword()) {
    const data = {
      email: this.email,
      password: this.password
    };

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      // Check if the response status is not okay
      if (!response.ok) {
        if (response.headers.get('content-type')?.includes('application/json')) {
          // If the response is JSON, try to parse it
          const responseData = await response.json();
          console.error(responseData);

          // Check for specific error messages
          if (responseData.error && responseData.error.message) {
            this.validationMessage = responseData.error.message;
          } else {
            this.validationMessage = 'An error occurred during signup.';
          }
        } else {
          // If the response is not JSON, handle accordingly
          console.error('Non-JSON response:', response.statusText);
          this.validationMessage = 'An error occurred during signup.';
        }
        this.isPasswordValid = false;
        return;
      }

      console.log('Success:', await response.json());
      this.$router.push("/");
    } catch (error) {
      // Handle other errors (e.g., network error)
      console.error('Error during signup:', error);
      this.validationMessage = 'An error occurred during signup.';
      this.isPasswordValid = false;
    }
    }
  }
  }
};
</script>

<style scoped>
.signup-content {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.37);
  border-radius: 8px;
  background-color: #fff;
}

.login-form {
  display: flex;
  flex-direction: column;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

button {
  background-color: rgb(32, 248, 237);
  color: #000000;
  padding: 10px;
  border: none;
  font-weight: bold;
  font-size: large;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(22, 228, 217);
}

.validation-message {
  color: #e74c3c;
  margin-top: 10px;
  text-align: center;
}
</style>
