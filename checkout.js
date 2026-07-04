/* =========================================================
   ELMOURA — CHECKOUT (alamat, pengiriman, pembayaran)
   Dipakai baik dari "Beli Sekarang" (1 produk langsung)
   maupun dari halaman Keranjang (beberapa produk terpilih).
   ========================================================= */

let checkoutData = [];
let checkoutMode = null; // 'buynow' | 'cart'
let ongkirTerpilih = 15000;
let metodeBayarTerpilih = "bca";

function bukaCheckout(items, mode) {
  checkoutData = items;
  checkoutMode = mode;
  ongkirTerpilih = 15000;
  metodeBayarTerpilih = "bca";

  document.getElementById("checkoutForm").style.display = "";
  document.getElementById("checkoutConfirm").style.display = "none";

  renderCheckoutItems();

  document.querySelectorAll("#checkoutForm .ship-option").forEach((el, i) =>
    el.classList.toggle("selected", i === 0)
  );
  document.querySelectorAll("#checkoutForm .pay-option").forEach((el, i) =>
    el.classList.toggle("selected", i === 0)
  );

  updateRingkasanCheckout();

  document.getElementById("detailModal").style.display = "none";
  document.getElementById("cartModal").style.display = "none";
  document.getElementById("checkoutModal").style.display = "flex";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function tutupCheckout() {
  document.getElementById("checkoutModal").style.display = "none";
}

function renderCheckoutItems() {
  document.getElementById("checkoutItemList").innerHTML = checkoutData.map(item => `
    <div class="cart-item" style="grid-template-columns:60px 1fr auto;">
      <div class="thumb"><img src="${item.gambar}" alt="${item.nama}"></div>
      <div>
        <div class="nama">${item.nama}</div>
        <div class="varian">Varian: ${item.varian} • x${item.jumlah}</div>
      </div>
      <div class="harga-satuan">${formatRupiah(item.harga * item.jumlah)}</div>
    </div>
  `).join("");
}

function pilihPengiriman(el) {
  document.querySelectorAll("#checkoutForm .ship-option").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
  ongkirTerpilih = parseInt(el.dataset.biaya, 10);
  updateRingkasanCheckout();
}

function pilihPembayaran(el) {
  document.querySelectorAll("#checkoutForm .pay-option").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
  metodeBayarTerpilih = el.dataset.kode;
}

function updateRingkasanCheckout() {
  const subtotal = checkoutData.reduce((s, i) => s + i.harga * i.jumlah, 0);
  document.getElementById("ckSubtotal").innerHTML = formatRupiah(subtotal);
  document.getElementById("ckOngkir").innerHTML = formatRupiah(ongkirTerpilih);
  document.getElementById("ckTotal").innerHTML = formatRupiah(subtotal + ongkirTerpilih);
}

function buatPesanan() {
  const nama = document.getElementById("ckNama").value.trim();
  const hp = document.getElementById("ckHp").value.trim();
  const kota = document.getElementById("ckKota").value.trim();
  const alamat = document.getElementById("ckAlamat").value.trim();

  if (!nama || !hp || !kota || !alamat) {
    alert("Mohon lengkapi alamat pengiriman terlebih dahulu.");
    return;
  }

  const subtotal = checkoutData.reduce((s, i) => s + i.harga * i.jumlah, 0);

  const order = {
    id: generateOrderId(),
    tanggal: new Date().toISOString(),
    penerima: { nama, hp, kota, alamat },
    items: checkoutData,
    ongkir: ongkirTerpilih,
    metodeBayar: metodeBayarTerpilih,
    subtotal,
    total: subtotal + ongkirTerpilih,
    status: "diproses"
  };

  saveOrder(order);

  if (checkoutMode === "cart") {
    const idxs = checkoutData
      .map(i => i.cartIndex)
      .filter(i => i !== undefined)
      .sort((a, b) => b - a);
    idxs.forEach(i => removeFromCart(i));
  }

  document.getElementById("ckOrderId").innerHTML = order.id;
  document.getElementById("checkoutForm").style.display = "none";
  document.getElementById("checkoutConfirm").style.display = "block";
}

function selesaiCheckout() {
  document.getElementById("checkoutModal").style.display = "none";
  if (typeof kembaliHome === "function") kembaliHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
