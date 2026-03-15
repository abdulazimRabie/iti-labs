<script setup>
    import ProductCard from '@/components/product/ProductCard.vue';
    import { onMounted } from 'vue';
    import { useProductStore } from '@/store/store';
    import { storeToRefs } from 'pinia';

    const store = useProductStore();
    const {products, isLoading, isError } = storeToRefs(store);
    const {getAllProducts} = store
    
    onMounted(async () => {
        await getAllProducts();
    })

</script>

<template>

    <div v-if="isLoading">Products are loading</div>
    <div v-else-if="isError">Cannot fetch the products</div>
    <div v-else>
        <div class="m-5 flex flex-wrap gap-3">
            <ProductCard v-for="product in products" :product="product"/>
        </div>
    </div>


</template>