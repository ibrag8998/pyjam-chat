<template>
  <div class="chat">
    <div class="messages">
      <Message v-for="message in messages" :key="message.id" :message="message" />
    </div>
  </div>
</template>

<script>
import Message from "@/components/chat/Message";

export default {
  components: { Message },
  data() {
    return {
      messages: [
        {
          id: 3,
          text: "Well!",
          sender: { id: 1, name: "John Doe" }
        },
        {
          id: 2,
          text: "Great!",
          sender: { id: 2, name: "Chat master" }
        },
        {
          id: 1,
          text: "How are you?",
          sender: { id: 1, name: "John Doe" }
        }
      ].reverse()
    };
  }
};
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.messages {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 10px;
}
</style>
