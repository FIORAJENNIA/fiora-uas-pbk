import { defineStore } from "pinia";
import axios from "axios";

export const useBukuStore = defineStore('buku', {
    state: () => ({
        buku: []
    }),
    getters: {
        // makanan: (state) => {
        //     return state.menus.filter((menu) => menu.category.toLowerCase() === 'makanan')
        // },
        // minuman: (state) => {
        //     return state.menus.filter((menu) => menu.category.toLowerCase() === 'minuman')
        // }
    },
    actions: {
        async getBuku() {
            try {
                const res = await axios.get('https://server-fiora.vercel.app/buku')
                this.buku = res.data
            } catch (error) {
                console.error("Gagal Fetch Data", error)
            }
        },

        async addBuku(buku) {
            try {
                await this.getBuku()

                let maxId = 0
                if (this.buku.length > 0) {
                    maxId = Math.max(...this.buku.map(item => Number(item.id)))
                }

                const newBuku = {
                    id: String(maxId + 1),
                    ...buku
                }

                const res = await axios.post('https://server-fiora.vercel.app/buku', newBuku)
                this.buku.push(res.data)

            } catch (error) {
                console.error("Gagal Menambahkan Data", error)
            }
        },
        async updateBuku(id, updatedBuku) {
            try {
                await axios.put(`https://server-fiora.vercel.app/buku/${id}`, updatedBuku)
                const index = this.buku.findIndex(item => item.id === id)
                if (index !== -1) {
                    this.buku[index] = { id, ...updatedBuku }  
                }
            } catch (error) {
                console.error("Gagal Update Menu", error)
            }
        },
        async deleteBuku(id){
            try {
                await axios.delete(`https://server-fiora.vercel.app/buku/${id}`)
                console.log("berhasil delete")
                this.getBuku()
            } catch (error) {
                console.log("gagal",error)
            }
        }

    }
})