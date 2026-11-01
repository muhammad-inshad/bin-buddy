import { Truck, Recycle, Home, Trees, Sofa, Building2, type LucideIcon } from "lucide-react";
import type { Service } from "@/lib/services";

const iconMap: Record<Service["icon"], LucideIcon> = {
  truck: Truck,
  recycle: Recycle,
  home: Home,
  trees: Trees,
  sofa: Sofa,
  building: Building2,
};

export default function ServiceIcon({ icon, className }: { icon: Service["icon"]; className?: string }) {
  const Icon = iconMap[icon];
  return <Icon className={className} />;
}
