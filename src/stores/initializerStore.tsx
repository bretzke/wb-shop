"use client";
import { useRef } from "react";
import { useCartStore } from "./cartStore";
import { getUserCart } from "@/services/cartLocalStorage";

const InitializerStore = () => {
  const initializer = useRef(false);

  if (initializer.current) {
    return;
  }

  useCartStore.setState({
    state: { cart: getUserCart() },
  });
  initializer.current = true;

  return null;
};

export default InitializerStore;
