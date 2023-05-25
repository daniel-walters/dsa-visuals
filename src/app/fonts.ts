import { Roboto, Roboto_Slab } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const robotoSlab = Roboto_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
