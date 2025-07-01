import AddAnggota from '@/views/anggota/AddAnggota.vue'
// import EditAnggota from '@/views/anggota/EditAnggota.vue'
import Anggota from '@/views/anggota/Anggota.vue'

export default [
    {path: '/anggota', name: 'anggota', component: Anggota},
    {path: '/anggota/add', name: 'addanggota', component: AddAnggota},
    // {path: '/anggota/edit/:id', name: 'editanggota', component: EditAnggota},
]