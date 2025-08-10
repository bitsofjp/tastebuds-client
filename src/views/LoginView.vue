<template>
  <div class="login-container">
    <img src="@/assets/logo.png" alt="Tastebuds Logo" class="logo" />

    <p class="subtitle">Find restaurants you'll both love</p>

    <AppButton text="Continue with Google" @click="handleGoogleLogin" />
    <br />
    <AppButton
      text="Continue with Email"
      variant="secondary"
      @click="handleEmailLogin"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/AppButton.vue";

export default defineComponent({
  name: "LoginView",
  components: { AppButton },
  setup() {
    const handleGoogleLogin = () => {
      console.log("Google login clicked");
    };

    const handleEmailLogin = () => {
      console.log("Email login clicked");
    };

    return { handleGoogleLogin, handleEmailLogin };
  },
});
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  background: #fafafa; /* very light neutral */
  padding: 40px 20px;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #222;
}

.logo {
  width: 250px;
  transition: transform 0.25s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.title {
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.05em;
  color: #111;
}

.subtitle {
  font-size: 1rem;
  color: #555;
  max-width: 300px;
  line-height: 1.5;
  font-weight: 400;
}

/* Optional: subtle horizontal line below subtitle for elegance */
.subtitle::after {
  content: "";
  display: block;
  width: 40px;
  height: 2px;
  background-color: #ccc;
  margin: 16px auto 0;
  border-radius: 2px;
}
</style>
