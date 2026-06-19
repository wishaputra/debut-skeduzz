import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function BouncingChibi({ src, alt, initialX, initialY, initialVelocityX, initialVelocityY, shadowColor = '#ff0000' }) {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  
  // Use a ref for velocity so it updates instantly without waiting for React renders
  const velocity = useRef({ x: initialVelocityX, y: initialVelocityY });
  const [isDragging, setIsDragging] = useState(false);
  const imgRef = useRef(null);
  const [bounds, setBounds] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateBounds = () => {
      setBounds({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  useAnimationFrame((t, delta) => {
    if (isDragging || bounds.width === 0) return;

    const speed = delta * 0.2; 
    
    let newX = x.get() + velocity.current.x * speed;
    let newY = y.get() + velocity.current.y * speed;

    const elementWidth = imgRef.current ? imgRef.current.offsetWidth : 150;
    const elementHeight = imgRef.current ? imgRef.current.offsetHeight : 150;

    const maxX = bounds.width - elementWidth;
    const maxY = bounds.height - elementHeight;
    const minX = 0;
    const minY = 0;

    // Force negative or positive to absolutely ensure it escapes the wall
    if (newX >= maxX) {
      newX = maxX;
      velocity.current.x = -Math.abs(velocity.current.x);
    } else if (newX <= minX) {
      newX = minX;
      velocity.current.x = Math.abs(velocity.current.x);
    }

    if (newY >= maxY) {
      newY = maxY;
      velocity.current.y = -Math.abs(velocity.current.y);
    } else if (newY <= minY) {
      newY = minY;
      velocity.current.y = Math.abs(velocity.current.y);
    }

    x.set(newX);
    y.set(newY);
  });

  return (
    <motion.img
      ref={imgRef}
      src={src}
      alt={alt}
      drag
      dragMomentum={false} 
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(e, info) => {
        setIsDragging(false);
        let newVx = info.velocity.x * 0.002;
        let newVy = info.velocity.y * 0.002;
        
        newVx = Math.max(Math.min(newVx, 3), -3);
        newVy = Math.max(Math.min(newVy, 3), -3);

        const minSpeed = 0.5;
        if (Math.abs(newVx) < minSpeed) newVx = newVx >= 0 ? minSpeed : -minSpeed;
        if (Math.abs(newVy) < minSpeed) newVy = newVy >= 0 ? minSpeed : -minSpeed;

        velocity.current = { x: newVx, y: newVy };
      }}
      whileDrag={{ scale: 1.2, rotate: 10, cursor: "grabbing" }}
      className={`absolute top-0 left-0 w-32 md:w-48 z-20 cursor-grab hover:brightness-125`}
      style={{ 
        x, y,
        filter: `drop-shadow(5px 5px 0px ${shadowColor})`
      }}
    />
  );
}
