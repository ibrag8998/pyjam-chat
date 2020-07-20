<template>
  <div class="panel is-primary">
    <p class="panel-heading">Chats</p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Search" />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <ChatPanelBlock :chat="chat" v-for="chat of allChats" :key="chat" />
  </div>
</template>

<script>
import ChatPanelBlock from "@/components/chats/ChatPanelBlock";
import { mapGetters } from "vuex";

export default {
  components: { ChatPanelBlock },
  computed: { ...mapGetters(["allChats"]) }
};
</script>

<style lang="scss" scoped>
.panel {
  height: 100%;
}
</style>
