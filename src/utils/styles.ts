import { DeviceSizes } from '../constants/device';

export const createMinWidthMediaQuery = (styles: string, deviceSize: DeviceSizes = DeviceSizes.MOBILE_WIDTH) => `
  @media (min-width: ${deviceSize}) {
    ${styles}
  }
`;
