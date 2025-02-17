<template>
  <div class="event">
    <ts-section :title="t('events')" flower-variant="flower-1">
      <div class="event__item" v-for="event in events" :key="event.name">
        <h3 class="text--heading-3">{{ event.name }}</h3>

        <div style="text-align: center">
          <p class="event__date">{{ event.date }}</p>
          <p style="color: #454545">
            {{ event.time }} <br />
            {{ event.shortAddress }}
          </p>

          <p class="text--body">{{ event.description }}</p>

          <template v-if="event.isCountdownVisible">
            <div class="event__timer-wrapper">
              <div class="event__timer">
                <p class="event__timer-time">{{ daysLeft }}</p>
                <small class="event__timer-unit">{{ t("days") }}</small>
              </div>
              <div class="event__timer">
                <p class="event__timer-time">{{ hoursLeft }}</p>
                <small class="event__timer-unit">{{ t("hours") }}</small>
              </div>
              <div class="event__timer">
                <p class="event__timer-time">{{ minutesLeft }}</p>
                <small class="event__timer-unit">{{ t("minutes") }}</small>
              </div>
              <div class="event__timer">
                <p class="event__timer-time">{{ secondsLeft }}</p>
                <small class="event__timer-unit">{{ t("seconds") }}</small>
              </div>
            </div>

            <p>{{ t("timeLeft") }}</p>
          </template>

          <ts-button
            v-if="event.isSaveDateButtonVisible"
            variant="primary"
            @click="saveToMyCalendar"
            style="margin-top: 12px"
          >
            <client-only>
              <font-awesome-icon icon="fa-solid fa-location-arrow" />
            </client-only>

            {{ t("saveTheDate") }}
          </ts-button>
        </div>
      </div>
    </ts-section>
  </div>
</template>

<i18n lang="json">
{
  "id": {
    "events": "Acara 🗓️",
    "saveTheDate": "Simpan tanggal",
    "timeLeft": "lagi waktu tersisa sampai acara dimulai",
    "days": "hari",
    "hours": "jam",
    "minutes": "menit",
    "seconds": "detik"
  },
  "en": {
    "events": "Events 🗓️",
    "saveTheDate": "Save the date",
    "timeLeft": "left until the event starts",
    "days": "days",
    "hours": "hours",
    "minutes": "minutes",
    "seconds": "seconds"
  }
}
</i18n>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "TsEvent",

  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      daysLeft: 0,
      hoursLeft: 0,
      minutesLeft: 0,
      secondsLeft: 0,
      countdownDate: new Date("2023-07-30").getTime(),
      intervalID: null,
    };
  },

  setup() {
    const { t } = useI18n();

    return { t };
  },

  mounted() {
    this.updateCountdown();

    this.intervalID = setInterval(this.updateCountdown, 1000);
  },

  computed: {
    selectedLocale() {
      return this.$i18n.locale;
    },

    events() {
      if (this.selectedLocale === "id") {
        return [
          {
            name: "Akad Nikah",
            date: "08 Juli 2023",
            time: "Saturday, 10.00 AM - 12.00 PM",
            shortAddress: "Peniangan, Lampung Timur",
            description: "",
            isCountdownVisible: false,
            isSaveDateButtonVisible: false,
          },
          {
            name: "Tasyakuran",
            date: "30 Juli 2023",
            time: "Minggu, 10.00 AM - Selesai",
            shortAddress: "Gunungkidul, D.I.Yogyakarta",
            description:
              "Kami dengan penuh rasa syukur akan mengikat janji suci pernikahan kami. Mohon doa restu dari Anda agar langkah kami dalam membina rumah tangga ini senantiasa diberkahi oleh Allah SWT",
            isCountdownVisible: true,
            isSaveDateButtonVisible: true,
          },
        ];
      }

      return [
        {
          name: "Akad Nikah",
          date: "08 July 2023",
          time: "Saturday, 10.00 AM - 12.00 PM",
          shortAddress: "Peniangan, East Lampung",
          description: "",
          isCountdownVisible: false,
          isSaveDateButtonVisible: false,
        },
        {
          name: "Tasyakuran",
          date: "30 July 2023",
          time: "Sunday, 10.00 AM - Selesai",
          shortAddress: "Gunungkidul, D.I.Yogyakarta",
          description:
            "We are grateful to be able to bind our sacred marriage vows. We ask for your prayers and blessings so that our steps in building this household will always be blessed by Allah SWT",
          isCountdownVisible: true,
          isSaveDateButtonVisible: true,
        },
      ];
    },
  },

  beforeDestroy() {
    clearInterval(this.intervalID);
  },

  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;

      this.daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));

      this.hoursLeft = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      this.minutesLeft = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      this.secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
    },

    saveToMyCalendar() {
      const event = {
        title: "Tasyakuran Tri & Siska",
        start: new Date("2023-07-30T10:00:00"),
        end: new Date("2023-07-30T16:00:00"),
        location:
          "Nitikan Timur, Semanu, Kec. Semanu, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta, Indonesia",
        description:
          "Visit the invitation here https://tri-and-siska.viding.co",
      };

      const startDate = event.start.toISOString().replace(/-|:|\.\d+/g, "");
      const endDate = event.end.toISOString().replace(/-|:|\.\d+/g, "");

      const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        event.title
      )}&dates=${startDate}/${endDate}&location=${encodeURIComponent(
        event.location
      )}&details=${encodeURIComponent(event.description)}`;

      window.open(googleCalendarLink, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.event {
  &__title {
    margin: 0;
    margin-bottom: 32px;
  }

  &__item {
    margin-bottom: 42px;
  }

  &__date {
    margin: 0;
    margin-bottom: 8px;
    font-size: 28px;
  }

  &__timer-wrapper {
    display: flex;
    justify-content: center;
  }

  &__timer {
    border-right: 1px solid #ecebea;
    padding-right: 22px;
    padding-left: 22px;

    &:last-child {
      border-right: 0;
    }
  }

  &__timer-time {
    font-size: 26px;
    font-weight: 700;
    color: var(--color-primary);
    margin: 0;
  }
}
</style>
