'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <>
            <section
                id="hero"
                className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 bg-gradient-to-b from-white to-green-100"
            >
                <div className="text-center">
                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-8xl font-bold text-gray-900">San & Est</h1>
                        <p className="text-xl mt-2 text-gray-700">Al minuto, contigo.</p>
                        <p className="italic text-md mt-2 text-gray-500">
                            Elegancia a tu alcance, Tiempo que impone presencia.
                        </p>
                        <Image
                            src={heroDetails.centerImageSrc}
                            width={384}
                            height={340}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 384px"
                            priority={true}
                            unoptimized={true}
                            alt="app mockup"
                            className='relative mt-12 md:mt-16 mx-auto z-10 opacity-50'
                        />
                    </motion.div>
                </div>
            </section>
            <div className="flex justify-center mt-4">
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-background bg-primary rounded-full p-2 shadow-lg"
                    >
                        <path
                            d="M18 8V28M18 28L26 20M18 28L10 20"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>
            </div>
        </>
    );
};

export default Hero; 