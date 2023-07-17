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

export const updateToast = (
  id: any,
  render: string,
  type: any,
  isLoading: boolean,
  autoClose: number
) => {
  toast.update(id, {
    render,
    type,
    isLoading,
    autoClose,
  });
};
