const WEDDING_CONFIG = {

  // ─── 신랑 신부 ───────────────────────────────────────────
  groom: {
    name: "신랑이름",
    englishName: "Groom",
    phone: "010-0000-0000",
    father: "아버지 성함",
    mother: "어머니 성함",
    introduce: "",
    photo: "",          // 신랑 사진 경로 (예: "images/groom.jpg")
  },
  bride: {
    name: "신부이름",
    englishName: "Bride",
    phone: "010-0000-0000",
    father: "아버지 성함",
    mother: "어머니 성함",
    introduce: "",
    photo: "",          // 신부 사진 경로 (예: "images/bride.jpg")
  },

  // ─── 날짜 ────────────────────────────────────────────────
  date: {
    year: 2026,
    month: 1,
    day: 1,
    dayOfWeek: "토요일",
    hour: 12,           // 24시간
    minute: 0,
  },

  // ─── 사진 ────────────────────────────────────────────────
  mainPhoto: "",        // 예: "images/main.jpg"
  featuredPhoto: "",    // 예: "images/featured.jpg"
  photos: [
    // "images/photo1.jpg",
    // "images/photo2.jpg",
  ],

  // ─── 타임라인 (사용 안 함) ───────────────────────────────
  timeline: [],

  // ─── 인사말 ──────────────────────────────────────────────
  message: {
    greeting: "저희 두 사람이 사랑으로 하나 되는\n소중한 날을 함께해 주시면 감사하겠습니다.",
    invitation: "인사말을 입력해주세요.",
  },

  // ─── 예식장 ──────────────────────────────────────────────
  venue: {
    name: "웨딩홀 이름",
    hall: "",
    address: "",
    addressDetail: "",
    mapUrl: "",
    kakaoMapUrl: "",
    naverMapUrl: "",
    parking: "",
    subway: "",
    bus: "",
  },

  // ─── RSVP ────────────────────────────────────────────────
  rsvp: {
    enabled: false,
    deadline: "0000년 00월 00일",
    formUrl: "",
    kakaoUrl: "",
  },

  // ─── 계좌 ────────────────────────────────────────────────
  // 순서: [신랑, 신부, 신랑아버지, 신부어머니]
  accounts: [
    { owner: "신랑 이름", bank: "은행명", number: "000-0000-000000", kakaoPayUrl: "" },
    { owner: "신부 이름", bank: "은행명", number: "000-0000-000000", kakaoPayUrl: "" },
    { owner: "신랑 부", bank: "은행명", number: "000-0000-000000",   kakaoPayUrl: "" },
    { owner: "신부 부", bank: "은행명", number: "000-0000-000000",   kakaoPayUrl: "" },
  ],

  // ─── BGM ─────────────────────────────────────────────────
  bgMusic: {
    enabled: false,
    src: "",
    title: "",
  },

  // ─── 테마 ────────────────────────────────────────────────
  theme: {
    primary:    "#9EC4D7",
    secondary:  "#DEF2FA",
    accent:     "#9EC4D7",
    text:       "#1A3545",
    background: "#F5FBFD",
  },
};
