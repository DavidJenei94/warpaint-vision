import { bubble } from '../models/bubble.model';

export const overlapCollision = (co1: bubble, co2: bubble): {x: number, y: number} => {
  const div1Top = co1.top;
  const div1Left = co1.left;
  const div1Right = co1.right;
  const div1Bottom = co1.bottom;

  const div2Top = co2.top;
  const div2Left = co2.left;
  const div2Right = co2.right;
  const div2Bottom = co2.bottom;

  let verticalCollision = false;
  let horizontalCollision = false;
  let collisionCenter = {x: 0, y: 0}

  if (
    (div2Top >= div1Top && div2Top <= div1Bottom) ||
    (div2Bottom >= div1Top && div2Bottom <= div1Bottom)
  ) {
    verticalCollision = true;
  }

  if (
    (div2Right >= div1Left && div2Right <= div1Right) ||
    (div2Left <= div1Right && div2Left >= div1Left)
  ) {
    horizontalCollision = true;
  }

  // If they intersect
  if (horizontalCollision && verticalCollision) {
    // calculate collision center
    const top = div2Top < div1Top ? div2Top : div1Top;
    const bottom = div2Bottom > div1Bottom ? div2Bottom : div1Bottom;
    const left = div2Left < div1Left ? div2Left : div1Left;
    const right = div2Right > div1Right ? div2Right : div1Right;

    const verticalCenter = (top + bottom) / 2
    const horizontalCenter = (right + left) / 2
    collisionCenter = {x: horizontalCenter, y: verticalCenter}
  }

  return collisionCenter;
};

export const edgeCollision = (edgeCoordiantes: any, bubble: bubble): string => {
  if (
    bubble.top === 0 ||
    bubble.left === 0 ||
    bubble.right === 0 ||
    bubble.bottom === 0
  ) {
    return '';
  }

  if (bubble.top <= edgeCoordiantes.top) {
    return 'top';
  }

  if (bubble.left <= edgeCoordiantes.left) {
    return 'left';
  }

  if (bubble.right >= edgeCoordiantes.right) {
    return 'right';
  }

  if (bubble.bottom >= edgeCoordiantes.bottom) {
    return 'bottom';
  }

  return '';
};
