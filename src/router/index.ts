import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import FriendsListView from "@/views/FriendsListView.vue";
import MatchedRestaurantsView from "@/views/MatchedRestaurantsView.vue";
import SwipeView from "@/views/SwipeView.vue";
import RestaurantDetailsView from "@/views/RestaurantDetailsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/friends",
    name: "FriendsList",
    component: FriendsListView,
  },
  {
    path: "/matches/:friendId",
    name: "MatchedRestaurants",
    component: MatchedRestaurantsView,
  },
  {
    path: "/swipe",
    name: "Swipe",
    component: SwipeView,
  },
  {
    path: "/restaurant/:id",
    name: "RestaurantDetails",
    component: RestaurantDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
