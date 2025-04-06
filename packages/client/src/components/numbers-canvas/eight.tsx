const eight = (ctx: CanvasRenderingContext2D) => {
  const scale = 40 / 24;

  ctx.beginPath();
  ctx.arc(12 * scale, 7 * scale, 3 * scale, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(12 * scale, 15 * scale, 5 * scale, 0, Math.PI * 2);
  ctx.stroke();
};

export default eight;
