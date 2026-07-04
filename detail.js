//============================

let produkAktif = null;

let varianAktif = null;

let jumlahProduk = 1;

//============================

function bukaDetail(id){

    produkAktif = getProdukById(id);

    jumlahProduk = 1;

    document.getElementById("detailModal").style.display="flex";

    document.getElementById("detailNama").innerHTML=
    produkAktif.nama;

    document.getElementById("detailKategori").innerHTML=
    getKategoriById(produkAktif.kategori).nama;

    document.getElementById("detailDeskripsi").innerHTML=
    produkAktif.deskripsi;

    document.getElementById("detailGambar").src=
    produkAktif.gambar;

    document.getElementById("detailNamaBreadcrumb").innerHTML=
    produkAktif.nama;

    window.scrollTo({ top: 0, behavior: "instant" });

    varianAktif=produkAktif.varian[0];

    tampilVarian();

}

function tutupDetail(){

    document.getElementById("detailModal").style.display="none";

}

function tampilVarian(){

    let html="";

    produkAktif.varian.forEach((v,index)=>{

        html+=`

<button
type="button"
class="varian-opt${index==0?' selected':''}"
onclick="pilihVarian('${v.nama}')">
  <span class="nama">${v.nama}</span>
  <span class="harga">${formatRupiah(v.harga)}</span>
</button>

`;

    });

    document.getElementById("detailVarian").innerHTML=html;

    updateHarga();

}

function pilihVarian(nama){

    varianAktif=

    produkAktif.varian.find(v=>v.nama==nama);

    document.querySelectorAll("#detailVarian .varian-opt").forEach(el=>{

        el.classList.toggle("selected", el.querySelector(".nama").innerHTML===nama);

    });

    updateHarga();

}

function updateHarga(){

    document.getElementById("detailHarga").innerHTML=

    formatRupiah(varianAktif.harga);

    document.getElementById("detailSubtotal").innerHTML=

    formatRupiah(varianAktif.harga*jumlahProduk);

}

function tambahQty(){

    jumlahProduk++;

    document.getElementById("qtyProduk").value=

    jumlahProduk;

    updateHarga();

}

function kurangQty(){

    if(jumlahProduk>1){

        jumlahProduk--;

        document.getElementById("qtyProduk").value=

        jumlahProduk;

        updateHarga();

    }

}

function tambahKeranjang(){

    addToCart(produkAktif.id, varianAktif.nama, jumlahProduk);

    tampilkanToast("Produk berhasil ditambahkan ke keranjang.");

}

function beliSekarang(){

    const item = {
        nama: produkAktif.nama,
        gambar: produkAktif.gambar,
        varian: varianAktif.nama,
        harga: varianAktif.harga,
        jumlah: jumlahProduk
    };

    bukaCheckout([item], "buynow");
}

function tampilkanToast(pesan){

    const toast = document.getElementById("toastNotif");
    if(!toast) return;

    toast.innerHTML = pesan;
    toast.classList.add("show");

    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(()=>{
        toast.classList.remove("show");
    }, 2200);

}