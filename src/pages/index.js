import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import * as motion from "motion/react-client"
export default function Home() {
    return (
        <>
            <section className="w-full min-h-svh relative bg-gradient-to-br from-[#120C6E] to-[#5E72Eb] overflow-hidden hidden items-center justify-center">
                <Image src={"/image-removebg-preview (8).png"} className="absolute bottom-0 -right-88 w-[50rem] max-w-[50rem] md:-right-0" width={666} height={375} alt="" />
                <Image src={"/image-removebg-preview (8).png"} className="absolute bottom-0 -left-88 w-[50rem] max-w-[50rem] md:-left-0" width={666} height={375} alt="" />
                
                <nav className="flex justify-between items-center p-8 md:px-12 absolute w-full top-0 border-b">
                    <Image src={"/logo.png"} className="size-8 md:size-10" width={512} height={512} alt="" />
                    <div className="hidden md:flex items-center justify-center gap-4 text-center roboto">
                        <Link href={"#"} className="text-center font-medium">Products</Link>
                        <Link href={"#"} className="text-center font-medium">Testimonials</Link>
                        <Link href={"#"} className="text-center font-medium">About Us</Link>
                        <Link href={"#"} className="text-center font-medium">Resources</Link>
                    </div>
                    <button id="nav_cta" className="hidden bg-white text-black font-medium text-md p-2 px-4 rounded-xl md:block">Contact Us</button>
                    <button id="nav_mob" className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFF" className="size-8"><path d="M150-240q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h660q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H150Zm0-210q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h660q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H150Zm0-210q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h660q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H150Z"/></svg></button>
                </nav>

                <div className="p-8 flex flex-col text-center gap-4 relative md:w-2/4 mx-auto">
                    <h1 className="capitalize text-white font-bold text-3xl text-center ubuntu md:text-6xl">Rediscover the joy of open road.</h1>
                    <p className="md:px-4 roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <section className="flex gap-2 w-fit mx-auto border border-solid border-white rounded-xl bg-white/20 p-2.5 px-4">
                        <input type="text" className="" placeholder="Search model name ..." />
                        <button className=""><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFF" className="size-6"><path d="M378-329q-108.16 0-183.08-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l242 240q9 8.56 9 21.78T818-143q-9 9-22.22 9-13.22 0-21.78-9L533-384q-30 26-69.96 40.5Q423.08-329 378-329Zm-1-60q81.25 0 138.13-57.5Q572-504 572-585t-56.87-138.5Q458.25-781 377-781q-82.08 0-139.54 57.5Q180-666 180-585t57.46 138.5Q294.92-389 377-389Z"/></svg></button>
                    </section>
                </div>
            </section>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.1,
                    scale: { type: "spring", visualDuration: 0.1 },
                }}
            className="w-full min-h-svh max-h-svh bg-gray-100 p-12 overflow-y-scroll relative">
                <hr className="absolute inset-x-0 top-12 border border-solid border-black/25" />
                <hr className="absolute inset-x-0 bottom-12 border border-solid border-black/25" />

                <div className="absolute inset-y-0 border border-solid border-black/25"></div>
                <div className="absolute inset-y-0 border border-solid border-black/25 right-12"></div>

                <section id="xw5fsxr" className="w-full relative overflow-scroll">
                    <Image src={"/sata gra.png"} className="absolute animate-pulse top-[20%] left-12" width={11} height={13} alt="" />
                    <Image src={"/star gray.png"} className="absolute animate-pulse top-1/4 z-20 right-12" width={6} height={8} alt="" />
                    <Image src={"/star.png"} className="absolute animate-pulse bottom-60 right-12" width={26} height={32} alt="" />
                    <Image src={"/star pu.png"} className="absolute animate-pulse bottom-72 -left-0.5 scale-125" width={13} height={17} alt="" />
                    <Image src={"/star.png"} className="absolute animate-pulse bottom-64 -left-0 hidden" width={26} height={32} alt="" />
                    <Image src={"/star pu.png"} className="absolute animate-pulse scale-125 top-6 right-[33%]" width={13} height={17} alt="" />

                    <div className="w-full h-128 bg-contain bg-no-repeat bg-gradient-to-r from-[#010828] to-[#1e2f62] flex justify-center items-center">
                        <Image src={"/2025-G-SUV-GAL-011-E-FE-DR.webp"} className="absolute bottom-12" width={1410} height={794} alt="" />
                        <div className="bg-gradient-to-b from-transparent to-[#121212] w-full p-4 h-12 absolute bottom-[85px]"></div>

                        <nav className="flex justify-between items-center p-5 md:px-12 absolute w-full top-0 border-b backdrop-blur-xs">
                            <Image src={"/logo.png"} className="size-6 md:size-10" width={512} height={512} alt="" />
                            <div className="hidden md:flex items-center justify-center gap-4 text-center roboto">
                                <Link href={"#"} className="text-center font-medium">Products</Link>
                                <Link href={"#"} className="text-center font-medium">Testimonials</Link>
                                <Link href={"#"} className="text-center font-medium">About Us</Link>
                                <Link href={"#"} className="text-center font-medium">Resources</Link>
                            </div>
                            <button id="nav_cta" className="hidden bg-white text-black font-medium text-md p-2 px-4 rounded-xl md:block">Contact Us</button>
                            <button id="nav_mob" className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFF" className="size-6"><path d="M150-240q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h660q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H150Zm0-210q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h660q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H150Zm0-210q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h660q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H150Z"/></svg></button>
                        </nav>

                        <div className="p-8 flex flex-col text-center gap-2 relative md:w-2/4 mx-auto ">
                            <h1 className="capitalize text-white font-medium text-xl text-center ubuntu md:text-6xl leading-tight mb-2">Rediscover the joy of open road.</h1>
                            <p className="md:px-4 roboto text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <section className="flex gap-2 w-fit mx-auto border border-solid border-white rounded bg-white/20 p-2 px-2 mt-4 backdrop-blur-xs">
                                <input type="text" className="text-xs placeholder:text-gray-100" placeholder="Search model name ..." />
                                <button className=""><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFF" className="size-3"><path d="M378-329q-108.16 0-183.08-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l242 240q9 8.56 9 21.78T818-143q-9 9-22.22 9-13.22 0-21.78-9L533-384q-30 26-69.96 40.5Q423.08-329 378-329Zm-1-60q81.25 0 138.13-57.5Q572-504 572-585t-56.87-138.5Q458.25-781 377-781q-82.08 0-139.54 57.5Q180-666 180-585t57.46 138.5Q294.92-389 377-389Z"/></svg></button>
                            </section>
                        </div>

                        <div className="h-6 w-full absolute bottom-50 bg-gradient-to-r from-[#010828] to-[#1e2f62]"></div>
                    </div>

                    <div className="bg-gradient-to-b from-[#121212] to-75% to-black w-full p-4 min-h-[52vh] relative">
                        <div className="bg-gradient-to-b from-[#121212] to-[#12121200] w-full p-4 h-48 inset-x-0 absolute z-10 top-0"></div>
                        <div className="bg-gradient-to-t from-[#000] to-[#12121200] w-full p-4 h-48 inset-x-0 absolute z-10 bottom-0"></div>

                        <hr className="absolute inset-x-0 top-12 border border-solid border-white/25" />
                        <hr className="absolute inset-x-0 bottom-12 border border-solid border-white/25" />

                        <div className="absolute inset-y-0 border border-solid border-white/25 left-12"></div>
                        <div className="absolute inset-y-0 border border-solid border-white/25 right-12"></div>

                        <h2 className="text-white font-bold relative z-10 text-center px-16 mt-24 ubuntu">Lorem Dolor Ipsum Sit Amet</h2>
                        <p className="text-white text-[8px] z-10 text-center px-20 mx-auto absolute bottom-20 inset-x-0 -translate-x-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <Image src={"/image-removebg-preview (8).png"} className="absolute bottom-24 left-0" width={666} height={375} alt="" />
                    </div>

                    <div className="h-fit relative">
                        <Image src={"/Dark purple gradient background.jpeg"} className="" width={547} height={1094} alt="" />
                        <div className="bg-gradient-to-b from-transparent to-[#07031a] w-full p-4 h-24 absolute bottom-0"></div>

                        <div className="flex flex-col gap-4 absolute top-1/4 -translate-y-1/4">
                            <Image src={"/logo.png"} className="size-12 mx-auto" width={512} height={512} alt="" />
                            <h2 className="text-xl font-bold text-center px-8">Lorem Dolor Ipsum Sit Amet</h2>
                        </div>
                    </div>
                    <div className="bg-[#07031a] w-full h-[75vh] flex justify-center items-center relative">
                        <p className="font-bold ubuntu text-white/75 text-xl">Empty Space</p>

                        <p className="absolute bottom-4 text-xs text-center text-white/75">©2025. Adriel & Niate. <br />All rights reserved</p>
                    </div>

                </section>

            </motion.div>
            
        </>
    )
}