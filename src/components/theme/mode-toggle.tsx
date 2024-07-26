// src/components/ModeToggle.tsx
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setTheme, Theme } from '../../redux/slices/themeSlices';
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleThemeChange = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className="fixed text-sm z-20 top-[20px] right-[20px] flex gap-4">
      <div className="flex border border-panel-bg-color rounded-lg">
        <button
          aria-label="Sun"
          className={`p-2 rounded-l-lg flex items-center hover:bg-hover-bg-color hover:text-black justify-center ${
            theme === 'light' ? 'bg-hover-bg-color text-primary' : 'hover:bg-[#f0f0fd]'
          }`}
          onClick={() => handleThemeChange('light')}
        >
          <Sun className="w-[1.2rem] h-[1.2rem]" />
        </button>
        <button
          aria-label="Moon"
          className={`p-2 flex rounded-r-lg items-center justify-center hover:bg-hover-bg-color hover:text-black ${
            theme === 'dark' ? 'bg-hover-bg-color text-primary' : 'hover:bg-[#f0f0fd]'
          }`}
          onClick={() => handleThemeChange('dark')}
        >
          <Moon className="w-[1.2rem] h-[1.2rem]" />
        </button>
      </div>
    </div>
  );
}
