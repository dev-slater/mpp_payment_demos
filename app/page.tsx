import { Header } from "@/components/Header";
import { StripeCheckoutDemo } from "@/components/StripeCheckoutDemo";
import { MppDemo } from "@/components/MppDemo";
import { StripeCryptoDemo } from "@/components/StripeCryptoDemo";
import { StripeSptDemo } from "@/components/StripeSptDemo";

export default function PaymentDemos() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="flex flex-1 flex-col px-8 py-24 mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white [text-wrap:balance]">
            Payment Demos
          </h1>
          <p className="mb-16 text-gray-500 dark:text-gray-400 leading-relaxed">
            Experiments with Stripe and Tempo MPP. This is a sandbox — things
            will break and change.
          </p>

          <div className="flex flex-col gap-4">
            {/* Stripe Checkout — live */}
            <StripeCheckoutDemo />

            {/* MPP — live */}
            <MppDemo />

            {/* Stripe Machine Payments · Crypto — live */}
            <StripeCryptoDemo />

            {/* Stripe Machine Payments · Card (SPT) — pending profile activation */}
            <StripeSptDemo />

          </div>
        </div>
      </main>

      <footer className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-8 py-6">
          <span className="text-xs text-gray-400 dark:text-gray-600">
            Tempo MPP Payment Demos
          </span>
        </div>
      </footer>
    </div>
  );
}
