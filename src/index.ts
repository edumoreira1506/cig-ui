export * from './atoms';

import Molecules from './molecules';
import Organisms from './organisms';

export default {
  ...Molecules,
  ...Organisms
};
