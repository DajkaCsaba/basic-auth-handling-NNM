import toast from 'react-hot-toast';
import { InfoIcon } from '@/fe/components/icons/info.icon';

export const infoToast = (message: string) => {
  toast.success(message, {
    icon: <InfoIcon size={'extraLarge'} />,
    id: 'info-toast',
  });
};
