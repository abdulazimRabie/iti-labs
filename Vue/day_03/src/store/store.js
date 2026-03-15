import { ref } from 'vue';
import { defineStore } from 'pinia'
import { useFetch } from '@/composables/useFetch';

export const useProductStore = defineStore('ProductStore', () => {
    const API = "http://localhost:3000/products";

    const { isLoading, isError, fetchData } = useFetch();

    // states
    const products = ref();
    const mainProduct = ref();
    const relatedProducts = ref([]);
    const cart = ref([]);
    // const isLoading = ref(true);
    // const isError = ref(false);

    // getters 
    const cartItemsCount = () => {
        return cart.value.length;
    }

    // actions
    const getAllProducts = async () => {
        products.value = await fetchData(API);
    }

    const getProductById = async(id) => {
        console.log(id);
        mainProduct.value = await fetchData(`${API}/${id}`);

        return mainProduct.value;
    }
    
    const getRelatedProducts = async(id) => {
        const data = await fetchData(API);
        if (data) relatedProducts.value = data.filter(p => p.id != id);
    }

    const buyProduct = async(id, quantity) => {
        console.log(id);

        const product  = await getProductById(id);
        if (product.stock > 0 && product.stock >= quantity) product.stock -= quantity;


        try {
            isLoading.value = true;
            const response = await fetch(`${API}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"stock": product.stock}),
            });
    
            if (response.ok) {
                mainProduct.value = await response.json();
            } else {
                throw new Error("This product is not availabe to buy");
            }
        } catch (error) {
            console.log("[ERROR] : ", error.message);
            isError.value = true;
            
        } finally {
            isLoading.value = false;
        }

        return mainProduct.value;
    }

    const addToCart = async (product) => {
        const alreadyInCart = cart.value.find(item => item.product.id === product.id)
    
        if (alreadyInCart) {
            alreadyInCart.quantity++
        } else {
            cart.value.push({ product, quantity: 1 })
        }
    }
    
    const removeFromCart = async (id) => {
        cart.value = cart.value.filter(item => item.product.id !== id)
    }



    return {
        products,
        cart,
        mainProduct,
        relatedProducts,
        isLoading,
        isError,

        getAllProducts,
        getProductById,
        getRelatedProducts,

        buyProduct,
        addToCart,
        removeFromCart,
        cartItemsCount
    }
})
