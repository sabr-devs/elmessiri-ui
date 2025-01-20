declare module "framer-motion";

declare interface MenuItem {
  id: number;
  title: string;
  path?: string;
  submenu?: { id: number; title: string; path: string }[]; // Add this line
}
