import { SidebarComp, SidebarItem } from './SidebarComp';
import { LayoutDashboard, NotebookPen, ChartLine, Boxes, Package, Receipt, Settings, LifeBuoy } from 'lucide-react';

// This is sidebar component.

const Sidebar = () => {
  return (
    <SidebarComp>
      <SidebarItem icon={<LayoutDashboard size={20} />} text='Overview' alert route='/' />
      <SidebarItem icon={<NotebookPen size={20} />} text='Statistics' active route='/statistics' />
      <SidebarItem icon={<ChartLine size={20} />} text='Charts' route='/charts' />

      <hr className="my-3" />
      <SidebarItem icon={<Settings size={20} />} text='Settings' route='/' />
      <SidebarItem icon={<LifeBuoy size={20} />} text='Help' route='/' />
    </SidebarComp>
  );
}

export default Sidebar;
