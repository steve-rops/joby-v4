import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "GBP" }).format(
    value
  );

export const isNewJob = (dateString) => {
  const date = new Date(dateString);
  const currentDate = new Date();
  const differenceInDays = Math.floor(
    (currentDate - date) / (1000 * 60 * 60 * 24)
  );

  return differenceInDays <= 7;
};
