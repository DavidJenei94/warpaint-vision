import { useEffect, useRef, useState } from 'react';
import { useCollisionDetection } from '../../hooks/useCollisionDetection';
import { useWindowDimensions } from '../../hooks/useDimensions';
import { bubble, defaultBubble } from '../../models/bubble.model';
import { randomInRange } from '../../utils/math';
import Bubble from './Bubble';
import Modal from './Modal';
import Background from './Background';

import styles from './Main.module.scss';

const Main = () => {
  const mainContainerRef = useRef<any>(null);

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      triggerNewRandomDirections();
      setInitialized(true);
    }, 1000);
  }, []);

  const [overlapChecker, setOverlapChecker] = useState(false);

  const [activeBubble, setActiveBubble] = useState<string>('');

  const [introBubble, setIntroBubble] = useState<bubble>({
    ...defaultBubble,
    roundDirection: 'counterClockwise',
    pulseColor: 'purple',
    transformDuration: 19,
    name: 'intro',
  });
  const [hobbiesBubble, setHobbiesBubble] = useState<bubble>({
    ...defaultBubble,
    pulseColor: 'yellow',
    transformDuration: 21,
    name: 'hobbies',
  });
  const [skillsBubble, setSkillsBubble] = useState<bubble>({
    ...defaultBubble,
    pulseColor: 'green',
    transformDuration: 23,
    name: 'skills',
  });
  const [eduBubble, setEduBubble] = useState<bubble>({
    ...defaultBubble,
    roundDirection: 'counterClockwise',
    pulseColor: 'blue',
    transformDuration: 25,
    name: 'edu',
  });
  const [expBubble, setExpBubble] = useState<bubble>({
    ...defaultBubble,
    pulseColor: 'red',
    transformDuration: 27,
    name: 'exp',
  });
  const [projectsBubble, setProjectsBubble] = useState<bubble>({
    ...defaultBubble,
    roundDirection: 'counterClockwise',
    pulseColor: 'cyan',
    transformDuration: 29,
    name: 'projects',
  });

  const bubbles = [
    introBubble,
    hobbiesBubble,
    skillsBubble,
    eduBubble,
    expBubble,
    projectsBubble,
  ];
  const setBubbles = [
    setIntroBubble,
    setHobbiesBubble,
    setSkillsBubble,
    setEduBubble,
    setExpBubble,
    setProjectsBubble,
  ];

  // Edge and overlap collision detection
  const {triggerNewRandomDirections} = useCollisionDetection(
    bubbles,
    setBubbles,
    mainContainerRef.current,
    overlapChecker
  );

  // Set random starting direction at initialization
  useEffect(() => {
    // random direction generator for translate
    const dirGenerator = (type: string, bubbleSize: number): string => {
      let baseSize =
        type === 'width'
          ? windowWidth / randomInRange(1, 5)
          : windowHeight / randomInRange(1, 1);

      return `${baseSize - randomInRange(1, bubbleSize)}px`;
    };

    setBubbles.forEach((setBubble) => {
      setBubble((prevState) => {
        return {
          ...prevState,
          xDirection: dirGenerator('width', prevState.right - prevState.left),
          yDirection: dirGenerator('height', prevState.bottom - prevState.top),
        };
      });
    });
  }, [windowHeight, windowWidth]);

  // collsiion detection interval
  useEffect(() => {
    const timer = setInterval(() => {
      setOverlapChecker((prevState) => !prevState);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container} ref={mainContainerRef}>
      <Background />

      <Bubble
        bubble={introBubble}
        setBubble={setIntroBubble}
        setActiveBubble={setActiveBubble}
        overlapChecker={overlapChecker}
        initialized={initialized}
      >
        <p>Introduction</p>
      </Bubble>
      <Bubble
        bubble={hobbiesBubble}
        setBubble={setHobbiesBubble}
        setActiveBubble={setActiveBubble}
        overlapChecker={overlapChecker}
        initialized={initialized}
      >
        <p>Hobbies</p>
      </Bubble>
      <Bubble
        bubble={skillsBubble}
        setBubble={setSkillsBubble}
        setActiveBubble={setActiveBubble}
        overlapChecker={overlapChecker}
        initialized={initialized}
      >
        <p>Skills</p>
      </Bubble>
      <Bubble
        bubble={eduBubble}
        setBubble={setEduBubble}
        setActiveBubble={setActiveBubble}
        overlapChecker={overlapChecker}
        initialized={initialized}
      >
        <p>Education</p>
      </Bubble>
      <Bubble
        bubble={expBubble}
        setBubble={setExpBubble}
        setActiveBubble={setActiveBubble}
        overlapChecker={overlapChecker}
        initialized={initialized}
      >
        <p>Experience</p>
      </Bubble>
      <Bubble
        bubble={projectsBubble}
        setBubble={setProjectsBubble}
        setActiveBubble={setActiveBubble}
        overlapChecker={overlapChecker}
        initialized={initialized}
      >
        <p>Projects</p>
      </Bubble>

      {/* Starting with "-" means it is unimplemented */}
      {activeBubble && activeBubble[0] !== "-" && (
        <Modal activeBubble={activeBubble} setActiveBubble={setActiveBubble} />
      )}
    </div>
  );
};

export default Main;
