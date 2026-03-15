import { ref } from 'vue';

export function useFetch() {
    const isLoading = ref(false);
    const isError = ref(false);
    const errorMessage = ref(null);

    async function fetchData(url, options = {}) {
        console.log("[COMPOSABLES] : ARE FETCHING DATA NOW");
        try {
            isLoading.value = true;
            isError.value = false;

            const response = await fetch(url, options);

            if (!response.ok) throw new Error(`Request failed: ${response.status}`);
            const data = await response.json();
            console.log(data)
            return data;

        } catch (error) {
            isError.value = true;
            errorMessage.value = error.message;
            console.log("[ERROR] : ", error.message);
            return null;

        } finally {
            isLoading.value = false;
            console.log("[COMPOSABLES] : OPERATION DONE !!!");
        }
    }

    return { isLoading, isError, errorMessage, fetchData }
}