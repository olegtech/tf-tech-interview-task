import { useState } from 'react';
import { RocketCore } from '../RocketCore';

export const Rocket = () => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
};
