import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
    id: 'products',
  state: () => ({
      product: {
        id: '',
        name:  '',
        category: '',
        price: 0
    }
  }),
  actions: {
    
  }
})