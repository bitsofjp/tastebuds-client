<template>
  <div class="friends-container">
    <header class="friends-header">
      <h1 class="title">Friends</h1>
      <AppButton text="Add Friend" variant="primary" @click="addFriend" />
    </header>

    <div class="friends-list">
      <FriendCard
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :avatar="friend.avatar"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import FriendCard from "@/components/FriendCard.vue";

export default defineComponent({
  name: "FriendsListView",
  components: { AppButton, FriendCard },
  setup() {
    const friends = ref([
      { id: 1, name: "Alice", avatar: "https://i.pravatar.cc/40?img=1" },
      { id: 2, name: "Bob", avatar: "https://i.pravatar.cc/40?img=2" },
      { id: 3, name: "Charlie", avatar: "https://i.pravatar.cc/40?img=3" },
    ]);

    const addFriend = () => {
      console.log("Add friend clicked");
      // TODO: show modal or navigate to add friend page
    };

    return { friends, addFriend };
  },
});
</script>

<style scoped>
.friends-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.logo {
  width: 80px;
  display: block;
  margin: 0 auto 20px;
}

.friends-list {
  margin-top: 20px;
}
</style>
