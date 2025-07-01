<template>
    <div class="p-8 w-full min-h-screen bg-pink-50 text-pink-900">
        <h1 class="text-3xl font-bold mb-6 text-rose-600">Selamat Datang di PerpusKu</h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Card Jumlah Buku -->
            <div class="bg-white border border-rose-200 rounded-xl shadow p-5 hover:shadow-md transition">
                <h2 class="text-xl font-semibold text-rose-500 mb-2">Total Buku</h2>
                <p class="text-3xl font-bold">120</p>
            </div>

            <!-- Card Jumlah Anggota -->
            <div class="bg-white border border-rose-200 rounded-xl shadow p-5 hover:shadow-md transition">
                <h2 class="text-xl font-semibold text-rose-500 mb-2">Total Anggota</h2>
                <p class="text-3xl font-bold">58</p>
            </div>

            <!-- Card Peminjaman Aktif -->
            <div class="bg-white border border-rose-200 rounded-xl shadow p-5 hover:shadow-md transition">
                <h2 class="text-xl font-semibold text-rose-500 mb-2">Peminjaman Aktif</h2>
                <p class="text-3xl font-bold">14</p>
            </div>
        </div>

        <div class="mt-10">
            <h3 class="text-2xl font-semibold text-pink-700 mb-4">Aktivitas Terbaru</h3>
            <ul class="space-y-2">
                <li class="bg-white border-l-4 border-rose-400 p-4 shadow-sm rounded">
                    <p><strong>Rina</strong> meminjam <em>"Laskar Pelangi"</em> — <span class="text-sm text-gray-500">2
                            jam lalu</span></p>
                </li>
                <li class="bg-white border-l-4 border-rose-400 p-4 shadow-sm rounded">
                    <p><strong>Budi</strong> mengembalikan <em>"Atomic Habits"</em> — <span
                            class="text-sm text-gray-500">5 jam lalu</span></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
