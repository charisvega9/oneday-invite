const WEDDING_CONFIG = {

  // ─── 신랑 신부 ───────────────────────────────────────────
  groom: {
    name: "목종성",
    englishName: "Groom",
    phone: "010-5345-7183",
    father: "목택균",
    mother: "함명숙",
    introduce: "",
    photo: "",          // 신랑 사진 경로 (예: "images/groom.jpg")
  },
  bride: {
    name: "이현이",
    englishName: "Bride",
    phone: "010-9345-9412",
    father: "이관병",
    mother: "한명회",
    introduce: "",
    photo: "",          // 신부 사진 경로 (예: "images/bride.jpg")
  },

  // ─── 날짜 ────────────────────────────────────────────────
  date: {
    year: 2026,
    month: 11,
    day: 21,
    dayOfWeek: "토요일",
    hour: 11,           // 24시간
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
    invitation: `함께 있을 때 가장 나다운 모습이 되고,\n함께 있을 때 미래를 꿈꾸게 하는 사람을 만나\n함께 맞는 11월의 어느 날, 결혼합니다.\n\n부부라는 이름으로 시작하는 뜻깊은 순간을\n소중한 걸음으로 축복해 주시면 감사하겠습니다.`,
  },

  // ─── 예식장 ──────────────────────────────────────────────
  venue: {
    name: "디노체컨벤션웨딩홀",
    hall: "",
    address: "",
    addressDetail: "",
    mapUrl: "",
    kakaoMapUrl: "",
    naverMapUrl: "https://naver.me/FQVXQCYl",
    parking: "",
    subway: "",
    bus: "",
  },

  // ─── RSVP ────────────────────────────────────────────────
  rsvp: {
    enabled: false,
    deadline: "2026년 11월 14일",
    formUrl: "",
    kakaoUrl: "",
  },

  // ─── 계좌 ────────────────────────────────────────────────
  // 순서: [신랑, 신부, 신랑아버지, 신부어머니]
  accounts: [
    { owner: "목종성", bank: "SC제일은행", number: "128-200-39463",   kakaoPayUrl: "" },
    { owner: "이현이", bank: "국민은행",   number: "580902-01-571115", kakaoPayUrl: "" },
    { owner: "목택균", bank: "신한은행",   number: "110-005-441406",   kakaoPayUrl: "" },
    { owner: "한명회", bank: "기업은행",   number: "",                 kakaoPayUrl: "" },
  ],

  // ─── BGM ─────────────────────────────────────────────────
  bgMusic: {
    enabled: true,
    src: "https://cdn2.bensound.com/bensound-music/bensound-romantic.mp3",
    title: "Romantic",
  },

  // ─── 클라우드 ─────────────────────────────────────────────
  cloudUrl: "https://script.google.com/macros/s/AKfycbyDklnloqFKVfcKsABfEZBOwmEjBtjovprCF36d3XEyqK_PSkiMHp-ZAbhF_G7sf7DE/exec",

  // ─── 테마 ────────────────────────────────────────────────
  theme: {
    primary:    "#9EC4D7",
    secondary:  "#DEF2FA",
    accent:     "#9EC4D7",
    text:       "#1A3545",
    background: "#F5FBFD",
  },
};
