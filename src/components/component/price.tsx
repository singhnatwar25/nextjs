/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/QrXRYJvWXyx
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Rubik } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Price() {
  return (
    <>
      <header className="w-full bg-gradient-to-r from-[#4776E6] to-[#8E54E9] shadow-lg">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link className="flex items-center gap-2 text-lg font-semibold text-white" href="/">
            <CloudIcon className="h-6 w-6 animate-bounce" />
            <span className="sr-only">D3cloud</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link className="hover:underline hover:text-gray-200 transition-colors" href="/">
              Home
            </Link>
            <Link className="hover:underline hover:text-gray-200 transition-colors" href="/Service">
              Services
            </Link>
            <Link aria-current="page" className="hover:underline hover:text-gray-200 transition-colors" href="/Price">
              Pricing
            </Link>
            <Link className="hover:underline hover:text-gray-200 transition-colors" href="/About">
              About
            </Link>
            <Link className="hover:underline hover:text-gray-200 transition-colors" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="text-white border-white hover:bg-white hover:text-[#4776E6]" size="sm" variant="outline">
              Sign In
            </Button>
            <Button className="bg-white text-[#4776E6] hover:bg-gray-200" size="sm">
              Get Started
            </Button>
            <Button className="text-white" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
        </div>
      </header>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-white">
        <header className="container mx-auto space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] animate-fadeIn">
                Pricing
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl animate-fadeIn delay-200">
                Discover our flexible pricing options to fit your business needs.
              </p>
              <div className="space-x-4 mt-6 animate-fadeIn delay-400">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#4776E6] shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 animate-fadeIn delay-600">
              <img
                alt="Pricing"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover animate-zoomIn"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </header>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-white">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-fadeIn">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
              <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fadeIn delay-200">
                Choose the plan that best fits your business needs. All plans include 24/7 support and a 30-day
                money-back guarantee.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 animate-fadeIn delay-400">
            <div className="grid gap-6 bg-white p-6 rounded-lg shadow-lg text-[#4776E6] animate-zoomIn">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#00b894] p-2 text-white animate-bounce">
                  <CloudIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Starter</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Perfect for small businesses and startups.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  1 GB RAM
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  20 GB SSD Storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  1 vCPU
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  1 TB Bandwidth
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  24/7 Support
                </li>
              </ul>
              <Button className="bg-[#4776E6] text-white hover:bg-[#8E54E9] animate-bounce">Get Started</Button>
            </div>
            <div className="grid gap-6 bg-white p-6 rounded-lg shadow-lg text-[#4776E6] animate-zoomIn delay-200">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#00b894] p-2 text-white animate-bounce">
                  <LayersIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Pro</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Ideal for growing businesses and teams.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  4 GB RAM
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  80 GB SSD Storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  2 vCPU
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  5 TB Bandwidth
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  24/7 Support
                </li>
              </ul>
              <Button className="bg-[#4776E6] text-white hover:bg-[#8E54E9] animate-bounce">Get Started</Button>
            </div>
            <div className="grid gap-6 bg-white p-6 rounded-lg shadow-lg text-[#4776E6] animate-zoomIn delay-400">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#00b894] p-2 text-white animate-bounce">
                  <DatabaseIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Enterprise</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tailored for large enterprises and mission-critical workloads.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  8 GB RAM
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  160 GB SSD Storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  4 vCPU
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  10 TB Bandwidth
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#00b894]" />
                  24/7 Support
                </li>
              </ul>
              <Button className="bg-[#4776E6] text-white hover:bg-[#8E54E9] animate-bounce">Get Started</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-white">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3 animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Clients</h2>
            <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're proud to work with some of the most innovative companies in the world.
            </p>
          </div>
          <div className="mx-auto w-full max-w-4xl space-y-6 animate-fadeIn delay-200">
            <div className="grid gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-950 text-[#4776E6] dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-200 p-1 dark:bg-gray-800 animate-pulse">
                  <img alt="Jane Doe" className="h-16 w-16 rounded-full object-cover" src="/placeholder.svg" />
                </div>
                <div>
                  <div className="font-semibold">Jane Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc.</div>
                </div>
              </div>
              <p className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl animate-fadeIn delay-400">
                "D3cloud's cloud solutions have been a game-changer for our business. We've seen a significant
                improvement in our operational efficiency and cost savings."
              </p>
            </div>
            <div className="grid gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-950 text-[#4776E6] dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-200 p-1 dark:bg-gray-800 animate-pulse">
                  <img alt="John Smith" className="h-16 w-16 rounded-full object-cover" src="/placeholder.svg" />
                </div>
                <div>
                  <div className="font-semibold">John Smith</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">CTO, Globex Corporation</div>
                </div>
              </div>
              <p className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl animate-fadeIn delay-600">
                "We've been working with D3cloud for over a year, and their cloud solutions have been instrumental in
                helping us scale our business and stay ahead of the competition."
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-white py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-6">
          <div className="flex items-center gap-2 animate-bounce">
            <MountainIcon className="h-6 w-6" />
          </div>
        </div>
      </footer>
    </>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function CloudIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function DatabaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function LayersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
