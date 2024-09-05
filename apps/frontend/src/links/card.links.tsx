import { ManagerIcon } from '@/fe/components/icons/manager.icon';
import { PartnersIcon } from '@/fe/components/icons/partners.icon';
import { Link } from '@/fe/utils/aliases.types';
import { menuItemTokens } from '@/fe/tokens';
import { ModulesIcon } from '@/fe/components/icons/modules.icon';
import { SubscriptionPlanIcon } from '@/fe/components/icons/subscription-plan.icon';
import { CategoriesIcon } from '@/fe/components/icons/categories.icon';
import { ProductIcon } from '@/fe/components/icons/product.icon';
import { RentIcon } from '@/fe/components/icons/rent.icon';
import { SaleIcon } from '@/fe/components/icons/sale.icon';

export const adminNav: Link[] = [
  {
    key: 'card-menu-nav-module',
    beforeLink: <ModulesIcon size="large" />,
    text: 'Modulok',
    href: '/modules',
  },
  {
    key: 'card-nav-subscription-plan',
    beforeLink: <SubscriptionPlanIcon size="large" />,
    text: 'Előfizetések',
    href: '/subscription-plan',
  },
  {
    key: 'card-nav-partners',
    beforeLink: <PartnersIcon size="large" />,
    text: menuItemTokens.partners,
    href: '/partners',
  },
];

export const partnerNav: Link[] = [
  {
    key: 'card-nav-product-categories',
    beforeLink: <CategoriesIcon size="large" style="stroke-base-accent" />,
    text: 'Termék kategóriák',
    href: '/product-categories',
  },
  {
    key: 'card-nav-products',
    beforeLink: <ProductIcon size="large" style="stroke-base-accent" />,
    text: 'Termékek',
    href: '/products',
  },
  {
    key: 'card-nav-customers',
    beforeLink: <PartnersIcon size="large" />,
    text: menuItemTokens.customer,
    href: '/customers',
  },
  {
    key: 'card-nav-rentals',
    beforeLink: <RentIcon size="large" />,
    text: 'Bérbeadásaim',
    href: '/rentals',
  },
  {
    key: 'card-nav-sale',
    beforeLink: <SaleIcon size="large" />,
    text: 'Eladásaim',
    href: '/sales',
  },
  {
    key: 'card-nav-profile',
    beforeLink: <ManagerIcon size="large" />,
    text: menuItemTokens.profile,
    href: '/profile',
  },
];
