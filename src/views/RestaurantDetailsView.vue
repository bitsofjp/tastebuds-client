<template>
  <div class="restaurant-details">
    <RestaurantHero
      :image="restaurant?.image"
      :name="restaurant?.name"
      :cuisine="restaurant?.cuisine"
      :rating="restaurant?.rating"
    />

    <RestaurantInfo
      :address="restaurant?.address"
      :distance="restaurant?.distance"
    />

    <ReviewsList :reviews="restaurant?.reviews" />

    <div class="action-buttons">
      <button @click="openMaps">Open in Google Maps</button>
      <button @click="orderNow">Order for Delivery</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import RestaurantHero from "@/components/RestaurantHero.vue";
import RestaurantInfo from "@/components/RestaurantInfo.vue";
import MenuPreview from "@/components/MenuPreview.vue";
import ReviewsList from "@/components/ReviewsList.vue";

export default defineComponent({
  name: "RestaurantDetailsView",
  // components: { RestaurantHero, RestaurantInfo, MenuPreview, ReviewsList },
  components: { RestaurantHero, RestaurantInfo, ReviewsList },

  setup() {
    const route = useRoute();
    const restaurant = ref<any>(null);

    onMounted(() => {
      restaurant.value = {
        id: route.params.id,
        name: "La Bella Cucina",
        cuisine: "Italian",
        rating: 4.7,
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5f/a6/53/caption.jpg?w=800&h=600&s=1",
        address: "123 Foodie Street, City",
        distance: "2.3 km",
        menu: [
          {
            name: "Margherita Pizza",
            price: "$12",
            image: "https://source.unsplash.com/200x200/?pizza",
          },
          {
            name: "Pasta Carbonara",
            price: "$14",
            image: "https://source.unsplash.com/200x200/?pasta",
          },
        ],
        reviews: [
          { author: "Jane", text: "Amazing food and atmosphere!", rating: 5 },
          { author: "Mark", text: "Pasta was perfect.", rating: 4.5 },
        ],
      };
    });

    const openMaps = () => {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          restaurant.value.address
        )}`,
        "_blank"
      );
    };

    const orderNow = () => {
      window.open("https://www.ubereats.com/", "_blank");
    };

    return { restaurant, openMaps, orderNow };
  },
});
</script>

<style scoped>
.action-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}
button {
  background: #ff6b6b;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #e55a5a;
}
</style>
