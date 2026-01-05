import CreatureProfile from './CreatureProfile';
import { sampleCreature } from './sampleCreatureData';

const CreatureProfileDemo = () => {
  return (
    <CreatureProfile creature={sampleCreature} />
  );
};

export default CreatureProfileDemo;