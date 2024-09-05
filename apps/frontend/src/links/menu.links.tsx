import { ManagerIcon } from '@/fe/components/icons/manager.icon';
import { PartnersIcon } from '@/fe/components/icons/partners.icon';
import { SaleIcon } from '@/fe/components/icons/sale.icon';
import { menuItemTokens } from '@/fe/tokens';
import { Link } from '@/fe/utils/aliases.types';
import { SubscriptionPlanIcon } from '@/fe/components/icons/subscription-plan.icon';
import { ModulesIcon } from '@/fe/components/icons/modules.icon';
import { CategoriesIcon } from '@/fe/components/icons/categories.icon';
import { ProductIcon } from '@/fe/components/icons/product.icon';
import { RentIcon } from '@/fe/components/icons/rent.icon';

export const adminNav: Link[] = [
  {
    key: 'side-menu-nav-module',
    beforeLink: <ModulesIcon size="big" style="fill-base-accent" />,
    text: 'Modulok',
    href: '/modules',
  },
  {
    key: 'side-menu-nav-subscription-plan',
    beforeLink: <SubscriptionPlanIcon size="big" style="fill-base-accent" />,
    text: 'Előfizetések',
    href: '/subscription-plans',
  },
  {
    key: 'side-menu-nav-partners',
    beforeLink: <PartnersIcon size="big" style={'fill-base-accent'} />,
    text: menuItemTokens.partners,
    href: '/partners',
  },
];

export const partnerNav: Link[] = [
  {
    key: 'side-menu-product-categories',
    beforeLink: <CategoriesIcon size="big" style={'stroke-base-accent'} />,
    text: 'Termék kategóriáim',
    href: '/product-categories',
  },
  {
    key: 'side-menu-products',
    beforeLink: <ProductIcon size="big" style={'stroke-base-accent'} />,
    text: 'Termékeim',
    href: '/products',
  },
  {
    key: 'side-menu-nav-rentals',
    beforeLink: <RentIcon size="big" style={'fill-base-accent'} />,
    text: 'Bérbeadásaim',
    href: '/rentals',
  },
  {
    key: 'side-menu-sale',
    beforeLink: <SaleIcon size="big" style={'fill-base-accent'} />,
    text: 'Eladásaim',
    href: '/sales',
  },
  {
    key: 'side-menu-nav-customers',
    beforeLink: <PartnersIcon size="big" style={'fill-base-accent'} />,
    text: menuItemTokens.customer,
    href: '/customers',
  },
  {
    key: 'side-menu-nav-profile',
    beforeLink: <ManagerIcon size="big" style={'fill-base-accent'} />,
    text: 'Adataim',
    href: '/profile',
  },
];
