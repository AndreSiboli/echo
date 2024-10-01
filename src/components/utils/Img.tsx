import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { CSSProperties } from 'react';

interface PropsType {
  src: StaticImport | string;
  alt?: string;
  style?: CSSProperties;
  fill?: boolean;
}

export default function Img(props: PropsType) {
  const { src, alt = '', style = {}, fill = true } = props;

  return (
    <Image src={src} alt={alt} fill={fill} sizes="100vw" style={{ objectFit: 'cover', ...style }} />
  );
}
