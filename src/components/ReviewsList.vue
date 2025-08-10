<template>
  <div class="reviews-list">
    <h2>Reviews</h2>
    <div v-for="(review, index) in reviews" :key="index" class="review-card">
      <p class="author">👤 {{ review.author }}</p>
      <p class="text">{{ review.text }}</p>
      <p class="rating">⭐ {{ review.rating }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReviewsList",
  props: {
    reviews: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.reviews-list {
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin: 16px 0;
}

.review-card {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.review-card:last-child {
  border-bottom: none;
}

.author {
  font-weight: bold;
  margin-bottom: 4px;
}

.text {
  font-size: 14px;
  margin-bottom: 4px;
}

.rating {
  color: #ff9800;
}
</style>
