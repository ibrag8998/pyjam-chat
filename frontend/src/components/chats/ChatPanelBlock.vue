<template>
  <router-link
    class="panel-block"
    :to="{ name: 'Chat', params: { id: chat.id } }"
  >
    <span class="panel-icon">
      <i class="far fa-user"></i>
    </span>
    <div class="chat-title">{{ chat.with }}</div>
  </router-link>
</template>

<script>
export default {
  props: { chat: { type: Object, required: true } },
}
</script>
