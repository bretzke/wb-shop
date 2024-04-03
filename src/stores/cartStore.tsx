import { create } from "zustand";

interface CartProduct {
  quantity: number;
  id: string;
  name: string
  price: number;
  imageUrl: string
}

type StoreProps = {
  state: {
    cart: CartProduct[];
  };
  actions: {
    addProduct: (product: CartProduct) => void;
    removeProductQuantity: (product: CartProduct) => void;
    removeProduct: (productId: string) => void;
  };
};

export const useCartStore = create<StoreProps>((set) => ({
  state: {
    cart: [],
  },
  actions: {
    addProduct: (newProduct: CartProduct) => {
      set((state) => {
        const existingProductIndex = state.state.cart.findIndex(
          (item) => item.id === newProduct.id
        );

        if (existingProductIndex !== -1) {
          const updatedCart = [...state.state.cart];
          updatedCart[existingProductIndex] = newProduct;
          return { state: { ...state, cart: updatedCart } };
        } else {
          return {
            state: {
              ...state,
              cart: [...state.state.cart, newProduct],
            },
          };
        }
      });
    },
    removeProductQuantity: (productToRemoveQuantity: CartProduct) => {
      set((state) => {
        const existingProductIndex = state.state.cart.findIndex(
          (item) => item.id === productToRemoveQuantity.id
        );

        const updatedCart = [...state.state.cart];
        updatedCart[existingProductIndex].quantity -=
          productToRemoveQuantity.quantity;
        return { state: { ...state, cart: updatedCart } };
      });
    },
    removeProduct: (productId: string) => {
      set((state) => {
        const updatedCart = state.state.cart.filter(
          (product) => product.id !== productId
        );
        return { state: { ...state, cart: updatedCart } };
      });
    },
  },
}));
