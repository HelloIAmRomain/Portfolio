import React from "react";
import Particles from "react-tsparticles";
import "./Particle.css";

function Particle() {
  return (
    <Particles
      className="particle-background"
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "none",
            speed: 0.1,
            out_mode: "bounce",
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          size: {
            value: 2,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        emitters: [
                  {
                    direction: "top-right",
                    rate: {
                      quantity: 0.2,
                      delay: 25,
                    },
                    size: {
                      width: 1,
                      height: 1,
                    },
                    position: {
                      x: 0,
                      y: 100,
                    },
                    particles: {
                      color: {
                        value: "#ffffff",
                      },
                      line_linked: {
                        enable: false,
                      },
                      move: {
                        enable: true,
                        speed: 8,
                        direction: "top-right",
                        out_mode: "out",
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        value: 2,
                        random: true,
                        anim: {
                          enable: true,
                          speed: 5,
                          size_min: 0.3,
                        },
                      },
                    },
                  },
                ],
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
