"use client";
import { useRef } from "react";
import { useCartStore } from "./cartStore";

const InitializerStore = () => {
  const initializer = useRef(false);

  if (initializer.current) {
    return;
  }

  useCartStore.setState({
    state: { cart: [] },
  });
  initializer.current = true;

  return null;
};

export default InitializerStore;
