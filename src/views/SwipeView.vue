<template>
  <div class="swipe-container">
    <SwipeCard
      v-if="restaurants.length"
      :restaurant="restaurants[0]"
      @like="handleLike"
      @pass="handlePass"
    />
    <SwipeButtons
      v-if="restaurants.length"
      @like="handleLike"
      @pass="handlePass"
    />
    <div v-else class="empty-state">
      <p>No more restaurants nearby!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SwipeCard from "@/components/SwipeCard.vue";
import SwipeButtons from "@/components/SwipeButtons.vue";

export default defineComponent({
  name: "SwipeView",
  components: { SwipeCard, SwipeButtons },
  setup() {
    const restaurants = ref([
      {
        id: 1,
        name: "The Alley",
        cuisine: "Asian",
        location: "2 km away",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/db/14/17/picturesque-interior.jpg?w=800&h=800&s=1",
      },
      {
        id: 2,
        name: "Raging Bull",
        cuisine: "American",
        location: "3 km away",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/63/21/74/beef-up-your-dining-experience.jpg?w=800&h=800&s=1",
      },
      {
        id: 2,
        name: "Watami",
        cuisine: "Japanese",
        location: "3 km away",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/a7/ac/99/caption.jpg?w=800&h=-1&s=1",
      },
    ]);

    const handleLike = (restaurant: any) => {
      console.log("Liked:", restaurant.name);
      restaurants.value.shift();
    };

    const handlePass = (restaurant: any) => {
      console.log("Passed:", restaurant.name);
      restaurants.value.shift();
    };

    return { restaurants, handleLike, handlePass };
  },
});
</script>

<style scoped>
.swipe-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #fafafa;
  padding-top: 40px;
}

.empty-state {
  color: #aaa;
  margin-top: 100px;
}
</style>
