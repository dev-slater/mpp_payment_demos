import { CheckoutButton } from "@/components/CheckoutButton";

export function StripeCheckoutDemo() {
  return (
    <div className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-zinc-600/40 px-6 py-5">
      <div className="flex items-center gap-5 mb-5 pb-5 border-b border-black/[0.06] dark:border-white/[0.06]">
        <div className="shrink-0 w-12 h-12 rounded border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 dark:text-white">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-white">Stripe Checkout Classic</p>
          <p className="text-xs text-gray-400 dark:text-gray-600 font-mono mt-0.5">SKU-0042</p>
        </div>
        <p className="ml-auto text-sm text-gray-900 dark:text-white">0.50 usd</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">One-time payment · Stripe Checkout</p>
        <CheckoutButton />
      </div>
    </div>
  );
}
