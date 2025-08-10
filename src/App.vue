<template>
  <div id="app">
    <header class="app-header">
      <img src="@/assets/logo.png" alt="Tastebuds Logo" class="logo" />
      <nav class="nav-links">
        <router-link to="/friends">Friends</router-link>
        <router-link to="/swipe">Swipe</router-link>
        <button class="logout-btn" @click="handleLogout">Logout</button>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const handleLogout = () => {
      console.log("Logging out...");
      // TODO: clear auth data & redirect to login
    };

    return { handleLogout };
  },
});
</script>

<style scoped>
#app {
  font-family: "Inter", Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.logo {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  font-weight: 500;
  color: #555;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #ff6b6b;
}

.nav-links .router-link-exact-active {
  color: #ff6b6b;
}

.logout-btn {
  background: #ff6b6b;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;
}

.logout-btn:hover {
  background: #e55a5a;
}
</style>
