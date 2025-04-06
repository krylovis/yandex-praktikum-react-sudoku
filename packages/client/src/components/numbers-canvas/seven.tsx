const seven = (ctx: CanvasRenderingContext2D) => {
  const scale = 40 / 24;

  ctx.beginPath();
  ctx.moveTo(8 * scale, 4 * scale);
  ctx.lineTo(16 * scale, 4 * scale);
  ctx.lineTo(10 * scale, 20 * scale);
};

export default seven;
