<template>
    <div>
      <div class="signup-content">
        <form @submit.prevent="submitForm">
          <input type="email" placeholder="Email" required><br><br>
          <input type="password" placeholder="Password" v-model="password" required><br><br>
          <button type="submit" id="login-button">Log In</button>
          <div v-if="!isPasswordValid">{{ validationMessage }}</div>
        </form> <br>
        <div id="forgot-password">
          <p>Forgot Password?</p>
        </div>
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
        password: '',
        isPasswordValid: true,
        validationMessage: '',
      };
    },
    methods: {
      submitForm() {
        // Perform password validation
        if (!this.validatePassword()) {
          this.isPasswordValid = false;
          return;
        }
  
        // Navigate to MainView.vue if the password is valid
        this.$router.push('/Main');
      },
  
      validatePassword() {
        const password = this.password;
  
        // Check the password against specified conditions
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
    },
  };
  </script>
  