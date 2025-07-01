<script setup>
import { ref, onMounted } from 'vue'
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'
import { useBukuStore } from '@/stores/BukuStore'

const router = useRouter()
const store = useBukuStore()
const isLoading = ref(true)

onMounted(async () => {
    isLoading.value = true
    await store.getBuku()
    isLoading.value = false

})

function editBuku(id) {
    router.push({ name: 'editbuku', params: { id } })
}

function handleDeleteBuku(id) {
    if (confirm('Yakin ingin menghapus buku ini?')) {
        store.deleteBuku(id)
    }
}
</script>

<template>
    <div class="max-w-6xl mx-auto min-h-screen w-full bg-pink-50 text-pink-900 p-8">
        <header class="mb-6">
            <h1 class="text-3xl font-bold mb-1 text-rose-600">📚 Daftar Buku</h1>
            <p class="text-pink-600">Kelola koleksi buku perpustakaan dengan mudah dan cepat.</p>
        </header>

        <div class="flex justify-end mb-4">
            <button @click="router.push({ name: 'addbuku' })"
                class="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-400 transition">
                + Tambah Buku
            </button>
        </div>

        <!-- ✅ Skeleton saat loading -->
        <div v-if="isLoading" class="space-y-4">
            <div v-for="n in 4" :key="n" class="bg-white p-4 border border-rose-200 rounded-lg shadow animate-pulse">
                <div class="flex justify-between gap-4">
                    <div class="w-1/4 h-4 bg-rose-100 rounded"></div>
                    <div class="w-1/4 h-4 bg-rose-100 rounded"></div>
                    <div class="w-1/4 h-4 bg-rose-100 rounded"></div>
                    <div class="w-1/4 h-4 bg-rose-100 rounded"></div>
                </div>
            </div>
        </div>

        <!-- ✅ Tabel saat data sudah dimuat -->
        <div v-else>
            <div class="bg-white shadow rounded-lg overflow-hidden border border-rose-300">
                <table class="min-w-full divide-y divide-rose-200">
                    <thead class="bg-rose-600 text-white">
                        <tr>
                            <th class="px-6 py-3 text-left text-sm font-semibold uppercase">No</th>
                            <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Judul</th>
                            <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Penulis</th>
                            <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Tahun</th>
                            <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Penerbit</th>
                            <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Kategori</th>
                            <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Stok</th>
                            <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-rose-100">
                        <tr v-for="(buku, i) in store.buku" :key="buku.id" class="hover:bg-rose-50 transition">
                            <td class="px-6 py-4">{{ i + 1 }}</td>
                            <td class="px-6 py-4">{{ buku.judul }}</td>
                            <td class="px-6 py-4">{{ buku.penulis }}</td>
                            <td class="px-6 py-4">{{ buku.tahun }}</td>
                            <td class="px-6 py-4">{{ buku.penerbit }}</td>
                            <td class="px-6 py-4">{{ buku.kategori }}</td>
                            <td class="px-6 py-4">{{ buku.stok }}</td>
                            <td class="px-6 py-4  text-right">
                                <button @click="editBuku(buku.id)"
                                    class="p-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-600 rounded-full transition">
                                    <PencilSquareIcon class="w-5 h-5" />
                                </button>
                                <button @click="handleDeleteBuku(buku.id)"
                                    class="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition">
                                    <TrashIcon class="w-5 h-5" />
                                </button>
                            </td>

                        </tr>
                        <tr v-if="store.buku.length === 0">
                            <td colspan="8" class="px-6 py-4 text-center text-gray-500">Belum ada data buku.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
