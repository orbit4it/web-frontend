export default function Loading() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <div className="loading">
        <div className="circle bg-indigo-600"></div>
        <div className="circle bg-indigo-600"></div>
        <div className="circle bg-indigo-600"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </main>
  );
}
