import { Image } from '@chakra-ui/react';
import React from 'react';
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

const SpinningLogo = ({ src, alt, ...props }: SpinningLogoProps): JSX.Element => {
  return <Image src={src} className={styles['App-logo']} alt={alt} {...props} />;
};

export default SpinningLogo;
