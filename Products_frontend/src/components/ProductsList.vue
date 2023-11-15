<template>
    <div class="container mx-auto mt-8">
      <div class="flex justify-end">
          <RouterLink :to="{name:'create' }"><button @click="editProduct" type="submit" class="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">Add Product</button></RouterLink>
        </div>
      <h1 class="text-2xl font-semibold mb-4">Product List</h1>
        <div v-for="product in items" :key="index" class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ product.name }}</div>
                <p class="text-gray-700 text-base">
                {{ product.category }}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <RouterLink :to="{name: 'product', params:{id: product.id }}"><button @click="changeState(product.id, product.name, product.category, product.price)" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Open product</button></RouterLink>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'
  import { ref, onMounted } from 'vue'
  import {useProductsStore} from '../stores/products'
  let items = ref([]);
  onMounted(async () => {

      let products = await axios.get('http://127.0.0.1:8000/api/products');

      items.value = products.data;

      console.log(products.data);

    })

  function changeState(id, itemName, category, price) {
    const productValues = useProductsStore();
      productValues.product.id = id;
      productValues.product.name = itemName;
      productValues.product.category = category;
      productValues.product.price = price;

    }
  </script>
  
  <style scoped>
  /* Add Tailwind CSS classes or custom styles here */
  </style>
  