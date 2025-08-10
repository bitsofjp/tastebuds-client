<template>
  <div class="restaurant-hero">
    <img :src="image" :alt="name" class="hero-image" />
    <div class="hero-overlay">
      <h1 class="name">{{ name }}</h1>
      <p class="cuisine">{{ cuisine }} • ⭐ {{ rating }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RestaurantHero",
  props: {
    image: String,
    name: String,
    cuisine: String,
    rating: Number,
  },
});
</script>

<style scoped>
.restaurant-hero {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 12px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  color: white;
}

.name {
  font-size: 20px;
  font-weight: bold;
}

.cuisine {
  font-size: 14px;
  opacity: 0.9;
}
</style>
