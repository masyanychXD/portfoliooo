import { useEffect, useRef, useState } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Отключаем после первого срабатывания
        }
      },
      {
        threshold: 0.3, // Сработает когда 30% секции видно
        rootMargin: "0px 0px -100px 0px" // Смещение вниз
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="counter" ref={sectionRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div 
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {isVisible ? (
                <CountUp 
                  suffix={item.suffix} 
                  end={item.value} 
                  duration={2.5}
                  delay={index * 0.2} // Каскадная анимация
                />
              ) : (
                <span>0{item.suffix}</span>
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
