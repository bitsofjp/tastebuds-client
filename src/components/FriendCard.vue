<template>
  <div class="friend-card">
    <img :src="avatar" alt="Friend Avatar" class="avatar" />
    <span class="name">{{ name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FriendCard",
  props: {
    name: { type: String, required: true },
    avatar: { type: String, required: true },
  },
});
</script>

<style scoped>
.friend-card {
  display: flex;
  align-items: center;
  padding: 10px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
}

.name {
  font-weight: 500;
  color: #333;
}
</style>
