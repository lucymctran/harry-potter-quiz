import smallDeer from "../assets/small-deer.svg";
import { OutMode, HoverMode } from "react-tsparticles";
import {
  Type as PolygonMaskType,
  InlineArrangement as PolygonMaskInlineArrangement,
} from "tsparticles/dist/Plugins/PolygonMask/Enums";

const options = {
  fps_limit: 60,
  particles: {
    number: {
      value: 200,
      density: {
        enable: false,
      },
    },
    color: {
      value: "#0000FF",
    },
    lineLinked: {
      enable: true,
      distance: 30,
      opacity: 0.4,
    },
    move: {
      enable: true,
      speed: 1,
      bounce: false,
      outMode: OutMode.bounce,
    },
    opacity: {
      anim: {
        enable: true,
        opacity_min: 0.05,
        speed: 2,
        sync: false,
      },
      value: 0.4,
    },
    size: {
      value: 1,
    },
  },
  polygon: {
    enable: true,
    scale: 0.5,
    type: PolygonMaskType.inline,
    move: {
      radius: 10,
    },
    url: smallDeer,
    inline: {
      arrangement: PolygonMaskInlineArrangement.equidistant,
    },
    draw: {
      enable: true,
      stroke: {
        color: "rgba(255, 255, 255, .2)",
      },
    },
  },
  retina_detect: false,
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: HoverMode.bubble,
      },
    },
    modes: {
      bubble: {
        size: 6,
        distance: 40,
      },
    },
  },
};

export default options;
