import type { AgeBandId } from "./ages";

export type WordCategory = {
  title: string;
  emoji: string;
  words: string[];
  when: string[];
};

export type LatihanSheet = {
  band: AgeBandId;
  intro: string;
  categories: WordCategory[];
  tips: string[];
  manfaat: string[];
  closing: string;
};

export const latihanSheets: Record<AgeBandId, LatihanSheet> = {
  "0-3": {
    band: "0-3",
    intro:
      "Gunakan kata-kata sederhana saat berinteraksi dengan Si Kecil setiap hari. Ulangi dengan suara lembut dan penuh cinta. Ini membantu perkembangan bahasa dan kedekatan emosional.",
    categories: [
      {
        title: "Sapaan & Sentuhan",
        emoji: "🙂",
        words: ["hai", "sayang", "nak", "dear"],
        when: ["Saat menyapa, menatap, atau menyentuh Si Kecil."],
      },
      {
        title: "Kasih Sayang",
        emoji: "💚",
        words: ["cinta", "sayang", "kesayangan"],
        when: ["Saat memeluk, menggendong, atau menenangkan Si Kecil."],
      },
      {
        title: "Kebutuhan",
        emoji: "🍼",
        words: ["susu", "minum", "makan", "popok", "tidur"],
        when: ["Saat memberi makan, mengganti popok, atau saat tidur."],
      },
      {
        title: "Suara & Bunyi",
        emoji: "🎵",
        words: ["kring", "tok", "duh", "wee", "aah", "ohh"],
        when: ["Saat bermain, menggoyang mainan, atau saat Si Kecil mengeluarkan suara."],
      },
      {
        title: "Kegiatan Sehari-hari",
        emoji: "🌸",
        words: ["mandi", "bersih", "ganti", "main", "jalan-jalan"],
        when: ["Saat melakukan rutinitas harian bersama Si Kecil."],
      },
      {
        title: "Waktu Istirahat",
        emoji: "🌙",
        words: ["tidur", "ngantuk", "istirahat", "selamat malam"],
        when: ["Saat menjelang tidur siang atau tidur malam."],
      },
    ],
    tips: [
      "Bicaralah dengan suara lembut, jelas, dan penuh ekspresi.",
      "Ulangi kata-kata sederhana secara rutin setiap hari.",
      "Tanggapi respons Si Kecil (tatapan, suara, gerakan) dan balas dengan senyuman.",
      "Kontak mata, sentuhan lembut, dan senyuman membuat Si Kecil merasa aman.",
    ],
    manfaat: [
      "Membantu Si Kecil mengenal suara dan arti kata.",
      "Meningkatkan ikatan emosional dengan orang tua.",
      "Menjadi dasar penting untuk perkembangan bahasa.",
    ],
    closing:
      "Setiap kata yang Anda ucapkan adalah hadiah berharga untuk perkembangan bahasa dan kecerdasan Si Kecil. Terus ajak berbicara dengan cinta!",
  },
  "3-6": {
    band: "3-6",
    intro:
      "Gunakan kata-kata sederhana dan berulang saat berinteraksi dengan Si Kecil setiap hari. Latihan ini membantu memahami suara, arti kata, dan membangun komunikasi awal.",
    categories: [
      {
        title: "Orang Terdekat",
        emoji: "🙂",
        words: ["ibu", "ayah", "kakak", "nenek", "kakek"],
        when: ["Saat mengenalkan anggota keluarga.", "Saat berinteraksi bersama."],
      },
      {
        title: "Bagian Tubuh",
        emoji: "✋",
        words: ["mata", "hidung", "mulut", "tangan", "kaki", "telinga", "perut"],
        when: ["Saat menyebut dan menunjuk bagian tubuh Si Kecil atau tubuh Anda."],
      },
      {
        title: "Benda di Sekitar",
        emoji: "🧊",
        words: ["bola", "buku", "boneka", "sendok", "botol", "piring", "selimut"],
        when: ["Saat mengenalkan benda yang sering dilihat dan digunakan."],
      },
      {
        title: "Suara & Bunyi",
        emoji: "🎵",
        words: ["tok", "duk", "kring", "bee", "miau", "woof", "brum"],
        when: ["Saat menirukan suara benda, binatang, atau suara sehari-hari."],
      },
      {
        title: "Kegiatan Sehari-hari",
        emoji: "🌸",
        words: ["mandi", "makan", "minum", "tidur", "main", "jalan", "pakaian"],
        when: ["Saat melakukan rutinitas harian bersama Si Kecil."],
      },
      {
        title: "Perasaan",
        emoji: "❤️",
        words: ["senang", "suka", "lapar", "ngantuk", "sedih", "takut", "terkejut"],
        when: ["Saat menyebut dan menanggapi perasaan Si Kecil."],
      },
    ],
    tips: [
      "Ucapkan kata dengan jelas, lembut, dan penuh ekspresi.",
      "Ulangi kata secara rutin agar Si Kecil lebih mudah mengenali.",
      "Gunakan kontak mata dan senyuman saat berbicara.",
      "Berikan jeda setelah berbicara untuk memberi kesempatan Si Kecil merespons.",
      "Bacakan buku bergambar dan sebutkan nama benda di dalamnya.",
    ],
    manfaat: [
      "Membantu Si Kecil mengenal suara dan arti kata.",
      "Meningkatkan kemampuan memahami dan berkomunikasi.",
      "Merangsang perkembangan otak dan kosakata awal.",
      "Membangun ikatan emosional yang kuat dengan orang tua.",
      "Menjadi dasar penting untuk perkembangan bahasa.",
    ],
    closing:
      "Konsistensi dan kasih sayang Anda adalah kunci utama perkembangan bahasa Si Kecil.",
  },
  "6-9": {
    band: "6-9",
    intro:
      "Si Kecil mulai mengoceh dan merespons namanya. Sebutkan kata sederhana dengan jelas, ulangi setiap hari, dan tirukan ocehannya agar terjadi komunikasi dua arah.",
    categories: [
      {
        title: "Keluarga & Sapaan",
        emoji: "🙂",
        words: ["mama", "papa", "hai", "dadah"],
        when: ["Saat memanggil dan berpamitan."],
      },
      {
        title: "Suara & Suku Kata",
        emoji: "🎵",
        words: ["ma-ma", "ba-ba", "da-da", "pa-pa"],
        when: ["Saat menirukan ocehan Si Kecil."],
      },
      {
        title: "Makan & Minum",
        emoji: "🍼",
        words: ["makan", "minum", "susu", "enak"],
        when: ["Saat waktu makan atau minum."],
      },
      {
        title: "Benda di Sekitar",
        emoji: "🧊",
        words: ["bola", "buku", "boneka", "sendok"],
        when: ["Tunjuk bendanya sambil menyebut namanya."],
      },
      {
        title: "Rutinitas Harian",
        emoji: "🌸",
        words: ["mandi", "tidur", "main", "duduk"],
        when: ["Ulangi saat kegiatan harian."],
      },
      {
        title: "Bernyanyi & Bermain",
        emoji: "🎶",
        words: ["nyanyi", "tepuk", "ciluk-ba"],
        when: ["Gunakan lagu sederhana dan permainan ciluk-ba."],
      },
    ],
    tips: [
      "Panggil nama Si Kecil dengan jelas dari berbagai arah.",
      "Tirukan ocehan Si Kecil agar terjadi komunikasi dua arah.",
      "Ucapkan kata dengan jelas dan perlahan.",
      "Puji Si Kecil saat mencoba bersuara atau meniru.",
      "Bacakan buku bergambar dan bernyanyi bersama.",
    ],
    manfaat: [
      "Melatih respons terhadap suara dan nama sendiri.",
      "Memperkaya kosakata awal.",
      "Meningkatkan interaksi dengan orang tua.",
      "Mendukung perkembangan bahasa.",
    ],
    closing: "Terus dampingi dan beri stimulasi setiap hari. Si Kecil pasti bisa!",
  },
  "9-12": {
    band: "9-12",
    intro:
      "Pada usia 9–12 bulan, Si Kecil mulai menirukan bunyi yang didengar, mengucapkan suku kata berulang, dan merespons suara lembut. Yuk, ulangi kata sederhana yang bermakna setiap hari dengan jelas dan perlahan!",
    categories: [
      {
        title: "Keluarga & Sapaan",
        emoji: "🙂",
        words: ["mama", "papa", "dadah"],
        when: ["Gunakan saat memanggil dan berpamitan."],
      },
      {
        title: "Makan & Minum",
        emoji: "🍼",
        words: ["makan", "susu", "kue"],
        when: ["Sebutkan saat waktu makan atau minum."],
      },
      {
        title: "Rutinitas Harian",
        emoji: "🌸",
        words: ["mandi", "tidur"],
        when: ["Ulangi saat kegiatan harian."],
      },
      {
        title: "Benda di Sekitar",
        emoji: "🧊",
        words: ["bola", "boneka", "buku"],
        when: ["Tunjuk bendanya sambil menyebut namanya."],
      },
      {
        title: "Suara & Suku Kata",
        emoji: "🎵",
        words: ["ma-ma", "pa-pa", "ba-ba", "da-da"],
        when: ["Latih tiruan bunyi yang didengar."],
      },
      {
        title: "Bernyanyi & Boneka",
        emoji: "🎶",
        words: ["nyanyi", "halo", "dadah"],
        when: ["Gunakan boneka dan lagu sederhana."],
      },
    ],
    tips: [
      "Ucapkan kata dengan jelas dan perlahan.",
      "Ulangi kata yang sama beberapa kali.",
      "Tirukan ocehan Si Kecil agar terjadi komunikasi dua arah.",
      "Puji Si Kecil saat mencoba meniru kata.",
      "Bacakan buku bergambar dan bernyanyi bersama.",
    ],
    manfaat: [
      "Memperkaya kosakata awal.",
      "Melatih respons terhadap suara.",
      "Meningkatkan interaksi dengan orang tua.",
      "Mendukung perkembangan bahasa.",
    ],
    closing: "Terus dampingi dan beri stimulasi setiap hari. Si Kecil pasti bisa!",
  },
  "12-18": {
    band: "12-18",
    intro:
      "Gunakan kata-kata yang sering Si Kecil dengar dalam aktivitas sehari-hari. Ulangi, perluas, dan beri kesempatan baginya untuk menirukan serta menggunakan kata tersebut. Ini membantu memperkaya kosakata dan kemampuan berkomunikasi.",
    categories: [
      {
        title: "Keluarga",
        emoji: "🙂",
        words: ["ayah", "mama", "kakak", "adik", "nenek", "kakek", "bayi"],
        when: [
          "Saat berinteraksi dengan anggota keluarga.",
          "Saat menyebut atau menunjuk mereka.",
        ],
      },
      {
        title: "Bagian Tubuh",
        emoji: "✋",
        words: ["mata", "hidung", "mulut", "telinga", "tangan", "kaki", "kepala", "perut"],
        when: [
          "Saat menunjuk bagian tubuh sendiri atau orang lain.",
          "Saat berpakaian atau mandi.",
        ],
      },
      {
        title: "Benda di Sekitar",
        emoji: "🧊",
        words: ["bola", "mobil", "buku", "kursi", "meja", "pintu", "jendela", "sendok"],
        when: ["Saat bermain atau melihat benda.", "Saat meminta atau menunjukkan benda."],
      },
      {
        title: "Makanan & Minuman",
        emoji: "🍼",
        words: ["makan", "minum", "nasi", "roti", "susu", "buah", "air", "enak"],
        when: [
          "Saat makan atau minum bersama.",
          "Saat menawarkan atau meminta makanan dan minuman.",
        ],
      },
      {
        title: "Kegiatan Sehari-hari",
        emoji: "🌸",
        words: ["tidur", "mandi", "bermain", "baca", "jalan", "duduk", "berdiri", "pakai"],
        when: ["Saat melakukan rutinitas harian.", "Saat memberi instruksi sederhana."],
      },
      {
        title: "Perasaan & Ekspresi",
        emoji: "❤️",
        words: ["senang", "sedih", "marah", "takut", "lapar", "haus", "sakit", "capek"],
        when: [
          "Saat Si Kecil menunjukkan perasaan.",
          "Saat membantu Si Kecil mengenali emosinya.",
        ],
      },
    ],
    tips: [
      "Gunakan kata sederhana, jelas, dan sesuai konteks.",
      "Ulangi kata secara rutin dan beri variasi kalimat.",
      "Ajak Si Kecil berbicara dengan bertanya dan menunggu jawaban.",
      "Puji setiap usaha Si Kecil dalam berbicara.",
      "Bacakan buku bergambar setiap hari.",
    ],
    manfaat: [
      "Memperkaya kosakata dan pemahaman kata.",
      "Meningkatkan kemampuan komunikasi dan ekspresi diri.",
      "Melatih konsentrasi, daya ingat, dan kemampuan berpikir.",
      "Meningkatkan kepercayaan diri dan kemandirian.",
      "Menjadi dasar penting untuk perkembangan bahasa di masa depan.",
    ],
    closing:
      "Setiap kata yang Si Kecil dengar dan ucapkan adalah langkah besar menuju kemampuan berbahasa yang baik. Terus ajak berbicara dengan cinta!",
  },
  "18-24": {
    band: "18-24",
    intro:
      "Si Kecil mulai menggabungkan dua kata. Perluas kalimatnya, ajukan pertanyaan sederhana, dan beri waktu untuk menjawab agar kemampuan bicaranya makin berkembang.",
    categories: [
      {
        title: "Dua Kata Berangkai",
        emoji: "💬",
        words: ["minta susu", "mau makan", "mau tidur", "ambil bola"],
        when: ["Saat Si Kecil meminta sesuatu, perluas menjadi dua kata."],
      },
      {
        title: "Kata Kerja",
        emoji: "🌸",
        words: ["makan", "minum", "duduk", "lari", "lompat", "buka", "tutup"],
        when: ["Saat melakukan kegiatan bersama, sebutkan kata kerjanya."],
      },
      {
        title: "Bagian Tubuh",
        emoji: "✋",
        words: ["rambut", "mata", "hidung", "mulut", "tangan", "kaki"],
        when: ["Saat mandi atau berpakaian, minta anak menunjuk bagian tubuhnya."],
      },
      {
        title: "Benda & Gambar",
        emoji: "🧊",
        words: ["kucing", "bola", "mobil", "apel", "buku", "topi"],
        when: ["Saat melihat buku bergambar, minta anak menyebut namanya."],
      },
      {
        title: "Makanan & Minuman",
        emoji: "🍼",
        words: ["nasi", "roti", "telur", "air", "susu", "pisang"],
        when: ["Saat makan bersama, tawarkan pilihan agar anak menyebutkannya."],
      },
      {
        title: "Perasaan & Sopan",
        emoji: "❤️",
        words: ["senang", "sakit", "terima kasih", "tolong", "maaf"],
        when: ["Saat anak mengungkapkan perasaan atau meminta bantuan."],
      },
    ],
    tips: [
      "Perluas kata anak menjadi kalimat pendek: “susu” → “mau minum susu”.",
      "Ajukan pertanyaan sederhana dan tunggu jawaban anak.",
      "Batasi screen time, ganti dengan bermain dan bercerita.",
      "Puji setiap usaha bicara, jangan mengoreksi terlalu keras.",
      "Bacakan buku cerita pendek setiap hari.",
    ],
    manfaat: [
      "Melatih kemampuan menggabungkan kata.",
      "Memperkaya kosakata dan pemahaman instruksi.",
      "Meningkatkan kepercayaan diri saat berbicara.",
      "Mendukung kemampuan sosial dan emosional.",
    ],
    closing: "Setiap kalimat pendek hari ini adalah cerita panjang di masa depan!",
  },
  "24-36": {
    band: "24-36",
    intro:
      "Si Kecil mulai bercerita dengan kalimat lengkap. Gunakan pertanyaan terbuka, perintah 2–3 langkah, dan ajak ia menceritakan kegiatannya setiap hari.",
    categories: [
      {
        title: "Kalimat Lengkap",
        emoji: "💬",
        words: ["aku mau makan", "adik main bola", "ibu masak nasi"],
        when: ["Saat bercerita tentang kegiatan yang baru dilakukan."],
      },
      {
        title: "Kata Tanya",
        emoji: "❓",
        words: ["apa", "siapa", "di mana", "kenapa", "bagaimana"],
        when: ["Saat membaca buku atau melihat gambar bersama."],
      },
      {
        title: "Warna & Bentuk",
        emoji: "🧊",
        words: ["merah", "biru", "kuning", "hijau", "bulat", "kotak"],
        when: ["Saat bermain balok, mewarnai, atau menyusun mainan."],
      },
      {
        title: "Angka & Jumlah",
        emoji: "🔢",
        words: ["satu", "dua", "tiga", "banyak", "sedikit"],
        when: ["Saat menghitung mainan atau makanan bersama."],
      },
      {
        title: "Perintah Sederhana",
        emoji: "🌸",
        words: ["ambil", "letakkan", "berikan", "simpan", "buka"],
        when: ["Saat memberi instruksi 2–3 langkah secara berurutan."],
      },
      {
        title: "Perasaan & Sopan",
        emoji: "❤️",
        words: ["senang", "sedih", "marah", "takut", "terima kasih", "permisi"],
        when: ["Saat membantu anak menamai emosinya dan berlatih sopan santun."],
      },
    ],
    tips: [
      "Ajak anak berbicara menggunakan kalimat lengkap.",
      "Gunakan pertanyaan terbuka, bukan hanya “ya/tidak”.",
      "Bacakan buku cerita setiap hari dan minta anak menceritakan ulang.",
      "Berikan instruksi sederhana 2–3 langkah dan minta anak melaksanakannya sendiri.",
      "Batasi screen time maksimal 1 jam per hari dengan pendampingan.",
    ],
    manfaat: [
      "Meningkatkan kemampuan bercerita dan berpikir.",
      "Memperkaya kosakata dan struktur kalimat.",
      "Melatih daya ingat dan konsentrasi.",
      "Menyiapkan anak untuk masa prasekolah.",
    ],
    closing: "Terus dampingi dan beri stimulasi setiap hari. Si Kecil pasti bisa!",
  },
};