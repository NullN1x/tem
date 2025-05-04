import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";

export default function HomePage() {
  // return (
  //   <div className="relative min-h-screen bg-[#111827] text-white">
  //     <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
  //       Headline: What problem does product solve and for whom ; one sentance ;
  //       spend 10x less time on product management using xyz
  //     </h1>
  //     <h2 className="mt-6 max-w-xl text-lg text-zinc-300">
  //       subheadline that expands on the headline and adds supporting copy
  //     </h2>
  //     <div className="mt-8 flex gap-4">
  //       <Button className="bg-[#7e5ffb]" variant="default">
  //         CTA →
  //       </Button>
  //       <Button variant="ghost">Read the docs</Button>
  //       <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white ring-1 ring-white/20 backdrop-blur-md">
  //         API Studio is now in beta →
  //       </div>
  //       <div>screenshots or mockup of product</div>
  //       <div>
  //         social proof : customer logos : social media embeds : customer
  //         testimonials
  //       </div>
  //       <div>link to pricing</div>
  //       <div>feature list</div>
  //       <div>
  //         whitespace is good multiple cta : ensure mobile reaponsiveness and
  //         have analytic tracking : never perfect launch with basics and improve
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <>
      <HeroSection />
      <LogoCloud />
    </>
  );
}
