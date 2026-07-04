/* =========================================================
   ELMOURA — KOMPONEN BERSAMA (header, footer, tombol WA)
   Dipanggil di setiap halaman lewat <div id="elmoura-header">
   dan <div id="elmoura-footer"> supaya tidak perlu copy-paste
   navbar/footer berulang-ulang di tiap file HTML.
   ========================================================= */

const NOMOR_WA = "089661994434"; // ganti dengan nomor WA toko asli

function renderHeader(activePage) {
  const el = document.getElementById("elmoura-header");
  if (!el) return;

  const linkClass = (page) => "nav-link" + (page === activePage ? " active" : "");

  el.innerHTML = `
    
    <header class="navbar">
      <div class="navbar-inner">
        <a href="index.html" class="logo">ELM<span>OURA</span></a>

       <nav class="nav-links" id="navLinks">

    <a href="index.html" class="${linkClass('home')}">Beranda</a>

    <div class="dropdown">

        <a href="#" class="nav-link dropdown-toggle">
            Kategori <span class="arrow">▼</span>
        </a>

        <div class="dropdown-menu">
           <a href="#" onclick="tampilKategori('mouse')">Mouse</a>
           <a href="#" onclick="tampilKategori('keyboard')">Keyboard</a>
           <a href="#" onclick="tampilKategori('monitor')">Monitor</a>
        </div>

    </div>

    <a href="profil.html" class="${linkClass('profil')}">
        Profil Toko
    </a>

</nav>

</nav>

        <div class="navbar-actions">
          <a href="dashboard.html" class="icon-btn" title="Dashboard Order">📋</a>
          <a href="#" class="icon-btn cart-btn" title="Keranjang" onclick="event.preventDefault(); bukaKeranjang();">
            🛒
            <span class="cart-badge" data-cart-badge>0</span>
          </a>
          <button class="hamburger" id="hamburgerBtn" aria-label="Menu">☰</button>
        </div>
      </div>
    </header>
  `;

  const hamburger = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () =>
    navLinks.classList.toggle("open"));

const dropdown = document.querySelector(".dropdown");
const toggle = document.querySelector(".dropdown-toggle");

toggle.addEventListener("click",(e)=>{

    e.preventDefault();

    dropdown.classList.toggle("active");

});

document.addEventListener("click",(e)=>{

    if(!dropdown.contains(e.target)){

        dropdown.classList.remove("active");

    }

});
}

function renderFooter() {
  const el = document.getElementById("elmoura-footer");
  if (!el) return;

  el.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-col">
          <a href="index.html" class="logo">ELM<span>OURA</span></a>
          <p>Perangkat komputer harian sampai gaming — mouse, keyboard, dan monitor dengan harga jujur dan kualitas yang bisa diandalkan.</p>
        </div>
        <div class="footer-col">
          <h4>Belanja</h4>
          <a href="kategori.html?cat=mouse">Mouse</a>
          <a href="kategori.html?cat=keyboard">Keyboard</a>
          <a href="kategori.html?cat=monitor">Monitor</a>
        </div>
        <div class="footer-col">
          <h4>Bantuan</h4>
          <a href="cara-pembelian.html">Cara Pembelian</a>
          <a href="profil.html">Profil Toko</a>
          <a href="dashboard.html">Dashboard Order</a>
        </div>
        <div class="footer-col">
          <h4>Statistik Kunjungan</h4>
          <div class="histats-box" id="histatsBox">
            <!-- ================= HISTATS ================= -->
            <!-- Ganti ID di bawah ini dengan Site ID Histats.com milik toko -->
            <a href="https://www.histats.com" target="_blank" rel="noopener">
              <img src="https://sstatic1.histats.com/0.gif?4000000&101" alt="statistik pengunjung" style="border:0" />
            </a>
            <script type="text/javascript">
              var _Hasync = _Hasync || [];
              _Hasync.push(['Histats.start', '1,4000000,4,0,0,0,00000000']);
              _Hasync.push(['Histats.fasi', '1']);
              _Hasync.push(['Histats.track_hits', '']);
              (function () {
                var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
                hs.src = ('//s10.histats.com/js15_as.js');
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
              })();
            </script>
            <p class="histats-note">Widget statistik pengunjung (Histats)</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Elmoura. Tugas UAS — Toko Online Perangkat Komputer.</p>
      </div>
    </footer>
  `;
}

function renderWhatsapp(pesan) {
  const el = document.getElementById("elmoura-wa");
  if (!el) return;

  const teks = encodeURIComponent(
    pesan || "Halo Elmoura, saya ingin bertanya mengenai produk."
  );

  el.innerHTML = `
    <a class="wa-float"
       href="https://wa.me/${NOMOR_WA}?text=${teks}"
       target="_blank"
       rel="noopener"
       title="Chat WhatsApp">

      <img src="images/whatsapp.png" alt="WhatsApp">

    </a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderFooter();
  renderWhatsapp();
});