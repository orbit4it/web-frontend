import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Daftar Dulu Cuy',
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
