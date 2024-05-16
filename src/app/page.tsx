import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Byte Grove Technology - Propel Your Startup to Success",
  description: "Byte Grove Technology specializes in providing tailored web, mobile app, and software solutions to help B2B startups achieve success. Explore our services, including customizable app development, intuitive UI design, backend integration, cloud hosting, and API integration. Stay updated with our latest blogs and connect with us for premier support.",
  keywords: ["Byte Grove Technology", "startup solutions", "web development", "mobile app development", "software solutions", "UI design", "backend integration", "cloud hosting", "API integration", "B2B ventures", "support", "blog"],
  authors: [{ name: 'Byte Grove Technology' }],
  viewport: "width=device-width, initial-scale=1.0",  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      {/* <Contact /> */}
    </>
  );
}
