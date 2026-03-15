<script setup>
    import { useProductStore } from '@/store/store';

    const props = defineProps({
        item: Object
    })

    const store = useProductStore();
    const { addToCart, removeFromCart, buyProduct } = store;

    function increase() {
        addToCart(props.item.product)
    }

    function decrease() {
        if (props.item.quantity > 1) {
            props.item.quantity--  
        } else {
            removeFromCart(props.item.product.id)
        }
    }

    function buy() {
        buyProduct(props.item.product.id, props.item.quantity)
        removeFromCart(props.item.product.id)
    }
</script>

<template>
    <div class="card card-side bg-base-100 shadow-sm mb-4">
        <figure class="w-40">
            <img :src="item.product.images[0]" :alt="item.product.name" class="h-full object-cover"/>
        </figure>

        <div class="card-body flex flex-row items-center justify-between">
            <div>
                <h2 class="card-title">{{ item.product.name }}</h2>
                <p class="text-sm text-gray-500">{{ item.product.price }}$ each</p>
                <p class="text-lg font-bold mt-1">
                    Total: {{ (item.product.price * (1 - item.product.discount / 100) * item.quantity).toFixed(2) }}$
                </p>
            </div>


            <div class="flex items-center gap-3">
                <button class="btn btn-sm btn-outline" @click="decrease">−</button>
                <span class="text-lg font-semibold w-6 text-center">{{ item.quantity }}</span>
                <button 
                    class="btn btn-sm btn-outline"
                    :disabled="item.quantity >= item.product.stock"
                    @click="increase"
                >+</button>
            </div>

 
            <div class="flex flex-col gap-2">
                <button class="btn btn-success btn-sm" @click="buy">Buy Now</button>
                <button class="btn btn-error btn-sm btn-outline" @click="removeFromCart(item.product.id)">Remove</button>
            </div>
        </div>
    </div>
</template>