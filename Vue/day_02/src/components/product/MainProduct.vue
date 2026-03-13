<script setup>
import { onMounted } from 'vue';
import ComponentFigure from './ComponentFigure.vue';

const props = defineProps({
    main_product: Object
})

const emit = defineEmits(['buyProduct']);


function buy() {
    emit('buyProduct', props.main_product.id);
}

onMounted(() => {
    console.log(props.main_product)
})

</script>

<template>

    <div class="w-3/4 mx-auto my-20">
        <div class="card lg:card-side bg-base-100 shadow-sm">
            <!-- <figure>
                <img
                :src="props.main_product.images[0]"
                alt="Album" />
            </figure> -->

            <ComponentFigure :images="props.main_product.images"/>

            
            <div class="card-body indicator">
                <span v-if="props.main_product.badge" class="indicator-item badge badge-secondary">{{props.main_product.badge}}</span>
                <div class="flex gap-2">
                    <div class="badge badge-primary" v-for="tag in props.main_product.tags">
                        {{tag}}
                    </div>
                </div>

                <h2 class="card-title text-5xl my-5">{{props.main_product.name}}</h2>
                <p class="text-lg">{{props.main_product.description}}</p>

                <div>
                    <span>Stock : {{props.main_product.stock}}</span>
                </div>


                <h3 :class="props.main_product.discount > 0 ? 'line-through text-xl' : 'text-3xl'">{{props.main_product.price}}$</h3>
                <h3 v-if="props.main_product.discount > 0" class="text-3xl">{{ props.main_product.price * (props.main_product.discount/100) }}$</h3>

                <button 
                    class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" 
                    :disabled="props.main_product.stock <= 0"
                    @click="buy"
                    >
                        Buy Now
                    </button>
            </div>
        </div>
    </div>

</template>