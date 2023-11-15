<template>
    <div class="container mx-auto mt-8">
      <h1 class="text-2xl font-semibold mb-4">Product Details</h1>
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-amber-300">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ productValues.product.name }}</div>
                <p class="text-gray-700 text-base">
                {{ productValues.product.category }}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <RouterLink to="/"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Home</button></RouterLink>
                <RouterLink :to="{name: 'edit', params: {id: productValues.product.id}}"><button class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-green-300 mr-2 mb-2">Edit Product</button></RouterLink>
                <button @click="deleteProduct" class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-red-300 mr-2 mb-2">Delete Product</button>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { useProductsStore } from '../stores/products';
  import axios from 'axios';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const productValues = useProductsStore();

  async function deleteProduct() {
        let products = await axios.delete(`http://127.0.0.1:8000/api/products/${productValues.product.id}`);
        alert('Item deleted successfully.');
        router.push({name: 'Home'})

  }

  </script>
  
  <style scoped>
  /* Add Tailwind CSS classes or custom styles here */
  </style>
  