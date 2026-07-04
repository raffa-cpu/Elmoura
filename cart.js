/* =========================================================
   ELMOURA — KERANJANG & ORDER
   Disimpan di localStorage supaya "belanja langsung di web"
   (poin fitur a) tetap terasa nyata tanpa perlu backend.
   ========================================================= */

const CART_KEY = "elmoura_cart";
const ORDER_KEY = "elmoura_orders";

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(produkId, varianNama, jumlah) {
  const produk = getProdukById(produkId);
  const varian = produk.varian.find(v => v.nama === varianNama);
  const cart = getCart();

  const existing = cart.find(i => i.produkId === produkId && i.varian === varianNama);
  if (existing) {
    existing.jumlah += jumlah;
  } else {
    cart.push({
      produkId,
      nama: produk.nama,
      gambar: produk.gambar,
      varian: varianNama,
      harga: varian.harga,
      jumlah
    });
  }
  saveCart(cart);
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartQty(index, jumlah) {
  const cart = getCart();
  if (jumlah <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].jumlah = jumlah;
  }
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.harga * i.jumlah, 0);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.jumlah, 0);
}

function updateCartBadge() {
  const badge = document.querySelector("[data-cart-badge]");
  if (badge) {
    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

/* ---- Order (dipakai untuk checkout & dashboard) ---- */

function getOrders() {
  return JSON.parse(localStorage.getItem(ORDER_KEY) || "[]");
}

function saveOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
}

function generateOrderId() {
  const now = new Date();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return "ELM-" + now.getFullYear().toString().slice(-2) +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0") + "-" + rand;
}

document.addEventListener("DOMContentLoaded", updateCartBadge);

/* =========================================================
   KERANJANG — TAMPILAN HALAMAN (overlay ala Shopee/Tokopedia)
   ========================================================= */

let selectedCartIdx = [];

function bukaKeranjang() {
  const cart = getCart();
  selectedCartIdx = cart.map((_, i) => i); // default semua tercentang

  renderKeranjang();

  document.getElementById("detailModal").style.display = "none";
  document.getElementById("cartModal").style.display = "flex";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function tutupKeranjang() {
  document.getElementById("cartModal").style.display = "none";
}

function renderKeranjang() {
  const cart = getCart();
  const empty = document.getElementById("cartEmptyState");
  const wrap = document.getElementById("cartLayoutWrap");

  if (cart.length === 0) {
    empty.style.display = "block";
    wrap.style.display = "none";
    return;
  }

  empty.style.display = "none";
  wrap.style.display = "grid";

  document.getElementById("cartList").innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <input type="checkbox" ${selectedCartIdx.includes(i) ? "checked" : ""}
        onchange="toggleItemSelect(${i}, this.checked)">
      <div class="thumb"><img src="${item.gambar}" alt="${item.nama}"></div>
      <div>
        <div class="nama">${item.nama}</div>
        <div class="varian">Varian: ${item.varian}</div>
        <div class="harga-satuan">${formatRupiah(item.harga)}</div>
      </div>
      <div class="qty-stepper">
        <button onclick="ubahQtyCart(${i},-1)">-</button>
        <input type="text" readonly value="${item.jumlah}">
        <button onclick="ubahQtyCart(${i},1)">+</button>
      </div>
      <button class="remove-btn" onclick="hapusDariKeranjang(${i})" title="Hapus">🗑</button>
    </div>
  `).join("");

  document.getElementById("selectAllCart").checked =
    selectedCartIdx.length === cart.length;

  updateRingkasanKeranjang();
}

function toggleSelectAllCart(cb) {
  const cart = getCart();
  selectedCartIdx = cb.checked ? cart.map((_, i) => i) : [];
  renderKeranjang();
}

function toggleItemSelect(i, checked) {
  if (checked) {
    if (!selectedCartIdx.includes(i)) selectedCartIdx.push(i);
  } else {
    selectedCartIdx = selectedCartIdx.filter(x => x !== i);
  }
  document.getElementById("selectAllCart").checked =
    selectedCartIdx.length === getCart().length;
  updateRingkasanKeranjang();
}

function ubahQtyCart(i, delta) {
  const cart = getCart();
  updateCartQty(i, cart[i].jumlah + delta);
  renderKeranjang();
}

function hapusDariKeranjang(i) {
  removeFromCart(i);
  selectedCartIdx = selectedCartIdx.filter(x => x !== i).map(x => (x > i ? x - 1 : x));
  renderKeranjang();
}

function updateRingkasanKeranjang() {
  const cart = getCart();
  const dipilih = selectedCartIdx.map(i => cart[i]);
  const subtotal = dipilih.reduce((s, it) => s + it.harga * it.jumlah, 0);

  document.getElementById("cartSelectedCount").innerHTML =
    dipilih.reduce((s, it) => s + it.jumlah, 0);
  document.getElementById("cartSubtotal").innerHTML = formatRupiah(subtotal);
  document.getElementById("cartTotal").innerHTML = formatRupiah(subtotal);
  document.getElementById("btnCheckoutCart").disabled = dipilih.length === 0;
}

function lanjutkanCheckout() {
  const cart = getCart();
  if (selectedCartIdx.length === 0) {
    alert("Pilih minimal 1 produk untuk checkout.");
    return;
  }
  const items = selectedCartIdx.map(i => ({ ...cart[i], cartIndex: i }));
  bukaCheckout(items, "cart");
}