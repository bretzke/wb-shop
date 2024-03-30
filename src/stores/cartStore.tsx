import { IProduct } from "@/interfaces/IProduct";
import { create } from "zustand";

type ActionsProps = {};

type StoreProps = {
  state: {
    cart: IProduct[];
  };
  actions: ActionsProps;
};

export const useCartStore = create<StoreProps>((set) => ({
  state: {
    cart: [],
  },
  actions: {},
}));
