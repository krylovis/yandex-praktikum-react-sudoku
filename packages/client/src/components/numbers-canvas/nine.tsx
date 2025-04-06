const nine = (ctx: CanvasRenderingContext2D) => {
  const scale = 40 / 24;

  ctx.beginPath();
  ctx.arc(12 * scale, 9 * scale, 5 * scale, -0.2 * Math.PI, 1.8 * Math.PI);

  ctx.moveTo(16.2269 * scale, 11.6721 * scale);
  ctx.lineTo(11 * scale, 20 * scale);
};

export default nine;
