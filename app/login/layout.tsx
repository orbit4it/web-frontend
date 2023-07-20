import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const metadata: Metadata = {
  title: 'Login',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {children}
    </main>
  );
}
