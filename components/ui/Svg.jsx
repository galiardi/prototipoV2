import Image from 'next/image';

export const Svg = ({ src, width, height }) => {
  return <Image src={src} alt="logo" width={width} height={height} />;
};
