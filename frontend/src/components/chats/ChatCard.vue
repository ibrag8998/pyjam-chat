<template>
  <router-link :to="{ name: 'Chat', params: { id: chat.id } }">
    <div class="chat-card">
      <div class="title">{{ chat.title }}</div>
      <div class="chevron">&gt;</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: { chat: { type: Object, required: true } }
};
</script>

<style lang="scss" scoped>
.chat-card {
  width: 400px;
  height: 64px;
  box-shadow: 0 0 1px 0 rgba(127, 127, 127, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  overflow: hidden;

  .title {
    white-space: nowrap;
    font-size: 1.15rem;
    color: black;
  }
}
</style>