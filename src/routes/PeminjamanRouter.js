import AddPeminjaman from '@/views/peminjaman/AddPeminjaman.vue'
// import EditPeminjaman from '@/views/peminjaman/EditPeminjaman.vue'
import Peminjaman from '@/views/peminjaman/Peminjaman.vue'

export default [
    {path: '/peminjaman', name: 'peminjaman', component: Peminjaman},
    {path: '/peminjaman/add', name: 'addpeminjaman', component: AddPeminjaman},
    // {path: '/peminjaman/edit/:id', name: 'editpeminjaman', component: EditPeminjaman},
]