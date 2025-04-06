import { useRef, useEffect } from 'react';

import one from './one';
import two from './two';
import three from './three';
import four from './four';
import five from './five';
import six from './six';
import seven from './seven';
import eight from './eight';
import nine from './nine';

interface NumbersCanvasProps {
    value: number;
    color: string;
}

function NumbersCanvas({ value, color }: NumbersCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    switch (value) {
      case 1:
        one(ctx);
        break;
      case 2:
        two(ctx);
        break;
      case 3:
        three(ctx);
        break;
      case 4:
        four(ctx);
        break;
      case 5:
        five(ctx);
        break;
      case 6:
        six(ctx);
        break;
      case 7:
        seven(ctx);
        break;
      case 8:
        eight(ctx);
        break;
      case 9:
        nine(ctx);
        break;
      default:
        break;
    }

    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={40}
      height={40}
      style={{
        display: 'block',
      }}
    />
  );
}

export default NumbersCanvas;
