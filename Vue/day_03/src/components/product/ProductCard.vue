<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    product: Object
})

</script>

<template>

    <div class="card bg-base-100 w-96 shadow-sm">
        <figure style="height: 300px">
            <img
            :src="props.product.images[0]"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{props.product.name}}</h2>
            <div class="h-30 flex gap-4 items-center">
                <span :class="props.product.discount > 0 ? 'text-2xl line-through' : 'text-3xl'">{{props.product.price}} $</span>
                <span class="text-3xl" v-if="props.product.discount >> 0">{{props.product.price * (props.product.discount/100)}} $</span>
                <div v-if="props.product.stock <= 0" class="badge badge-dash badge-error">Out of stock</div>
            </div>
            <!-- <div class="mt-6"> -->
                <RouterLink 
                    v-if="props.product.stock > 0"
                    :to="{ name: 'products', params: { id: props.product.id } }" 
                    class="btn btn-primary btn-block">View Product</RouterLink>

                <RouterLink 
                    v-else
                    :to="{ name: 'products', params: { id: props.product.id } }" 
                    class="btn btn-secondary btn-block">View Product</RouterLink>

            <!-- </div> -->
        </div>
    </div>

</template>

<!-- {
    "id": 2,
    "name": "Running Shoes",
    "price": 90,
    "discount": 10,
    "image": "https://via.placeholder.com/150"
} -->