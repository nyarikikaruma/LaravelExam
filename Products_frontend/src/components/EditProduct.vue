<template>
    <div class="container mx-auto mt-8">
      <h1 class="text-2xl font-semibold mb-4">Edit Product</h1>
      <form @submit.prevent="submitForm" class="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <div class="mb-4">
          <label for="productName" class="block text-sm font-medium text-gray-600">Product Name</label>
          <input v-model="productName" type="text" id="productName" name="productName" class="mt-1 p-2 border rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="productCategory" class="block text-sm font-medium text-gray-600">Product Category</label>
          <input v-model="category" type="text" id="productCategory" name="productCategory" class="mt-1 p-2 border rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="productPrice" class="block text-sm font-medium text-gray-600">Product Price</label>
          <input v-model="price" type="number" step="0.01" id="productPrice" name="productPrice" class="mt-1 p-2 border rounded-md w-full">
        </div>
        <div>
          <button @click="editProduct" type="submit" class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Save Changes</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'
  import { useProductsStore } from '../stores/products';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const editDetails = useProductsStore();

  let category = editDetails.product.category;
  let productName = editDetails.product.name;
  let price = editDetails.product.price;
  let id = editDetails.product.id

  async function editProduct() {
    let products = await axios.post(`http://127.0.0.1:8000/api/products/${id}`, {
      name: productName,
      price: price,
      category: category
    });

    router.push({ name: "Home" });
    alert('Product edited successfully.')
  }

  </script>
  
  <style scoped>
  /* Add Tailwind CSS classes or custom styles here */
  </style>
  