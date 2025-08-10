<template>
  <div class="restaurant-card" @click="$emit('click')">
    <img :src="image" alt="Restaurant" class="thumbnail" />
    <div class="info">
      <h3>{{ name }}</h3>
      <p>{{ cuisine }} • {{ location }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RestaurantCard",
  props: {
    image: { type: String, required: true },
    name: { type: String, required: true },
    cuisine: { type: String, required: true },
    location: { type: String, required: true },
  },
});
</script>

<style scoped>
.restaurant-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.restaurant-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.restaurant-card:active {
  transform: scale(0.97);
}

.thumbnail {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 12px;
}

.info h3 {
  margin: 0;
  font-size: 16px;
}

.info p {
  margin: 2px 0 0;
  font-size: 14px;
  color: #666;
}
</style>
