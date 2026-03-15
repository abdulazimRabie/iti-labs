<script setup>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
import { ref, reactive } from 'vue'

const website_logo = 'ITI_VUE'
const navLinks = ['home', 'about', 'products']
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

const products  = reactive([
  {
    "id": 1,
    "name": "Cozy Sneakers",
    "description": "High-quality sneakers that go with everything you wear.",
    "images": ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"],
    "badge": "NEW",
    "price": 120,
    "discount": 20,
    "stock": 10,
    "tags": ["Fashion", "Casual", "Sport"]
  },
  {
    "id": 2,
    "name": "Running Shoes",
    "description": "Built for speed and comfort on any terrain.",
    "images": ["https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"],
    "badge": "",
    "price": 90,
    "discount": 10,
    "stock": 0,
    "tags": ["Sport", "Running"]
  },
  {
    "id": 3,
    "name": "Casual Boots",
    "description": "Rugged boots for everyday adventures.",
    "images": ["https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"],
    "badge": "SALE",
    "price": 150,
    "discount": 0,
    "stock": 8,
    "tags": ["Casual", "Winter"]
  },
  {
    "id": 4,
    "name": "Flip Flops",
    "description": "Light and breezy for sunny days.",
    "images": ["https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"],
    "badge": "",
    "price": 30,
    "discount": 50,
    "stock": 20,
    "tags": ["Summer", "Casual"]
  }
])

function decreaseStock() {
  if (main_product.stock > 0) {
    console.log("run")
    main_product.stock--
  };
}

function buyFromProducts(id) {
  if (id) {
    products.forEach(product => {
      if (product.id == id && product.stock > 0) {
        product.stock--;
      }
    })
  }

  console.log("Parent recieved data from productView id = ", id)
}

</script>

<template>
  <NavbarComponent :logo_text="website_logo" :links="navLinks"/>
  <RouterView 
    :products="products" 
    :main_product="main_product" 
    @buy-emit="decreaseStock"
    @tell-parent-to-buy="buyFromProducts"
    />
</template>
