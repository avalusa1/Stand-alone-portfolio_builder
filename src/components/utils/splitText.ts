import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
}

// SplitText is a GSAP Club plugin. Register only ScrollTrigger (fallback).
gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
    }

    // Simple fade-in animation (SplitText not available)
    gsap.set(para, { opacity: 0 });

    para.anim = gsap.to(para, {
      opacity: 1,
      scrollTrigger: {
        trigger: para.parentElement?.parentElement,
        toggleActions: ToggleAction,
        start: TriggerStart,
      },
      duration: 1,
      ease: "power3.out",
      y: 0,
      stagger: 0.02,
    });
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
