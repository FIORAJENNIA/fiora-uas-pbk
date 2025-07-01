import AddBuku from '@/views/buku/AddBuku.vue'
import EditBuku from '@/views/buku/EditBuku.vue'
import Buku from '@/views/buku/Buku.vue'

export default [
    {path: '/buku', name: 'buku', component: Buku},
    {path: '/buku/add', name: 'addbuku', component: AddBuku},
    {path: '/buku/edit/:id', name: 'editbuku', component: EditBuku},
]