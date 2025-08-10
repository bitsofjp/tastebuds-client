<template>
  <div class="restaurant-info">
    <p class="address">📍 {{ address }}</p>
    <p class="distance">🚶 {{ distance }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RestaurantInfo",
  props: {
    address: String,
    distance: String,
  },
});
</script>

<style scoped>
.restaurant-info {
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin: 16px 0;
  font-size: 14px;
}

.address,
.distance {
  margin: 4px 0;
  color: #333;
}
</style>
