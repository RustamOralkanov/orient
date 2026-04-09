import { TextAnimation, TitleAnimation } from "@/shared/ui"

export const CoworkingView = () => {
	return (
		<div
			className="container pt-170 max-lg:pt-101"
			id="layout"
		>
			<div className="flex justify-between items-end">
				<div className="flex flex-col gap-24">
					<div className="relative w-fit">
						<h2 className="h2 text-gray-900 flex flex-col leading-[1.1]">
							<TitleAnimation title={["Коворкинг"]} />
						</h2>
					</div>
					<h4 className="text-2xl uppercase font-light max-w-610 leading-tight max-lg:text-[16px]">
						<TextAnimation>
							Функциональное рабочее пространство для жителей.
						</TextAnimation>
					</h4>
				</div>
			</div>
			<div className="relative aspect-[4/1] mt-50 -mx-70 max-lg:min-h-190 max-lg:aspect-[300/150] max-lg:mt-24 max-lg:-mx-15">
				<img
					src={"pexels-ranamatloob567-35203646.webp"}
					className="w-full h-full object-cover brightness-50"
				/>
				<div className="flex flex-col gap-24 absolute z-10 top-100 right-70 max-lg:top-[unset] max-lg:bottom-40 max-lg:right-0">
					<p className=" max-w-410 text-sm text-white -tracking-[0.03em] leading-normal max-lg:static max-lg:text-white max-lg:max-w-full max-lg:px-15 max-lg:mt-50 max-lg:text-sm">
						Комфортная среда для работы, встреч и обучения в шаге от дома.
						Идеально для удалённой работы. Работайте в комфортной и стильной
						атмосфере, где всё располагает к продуктивности.
					</p>
				</div>
			</div>
		</div>
	)
}
