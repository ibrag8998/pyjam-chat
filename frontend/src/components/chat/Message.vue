<template>
  <div class="message-wrp" :class="{ my: isMy }">
    <div class="message">
      <p class="message-text">{{ message.text }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: { message: { type: Object, required: true } },
  computed: {
    ...mapGetters(["userId"]),
    isMy() {
      return this.userId === this.message.sender.id;
    }
  }
};
</script>

<style lang="scss" scoped>
.message-wrp {
  display: flex;
  justify-content: flex-start;

  .message {
    background-color: #eeeeee;
    padding: 3px 6px;
    border-radius: 3px;
  }

  &.my {
    justify-content: flex-end;

    .message {
      background-color: #ecffa8;
    }
  }
}
</style>