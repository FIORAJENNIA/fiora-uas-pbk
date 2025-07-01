<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBukuStore } from '@/stores/BukuStore'

const router = useRouter()
const route = useRoute()
const store = useBukuStore()

const bukuId = route.params.id

const judul = ref('')
const penulis = ref('')
const tahun = ref('')
const penerbit = ref('')
const kategori = ref('')
const stok = ref(1)
const error = ref('')
const isLoading = ref(true)

onMounted(async () => {
    isLoading.value = true
    const buku = store.buku.find(b => b.id === bukuId)

    if (!buku) {
        try {
            await store.getBuku() // jika belum ada di state
        } catch (e) {
            error.value = 'Gagal mengambil data buku.'
            return
        }
    }

    const data = store.buku.find(b => b.id === bukuId)
    if (data) {
        judul.value = data.judul
        penulis.value = data.penulis
        tahun.value = data.tahun
        penerbit.value = data.penerbit
        kategori.value = data.kategori
        stok.value = data.stok
    } else {
        error.value = 'Buku tidak ditemukan.'
    }

    isLoading.value = false
})

async function handleUpdate() {
    if (!judul.value || !penulis.value || !tahun.value || !penerbit.value || !kategori.value || !stok.value) {
        error.value = 'Semua field harus diisi.'
        return
    }

    const updated = {
        judul: judul.value,
        penulis: penulis.value,
        tahun: parseInt(tahun.value),
        penerbit: penerbit.value,
        kategori: kategori.value,
        stok: parseInt(stok.value)
    }

    try {
        await store.updateBuku(bukuId, updated)
        router.push({ name: 'buku' })
    } catch (err) {
        error.value = 'Gagal memperbarui buku.'
        console.error(err)
    }
}
</script>

<template>
    <div class="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
        <h1 class="text-2xl font-bold text-rose-600 mb-6">✏️ Edit Buku</h1>

        <div v-if="isLoading" class="text-pink-500">Memuat data buku...</div>
        <div v-else>
            <form @submit.prevent="handleUpdate" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-pink-700 mb-1">Judul</label>
                    <input v-model="judul" type="text" class="w-full border border-pink-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-pink-700 mb-1">Penulis</label>
                    <input v-model="penulis" type="text" class="w-full border border-pink-300 rounded px-3 py-2" />
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-pink-700 mb-1">Tahun</label>
                        <input v-model="tahun" type="number" class="w-full border border-pink-300 rounded px-3 py-2" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-pink-700 mb-1">Stok</label>
                        <input v-model="stok" type="number" class="w-full border border-pink-300 rounded px-3 py-2" />
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-pink-700 mb-1">Penerbit</label>
                    <input v-model="penerbit" type="text" class="w-full border border-pink-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-pink-700 mb-1">Kategori</label>
                    <input v-model="kategori" type="text" class="w-full border border-pink-300 rounded px-3 py-2" />
                </div>

                <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

                <div class="flex justify-end gap-2 mt-6">
                    <button type="button" @click="router.back()"
                        class="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition">Batal</button>
                    <button type="submit"
                        class="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-400 transition">Simpan
                        Perubahan</button>
                </div>
            </form>
        </div>
    </div>
</template>
