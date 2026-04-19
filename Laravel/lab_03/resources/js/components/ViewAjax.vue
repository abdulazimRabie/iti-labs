<script setup>
import axios from "axios";

export default {
    props: ["id"],

    data() {
        return {
            show: false,
            post: {},
        };
    },

    methods: {
        fetchPost() {
            axios
                .get(`/api/posts/${this.id}`)
                .then((res) => {
                    this.post = res.data;
                    this.show = true;
                })
                .catch((err) => {
                    console.error(err);
                });
        },

        closeModal() {
            this.show = false;
        },
    },
};
</script>

<template>
    <div>
        <!-- Button -->
        <button
            @click="fetchPost"
            class="mt-2 bg-blue-500 text-white px-3 py-1"
        >
            View Preview
        </button>

        <!-- Modal -->
        <div
            v-if="show"
            class="fixed inset-0 bg-black/50 flex items-center justify-center"
        >
            <div class="bg-white p-6 border-2 border-black w-96">
                <h2 class="text-xl font-bold">
                    {{ post.title }}
                </h2>

                <p class="mt-2 text-gray-700">
                    {{ post.content }}
                </p>

                <p class="mt-2 text-sm text-gray-500">
                    {{ post.created_at }}
                </p>

                <button
                    @click="closeModal"
                    class="mt-4 bg-red-500 text-white px-3 py-1"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</template>
