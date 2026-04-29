<script setup>
    const props = defineProps({
        data: String
    })

</script>
<template>
    <h1>Hello from Vue {{props.data}}🚀</h1>
</template>