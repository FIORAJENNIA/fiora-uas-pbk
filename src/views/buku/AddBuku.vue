<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBukuStore } from '@/stores/BukuStore'

const router = useRouter()
const store = useBukuStore()

// State form
const judul = ref('')
const penulis = ref('')
const tahun = ref('')
const penerbit = ref('')
const kategori = ref('')
const stok = ref(1)
const error = ref('')

async function handleSubmit() {
    if (!judul.value || !penulis.value || !tahun.value || !penerbit.value || !kategori.value || !stok.value) {
        error.value = 'Semua field harus diisi.'
        return
    }

    const newBuku = {
        judul: judul.value,
        penulis: penulis.value,
        tahun: parseInt(tahun.value),
        penerbit: penerbit.value,
        kategori: kategori.value,
        stok: parseInt(stok.value)
    }

    try {
        await store.addBuku(newBuku)
        router.push({ name: 'buku' }) 
    } catch (err) {
        error.value = 'Gagal menambahkan buku.'
        console.error(err)
    }
}
</script>

<template>
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <h1 class="text-2xl font-bold text-rose-600 mb-6">📖 Tambah Buku Baru</h1>

        <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-pink-700 mb-1">Judul</label>
                <input v-model="judul" type="text"
                    class="w-full border border-pink-300 rounded px-3 py-2 focus:ring focus:ring-pink-200" />
            </div>

            <div>
                <label class="block text-sm font-medium text-pink-700 mb-1">Penulis</label>
                <input v-model="penulis" type="text"
                    class="w-full border border-pink-300 rounded px-3 py-2 focus:ring focus:ring-pink-200" />
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-pink-700 mb-1">Tahun</label>
                    <input v-model="tahun" type="number"
                        class="w-full border border-pink-300 rounded px-3 py-2 focus:ring focus:ring-pink-200" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-pink-700 mb-1">Stok</label>
                    <input v-model="stok" type="number" min="1"
                        class="w-full border border-pink-300 rounded px-3 py-2 focus:ring focus:ring-pink-200" />
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-pink-700 mb-1">Penerbit</label>
                <input v-model="penerbit" type="text"
                    class="w-full border border-pink-300 rounded px-3 py-2 focus:ring focus:ring-pink-200" />
            </div>

            <div>
                <label class="block text-sm font-medium text-pink-700 mb-1">Kategori</label>
                <input v-model="kategori" type="text"
                    class="w-full border border-pink-300 rounded px-3 py-2 focus:ring focus:ring-pink-200" />
            </div>

            <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

            <div class="flex justify-end gap-2 mt-6">
                <button type="button" @click="router.back()"
                    class="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition">Batal</button>
                <button type="submit"
                    class="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-400 transition">Simpan</button>
            </div>
        </form>
    </div>
</template>