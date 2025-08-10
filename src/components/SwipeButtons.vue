<template>
  <div class="buttons">
    <button class="pass" @click="$emit('pass')">❌ Pass</button>
    <button class="like" @click="$emit('like')">❤️ Like</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SwipeButtons",
  emits: ["like", "pass"],
});
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}

button {
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
}

.pass {
  background: #eee;
  color: #333;
}

.like {
  background: #ff4b5c;
  color: white;
}
</style>
