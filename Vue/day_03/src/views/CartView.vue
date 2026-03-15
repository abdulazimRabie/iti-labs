<script setup>
import { computed } from 'vue';
import { useProductStore } from '@/store/store';
import { storeToRefs } from 'pinia';
import CartItem from '@/components/cart/CartItem.vue';

const store = useProductStore();
const { cart } = storeToRefs(store);
const { buyProduct, removeFromCart } = store;

const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => {
        const discounted = item.product.price * (1 - item.product.discount / 100);
        return sum + discounted * item.quantity;
    }, 0)
)

async function buyAll() {
    for (const item of cart.value) {
        await buyProduct(item.product.id, item.quantity)
    }
    cart.value = []
}
</script>

<template>
    <div class="w-3/4 mx-auto my-20">

        <h1 class="text-4xl font-bold mb-10">Your Cart</h1>

        <div v-if="cart.length === 0" class="text-center text-gray-400 text-xl py-20">
            Your cart is empty.
            <RouterLink to="/products" class="btn btn-primary mt-6 block w-fit mx-auto">
                Browse Products
            </RouterLink>
        </div>

        <div v-else>
            <CartItem 
                v-for="item in cart" 
                :key="item.product.id" 
                :item="item"
            />

            <div class="divider"></div>
            <div class="flex justify-between items-center mt-6">
                <div>
                    <p class="text-lg">Total items: <span class="font-bold">{{ cart.length }}</span></p>
                    <p class="text-2xl font-bold">Grand Total: {{ totalPrice }}$</p>
                </div>
                <div class="flex gap-4">
                    <button class="btn btn-error btn-outline" @click="cart = []">Clear Cart</button>
                    <button class="btn btn-success btn-lg" @click="buyAll">Buy All</button>
                </div>
            </div>
        </div>

    </div>
</template>