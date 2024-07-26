import { LuMousePointer, LuPencil } from "react-icons/lu";
import { FiSquare } from "react-icons/fi";
import { IoText } from "react-icons/io5";
import { PiMinusBold } from "react-icons/pi";
import { PiDiamondBold } from "react-icons/pi";
import { GiLaserBlast } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiCylinderBold } from "react-icons/pi";
import { FaEraser } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import { PiHandGrabbingBold } from "react-icons/pi";
import { ToolValue, ToolKey } from '../types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setTool } from '../redux/slices/toolSlices';

type ToolbarItemProps = {
  toolValue: ToolValue;
  toolKey: ToolKey;
};

export default function ToolbarItem({ toolValue, toolKey }: ToolbarItemProps) {
  const dispatch = useAppDispatch();
  const toolSelected = useAppSelector((state) => state.tool.tool);
  const selected = toolValue===toolSelected;

  const getIcon = (toolValue: ToolValue) => {
    switch (toolValue) {
      case 'navigate':
        return <PiHandGrabbingBold className="text-primary-text-color w-4 h-4" />;
      case 'selection':
        return <LuMousePointer className="text-primary-text-color w-3 h-3" />;
      case 'cylinder':
        return <PiCylinderBold className="text-primary-text-color w-3 h-3" />;
      case 'rectangle':
        return <FiSquare className="text-primary-text-color w-3 h-3" />;
      case 'line':
        return <PiMinusBold className="text-primary-text-color w-3 h-3" />;
      case 'arrow':
        return <FaArrowRightLong className="text-primary-text-color w-3 h-3" />;
      case 'freehand':
        return <LuPencil className="text-primary-text-color w-3 h-3" />;
      case 'text':
        return <IoText className="text-primary-text-color w-3 h-3" />;
      case 'diamond':
        return <PiDiamondBold className="text-primary-text-color w-3 h-3" />;
      case 'laser_pointer':
        return <GiLaserBlast className="text-primary-text-color w-3 h-3" />;
      case 'eraser':
        return <FaEraser className="text-primary-text-color w-3 h-3" />;
      case 'ellipse':
        return <FaRegCircle className="text-primary-text-color w-3 h-3" />;
      case 'insert_image':
        return <IoImageOutline className="text-primary-text-color w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`cursor-pointer relative rounded-md border text-[1rem] border-transparent p-3 bg-primary-bg-color transition duration-300 ${
        selected ? 'bg-selected-bg-color' : 'hover:bg-secondary-bg-color'
      }`}
      onClick={() => dispatch(setTool(toolValue))}
    >
      <input
        type="radio"
        id={toolValue}
        checked={selected}
        onChange={() => dispatch(setTool(toolValue))}
        readOnly
        className="cursor-pointer w-3 h-3 absolute opacity-0"
      />
      <label
        htmlFor={toolValue}
        className="cursor-pointer absolute w-1 h-1 p-0 m-(-1) overflow-hidden .clip whitespace-nowrap border-0"
      >
        {toolKey}
      </label>
      {getIcon(toolValue)}
      <span className="absolute top-[1.35rem] right-[0.35rem] text-[0.6rem] text-[#666] font-[500]">
        {toolKey}
      </span>
    </div>
  );
}
