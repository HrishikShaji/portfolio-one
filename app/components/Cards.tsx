export const Cards = () => (
	<div className="cards " style={{ paddingBottom: `500px` }}>
		{Array.from({ length: 5 }).map((_, i) => (
			<div
				key={i}
				className="card sticky h-[100vh] w-[400px] border-2 border-black bg-blue-500 top-10 p-10 "
				style={{ transform: `translateY(${i * 10}em)` }}
			></div>
		))}
	</div>
);
