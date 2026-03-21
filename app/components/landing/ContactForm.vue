<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const consent = ref(false);

const submitting = ref(false);
const sent = ref(false);

const onSubmit = async () => {
  if (sent.value || submitting.value) return;

  if (
    !name.value.trim() ||
    !email.value.trim() ||
    !message.value.trim() ||
    !consent.value
  )
    return;

  submitting.value = true;
  try {
    // Skeleton: sem neskôr doplníme reálne odosielanie (server route / e-mail / CRM).
    await new Promise((r) => setTimeout(r, 900));
    sent.value = true;
  } finally {
    submitting.value = false;
  }
};
</script>

<template>
  <form class="space-y-5" @submit.prevent="onSubmit">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <label class="block">
        <span class="text-sm font-semibold text-text/80">Meno</span>
        <input
          v-model="name"
          type="text"
          class="mt-2 w-full rounded-2xl border border-primary-light/25 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-light/60"
          placeholder="Vaše meno"
          autocomplete="name"
        />
      </label>

      <label class="block">
        <span class="text-sm font-semibold text-text/80">Email</span>
        <input
          v-model="email"
          type="email"
          class="mt-2 w-full rounded-2xl border border-primary-light/25 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-light/60"
          placeholder="vasa@email.sk"
          autocomplete="email"
        />
      </label>
    </div>

    <label class="block">
      <span class="text-sm font-semibold text-text/80">Správa</span>
      <textarea
        v-model="message"
        rows="5"
        class="mt-2 w-full rounded-2xl border border-primary-light/25 bg-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-light/60"
        placeholder="Napíšte nám, s čím by vám mohla pomôcť konzultácia."
      />
    </label>

    <label class="flex items-start gap-3">
      <input
        v-model="consent"
        type="checkbox"
        class="mt-1 w-5 h-5 rounded-xl border-primary-light/25 text-primary-dark focus:ring-primary-light/60"
      />
      <span class="text-sm text-text/70 leading-relaxed">
        Súhlasím so spracovaním údajov na účely odpovede na moju žiadosť (GDPR).
      </span>
    </label>

    <div class="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
      <BaseButton
        type="submit"
        variant="primary"
        size="lg"
        :disabled="submitting || sent"
      >
        {{
          sent ? "Odoslané" : submitting ? "Odosielam..." : "Kontaktovať nás"
        }}
      </BaseButton>
      <p v-if="sent" class="text-sm text-text/70 leading-relaxed">
        Ďakujeme. Keď nám správa dôjde, ozveme sa s návrhom ďalšieho postupu.
      </p>
    </div>
  </form>
</template>
