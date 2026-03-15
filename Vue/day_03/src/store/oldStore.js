import { ref } from 'vue';
import { defineStore } from 'pinia'

export const useProductStore = defineStore('ProductStore', () => {
    const API = "http://localhost:3000/products";

    // states
    const products = ref();
    const mainProduct = ref();
    const relatedProducts = ref([]);
    const cart = ref([]);
    const isLoading = ref(true);
    const isError = ref(false);

    // getters 
    const cartItemsCount = () => {
        return cart.value.length;
    }

    // actions
    const getAllProducts = async () => {
        try {
            isLoading.value = true;
            const response = await fetch(API);
    
            if (response.ok) {
                products.value = await response.json();
            } else {
                throw new Error("Something Went Wrong!");
            }
        } catch (error) {
            console.log("[ERROR] : cannot handle fetch all products!");
            isError.value = true;

        } finally {
            isLoading.value = false;
        }
    }

    const getProductById = async(id) => {
        console.log(id);
        try {
            isLoading.value = true;
            const response = await fetch(`${API}/${id}`);
    
            if (response.ok) {
                mainProduct.value = await response.json();
            } else {
                throw new Error("Cannot get product by id");
            }
        } catch (error) {
            console.log("[ERROR] : ", error.message);
            isError.value = true;
            
        } finally {
            isLoading.value = false;
        }

        return mainProduct.value;
    }
    
    const getRelatedProducts = async(id) => {
        try {
            isLoading.value = true;
            const response = await fetch(`${API}`);
    
            if (response.ok) {
                const data = await response.json();
                relatedProducts.value = data.filter(product => product.id != id);
            } else {
                throw new Error("Cannot get related products");
            }
        } catch (error) {
            console.log("[ERROR] : ", error.message);
            isError.value = true;

        } finally {
            isLoading.value = false;
        }
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
