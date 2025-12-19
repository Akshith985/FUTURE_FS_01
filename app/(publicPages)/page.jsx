"use client"
import SectionTitle from "@/components/SectionTitle";
import SectionTitle1 from "@/components/SectionTitle1";
import Link from "next/link";
import ContactForm from "@/components/contractform";
import { featuresData1 } from '@/data/featuresData1';
import { useThemeContext } from "@/context/ThemeContext";
import { companiesLogo } from "@/data/companiesLogo";
import { featuresData } from "@/data/featuresData";
import { FaqSection } from "@/sections/FaqSection";
import Pricing from "@/sections/Pricing";
import { VideoIcon } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Page() {
    const { theme } = useThemeContext();
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
                <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 pr-4 mt-46 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20">
                    <div className="flex items-center -space-x-3">
                        <Image className="size-7 rounded-full" height={50} width={50}
                            src="/m/GitHub-Mark-ea2971cee799.png"
                            alt="userImage1" />
                        <Image className="size-7 rounded-full" height={50} width={50}
                            src="m/linkedin.png"
                            alt="userImage2" />
                        <Image className="size-7 rounded-full" height={50} width={50}
                            src="m/insta.png"
                            alt="userImage3" />
                    </div>
                    <Link href="#social"><p className="text-xs">Connect with me : My socials </p></Link>
                </div>
                <h1 className="mt-2 text-5xl/15 md:text-[64px]/19 font-semibold max-w-2xl">
                    👋Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-[#923FEF] dark:from-[#C99DFF] to-[#C35DE8] dark:to-[#E1C9FF] bg-clip-text text-transparent">Akshith Anand.</span>
                </h1>
                <p className="text-base dark:text-slate-300 max-w-lg mt-2">
                    Student developer and content writer, bringing ideas to life.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <Link href="https://akshithresume.tiiny.site">
                    <button className="bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11" >
                        Resume
                    </button>
                    </Link>
                    
                </div>
                <h3 className="text-base text-center text-slate-400 mt-28 pb-14 font-medium">
                    A few of my skills —
                </h3>
                <Marquee className="max-w-xl mx-auto" gradient={true} speed={25} gradientColor={theme === "dark" ? "#000" : "#fff"}>
                    <div className="flex items-center justify-center">
                        {[...companiesLogo, ...companiesLogo].map((company, index) => (
                            <Image key={index} className="mx-11" src={company.logo} alt={company.name} width={40} height={40} />
                        ))}
                    </div>
                </Marquee>
            </div>
            <section id="main">
            <SectionTitle text1="Experience" text2="Skills I've worked with." text3="" />

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
                {featuresData.map((feature, index) => (
                    <div key={index} className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-66">
                        <feature.icon className="text-purple-500 size-8 mt-4" strokeWidth={1.3} />
                        <h3 className="text-base font-medium">{feature.title}</h3>
                        <p className="text-slate-400 line-clamp-2">{feature.description}</p>
                    </div>
                ))}
            </div>
            </section>
            <section id="proj">
            <SectionTitle1 text1="Projects" text2="Checkout what I've been working on." text3="" />
            
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
                {featuresData1.map((feature, index) => (
                    <Link key={index} href={feature.href}>
                    <div key={index} className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-66">
                        <feature.icon className="text-purple-500 size-8 mt-4" strokeWidth={1.3} />
                        <h3 className="text-base font-medium">{feature.title}</h3>
                        <p className="text-slate-400 line-clamp-2">{feature.description}</p>
                    </div>
                    </Link>
                ))}
            </div>
            
            </section>
            <section id="social">
            <div className="flex flex-col items-center text-center justify-center mt-20">
                <h3 className="text-3xl font-semibold mt-16 mb-4">My socials</h3>
                
                <div className="flex items-center gap-4 mt-8">
                    <Link href="https://www.linkedin.com/in/akshith-anand-5a5988379/">
                    <button className="border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        Linkedin

                    </button>
                    </Link>
                    <Link href="https://github.com/Akshith985">
                    <button className="border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        Github

                    </button>
                    </Link>
                    <Link href="https://www.instagram.com/ax_it47/">
                    <button className="border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        Instagram

                    </button>
                    </Link>
                    <Link href="https://x.com/AkshithAnand26">
                    <button href="https://x.com/AkshithAnand26" className="border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        Twitter

                    </button>
                    </Link>
                    <Link href="https://chocolate-guanaco-bec.notion.site/Welcome-to-my-Blog-29ed503c9e9a80cdb001d0e3355c3e54">
                    <button href="https://x.com/AkshithAnand26" className="border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        My Blog

                    </button>
                    </Link>
                    
                </div>
            </div>
            </section>
            <section id="contact">
            <ContactForm />
            </section>
        </>
        
    );
}