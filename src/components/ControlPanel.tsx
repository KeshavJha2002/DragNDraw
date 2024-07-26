import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { PiMinus, PiPlus } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import {
  HiOutlineArrowUturnLeft,
  HiOutlineArrowUturnRight,
} from "react-icons/hi2";
import { useAppSelector } from '../redux/hooks';

type ControlPanelProps = {
  undo: () => void;
  redo: () => void;
  onZoom: (scale: number) => void;
  scale: number;
  setScale: (scale: number) => void;
};

export function ControlPanel({
  undo,
  redo,
  onZoom,
  scale,
  setScale,
}: ControlPanelProps) {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <>
      <div className="fixed text-sm z-20 bottom-[20px] left-[20px] flex gap-4">
        <div className="flex border border-panel-bg-color rounded-lg">
          <Tippy content="Zoom Out">
            <button
              onClick={() => onZoom(-0.1)}
              aria-label="Zoom Out"
              className={`p-2 hover:bg-hover-bg-color ${theme==="light"?"":"hover:text-black"} rounded-l-lg`}
            >
              <PiMinus className="w-[0.82rem] h-[0.82rem]" />
            </button>
          </Tippy>
          <Tippy content={`Set scale to 100%`}>
            <button
              onClick={() => setScale(1)}
              aria-label={`Set scale to 100%`}
              className={`p-2 hover:bg-hover-bg-color text-[0.8rem] ${theme==="light"?"":"hover:text-black"} text-center`}
            >
              {new Intl.NumberFormat("en-GB", { style: "percent" }).format(
                scale
              )}
            </button>
          </Tippy>
          <Tippy content="Zoom In">
            <button
              onClick={() => onZoom(0.1)}
              aria-label="Zoom In"
              className={`p-2 hover:bg-hover-bg-color ${theme==="light"?"":"hover:text-black"} rounded-r-lg`}
            >
              <PiPlus className="w-[0.82rem] h-[0.82rem]" />
            </button>
          </Tippy>
        </div>
        <div className="flex border border-panel-bg-color rounded-lg">
          <Tippy content="Undo last action">
            <button
              onClick={undo}
              aria-label="Undo last action"
              className={`p-2 hover:bg-hover-bg-color border-panel-bg-color rounded-l-lg ${theme==="light"?"":"hover:text-black"}`}
            >
              <HiOutlineArrowUturnLeft className="w-[0.82rem] h-[0.82rem]" />
            </button>
          </Tippy>
          <Tippy content="Redo last action">
            <button
              onClick={redo}
              aria-label="Redo last action"
              className={`p-2 hover:bg-hover-bg-color rounded-r-lg ${theme==="light"?"":"hover:text-black"}`}
            >
              <HiOutlineArrowUturnRight className="w-[0.82rem] h-[0.82rem]" />
            </button>
          </Tippy>
        </div>
      </div>

      <a
        href="https://github.com/KeshavJha2002"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-20 bottom-[20px] right-[20px] rounded-lg flex items-center gap-2 bg-panel-bg-color p-2 text-primary text-sm hover:text-highlight hover:underline cursor-pointer transition duration-300"
      >
        <FiGithub className="w-4 h-4" />
        Created by Keshav
      </a>
    </>
  );
}
