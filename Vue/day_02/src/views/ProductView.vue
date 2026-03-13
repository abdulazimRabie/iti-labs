<script setup>
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';

import MainProduct from '@/components/product/MainProduct.vue';
import RelatedProducts from '@/components/product/RelatedProducts.vue';

    const props = defineProps({
        products: []
    })

    const emits = defineEmits(['tell-parent-to-buy'])

    const router = useRoute();

    onMounted(() => {
        console.log("HI");
        console.log(router.params);
        console.log(mainProduct);
    })

    const mainProduct = ref()

    const relatedProducts = ref([])


    function buy_from_products(id) {
        emits('tell-parent-to-buy', id);
        console.log("From Product View .... we emits to delete id ", id)
    }

    watch(
        () => router.params,
        (newId) => {
            mainProduct.value = props.products.find(product => product.id == router.params.id);
            relatedProducts.value = props.products.filter(product => product.id != router.params.id)
        },
        {immediate: true}
    )

</script>
<template>

    <MainProduct 
        :main_product="mainProduct" 
        @buy-product="buy_from_products"
    />

    <RelatedProducts :products="relatedProducts"/>
    

</template>