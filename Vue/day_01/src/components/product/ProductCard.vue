<script setup>

const props = defineProps({
    product: Object
})

</script>

<template>

    <div class="card bg-base-100 w-96 shadow-sm">
        <figure style="height: 300px; width: 300px;">
            <img
            :src="props.product.image"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{props.product.name}}</h2>
            <span :class="props.product.discount > 0 ? 'text-2xl line-through' : 'text-3xl'">{{props.product.price}} $</span>
            <span class="text-3xl" v-if="props.product.discount >> 0">{{props.product.price * (props.product.discount/100)}} $</span>
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