import { Col, Row } from "antd"

export const FamilySpaceView = () => {
	return (
		<div className="mt-205 container  max-lg:mt-80">
			<div className="max-lg:border-t-0 max-lg:pt-0">
				<Row gutter={[20, 20]}>
					<Col
						xl={14}
						lg={24}
						md={24}
						sm={24}
						xs={24}
						className="max-lg:relative"
					>
						<div className="flex flex-col gap-20">
							<div className="flex justify-between  max-lg:justify-center">
								<h2 className="uppercase text-[64px] font-display max-lg:text-[40px] max-lg:text-center">
									<span className="font-bold">Family </span>
									Space
								</h2>
								<div className="aspect-square max-w-200 max-lg:absolute max-lg:-bottom-47 max-lg:right-0 max-lg:max-w-185  max-lg:z-10">
									<img
										src={"/Rectangle 43.webp"}
										className="w-full h-full object-cover object-left"
									/>
								</div>
							</div>
							<img
								src={"/improve-1asf.webp"}
								className="w-full h-auto"
							/>
						</div>
					</Col>
					<Col
						xl={10}
						lg={24}
						md={24}
						sm={24}
						xs={24}
					>
						<div className="flex flex-col justify-between h-full">
							<div className="flex flex-col gap-60 bg-orange p-60 -mr-70 max-lg:mr-0 max-lg:p-36  max-lg:pt-85  max-lg:gap-34">
								<div className="flex flex-col gap-24 ">
									<p className="text-white text-sm -tracking-[0.02em] font-light leading-normal font-display">
										Это не просто помещение, а продуманная зона для комфортного
										общения, отдыха и проведения важных моментов.
									</p>
									<p className="text-white text-sm -tracking-[0.02em] font-light leading-normal font-display">
										Здесь вы можете устроить семейный ужин, отпраздновать день
										рождения или провести вечер в кругу близких, не ограничивая
										себя рамками квартиры.
									</p>
									<p className="text-white text-sm -tracking-[0.02em] font-light leading-normal font-display">
										Элегантный интерьер, оборудованная кухня и уютная столовая
										зона создают атмосферу приватности и уюта, где каждая
										встреча становится по-настоящему особенной.
									</p>
								</div>
							</div>
							<p className="text-gray-900 max-w-340 uppercase text-sm -tracking-[0.02em] leading-normal font-display ml-auto  max-lg:hidden">
								Family Space — когда дом становится больше, чем ваша квартира.
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}
