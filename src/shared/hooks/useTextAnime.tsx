import { useEffect, useRef } from 'react';
import gsap from 'gsap';


export default function useTextAnime() {
  const animeArray = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    gsap.from(animeArray.current, {
      delay: 0.5,
      y: -50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
    });
  }, []);

  return animeArray;
}
