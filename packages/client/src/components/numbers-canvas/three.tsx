const three = (ctx: CanvasRenderingContext2D) => {
  const scale = 40 / 24;

  ctx.beginPath();
  ctx.moveTo(8 * scale, 4 * scale);
  ctx.lineTo(16 * scale, 4 * scale);
  ctx.lineTo(12 * scale, 10 * scale);
  ctx.arc(12 * scale, 16 * scale, 8, -0.5 * Math.PI, 0.8 * Math.PI);
};

export default three;
