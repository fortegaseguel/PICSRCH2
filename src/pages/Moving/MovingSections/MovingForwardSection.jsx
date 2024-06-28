import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useMotionValue } from 'framer-motion';
import ClientsSection from './ClientsSection';
import { throttle } from 'lodash';

function CustomShape({ x, y }) {
  return (
    <g transform={`translate(${x + 20}, ${y - 250})`}>
      <path
        style={{ opacity: 1, stroke: '#000000', strokeWidth: '1px', fill: '#f8f8f8' }}
        d="M237.3,31.2l-.9,33.7L76.4,199.7l10.3,89.8-20.5-10-40-77.5s-30.3-58.8,37-116.6c23.6-20.3,56.8-39.8,106.2-65.3,14.5-7.4,40.1-14.3,67.9,11.1"
      />
      <path
        style={{ fill: '#f39483' }}
        d="M24.1,193.9c1.3,1.1,19.1,9.9,19.1,9.9l42.4,87-19.8-10.2-40.6-77-1-9.7Z"
      />
      <path
        style={{ fill: '#f39483' }}
        d="M219.9,23.6s-15.7-11.2-39.8-1.8c-19.8,7.7-56.5,27.5-74.7,39.2-29.2,18.9-90.5,62.6-81.3,132.9,0,0-6.4-17-4.1-33.3,2.3-16.6,10.2-54.5,58.5-87.9,0,0,65.2-41,86.5-50.1,0,0,32-21.5,64.9,2.2l-10-1.3Z"
      />
      <path
        style={{ stroke: '#000000', strokeMiterlimit: 10, strokeWidth: '2.5px', fill: '#fff' }}
        d="M47.1,212.9c-9.6-19.1-8.8-44.7,2.6-75.7,5.1-13.9,20.9-34.2,41-47,26.9-17.3,82.4-49.6,111.4-63.1,10.2-4.8,31.4-7.5,42,13.2,2.5,5,3.7,10.5,3.7,16.1v63.8s2.2,23.5-27.9,34.8l-91.4,53.5s-14.8,5.2-24.8,37.9l-16.3,43.4c0,.2-.4.2-.5,0-3-5.6-30.6-58.5-39.8-77Z"
      />
      <path
        style={{ fill: 'none', stroke: '#000000', strokeMiterlimit: 10, strokeWidth: '2.5px' }}
        d="M86.8,289.5l-20.5-10-40-77.5s-30.3-58.8,37-116.6c23.6-20.3,56.8-39.8,106.2-65.3,14.5-7.4,40.1-14.3,67.9,11.1"
      />
    </g>
  );
}

function Point({ x, y, text, rotation = -30 }) {
  return (
    <g>
      <CustomShape x={x} y={y} />
      <g transform={`rotate(${rotation}, ${x + 180}, ${y - 250})`}>
        <foreignObject x={x} y={y - 200} width="220" height="150">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ padding: '15px', textAlign: 'center', fontSize: '18px', lineHeight: '1.2' }}
          >
            {text.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </foreignObject>
      </g>
    </g>
  );
}

function MovingForwardSection() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const scrollYProgress = useMotionValue(0);
  const [activePoint, setActivePoint] = useState(null);

  const points = useMemo(() => [
    { x: 612, y: 617, text: "Seleccionamos y trabajamos con los mejores proveedores para tus productos." },
    { x: 1455, y: 955.5, text: "Bodegas logísticas: Ubicadas en los principales puertos del mundo." },
    { x: 850.5, y: 1267, text: "Producimos y personalizamos todo tipo de productos." },
    { x: 550.5, y: 1700, text: "Coordinamos la logística de todo tipo de carga." },
    { x: 1272.5, y: 2125, text: "Tenemos Alianzas con las principales agencias navieras y aéreas. ¡Cotice con nosotros!" },
    { x: 532, y: 2531.5, text: "Negociamos tarifas de carga nacional (Port to Door)." },
    { x: 1451, y: 2941.5, text: "Gestionamos toda la documentación de importación." },
    { x: 520, y: 3489.5, text: "Mantenemos relaciones estrechas con agencias aduaneras." },
    { x: 1316.5, y: 3954, text: "Nos preocupamos de que tus productos lleguen a tiempo." },
    { x: 632.5, y: 4748, text: "Entregamos tu carga con eficiencia y rapidez." },
  ], []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (!sectionRef.current || !pathRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const svgRect = sectionRef.current.firstChild.getBoundingClientRect();

      if (sectionRect.top > 0) {
        const path = pathRef.current;
        const puntoInicio = path.getPointAtLength(0);
        const cubo = document.getElementById('cubo');
        if (cubo) {
          cubo.style.transform = `translate(${puntoInicio.x - 60}px, ${puntoInicio.y - 60}px)`;
        }
      }

      if (sectionRect.top <= 0) {
        const totalScrollable = svgRect.height - window.innerHeight;
        const currentScroll = -sectionRect.top;
        const progress = totalScrollable > 0 ? currentScroll / totalScrollable : 0;
        scrollYProgress.set(progress);
      }
    }, 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYProgress]);

  useEffect(() => {
    const updatePosition = () => {
      if (!pathRef.current) return;
      const path = pathRef.current;
      const longitudTotal = path.getTotalLength();
      const puntoEnPath = longitudTotal * scrollYProgress.get();
      const punto = path.getPointAtLength(puntoEnPath);
  
      const cubo = document.getElementById('cubo');
      if (cubo) {
        cubo.style.transform = `translate(${punto.x - 60}px, ${punto.y - 60}px)`;

        const closestPoint = points.reduce((prev, curr) => 
          Math.hypot(curr.x - punto.x, curr.y - punto.y) < Math.hypot(prev.x - punto.x, prev.y - punto.y) ? curr : prev
        );
        setActivePoint(closestPoint);
      }
    };

    const unsubscribe = scrollYProgress.on('change', updatePosition);
    updatePosition();

    return () => unsubscribe();
  }, [scrollYProgress, points]);

  return (
    <>
      <ClientsSection />
      <div ref={sectionRef} className="moving-forward-section p-0 bg-[#E6C9DE] mt-[-35px] md:mt-0 mx-auto relative overflow-hidden" style={{ height: "560vh" }}>
        <div className="flex justify-center relative">
          <img className="w-full object-cover" src="/img/moving-forward.svg" alt="Moving Forward Detail" />
          <div className="absolute inset-0 flex justify-start items-center w-full left-4">
            <svg width="1906" height="5329" viewBox="0 0 1906 5329" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path ref={pathRef} d="M612 617C632.8 628.2 857.333 756 967 818.5L1096 750L1455 955.5L874.5 1267L1111.5 1414.5L612.5 1699.5L641 1761L1272.5 2125L532 2531.5L983 2809.5L1110 2736.5L1451 2941.5L1305 3034.5L520 3489.5L1316.5 3954L1242 4133L1132.5 4140L589.5 4449.5L864.5 4602L632.5 4748L680 4864" stroke="transparent" />
              <image id="cubo" href="/img/box.png" width="80" height="80" />
              {activePoint && (
                <Point x={activePoint.x} y={activePoint.y} text={activePoint.text} />
              )}
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovingForwardSection;