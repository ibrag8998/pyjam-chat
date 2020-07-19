<template>
  <nav class="panel is-primary">
    <p class="panel-heading">
      Chats
    </p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Search" />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <ChatPanelBlock :chat="chat" v-for="chat of allChats" :key="chat.id" />
  </nav>
</template>

<script>
import ChatPanelBlock from "@/components/chats/ChatPanelBlock"
import { mapGetters } from "vuex"

export default {
  components: { ChatPanelBlock },
  computed: { ...mapGetters(["allChats"]) },
}
</script>
