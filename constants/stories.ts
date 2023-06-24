import { version } from "../package.json";

export const STORIES = [
  {
    key: "story-1",
    image: `/wedding-invitation/img/stories/story-date.jpg?v=${version}`,
    emoji: "🤝",
    title(lang: string) {
      return lang === "id" ? "Awal bertemu" : "First Meet";
    },
    description(lang: string) {
      return lang === "id"
        ? "Kami bertemu pertama kali di STMIK AKAKOM Yogyakarta di tahun 2016. Waktu itu kami sering bertemu di organisasi kampus. Meski begitu, cara berkenalan kami justru melalui media sosial dan saling bertukar pesan di Line."
        : "We first met at STMIK AKAKOM Yogyakarta in 2016. At that time we often met in campus organizations. Even so, our way of getting acquainted was actually through social media and exchanging messages on Line.";
    },
  },
  {
    key: "story-2",
    image: `/wedding-invitation/img/stories/story-jec.jpg?v=${version}`,
    emoji: "🥰",
    title(lang: string) {
      return lang === "id" ? "Pendekatan" : "Get to know each other";
    },
    description(lang: string) {
      return lang === "id"
        ? "Setelah makin mengenal satu sama lain, Tri mengungkapkan perasaannya kepada Siska di tahun 2017. Setelah beberapa waktu, Siska akhirnya menjawab perasaan Tri dan mereka resmi menjalin hubungan."
        : "After getting to know each other more, Tri confess his feelings to Siska in 2017. After a while, Siska finally answered and they officially started a relationship.";
    },
  },
  {
    key: "story-3",
    image: `/wedding-invitation/img/stories/story-kuliah.jpg?v=${version}`,
    emoji: "📖",
    title(lang: string) {
      return lang === "id" ? "Menyelesaikan Kuliah" : "Graduation";
    },
    description(lang: string) {
      return lang === "id"
        ? "Karena berada di angkatan yang sama, kami sama-sama berusaha menyelesaikan kuliah bersamaan supaya bisa mengejar mimpi bersama. Alhamdulillah, kami berhasil menyelesaikan kuliah di tahun 2018."
        : "Because we were in the same class, we both tried to graduate at the same time so that we could pursue our dreams together. Alhamdulillah, we both managed to graduate in 2018.";
    },
  },
  {
    key: "story-4",
    image: `/wedding-invitation/img/stories/story-subang.jpg?v=${version}`,
    emoji: "✈️",
    title(lang: string) {
      return lang === "id"
        ? "Hubungan Jarak Jauh"
        : "Long Distance Relationship";
    },
    description(lang: string) {
      return lang === "id"
        ? "Setelah menyelesaikan studi, Siska memutuskan untuk kembali ke kampung halamannya di Lampung dan kami menjalani hubungan jarak jauh selama 4 tahun di beberapa tempat yang berbeda. Meski begitu, kami sesekali bertemu di Yogyakarta, Subang, dan Jakarta."
        : "After finishing our studies, Siska decided to return to his hometown in Lampung and we had a long distance relationship for 4 years in several different places. Even so, we occasionally met in Yogyakarta, Subang, and Jakarta.";
    },
  },
  {
    key: "story-5",
    image: `/wedding-invitation/img/stories/story-lamaran.jpeg?v=${version}`,
    emoji: "💍",
    title(lang: string) {
      return lang === "id" ? "Memantapkan Hubungan" : "Engagement";
    },
    description(lang: string) {
      return lang === "id"
        ? "Kami menjaga hubungan jarak jauh kami antara Jakarta, Subang, Jogja, dan Lampung. Bulan Januari 2023 lalu kami telah melaksanakan Lamaran, dan sekarang kami siap untuk memulai hidup bersama sampai maut memisahkan. Amiinn 🙏"
        : "We maintain our long distance relationship between Jakarta, Subang, Jogja, and Lampung. Last January 2023 we have carried out the Engagement, and now we are ready to start a life together until death separates. Amiinn 🙏";
    },
  },
];
