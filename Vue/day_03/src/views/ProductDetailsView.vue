<script setup>
    import MainProduct from '@/components/product/MainProduct.vue';
    import RelatedProducts from '@/components/product/RelatedProducts.vue';

    import { useProductStore } from '@/store/store';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const router = useRoute()
    const mainProduct = ref()
    const relatedProducts = ref([])

    const store = useProductStore();

    onMounted(() => {

    })

    watch(
        () => router.params,
        (newId) => {

        },
        {immediate: true}
    )
</script>

<template>

    

</template>