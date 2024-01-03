'use client';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useScreenSize } from '@/hooks';

function NavToggler({
  onToggle,
  toggled = false,
}: {
  onToggle: (toggled: boolean) => void;
  toggled?: boolean;
}) {
  const screenSize = useScreenSize();
  const handleToggle = () => {
    onToggle(!toggled);
  };

  useEffect(() => {
    if (screenSize.width >= 768) {
      onToggle(false);
    }
  }, [screenSize]);

  return (
    <>
      <button
        onClick={handleToggle}
        className={`bg_secondary w-8 h-8 rounded-full transition-transform transform duration-500 ${
          toggled ? 'rotate-180' : 'rotate-0'
        }`}
      >
        <FontAwesomeIcon icon={toggled ? faClose : faBars} size='1x' />
      </button>
    </>
  );
}

export default NavToggler;
