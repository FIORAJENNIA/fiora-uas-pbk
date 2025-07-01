<script setup>
import { ref } from 'vue'

const laporan = ref([
  {
    id: 1,
    anggota: 'Rina Oktavia',
    buku: 'Laskar Pelangi',
    tanggalPinjam: '2024-06-01',
    tanggalKembali: '2024-06-07',
    status: 'Dikembalikan'
  },
  {
    id: 2,
    anggota: 'Doni Saputra',
    buku: 'Atomic Habits',
    tanggalPinjam: '2024-06-10',
    tanggalKembali: '',
    status: 'Belum Dikembalikan'
  }
])
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md mt-8">
    <header class="mb-6">
      <h1 class="text-3xl font-bold text-pink-600">📝 Laporan Peminjaman</h1>
      <p class="text-gray-600">Daftar aktivitas peminjaman dan pengembalian buku.</p>
    </header>

    <div class="overflow-auto">
      <table class="min-w-full border border-pink-300 rounded overflow-hidden">
        <thead class="bg-pink-100 text-pink-700">
          <tr>
            <th class="px-4 py-3 text-left">No</th>
            <th class="px-4 py-3 text-left">Anggota</th>
            <th class="px-4 py-3 text-left">Judul Buku</th>
            <th class="px-4 py-3 text-left">Tanggal Pinjam</th>
            <th class="px-4 py-3 text-left">Tanggal Kembali</th>
            <th class="px-4 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in laporan" :key="item.id"
              class="border-b hover:bg-pink-50 text-gray-700">
            <td class="px-4 py-3">{{ i + 1 }}</td>
            <td class="px-4 py-3">{{ item.anggota }}</td>
            <td class="px-4 py-3">{{ item.buku }}</td>
            <td class="px-4 py-3">{{ item.tanggalPinjam }}</td>
            <td class="px-4 py-3">{{ item.tanggalKembali || '-' }}</td>
            <td class="px-4 py-3">
              <span :class="[
                'px-2 py-1 text-sm rounded',
                item.status === 'Dikembalikan' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              ]">
                {{ item.status }}
              </span>
            </td>
          </tr>

          <tr v-if="laporan.length === 0">
            <td colspan="6" class="text-center py-4 text-gray-500">Belum ada data laporan.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
