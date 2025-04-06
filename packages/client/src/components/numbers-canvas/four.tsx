const four = (ctx: CanvasRenderingContext2D) => {
  const scale = 40 / 24;

  ctx.beginPath();
  ctx.moveTo(10 * scale, 4 * scale);
  ctx.lineTo(8.47845 * scale, 11.6078 * scale);
  ctx.lineTo(16 * scale, 14 * scale);
  ctx.moveTo(16 * scale, 8 * scale);
  ctx.lineTo(16 * scale, 20 * scale);
};

export default four;
