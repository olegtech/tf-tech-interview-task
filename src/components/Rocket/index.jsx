import React, { useState } from 'react';
import { Rocket } from './components/Rocket';

export const LaunchPad = () => {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);

  return (
    <div className="launchpad">
      <Rocket />
    </div>
  );
}
