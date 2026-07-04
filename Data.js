/* =========================================================
   ELMOURA — DATA PRODUK
   Semua produk, kategori & varian didefinisikan di sini.
   Halaman lain (kategori.html, produk.html, dst) tinggal
   membaca array ini, jadi kalau mau nambah/ubah produk
   cukup edit file ini saja.
   ========================================================= */

const KATEGORI = [
  {
    id: "mouse",
    nama: "Mouse",
    gambar: "images/kategori/mouse.jpg",
    tagline: "Presisi di ujung jari",
    deskripsi: "Mouse gaming & harian dengan sensor akurat dan grip yang nyaman untuk pemakaian lama."
  },
  {
    id: "keyboard",
    nama: "Keyboard",
    gambar: "images/kategori/keyboard.jpg",
    tagline: "Setiap ketikan, terasa mantap",
    deskripsi: "Dari membrane harian sampai mechanical hot-swap untuk yang serius soal feedback tombol."
  },
  {
    id: "monitor",
    nama: "Monitor",
    gambar: "images/kategori/monitor.jpg",
    tagline: "Layar tajam, respons cepat",
    deskripsi: "Monitor refresh rate tinggi untuk kerja, desain, dan gaming kompetitif."
  }
];

/* Setiap produk punya array "varian" — masing-masing varian
   punya harga sendiri (poin 1c: tiap size/varian beda harga) */
const PRODUK = [

  /* ================= MOUSE ================= */
  {
    id: "m1",
    kategori: "mouse",
    nama: "Elmoura Raven M1",
    pilihan: false,
    promo: false,
    gambar: "images/produk/raven-m1.jpg",
    ringkas: "Mouse harian ringan, cocok untuk kerja dan browsing.",
    deskripsi: "Raven M1 dirancang untuk pemakaian sehari-hari: kerja kantor, browsing, hingga desain ringan. Bentuknya simetris dengan bobot ringan 78g sehingga tangan tidak cepat lelah meski dipakai berjam-jam. Sensor optik 6.200 DPI menjaga gerakan kursor tetap presisi, dan klik micro-switch tahan hingga 10 juta klik. Tersedia dalam versi kabel untuk latensi minimal dan versi nirkabel untuk meja kerja yang lebih rapi.",
    spesifikasi: ["Sensor optik 6.200 DPI", "Bobot 78 gram", "Klik tahan 10 juta kali", "5 tombol yang bisa diprogram"],
    varian: [
      { nama: "Wired", harga: 135000 },
      { nama: "Wireless", harga: 195000 }
    ]
  },
  {
    id: "m2",
    kategori: "mouse",
    nama: "Elmoura Talon M2",
    pilihan: false,
    promo: true,
    hargaCoret: 275000,
    gambar: "images/produk/talon-m2.jpg",
    ringkas: "Mouse serbaguna dengan grip ergonomis dan RGB minimalis.",
    deskripsi: "Talon M2 memadukan kenyamanan genggaman ergonomis dengan tampilan RGB minimalis di bagian scroll wheel. Cocok untuk kamu yang bekerja sekaligus sesekali main game santai. Material side grip bertekstur membuat mouse tidak licin walau tangan berkeringat. Sudah mendukung penyimpanan hingga 3 profil DPI berbeda yang bisa dipindah dengan satu tombol.",
    spesifikasi: ["Sensor optik 8.000 DPI", "3 profil DPI tersimpan", "RGB scroll wheel", "Side grip anti-licin"],
    varian: [
      {
        nama: "Wired",
        harga: 165000
      },
      {
        nama: "Wireless",
        harga: 245000
      }
    ]
  },
  {
    id: "m3",
    kategori: "mouse",
    nama: "Elmoura Vortex M3",
    pilihan: true,
    promo: false,
    gambar: "images/produk/vortex-m3.jpg",
    ringkas: "Mouse gaming kompetitif, ringan dan responsif.",
    deskripsi: "Vortex M3 adalah pilihan utama untuk gaming kompetitif. Dengan bobot hanya 62 gram berkat desain honeycomb di bagian bawah, mouse ini memungkinkan gerakan flick cepat tanpa terasa berat. Sensor 16.000 DPI dengan polling rate 1000Hz memastikan setiap gerakan terbaca instan. Kabel paracord fleksibel pada varian wired mengurangi drag di atas mousepad, sementara varian wireless memakai receiver 2.4GHz dengan latensi setara kabel.",
    spesifikasi: ["Sensor 16.000 DPI, polling rate 1000Hz", "Bobot 62 gram (honeycomb shell)", "Kabel paracord / receiver 2.4GHz", "Kaki mouse PTFE anti gesekan"],
    varian: [
      {
        nama: "Wired",
        harga: 220000
      },
      {
        nama: "Wireless",
        harga: 335000
      }
    ]
  },

  /* ================= KEYBOARD ================= */
  {
    id: "k1",
    kategori: "keyboard",
    nama: "Elmoura Circuit K1",
    pilihan: false,
    promo: false,
    gambar: "images/produk/circuit-k1.jpg",
    ringkas: "Keyboard membrane harian, senyap dan hemat.",
    deskripsi: "Circuit K1 adalah keyboard membrane untuk kebutuhan mengetik harian. Desainnya ringkas dengan kaki keyboard yang bisa diatur ketinggiannya untuk posisi mengetik yang lebih nyaman. Tombol karet di bawah setiap keycap membuat suara ketikan tetap senyap, cocok dipakai di ruang kerja bersama atau kos-kosan. Varian backlit menambahkan lampu putih di setiap tombol untuk mengetik di ruangan gelap.",
    spesifikasi: ["Tipe membrane, full-size", "Anti-ghosting 8 tombol", "Kaki keyboard 2 tingkat", "Kabel USB 1.5 meter"],
    varian: [
      {
        nama: "60% Red Switch",
        harga: 185000
      },
      {
        nama: "75% Brown Switch",
        harga: 450000
      },
      {
        nama: "100% Red Switch Wireless",
        harga: 650000
      }
    ]
  },
  {
    id: "k2",
    kategori: "keyboard",
    nama: "Elmoura Forge K2",
    pilihan: true,
    promo: false,
    gambar: "images/produk/forge-k2.jpg",
    ringkas: "Mechanical blue switch, feedback klik yang tegas.",
    deskripsi: "Forge K2 memakai switch mechanical blue yang memberi feedback klik tegas dan taktil di setiap tekanan tombol — favorit untuk yang suka sensasi mengetik 'klik-klik' khas mechanical keyboard. Bodi menggunakan top plate aluminium yang membuat keyboard terasa kokoh dan tidak lentur. Tersedia dalam ukuran TKL (tanpa numpad, lebih hemat tempat di meja) dan full-size untuk yang masih butuh numpad.",
    spesifikasi: ["Switch mechanical blue, 50 juta klik", "Top plate aluminium", "Keycap doubleshot anti pudar", "Kabel USB braided"],
    varian: [
      {
        nama: "60% Red Switch",
        harga: 185000
      },
      {
        nama: "75% Brown Switch",
        harga: 450000
      },
      {
        nama: "100% Red Switch Wireless",
        harga: 650000
      }
    ]
  },
  {
    id: "k3",
    kategori: "keyboard",
    nama: "Elmoura Nova K3",
    pilihan: false,
    promo: true,
    hargaCoret: 780000,
    gambar: "images/produk/nova-k3.jpg",
    ringkas: "Mechanical hot-swap, bisa ganti switch tanpa solder.",
    deskripsi: "Nova K3 ditujukan untuk pengguna yang ingin mulai eksplorasi dunia custom keyboard. Socket hot-swap memungkinkan penggantian switch tanpa perlu menyolder, jadi kamu bebas coba karakter red switch yang linear-senyap atau brown switch yang tactile-medium. Dilengkapi peredam suara (foam) di dalam casing sehingga suara ketikan lebih 'thocky' dan tidak berisik.</br>Cocok untuk mengetik lama maupun gaming ringan.",
    spesifikasi: ["Socket hot-swap 3/5 pin", "Foam peredam suara di dalam casing", "Knob volume putar", "Konektivitas USB-C lepas-pasang"],
    varian: [
      {
        nama: "60% Red Switch",
        harga: 185000
      },
      {
        nama: "75% Brown Switch",
        harga: 450000
      },
      {
        nama: "100% Red Switch Wireless",
        harga: 650000
      }
    ]
  },

  /* ================= MONITOR ================= */
  {
    id: "d1",
    kategori: "monitor",
    nama: "Elmoura Clarity D1",
    pilihan: false,
    promo: false,
    gambar: "images/produk/clarity-d1.jpg",
    ringkas: "Monitor 24 inci untuk kerja dan hiburan harian.",
    deskripsi: "Clarity D1 adalah monitor 24 inci Full HD yang pas untuk kebutuhan kerja kantor, kuliah, hingga menonton film. Panel IPS memberi warna yang akurat dari berbagai sudut pandang, sementara bezel tipis membuat tampilan lebih modern dan cocok untuk setup dual monitor. Varian 100Hz memberikan gerakan gambar yang lebih halus dibanding refresh rate standar 75Hz, terasa saat scrolling maupun main game ringan.",
    spesifikasi: ["24 inci, Full HD 1920x1080", "Panel IPS", "Response time 5ms", "Port HDMI + VGA"],
    varian: [
      {
        nama: "24 Inch 165Hz IPS",
        harga: 1850000
      },
      {
        nama: "27 Inch 165Hz IPS",
        harga: 2150000
      },
      {
        nama: "27 Inch 180Hz VA",
        harga: 2050000
      }
    ]
  },
  {
    id: "d2",
    kategori: "monitor",
    nama: "Elmoura Pulse D2",
    pilihan: true,
    promo: false,
    gambar: "images/produk/pulse-d2.jpg",
    ringkas: "Monitor 27 inci, refresh rate tinggi untuk gaming.",
    deskripsi: "Pulse D2 dirancang untuk gaming yang butuh gerakan gambar mulus. Layar 27 inci Full HD dengan refresh rate mulai 144Hz membuat game FPS maupun ritme cepat terasa jauh lebih responsif dibanding monitor standar 60Hz. Varian 165Hz cocok untuk kartu grafis kelas menengah-atas yang mampu memaksimalkan frame rate tinggi. Sudah mendukung teknologi anti-tearing agar gambar tidak patah-patah saat frame rate berubah cepat.",
    spesifikasi: ["27 inci, Full HD 1920x1080", "Anti-tearing (Adaptive Sync)", "Response time 1ms", "Port HDMI + DisplayPort"],
    varian: [
      {
        nama: "24 Inch 165Hz IPS",
        harga: 1850000
      },
      {
        nama: "27 Inch 165Hz IPS",
        harga: 2150000
      },
      {
        nama: "27 Inch 180Hz VA",
        harga: 2050000
      }
    ]
  },
  {
    id: "d3",
    kategori: "monitor",
    nama: "Elmoura Horizon D3",
    pilihan: false,
    promo: true,
    hargaCoret: 3850000,
    gambar: "images/produk/horizon-d3.jpg",
    ringkas: "Monitor curved 27 inci QHD, imersif untuk gaming & desain.",
    deskripsi: "Horizon D3 membawa pengalaman visual yang lebih imersif lewat layar melengkung (curved) 27 inci dengan resolusi QHD 2560x1440 — lebih tajam dari Full HD biasa. Kelengkungan layar mengikuti sudut pandang mata sehingga cocok untuk sesi gaming atau editing yang panjang tanpa membuat mata cepat lelah. Dua pilihan refresh rate, 144Hz dan 165Hz, disesuaikan untuk kebutuhan gaming kompetitif maupun kerja visual sehari-hari.",
    spesifikasi: ["27 inci curved, QHD 2560x1440", "Kelengkungan layar 1500R", "HDR10 support", "Port HDMI + DisplayPort + USB hub"],
    varian: [
      {
        nama: "24 Inch 165Hz IPS",
        harga: 1850000
      },
      {
        nama: "27 Inch 165Hz IPS",
        harga: 2150000
      },
      {
        nama: "27 Inch 180Hz VA",
        harga: 2050000
      }
    ]
  }
];

/* ---- Helper functions dipakai di banyak halaman ---- */

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function getProdukById(id) {
  return PRODUK.find(p => p.id === id);
}

function getProdukByKategori(katId) {
  return PRODUK.filter(p => p.kategori === katId);
}

function getKategoriById(id) {
  return KATEGORI.find(k => k.id === id);
}

function getHargaTermurah(produk) {
  return Math.min(...produk.varian.map(v => v.harga));

// ===============================
// Helper untuk Detail Produk
// ===============================

function getVarian(produkId, namaVarian) {
    const produk = getProdukById(produkId);

    if (!produk) return null;

    return produk.varian.find(v => v.nama === namaVarian);
}

function getHargaVarian(produkId, namaVarian) {
    const varian = getVarian(produkId, namaVarian);

    return varian ? varian.harga : 0;
}
}