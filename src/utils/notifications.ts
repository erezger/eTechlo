// src/utils/notifications.ts

import toast from 'react-hot-toast';

// 1. הודעת הצלחה
export const showSuccessToast = (message: string) => {
  toast.success(message, {
    duration: 4000,
    position: 'top-center',
  });
};

// 2. הודעת שגיאה (משתמשת בהודעה מה-API)
export const showErrorToast = (message: string) => {
  toast.error(message, {
    duration: 6000,
    position: 'top-center',
  });
};

// 3. הודעת טעינה (ל-useMutation)
export const showLoadingToast = (message: string) => {
  return toast.loading(message, {
    duration: Infinity, // נשאר פתוח עד שנשלח אותו
  });
};