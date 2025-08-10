<template>
  <button :class="['app-button', variant]" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
});
</script>

<style scoped>
.app-button {
  padding: 12px 24px;
  border: none;
  border-radius: 999px; /* pill shape */
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.25s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.primary {
  background: linear-gradient(135deg, #ffb347, #ffcc33);
  color: #2d2d2d;
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
}

.secondary {
  background: #f4f4f4;
  color: #333;
}

.secondary:hover {
  background: #e9e9e9;
  transform: translateY(-2px);
}
</style>
