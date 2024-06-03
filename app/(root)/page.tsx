import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="bg-green-800/75 rounded-md bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
      <Image 
            src="/assets/images/hero.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[100vh] object-contain object-center 2xl:max-h-[50vh] rounded-2xl"
          />
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-white">Your VISION, Our EXPERTISE!!</h1>
            <p className="p-regular-20 md:p-regular-20 text-white">Explore and Access invaluable insights from an extensive network of over 5000+ guides worldwide,tap into expertise of leading companies with our vibrant international network.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events" className="bg-white text-black border-spacing-2 ">
                Discover Now!!
              </Link>
            </Button>
          </div>
      </div>

      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <div className="flex w-full flex-col gap-5 md:flex-row">
          
        </div>
        <h2 className="h2-bold h2-regular text-green-800">Join Thousands of transformative  <br /> events and elevate your skills.</h2>
        </section>

    </main>
  );
}
