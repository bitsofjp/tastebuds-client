<template>
  <div class="menu-preview">
    <h2>Menu</h2>
    <div class="menu-list">
      <div v-for="(item, index) in menu" :key="index" class="menu-item">
        <img :src="item.image" :alt="item.name" class="menu-image" />
        <div>
          <p class="item-name">{{ item.name }}</p>
          <p class="item-price">{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuPreview",
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.menu-preview {
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin: 16px 0;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.menu-image {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.item-name {
  font-weight: 500;
}

.item-price {
  font-size: 14px;
  color: #777;
}
</style>
