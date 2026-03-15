<script setup>
    import { onMounted, watch, ref } from 'vue';
    import { useRoute } from 'vue-router';

    import MainProduct from '@/components/product/MainProduct.vue';
    import RelatedProducts from '@/components/product/RelatedProducts.vue';

    import { storeToRefs } from 'pinia';
    import { useProductStore } from '@/store/store';

    const router = useRoute();
    const store = useProductStore();
    const {relatedProducts, mainProduct, isLoading, isError} = storeToRefs(store);
    const {getProductById, getRelatedProducts} = store

    function buy_from_products(id) {
        emits('tell-parent-to-buy', id);
        console.log("From Product View .... we emits to delete id ", id)
    }
    
    onMounted(async () => {
        console.log("Product View is mounted");
        await getProductById(router.params.id)
        await getRelatedProducts(router.params.id)
        console.log("Date are here")
    })

    watch(
        () => router.params.id,
        async (newId) => {
            await getProductById(newId)
            await getRelatedProducts(newId)
        },
        {immediate: true}
    )

</script>
<template>

    <div v-if="isLoading">Loading</div>
    <div v-else-if="isError">Error</div>
    <div v-else-if="!mainProduct">Product not found</div>
    <div v-else>
        <MainProduct 
            :main_product="mainProduct"
        />
    
        <RelatedProducts :products="relatedProducts"/>
    </div>
    

</template>