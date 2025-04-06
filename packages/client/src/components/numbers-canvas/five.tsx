const five = (ctx: CanvasRenderingContext2D) => {
  const scale = 40 / 24;

  ctx.beginPath();
  ctx.moveTo(9 * scale, 4 * scale);
  ctx.lineTo(16 * scale, 4 * scale);
  ctx.moveTo(9 * scale, 4 * scale);
  ctx.lineTo(8 * scale, 10.9996 * scale);

  ctx.bezierCurveTo(
    8.83566 * scale,
    10.3719 * scale,
    9.87439 * scale,
    10 * scale,
    11 * scale,
    10 * scale
  );

  ctx.bezierCurveTo(
    13.7614 * scale,
    10 * scale,
    16 * scale,
    12.2386 * scale,
    16 * scale,
    15 * scale
  );

  ctx.bezierCurveTo(
    16 * scale,
    17.7614 * scale,
    13.7614 * scale,
    20 * scale,
    11 * scale,
    20 * scale
  );

  ctx.bezierCurveTo(
    9.87439 * scale,
    20 * scale,
    8.83566 * scale,
    19.6281 * scale,
    8 * scale,
    19.0004 * scale
  );
};

export default five;
