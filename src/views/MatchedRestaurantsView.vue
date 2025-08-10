<template>
  <div class="matches-container">
    <header class="matches-header">
      <img src="@/assets/logo.png" alt="Tastebuds Logo" class="logo" />
      <h2>Matched with {{ friendName }}</h2>
    </header>

    <div v-if="matches.length" class="restaurant-list">
      <RestaurantCard
        v-for="restaurant in matches"
        :key="restaurant.id"
        :image="restaurant.image"
        :name="restaurant.name"
        :cuisine="restaurant.cuisine"
        :location="restaurant.location"
        @click="goToRestaurant(restaurant.id)"
      />
    </div>

    <div v-else class="empty-state">
      <p>No matches yet. Keep swiping!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import RestaurantCard from "@/components/RestaurantCard.vue";

export default defineComponent({
  name: "MatchedRestaurantsView",
  components: { RestaurantCard },
  setup() {
    // const route = useRoute();
    // const friendId = route.params.friendId;

    const friendName = "Sarah"; // TODO: fetch from backend
    const matches = ref([
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

    const goToRestaurant = (id: number) => {
      console.log("Go to restaurant", id);
      // TODO: navigate to restaurant details
    };

    return { friendName, matches, goToRestaurant };
  },
});
</script>

<style scoped>
.matches-container {
  padding: 20px;
  background: #fafafa;
  min-height: 100vh;
}

.matches-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo {
  width: 40px;
  height: 40px;
}

.restaurant-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.empty-state {
  text-align: center;
  margin-top: 50px;
  color: #999;
}
</style>
