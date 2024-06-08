import {NavLinkProps} from "@/types";
import {Home, Banknote, Megaphone, Users, ReceiptText, Target} from 'lucide-react';


export const navLinks: NavLinkProps[] = [
    {href: "/dashboard", label: "Dashboard", Icon: Home},
    {href: "/dashboard/customers", label: "Customers", Icon: Users, badge: 25},
    {href: "/dashboard/orders", label: "Orders", Icon: ReceiptText, badge: 12},
    {href: "/dashboard/audience", label: "Audience", Icon: Target},
    {href: "/dashboard/campaign", label: "Campaign", Icon: Megaphone},
];
