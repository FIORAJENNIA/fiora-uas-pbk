import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useBukuStore } from '@/stores/BukuStore'
import axios from 'axios'

vi.mock('axios')

describe('deleteBuku', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useBukuStore()
    store.getBuku = vi.fn()
  })

  it('memanggil axios.delete dan getBuku saat berhasil', async () => {
    axios.delete.mockResolvedValue({})

    await store.deleteBuku(1)

    expect(axios.delete).toHaveBeenCalledWith('http://localhost:3000/buku/1')
    expect(store.getBuku).toHaveBeenCalled()
  })

  it('menangani error saat axios.delete gagal', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    axios.delete.mockRejectedValue(new Error('Gagal'))

    await store.deleteBuku(999)

    expect(consoleSpy).toHaveBeenCalledWith('gagal', expect.any(Error))
    consoleSpy.mockRestore()
  })
})
