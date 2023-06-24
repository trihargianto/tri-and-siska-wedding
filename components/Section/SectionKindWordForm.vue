<template>
  <div class="wordform">
    <form>
      <div class="wordform__form">
        <textarea
          v-model="message"
          :placeholder="t('placeholder')"
          class="wordform__textarea"
          @input="updateCharacterCount"
        />
        <small class="wordform__textarea-counter">
          {{ totalTypedCharacters }} / {{ maxCharacters }}
        </small>
      </div>

      <ts-button
        variant="primary"
        is-full-width
        :disabled="isSubmitting"
        @click="submitForm"
      >
        {{ isSubmitting ? t("sending") : t("send") }}
      </ts-button>
    </form>
  </div>
</template>

<i18n lang="json">
{
  "id": {
    "send": "Kirim",
    "sending": "Mengirim...",
    "placeholder": "Berikan kalimat baik versimu.."
  },
  "en": {
    "send": "Send",
    "sending": "Sending...",
    "placeholder": "Give your kind words.."
  }
}
</i18n>

<script lang="ts">
import { addNewGuestMessage } from "~/utils/api";

export default {
  data() {
    return {
      isSubmitting: false,
      message: "",
      maxCharacters: 145,
    };
  },

  props: {
    guestId: {
      type: Number,
      required: true,
    },
  },

  computed: {
    totalTypedCharacters() {
      return this.message.length;
    },
  },

  setup() {
    const { t } = useI18n();

    return { t };
  },

  methods: {
    updateCharacterCount() {
      if (this.message.length > this.maxCharacters) {
        this.message = this.message.substring(0, this.maxCharacters);
      }
    },

    async submitForm() {
      this.isSubmitting = true;

      await addNewGuestMessage({
        guestId: this.guestId,
        message: this.message,
      });

      this.isSubmitting = false;
      this.$emit("on-submit");
    },
  },
};
</script>

<style lang="scss" scoped>
.wordform {
  margin-top: 24px;

  &__form {
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 14px;
  }

  &__textarea {
    width: 100%;
    height: 134px;
    padding: 14px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 16px;
    line-height: 24px;
    color: #4a5568;
    resize: none;
    font-family: "Plus Jakarta Sans";

    &::placeholder {
      color: #a0aec0;
      font-family: "Plus Jakarta Sans";
    }
  }

  &__textarea-counter {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #a0aec0;
  }
}
</style>
