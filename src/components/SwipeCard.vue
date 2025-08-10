<template>
  <div
    class="restaurant-card"
    @touchstart="startSwipe"
    @touchmove="swipeMove"
    @touchend="endSwipe"
    :style="{ transform: `translateX(${swipeX}px) rotate(${swipeX / 20}deg)` }"
  >
    <img :src="restaurant.image" alt="Restaurant" class="restaurant-image" />
    <div class="info">
      <h2>{{ restaurant.name }}</h2>
      <p>{{ restaurant.cuisine }} • {{ restaurant.distance }} km away</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SwipeCard",
  props: {
    restaurant: { type: Object, required: true },
  },
  emits: ["like", "pass"],
  setup(props, { emit }) {
    const swipeX = ref(0);
    const startX = ref(0);

    const startSwipe = (event: TouchEvent) => {
      startX.value = event.touches[0].clientX;
    };

    const swipeMove = (event: TouchEvent) => {
      swipeX.value = event.touches[0].clientX - startX.value;
    };

    const endSwipe = () => {
      if (swipeX.value > 100) {
        emit("like", props.restaurant);
      } else if (swipeX.value < -100) {
        emit("pass", props.restaurant);
      }
      swipeX.value = 0;
    };

    return { swipeX, startSwipe, swipeMove, endSwipe };
  },
});
</script>

<style scoped>
.restaurant-card {
  width: 90%;
  max-width: 400px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.restaurant-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.info {
  padding: 16px;
  text-align: center;
}

.info h2 {
  margin: 0;
  font-size: 20px;
}

.info p {
  color: #777;
  font-size: 14px;
  margin-top: 4px;
}
</style>
