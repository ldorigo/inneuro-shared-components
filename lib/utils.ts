import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a decimal number consistently across the application to avoid hydration issues.
 * Always uses a dot as decimal separator and rounds to the specified number of decimal places.
 * Use this ONLY for decimal numbers (e.g. 123.45) - for integers use toLocaleString()
 *
 * @param value - The decimal number to format
 * @param decimals - Number of decimal places (default: 1)
 * @returns A string representation of the number with consistent formatting
 */
export function formatDecimal(value: number, decimals: number = 1): string {
  return value.toFixed(decimals);
}

/**
 * Formats an integer number consistently across the application to avoid hydration issues.
 * Uses thousand separators but no decimal places.
 *
 * @param value - The integer to format
 * @returns A string representation of the integer with consistent formatting
 */
export function formatInteger(value: number): string {
  return Math.round(value).toLocaleString("en-US", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
}
