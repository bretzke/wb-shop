import { ICartProduct } from "@/interfaces/ICartProduct";

const USER_CART_KEY = "@wb-shop:user-cart";

export const saveUserCart = (cartToSave: ICartProduct[]) => {
  localStorage.setItem(USER_CART_KEY, JSON.stringify(cartToSave));
};

export const getUserCart = (): ICartProduct[] => {
  if (typeof localStorage !== "undefined") {
    const cartInString = localStorage.getItem(USER_CART_KEY);
    if (cartInString) {
      return JSON.parse(cartInString);
    }
  }

  return [];
};
