"use client";
import React from 'react'
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@headlessui/react';

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const FilterBanner = () => {
    return (
        <motion.div
            className="w-[99.6vw] max-w-none left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] relative flex flex-col lg:flex-row items-center justify-between px-6 py-8 bg-primary-dark text-white gap-8"
            style={{ left: "50%", right: "50%" }}
            variants={containerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            id='filter'
        >
            {/* Imagen del reloj */}
            <motion.div
                variants={childVariants}
                className="w-full lg:w-1/3 flex justify-center">
                <Image
                    width={300}
                    height={300}
                    src={"/images/watch-4.png"}
                    alt="Reloj de lujo" />
            </motion.div>

            {/* Texto y CTA */}
            <div className="w-full lg:w-1/3 text-center">
                <h2 className="text-3xl font-bold uppercase tracking-wide text-white">
                    ¡Prueba nuestro filtro virtual!
                </h2>
                <p className="mt-4 text-gray-300 text-base leading-relaxed">
                    Descubre cómo te luce tu próximo reloj. Explora modelos exclusivos desde tu dispositivo móvil y elige el estilo que mejor va contigo.
                </p>

                <div className="mt-6 flex justify-center gap-4">

                    <Button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 text-sm font-semibold rounded-xl shadow-md">
                        Probar ahora
                    </Button>

                </div>
            </div>

            {/* Imagen del modelo/persona */}
            <motion.div
                variants={childVariants}
                className="w-full lg:w-1/3 flex justify-center">
                <Image
                    width={300}
                    height={300}
                    src={"/images/watch-3.png"}
                    alt="Modelo señalando" />
            </motion.div>
        </motion.div>
    );
};
export default FilterBanner