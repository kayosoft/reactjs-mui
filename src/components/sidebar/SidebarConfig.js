import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import cropFill from "@iconify/icons-eva/crop-fill";

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: getIcon(pieChart2Fill),
  },

  {
    title: "Crop",
    icon: getIcon(cropFill),
    children: [
      {
        title: "Crops",
        path: "/dashboard/crops",
        icon: getIcon(cropFill),
      },
      {
        title: "Crop Plan",
        path: "#",
        icon: getIcon(cropFill),
      },
    ],
  },
  {
    title: "Livestock",
    path: "#",
    icon: getIcon(cropFill),
  },
  {
    title: "Users",
    path: "/dashboard/user",
    icon: getIcon(cropFill),
  },
];

export default sidebarConfig;
