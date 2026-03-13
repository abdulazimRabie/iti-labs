<script setup>

const props = defineProps({
    images: []
})

</script>

<template>

    <!-- <div> -->
        <div class="carousel w-full">
    
            <div v-for="(image, index) in props.images" :id="`slide`+index" class="carousel-item relative w-full">
                <img
                :src="image"
                class="w-full" />
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a  v-if="index == 0" :href="'#slide'+String(images.length-1)" class="btn btn-circle">❮</a>
                    <a  v-else :href="'#slide'+String(index-1)" class="btn btn-circle">❮</a>
    
                    <a  v-if="index == images.length-1" href="#slide0" class="btn btn-circle">></a>
                    <a  v-else :href="'#slide'+String(index+1)" class="btn btn-circle">></a>
                </div>
            </div>
        </div>
    <!-- </div> -->

</template>