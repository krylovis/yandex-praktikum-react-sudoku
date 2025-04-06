const one = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(20, 7);
  ctx.lineTo(20, 33);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(20, 7);
  ctx.lineTo(13, 17);
};

export default one;
