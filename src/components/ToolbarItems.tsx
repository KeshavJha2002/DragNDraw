import { Tools } from '../types';
import ToolbarItem from './ToolbarItem';


export function ToolbarItems() {
  return (
    <div className="fixed top-[20px] left-1/2 transform -translate-x-1/2 z-20 p-[0.3rem] bg-primary-bg-color rounded-lg border border-border-color shadow-md flex gap-2 justify-center">
      {Object.values(Tools).map((t) => (
        <ToolbarItem key={t.key} toolValue={t.value} toolKey={t.key}/>
      ))}
    </div>
  );
}