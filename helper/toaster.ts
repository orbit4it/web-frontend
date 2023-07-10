import { toast } from 'react-toastify';

export const showToast = (message: string, type: string) => {
  if (type == 'success') {
    toast.success(message);
  } else if (type == 'danger') {
    toast.error(message);
  } else if (type == 'warning') {
    toast.warn(message);
  } else {
    toast.info(message);
  }
};
