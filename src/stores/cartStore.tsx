import { ICartProduct } from "@/interfaces/ICartProduct";
import { saveUserCart } from "@/services/cartLocalStorage";
import { create } from "zustand";

type StoreProps = {
  state: {
    cart: ICartProduct[];
  };
  actions: {
    addProduct: (product: ICartProduct) => void;
    removeProductQuantity: (product: ICartProduct) => void;
    removeProduct: (productId: string) => void;
  };
};

export const useCartStore = create<StoreProps>((set) => ({
  state: {
    cart: [],
  },
  actions: {
    addProduct: (newProduct: ICartProduct) => {
      set((state) => {
        const existingProductIndex = state.state.cart.findIndex(
          (item) => item.id === newProduct.id
        );

        if (existingProductIndex !== -1) {
          const updatedCart = [...state.state.cart];
          updatedCart[existingProductIndex] = newProduct;
          saveUserCart(updatedCart);
          return { state: { ...state, cart: updatedCart } };
        } else {
          const newCart = [...state.state.cart, newProduct];
          saveUserCart(newCart);
          return {
            state: {
              ...state,
              cart: newCart,
            },
          };
        }
      });
    },
    removeProductQuantity: (productToRemoveQuantity: ICartProduct) => {
      set((state) => {
        const existingProductIndex = state.state.cart.findIndex(
          (item) => item.id === productToRemoveQuantity.id
        );

        const updatedCart = [...state.state.cart];
        updatedCart[existingProductIndex].quantity -=
          productToRemoveQuantity.quantity;
        saveUserCart(updatedCart);
        return { state: { ...state, cart: updatedCart } };
      });
    },
    removeProduct: (productId: string) => {
      set((state) => {
        const updatedCart = state.state.cart.filter(
          (product) => product.id !== productId
        );
        saveUserCart(updatedCart);
        return { state: { ...state, cart: updatedCart } };
      });
    },
  },
}));
