import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useMotionValue } from 'framer-motion';
import ClientsSection from './ClientsSection';
import { throttle } from 'lodash';

function CustomShape({ x, y }) {
  return (
    <g transform={`translate(${x + 20}, ${y - 250})`}>
      <path style={{ opacity: 1, stroke: '#000000', strokeWidth: '1px', fill: '#f8f8f8' }} d="M 0 0 C 118.3 -0.2 236.7 0 355 0.5 C 364.6 3.1 370.4 9.3 372.5 19 C 373.2 79.7 373.2 140.3 372.5 201 C 370.4 210.7 364.6 216.9 355 219.5 C 251 219.8 147 220.2 43 220.5 C 31.8 231.2 20.5 241.7 9 252 C 8 241.4 7.7 230.7 8 220 C -5.4 220.8 -13.9 214.8 -17.5 202 C -18.2 140.7 -18.2 79.3 -17.5 18 C -14.8 8.8 -9 2.8 0 0 Z"/>
    </g>
  );
}

function Point({ x, y, text }) {
  return (
    <g>
      <CustomShape x={x} y={y} />
      {/* Añade el texto con saltos de línea */}
      <foreignObject x={x} y={y - 180} width="400" height="200">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ padding: '10px' ,textAlign: 'center', fontSize: '20px', lineHeight: '1.2' }}>
          {text.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </foreignObject>
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
    { x: 874.5, y: 1267, text: "Producimos y personalizamos todo tipo de productos." },
    { x: 612.5, y: 1699.5, text: "Coordinamos la logística de todo tipo de carga." },
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