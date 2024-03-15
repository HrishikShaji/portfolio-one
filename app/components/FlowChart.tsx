export const FlowChart = () => {
	return (
		<div className="container flex flex-col items-center justify-center gap-40 ">
			<canvas className="border-black border-2"></canvas>
			<div className="grid grid-cols-3 gap-40">
				<div className="flex main-box relative items-center gap-[100px]">
					<div className="box  ">1</div>
					<div className="flex flex-col gap-10">
						<div className="box  ">1</div>
						<div className="box  ">1</div>
					</div>
				</div>
				<div className="box  ">1</div>
				<div className="box">2</div>
			</div>
		</div>
	);
};
