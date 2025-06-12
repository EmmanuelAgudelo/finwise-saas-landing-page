import Link from 'next/link';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                <div className='flex flex-col items-center md:items-start'>
                    <Link href="/" className="flex items-center content-center">
                        <Image
                            src={siteDetails.siteLogo}
                            alt={siteDetails.siteName}
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                    </Link>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-lg font-semibold mb-4">Contáctanos</h4>

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground">Teléfono: {footerDetails.telephone}</a>}

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                            target='_blank'
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. Todos los derechos reservados.</p>
                <p className="text-sm mt-2 text-gray-500">Hecho con &hearts;</p>
            </div>
        </footer>
    );
};

export default Footer;
