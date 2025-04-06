const two = (ctx: CanvasRenderingContext2D) => {
  const scale = 40 / 24;

  ctx.beginPath();
  ctx.moveTo(8 * scale, 8 * scale);

  ctx.bezierCurveTo(
    8 * scale,
    6.97631 * scale,
    8.39052 * scale,
    5.95262 * scale,
    9.17157 * scale,
    5.17157 * scale
  );

  ctx.bezierCurveTo(
    10.7337 * scale,
    3.60947 * scale,
    13.2663 * scale,
    3.60947 * scale,
    14.8284 * scale,
    5.17157 * scale
  );

  ctx.bezierCurveTo(
    16.3905 * scale,
    6.73366 * scale,
    16.3905 * scale,
    9.26632 * scale,
    14.8284 * scale,
    10.8284 * scale
  );

  ctx.lineTo(9.17157 * scale, 16.4853 * scale);
  ctx.bezierCurveTo(
    8.42143 * scale,
    17.2354 * scale,
    8 * scale,
    18.2528 * scale,
    8 * scale,
    19.3137 * scale
  );

  ctx.lineTo(8 * scale, 20 * scale);
  ctx.lineTo(16 * scale, 20 * scale);
};

export default two;
