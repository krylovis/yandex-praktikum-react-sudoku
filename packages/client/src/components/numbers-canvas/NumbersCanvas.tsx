import { useRef, useEffect } from 'react';

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

    ctx.font = '40px serif';
    ctx.fillText(String(value), 10, 33);

    ctx.stroke();
  }, []);

  return (
    <canvas
      data-testid="sudoku-canvas"
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
