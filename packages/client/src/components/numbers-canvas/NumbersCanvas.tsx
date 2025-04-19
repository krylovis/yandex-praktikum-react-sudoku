import { useRef, useEffect } from 'react';

interface NumbersCanvasProps {
    value: number;
    color: string;
    size: number;
}

function NumbersCanvas({ value, color, size }: NumbersCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    ctx.font = `700 ${size}px Inter`;

    const actualWidth = value === 1 ? size * 0.3 : size * 0.2;
    const actualHeight = size * 0.88;

    ctx.fillText(String(value), actualWidth, actualHeight);

    ctx.stroke();
  }, [value, color, size]);

  return (
    <canvas
      data-testid="sudoku-canvas"
      ref={canvasRef}
      width={size}
      height={size}
    />
  );
}

export default NumbersCanvas;
