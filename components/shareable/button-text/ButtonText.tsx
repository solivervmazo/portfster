'use client';
import Link from 'next/link';
import { UrlObject } from 'url';

type ButtonTextProps = {
  text: string;
  href: string | UrlObject;
  onClick?: () => void;
};

const ButtonText = (props: ButtonTextProps) => {
  const { text, href, onClick = () => {} } = props;
  return (
    <Link
      href={href}
      className='text-xl  font-medium dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300'
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default ButtonText;
