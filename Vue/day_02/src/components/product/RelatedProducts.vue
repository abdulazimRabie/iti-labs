<script setup>
import ProductCard from '@/components/product/ProductCard.vue';

const props = defineProps({
    products: []
})

</script>

<template>

<div class="m-10">
    <h2 class="text-5xl">Related Products : </h2>

    <div class="mt-3 flex flex-wrap gap-3">
        <ProductCard v-for="product in products" :product="product"/>
    </div>
</div>

</template>