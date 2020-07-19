<template>
  <div class="chats">
    <ChatCard v-for="chat of allChats" :key="chat.id" :chat="chat" />
  </div>
</template>

<script>
import ChatCard from "@/components/chats/ChatCard";
import { mapGetters } from "vuex";

export default {
  components: { ChatCard },
  computed: { ...mapGetters(["allChats"]) }
};
</script>