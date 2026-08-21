// ============================================================================
// 1. MEMBUAT DATA PRODUK (OBJECT)
// ============================================================================

const daftarProduk = [
  {
    nama: "Mouse Wireless",
    kategori: "Aksesoris",
    harga: 150000,
    stok: 20,
    infoProduk() {
      console.log(
        `${this.nama} - Kategori: ${this.kategori} | Harga: Rp${this.harga} | Stok: ${this.stok}`
      );
    },
  },
  {
    nama: "Keyboard Mechanical",
    kategori: "Aksesoris",
    harga: 450000,
    stok: 15,
    infoProduk() {
      console.log(
        `${this.nama} - Kategori: ${this.kategori} | Harga: Rp${this.harga} | Stok: ${this.stok}`
      );
    },
  },
  {
    nama: "Smartphone Android",
    kategori: "Handphone",
    harga: 3200000,
    stok: 8,
    infoProduk() {
      console.log(
        `${this.nama} - Kategori: ${this.kategori} | Harga: Rp${this.harga} | Stok: ${this.stok}`
      );
    },
  },
  {
    nama: "Laptop Gaming",
    kategori: "Laptop",
    harga: 12500000,
    stok: 5,
    infoProduk() {
      console.log(
        `${this.nama} - Kategori: ${this.kategori} | Harga: Rp${this.harga} | Stok: ${this.stok}`
      );
    },
  },
];

// ============================================================================
// 2. ITERASI DATA (ITERABLE VS NON-ITERABLE)
// ============================================================================

console.log("=== 2.1 Iterasi Array daftarProduk (for...of) ===");
// Iterasi Array daftarProduk menggunakan for...of dan memanggil infoProduk()
for (const produk of daftarProduk) {
  produk.infoProduk();
}

console.log("\n=== 2.2 Iterasi Object Produk (for...in) ===");
// Ambil satu object produk dari array (misal produk pertama)
const sampelProduk = daftarProduk[0];

// Iterasi key & value pada Object menggunakan for...in
for (const key in sampelProduk) {
  // Melewati method infoProduk menggunakan typeof
  if (typeof sampelProduk[key] !== "function") {
    console.log(`${key}: ${sampelProduk[key]}`);
  }
}

// Penjelasan Iterable vs Non-Iterable:
// Array bisa dipakai dengan for...of karena Array bersifat Iterable (memiliki Symbol.iterator), sedangkan Object adalah Non-Iterable secara default sehingga harus diiterasi menggunakan for...in atau Object.keys/values/entries.

// ============================================================================
// 3. DESTRUCTURING
// ============================================================================

console.log("\n=== 3. Destructuring ===");

// 3.1 Object Destructuring (Mengekstrak nama dan harga produk pertama)
const { nama: namaProdukPertama, harga: hargaProdukPertama } = daftarProduk[0];
console.log(`Produk Pertama: ${namaProdukPertama}, Harga: Rp${hargaProdukPertama}`);

// 3.2 Array Destructuring (Mendapatkan harga termurah & termahal)
// Urutkan daftar harga dari yang termurah ke termahal
const daftarHargaUrut = daftarProduk.map((p) => p.harga).sort((a, b) => a - b);

// Array destructuring: Ambil harga pertama (termurah) dan simpan sisanya dalam rest array untuk mengambil harga termahal
const [hargaTermurah, ...sisaHarga] = daftarHargaUrut;
const hargaTermahal = sisaHarga[sisaHarga.length - 1];

console.log(`Harga Termurah: Rp${hargaTermurah}`);
console.log(`Harga Termahal: Rp${hargaTermahal}`);

// ============================================================================
// 4. SPREAD OPERATOR
// ============================================================================

console.log("\n=== 4. Spread Operator ===");

// 4.1 Menyalin object & menimpa harga dengan diskon 10%
const produkPromo = {
  ...daftarProduk[0],
  harga: daftarProduk[0].harga * 0.9, // Diskon 10%
};

console.log("Produk Asli Harga:", daftarProduk[0].harga); // Data asli tidak berubah (150000)
console.log("Produk Promo (Diskon 10%):", produkPromo.harga); // Data promo (135000)

// 4.2 Menggabungkan daftarProduk dengan 1 produk baru menggunakan Spread Operator
const produkBaru = {
  nama: "Headset Bluetooth",
  kategori: "Aksesoris",
  harga: 350000,
  stok: 12,
  infoProduk() {
    console.log(
      `${this.nama} - Kategori: ${this.kategori} | Harga: Rp${this.harga} | Stok: ${this.stok}`
    );
  },
};

const stokBaru = [...daftarProduk, produkBaru];
console.log(`Jumlah Produk Stok Baru: ${stokBaru.length} item`);

// ============================================================================
// 5. REST PARAMETER
// ============================================================================

console.log("\n=== 5. Rest Parameter ===");

/**
 * Menghitung total nilai stok dari sejumlah produk yang diberikan sebagai Rest Parameter.
 * @param {...Object} produk - Daftar objek produk terpisah.
 * @returns {number} Total akumulasi nilai stok (harga * stok).
 */
function totalNilaiStok(...produk) {
  return produk.reduce((acc, p) => acc + p.harga * p.stok, 0);
}

// Memanggil fungsi dengan melebarkan (spread) isi daftarProduk
const totalNilai = totalNilaiStok(...daftarProduk);

console.log(`Total Nilai Seluruh Stok Toko: Rp${totalNilai.toLocaleString("id-ID")}`);