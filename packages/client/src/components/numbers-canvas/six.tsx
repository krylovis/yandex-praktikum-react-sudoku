const six = (ctx: CanvasRenderingContext2D) => {
  const scale = 40 / 24;

  ctx.beginPath();
  ctx.arc(
    12 * scale,
    16 * scale,
    (8 * scale) / 2,
    -0.8 * Math.PI,
    1.2 * Math.PI
  );
  ctx.lineTo(13 * scale, 5 * scale);
};

export default six;
