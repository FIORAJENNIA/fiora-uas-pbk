<script setup>
import { ref } from 'vue'

const openParent = ref('')

const menus = [
  {
    name: 'Dashboard',
    key: 'dashboard',
    submenus: [],
    path: 'dashboard'
  },
  {
    name: 'Buku',
    key: 'buku',
    submenus: [
      { name: 'Tambah Buku', path: 'addbuku' },
      { name: 'Daftar Buku', path: 'buku' }
    ]
  },
  {
    name: 'Anggota',
    key: 'anggota',
    submenus: [
      { name: 'Tambah Anggota', path: 'addanggota' },
      { name: 'Daftar Anggota', path: 'anggota' }
    ]
  },
  {
    name: 'Peminjaman',
    key: 'peminjaman',
    submenus: [
      { name: 'Tambah Peminjaman', path: 'addpeminjaman' },
      { name: 'Daftar Peminjaman', path: 'peminjaman' }
    ]
  },
  {
    name: 'Laporan',
    key: 'laporan',
    submenus: [],
    path: 'laporan'
  }
]

function toggleParent(key) {
  openParent.value = openParent.value === key ? '' : key
}
</script>

<template>
  <aside class="w-64 bg-gradient-to-b from-pink-900 via-pink-800 to-pink-700 text-white shadow-2xl min-h-screen fixed top-0 left-0 z-50 border-r border-pink-600">
    <!-- Header -->
    <div class="p-6 border-b border-pink-500 flex items-center gap-2">
      <svg class="w-8 h-8 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 4v16h2v-7h8v7h2V4H6zm2 7V6h8v5H8z"/>
      </svg>
      <h2 class="text-2xl font-bold tracking-wide text-rose-300">PerpusKu</h2>
    </div>

    <!-- Navigation Menu -->
    <nav class="p-4 space-y-2">
      <div v-for="parent in menus" :key="parent.key" class="group">
        <!-- Direct Link -->
        <RouterLink v-if="parent.submenus.length === 0" :to="{ name: parent.path }"
          :class="[ 
            'flex items-center w-full px-4 py-3 rounded-lg border border-pink-700 bg-pink-800 hover:bg-rose-500 hover:text-white transition transform hover:scale-105 shadow',
            $route.name === parent.path ? 'bg-rose-500 border-rose-400 shadow-lg text-white' : 'text-pink-100'
          ]">
          <span class="font-medium">{{ parent.name }}</span>
        </RouterLink>

        <!-- With Submenus -->
        <div v-else class="space-y-1">
          <button @click="toggleParent(parent.key)"
            class="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-pink-700 bg-pink-800 hover:bg-rose-500 hover:text-white transition transform hover:scale-105 shadow focus:outline-none focus:ring-2 focus:ring-rose-400"
            :class="{ 'bg-rose-500 text-white border-rose-400': openParent === parent.key }">
            <span class="font-medium">{{ parent.name }}</span>
            <span class="transition-transform duration-200" :class="{ 'rotate-180': openParent === parent.key }">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </span>
          </button>

          <!-- Submenu Items -->
          <div v-if="openParent === parent.key" class="ml-4 space-y-1 animate-fade-in">
            <RouterLink v-for="submenu in parent.submenus" :key="submenu.path" :to="{ name: submenu.path }"
              :class="[ 
                'flex items-center w-full px-4 py-2 text-sm rounded-md border border-pink-700 bg-pink-800/60 hover:bg-rose-400 hover:text-white transition transform hover:translate-x-1 shadow relative',
                $route.name === submenu.path ? 'text-rose-300' : 'text-pink-100'
              ]">
              <span class="relative z-10">{{ submenu.name }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Footer -->
    <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-pink-600">
      <div class="text-xs text-pink-300 text-center">© 2025 PerpusKu</div>
    </div>
  </aside>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
