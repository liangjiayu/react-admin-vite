import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useEffect } from 'react';
import { ThemeMode } from '@/constants';
import { useGlobalStore } from '@/store';

const ThemeSwitch = () => {
  const themeMode = useGlobalStore((s) => s.themeMode);
  const setThemeMode = useGlobalStore((s) => s.setThemeMode);
  const isDarkMode = themeMode === ThemeMode.Dark;

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const onChangeBySwitch = () => {
    setThemeMode(isDarkMode ? ThemeMode.Light : ThemeMode.Dark);
  };

  return (
    <div
      className={clsx(
        'relative flex h-[22px] w-[40px] cursor-pointer rounded-[12px] border bg-[#8e96aa24] p-[1px] leading-none hover:border-blue-600',
        {
          'border-[#c2c2c4]': !isDarkMode,
          'border-[#3c3f44]': isDarkMode,
        },
      )}
      onClick={onChangeBySwitch}
    >
      <span
        className={clsx(
          'absolute flex h-[18px] w-[18px] flex-col items-center justify-center rounded-full transition-all duration-250',
          {
            'bg-white': !isDarkMode,
            'translate-x-[18px] bg-[#000]': isDarkMode,
          },
        )}
      >
        <SunOutlined
          className={clsx('invisible absolute text-[#67676c]! text-[11px]', {
            visible: !isDarkMode,
          })}
        />
        <MoonOutlined
          className={clsx('invisible absolute text-[#fff]! text-[11px]', {
            visible: isDarkMode,
          })}
        />
      </span>
    </div>
  );
};

export default ThemeSwitch;
