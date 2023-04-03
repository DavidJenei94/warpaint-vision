import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { bubble } from '../models/bubble.model';
import { overlapCollision, edgeCollision } from '../utils/collision-detection';
import { randomInRange } from '../utils/math';
import { useWindowDimensions } from './useDimensions';

export const useCollisionDetection = (
  bubbles: bubble[],
  setBubbles: Dispatch<SetStateAction<bubble>>[],
  containerRefCurrent: any,
  collisionChecker: boolean
) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const [collisionCenters, setCollisionCenters] = useState<
    {
      x: number;
      y: number;
    }[]
  >([]);

  useEffect(() => {
    // 2 bubbles collision handle
    bubbles.forEach((bubble1, index1) => {
      bubbles.forEach((bubble2, index2) => {
        if (bubble1.name === bubble2.name) {
          return;
        }

        const coorOverlap = overlapCollision(bubble1, bubble2);

        if (coorOverlap.x !== 0 || coorOverlap.x !== 0) {
          setCollisionCenters((prevState) => {
            const newArray = [...prevState];
            newArray.push(coorOverlap);
            return newArray;
          });

          setBubbles[index1]((prevState) => {
            return { ...prevState, collision: true };
          });
          setBubbles[index2]((prevState) => {
            return { ...prevState, collision: true };
          });
        }
      });
    });

    // edge collision handling
    if (containerRefCurrent !== null) {
      const containerRect = containerRefCurrent.getBoundingClientRect();

      bubbles.forEach((bubble, index) => {
        const collision = edgeCollision(containerRect, bubble);

        const bubbleSize = bubble.right - bubble.left;
        let edge: boolean = true;
        let newXDirection: string = '0px';
        let newYDirection: string = '0px';

        if (bubble.roundDirection === 'clockwise') {
          switch (collision) {
            case 'left':
              newXDirection = `${randomInRange(1, windowWidth - bubbleSize)}px`;
              newYDirection = `-1px`;
              break;
            case 'right':
              newXDirection = `${randomInRange(1, windowWidth - bubbleSize)}px`;
              newYDirection = `${windowHeight - bubbleSize + 1}px`;
              break;
            case 'top':
              newXDirection = `${windowWidth - bubbleSize + 1}px`;
              newYDirection = `${randomInRange(
                1,
                windowHeight - bubbleSize
              )}px`;
              break;
            case 'bottom':
              newXDirection = `-1px`;
              newYDirection = `${randomInRange(
                0,
                windowHeight - bubbleSize
              )}px`;
              break;
            default:
              edge = false;
              break;
          }
        } else {
          switch (collision) {
            case 'left':
              newXDirection = `${randomInRange(1, windowWidth - bubbleSize)}px`;
              newYDirection = `${windowHeight - bubbleSize + 1}px`;
              break;
            case 'right':
              newXDirection = `${randomInRange(1, windowWidth - bubbleSize)}px`;
              newYDirection = `-1px`;
              break;
            case 'top':
              newXDirection = `-1px`;
              newYDirection = `${randomInRange(
                1,
                windowHeight - bubbleSize
              )}px`;
              break;
            case 'bottom':
              newXDirection = `${windowWidth - bubbleSize + 1}px`;
              newYDirection = `${randomInRange(
                0,
                windowHeight - bubbleSize
              )}px`;
              break;
            default:
              edge = false;
              break;
          }
        }

        setBubbles[index]((prevState) => {
          // if not on edge, return with current values
          if (!edge) {
            return {
              ...prevState,
            };
          }

          // on edges return with new directions and edge set to true
          return {
            ...prevState,
            collision: true,
            xDirection: newXDirection,
            yDirection: newYDirection,
          };
        });
      });
    }
  }, [
    collisionChecker,
    // bubbles,
    // setBubbles,
    containerRefCurrent,
    windowHeight,
    windowWidth,
  ]);

  const triggerNewRandomDirections = () => {
    bubbles.forEach((bubble, index) => {
      const bubbleSize = bubble.right - bubble.left;

      // One of the direction should be on the edge
      // Create some random factor which one
      const randomFactor1 = randomInRange(0, 1);
      const randomFactor2 = randomInRange(0, 1);
      const newXDirection = randomFactor1
        ? randomInRange(1, windowWidth - bubbleSize)
        : randomFactor2
        ? windowWidth
        : -1;
      const newYDirection = randomFactor1
        ? randomFactor2
          ? windowHeight
          : -1
        : randomInRange(1, windowHeight - bubbleSize);

      setBubbles[index]((prevState) => {
        return {
          ...prevState,
          xDirection: `${newXDirection}px`,
          yDirection: `${newYDirection}px`,
        };
      });
    });
  };

  return { collisionCenters, triggerNewRandomDirections };
};
