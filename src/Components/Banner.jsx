'use client'
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Banner = () => {
  

    return (
        <section className="relative -mt-20 h-screen"style={{ backgroundImage: "url('https://images.unsplash.com/photo-1709715357520-5e1047a2b691?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            {/* Particles Section */}
            {/* {init && (
                <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                    value: "#056B53",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 6,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                </div>
            )} */}

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#131931]/90 z-10"></div>

            {/* Content */}
            <div className="relative mx-auto max-w-screen-xl pt-48 px-4 lg:flex lg:h-[80vh] lg:items-center z-20">
                <div className="mx-auto  text-center">
                    <h1 className="text-2xl font-extrabold sm:text-5xl text-white">
                        <strong className="font-bold capitalize sm:block text-[#05B804] px-1 py-3 rounded-md"> Welcome to SAS Corporation </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl text-white/90">
                        Learn more about what we do
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button
                            className="block w-full rounded bg-[#05B804] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#05B804] focus:outline-none focus:ring active:bg-[#056B53 sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
