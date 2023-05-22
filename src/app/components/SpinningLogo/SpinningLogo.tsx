import { Image } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import styles from './SpinningLogo.module.css';

interface SpinningLogoProps {
  /**
   * Source URL
   */
  src: string;
  /**
   * Alternative text
   */
  alt?: string;
}

const SpinningLogo: FunctionComponent<SpinningLogoProps> = ({ src, alt, ...rest }): JSX.Element => (
  <Image src={src} className={styles['App-logo']} alt={alt} {...rest} />
);

export default SpinningLogo;
