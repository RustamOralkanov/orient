import { TextAnimation, TitleAnimation } from "@/shared/ui"
import type { ReactNode } from "react"

type Feature = {
	icon: string
	title: ReactNode
	rotate?: boolean
}

const FEATURES: Feature[] = [
	{
		icon: "/business/icon-1.svg",
		title: (
			<>
				Площадь помещений
				<br />
				от 49 до 154 м<sup className="text-[12.9px] max-lg:text-[9px]">2</sup>
			</>
		)
	},
	{
		icon: "/business/icon-2.svg",
		title: "Выгодные условия приобретения"
	},
	{
		icon: "/business/icon-3.svg",
		title: "Удобная рассрочка от застройщика",
		rotate: true
	},
	{
		icon: "/business/icon-4.svg",
		title: "Высокая инвестиционная привлекательность"
	},
	{
		icon: "/business/icon-5.svg",
		title: "Высокий пешеходный и автомобильный трафик"
	},
	{
		icon: "/business/icon-6.svg",
		title: "Свободная планировка"
	},
	{
		icon: "/business/icon-7.svg",
		title: "Коммерческие помещения напрямую от застройщика"
	},
	{
		icon: "/business/icon-8.svg",
		title: "Перспективная локация"
	}
]

export const BusinessView = () => {
	return (
		<div
			className="container pt-151 max-lg:pt-60 max-lg:pb-60"
			id="business"
		>
			<div className="relative w-fit z-10 max-lg:mx-auto">
				<img
					src="/business-kursiv.svg"
					alt="в правильном месте"
					className="absolute left-52 top-38 w-523 h-auto pointer-events-none max-lg:hidden"
				/>
				<img
					src="/business-kursiv-mobile.svg"
					alt="в правильном месте"
					className="hidden absolute left-25 top-40 w-218 h-auto pointer-events-none max-lg:block"
				/>
				<h2 className="h2 text-gray-900 flex flex-col leading-[1.1] max-lg:text-[40px] max-lg:text-center">
					<TitleAnimation title={["Ваш бизнес"]} />
				</h2>
			</div>

			<div className="relative w-[calc(100%_+_140px)] -mx-70 mt-65 max-lg:mx-0 max-lg:w-full max-lg:mt-64 max-lg:flex max-lg:flex-col">
				<div className="aspect-[1440/900] w-full max-lg:order-2 max-lg:aspect-[360/449] max-lg:-mx-15 max-lg:w-[calc(100%_+_30px)]">
					<img
						src="/business-hero.webp"
						alt="Коммерческие помещения ORIENT"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="absolute -top-100 right-0 w-710 p-90 bg-[linear-gradient(158deg,#A05428_19.59%,#3A1E0F_217.84%)] max-lg:relative max-lg:order-1 max-lg:top-0 max-lg:right-auto max-lg:w-full max-lg:p-30 max-lg:bg-[linear-gradient(138deg,#A05428_19.59%,#3A1E0F_217.84%)] max-lg:-mb-100">
					<TextAnimation>
						<div className="flex flex-col gap-24 text-white text-[16px] leading-[1.5] tracking-[-0.03em] font-display max-lg:text-sm max-lg:font-light max-lg:gap-21">
							<p>
								ORIENT — это современный жилой комплекс расположен на
								пересечении улиц Сулейменова-Рыскулбекова, в активно
								развивающемся районе с высокой плотностью жилой застройки и
								постоянным пешеходным и автомобильным трафиком, где открываются
								новые возможности для развития бизнеса и выгодных инвестиций.
							</p>
							<p>
								В проекте предусмотрены коммерческие помещения подходящие для
								самых разных форматов бизнеса: магазинов, кафе, салонов красоты,
								медицинских центров, офисов, образовательных проектов и сферы
								услуг.
							</p>
						</div>
					</TextAnimation>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-20 -mt-85 relative z-10 max-lg:grid-cols-1 max-lg:gap-10 max-lg:-mt-50">
				{FEATURES.map((feature, id) => (
					<div
						key={id}
						className="bg-yellow p-30 min-h-248 flex flex-col justify-between gap-40 max-lg:min-h-0 max-lg:h-100 max-lg:p-20 max-lg:flex-row max-lg:items-center max-lg:gap-20 max-lg:justify-start"
					>
						<div className="size-40 overflow-hidden flex items-center justify-center shrink-0 max-lg:size-30">
							<img
								src={feature.icon}
								alt=""
								className={[
									"w-full h-full object-contain",
									feature.rotate ? "rotate-[-52deg] scale-110" : ""
								].join(" ")}
							/>
						</div>
						<p className="text-gray-900 text-[20px] leading-normal font-display max-lg:text-sm max-lg:flex-1">
							{feature.title}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}
