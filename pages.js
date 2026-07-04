/* =========================================================
   ELMOURA — PROFIL TOKO & DASHBOARD ORDER
   ========================================================= */

function bukaProfil() {
  document.getElementById("cartModal").style.display = "none";
  document.getElementById("checkoutModal").style.display = "none";
  document.getElementById("detailModal").style.display = "none";
  document.getElementById("profilModal").style.display = "flex";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function tutupProfil() {
  document.getElementById("profilModal").style.display = "none";
}

/* --------------------- DASHBOARD ORDER --------------------- */

function bukaDashboard() {
  document.getElementById("cartModal").style.display = "none";
  document.getElementById("checkoutModal").style.display = "none";
  document.getElementById("detailModal").style.display = "none";
  document.getElementById("dashboardModal").style.display = "flex";

  document.querySelectorAll("#orderTabs .tab-btn").forEach((btn, i) =>
    btn.classList.toggle("active", i === 0)
  );

  renderDashboard("semua");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function tutupDashboard() {
  document.getElementById("dashboardModal").style.display = "none";
}

function filterDashboard(btn) {
  document.querySelectorAll("#orderTabs .tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderDashboard(btn.dataset.filter);
}

function labelStatus(status) {
  const map = {
    diproses: "Diproses",
    dikirim: "Dikirim",
    selesai: "Selesai"
  };
  return map[status] || status;
}

function labelPembayaran(kode) {
  const map = {
    bca: "Transfer BCA",
    bri: "Transfer BRI",
    mandiri: "Transfer Mandiri",
    qris: "QRIS",
    cod: "Bayar di Tempat (COD)"
  };
  return map[kode] || kode;
}

function formatTanggal(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric"
  });
}

function renderDashboard(filter) {
  const orders = getOrders().slice().reverse(); // terbaru dulu
  const filtered = filter === "semua"
    ? orders
    : orders.filter(o => (o.status || "diproses") === filter);

  const empty = document.getElementById("orderEmptyState");
  const list = document.getElementById("orderList");

  if (filtered.length === 0) {
    empty.style.display = "block";
    list.innerHTML = "";
    return;
  }
  empty.style.display = "none";

  list.innerHTML = filtered.map(order => `
    <div class="order-card">
      <div class="order-head">
        <span>${order.id} • ${formatTanggal(order.tanggal)}</span>
        <span class="status-badge">${labelStatus(order.status || "diproses")}</span>
      </div>
      <div class="order-body">
        ${order.items.map(item => `
          <div class="cart-item" style="grid-template-columns:60px 1fr auto;">
            <div class="thumb"><img src="${item.gambar}" alt="${item.nama}"></div>
            <div>
              <div class="nama">${item.nama}</div>
              <div class="varian">Varian: ${item.varian} • x${item.jumlah}</div>
            </div>
            <div class="harga-satuan">${formatRupiah(item.harga * item.jumlah)}</div>
          </div>
        `).join("")}
      </div>
      <div class="order-foot">
        <span class="varian">Pembayaran: ${labelPembayaran(order.metodeBayar)}</span>
        <span class="total">Total ${formatRupiah(order.total)}</span>
      </div>
    </div>
  `).join("");
}
