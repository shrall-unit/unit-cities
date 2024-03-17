import Image from "next/image";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Layout>
      <section className="relative mt-32 grid w-full grid-cols-1 items-center gap-x-8 gap-y-8 overflow-hidden px-8 md:grid-cols-2 xl:px-32 2xl:px-72">
        <div className="flex flex-col items-center justify-center gap-y-6 font-poppins font-semibold md:items-start md:pr-0">
          <h1 className="text-5xl md:text-6xl">
            Revolutionizing the{" "}
            <span className="bg-gradient-to-r from-unit-purple-40 via-unit-purple-20 to-unit-blue-40 from-0% via-90% inline-block text-transparent bg-clip-text">
              world,
            </span>{" "}
            one{" "}
            <span className="bg-gradient-to-r from-unit-purple-40 via-unit-purple-20 to-unit-blue-40 from-0% via-90% inline-block text-transparent bg-clip-text">
              city
            </span>{" "}
            at a time.
          </h1>
          <p className="px-8 text-center text-lg font-light sm:px-24 md:px-0 md:text-start md:text-xl">
            Join the movement to tokenize communities and drive financial
            equity, by Unit Cities hosted on Unit Network.
          </p>
          <Button variant="default" className="mt-4 w-fit md:mt-12">
            Get Started
          </Button>
        </div>
        <Image
          src="/images/logo-3d.png"
          alt="Unit Events"
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-cover"
        />
      </section>
      <section className="flex flex-col bg-unit-black-100 pt-32 text-unit-grey-10 px-8 xl:px-48 2xl:px-72 items-center text-center">
        <h2 className="text-5xl font-semibold space-y-4 mb-3">
          Participate in the launch of{" "}
          <span className="bg-gradient-to-r from-unit-purple-20 to-unit-blue-40 from-90% inline-block text-transparent bg-clip-text">
            city
          </span>{" "}
          <span className="bg-gradient-to-r from-unit-purple-40 to-unit-purple-20 from-0% inline-block text-transparent bg-clip-text">
            tokens
          </span>{" "}
          around the world.
        </h2>
        <p className="text-xl font-light mb-28">
          Embark on a transformative journey with Unit City, a dynamic and
          innovative Decentralized Autonomous Organization (DAO) dedicated to
          revolutionize cities.
        </p>
        <Button variant="secondary" className="md:px-16">
          Get Started
        </Button>
      </section>
    </Layout>
  );
}
