import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function catchError(err: unknown) {
  // Check for Next.js Redirect error
  if (err instanceof Error && (err as any).digest?.startsWith("NEXT_REDIRECT")) {
    throw err;
  }

  console.error("Server Error:", err);

  if (err instanceof Error) {
    return {
      message: err.message,
    };
  }

  return {
    message: "Une erreur inattendue est survenue.",
  };
}
