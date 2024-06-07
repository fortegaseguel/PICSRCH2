import React from 'react';
import SocialIcons from '/src/components/SocialIcons';
import WhatsAppLink from '/src/components/WhatsAppLink';
import { motion } from "framer-motion";


function ContactSection() {
    const shakeAnimation = {
        rotate: [0, -1, 1, -1, 1, 0],
        x: [0, -1, 1, -1, 1, 0],
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear" 
        }
    };

    return (
        <div className="font-din tracking-custom leading-3 flex flex-col min-h-screen relative overflow-hidden">
            <div className="flex flex-col justify-center items-center grow">
                <section className="text-center w-1/2 mt-[-20px] md:w-72 md:mt-0">
                    <div className='relative -mt-0'>
                        <h1 className="text-5xl md:text-6xl text-center tracking-custom font-bold mb-[50%] ml-4 mt-24">CONTACT</h1>
                        <div className="space-y-8 md:space-y-12 mb-60 md:mb-10">
                            <a href="tel:+1234567890" className="block text-black py-4 px-4 rounded-full text-3xl hover-effect outline" style={{ "outline": "2px solid #000" }}>
                                <span className="hover-text">+569-987654321</span>
                                <span className="default-text">PHONE</span>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=56977777777" target="_blank" rel="noopener noreferrer" className="block text-black py-4 px-4 rounded-full text-3xl hover-effect outline" style={{ "outline": "2px solid #000" }}>
                                <span className="hover-text">+569-987654321</span>
                                <span className="default-text">WHATSAPP</span>
                            </a>
                            <a href="mailto:example@example.com" className="block text-black py-4 px-4 rounded-full text-3xl hover-effect outline" style={{ "outline": "2px solid #000" }}>
                                <span className="hover-text">mail@example.com</span>
                                <span className="default-text">EMAIL</span>
                            </a>
                        </div>
                    </div>
                    <div className="absolute mb-0 right-0">
                        <WhatsAppLink />
                    </div>
                </section>
                <motion.img
                    src="img/contact.svg"
                    alt="Contacto"
                    initial={{ 
                        x: '-100vw', 
                        y: '200vh',
                        scaleX: 1,
                        scaleY: 1,
                        rotate: '-10deg'                
                    }}
                    animate={{ 
                        x: 0, 
                        y: 0,
                    }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 10, 
                        duration: 2,
                    }}
                    whileHover={{
                        scaleX: [1.2, 1],
                        scaleY: [0.9, 1],
                        y: -20,
                        transition: { 
                          type: "spring",
                          stiffness: 900,
                          duration: 1,
                        },
                    }}
                    id="contactImage"
                    className="absolute left-[-130px] md:bottom-[-25%] md:left-[-210px] w-auto max-w-[85%] max-h-[85%] rotate-[-10deg]"
                    onAnimationComplete={() => {
                        document.getElementById("contactImage").startAnimation(shakeAnimation);
                    }}
                />
            </div>
            <div className="w-full mt-auto mb-8 ml-20 md:mb-8 md:ml-0">
                <SocialIcons />
            </div>
        </div>
    );
}

export default ContactSection;

