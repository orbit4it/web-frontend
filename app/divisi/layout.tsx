import "./galeri.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="w-full bg-primary">
			<section className="w-full h-[1970px] bg-home bg-cover bg-no-repeat opacity-70 pt-[412px]">
        <div className="w-full h-full rounded-t-[63px] bg-primary pt-24 pb-80 px-36">
          {children}
        </div>
			</section>
		</main>
	);
}