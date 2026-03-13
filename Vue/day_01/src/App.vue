<script setup>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
import MainProduct from '@/components/product/MainProduct.vue'
import RelatedProducts from './components/product/RelatedProducts.vue'
import { ref, reactive } from 'vue'

const website_logo = 'ITI_VUE'
const navLinks = ['Home', 'About', 'Products', 'ContactUs']
const main_product = reactive({
  "id": 1,
  "name": "Cozy Sneakers",
  "description": "High-quality sneakers that go with everything you wear.",
  "images": [
    "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ],
  "badge": "NEW",
  "price": 120,
  "discount": 20,
  "tags": ["Fashion", "Casual", "Sport"],
  "stock": 3
})

const products = [
  {
    "id": 2,
    "name": "Running Shoes",
    "price": 90,
    "discount": 10,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 3,
    "name": "Casual Boots",
    "price": 150,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 4,
    "name": "Flip Flops",
    "price": 30,
    "discount": 50,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
  }
]

function buyMainProduct() {
  if (main_product.stock > 0) {
    console.log("run")
    main_product.stock--
  };
}

</script>

<template>
  <NavbarComponent :logo_text="website_logo" :links="navLinks"/>
  <MainProduct 
    :main_product="main_product"
    @buy-product="buyMainProduct"
    />

    <RelatedProducts :products="products"/>

</template>

<style scoped>
</style>
