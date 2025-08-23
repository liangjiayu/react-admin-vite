import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useMemo } from 'react';
import { ThemeMode, useGlobalStore } from '@/store';

const ThemeSwitch = () => {
  const { themeMode, setThemeMode } = useGlobalStore();

  const isDarkMode = useMemo(() => {
    if (themeMode === ThemeMode.Light) {
      return false;
    }
    if (themeMode === ThemeMode.Dark) {
      return true;
    }
    return false;
  }, [themeMode]);

  const onChangeBySwitch = () => {
    if (themeMode === ThemeMode.Light) {
      document.documentElement.classList.add('dark');
      setThemeMode(ThemeMode.Dark);
    } else {
      document.documentElement.classList.remove('dark');
      setThemeMode(ThemeMode.Light);
    }
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
