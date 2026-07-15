import { OrientData } from "@/shared/model"
import { OrientProvider } from "@/shared/provider"
import { AboutView } from "@/views/about"
import { ArchitectureView } from "@/views/architecture"
import { BusinessView } from "@/views/business"
import { CompanyView } from "@/views/company"
import { CoworkingView } from "@/views/coworking"
import { CtaView } from "@/views/cta"
import { FamilySpaceView } from "@/views/family-space"
import { HallView } from "@/views/hall"
import { ImprovementView } from "@/views/improvement"
import { LayoutsView } from "@/views/layouts"
import { LocationView } from "@/views/location"
import { MainView } from "@/views/main"
import { ParkingView } from "@/views/parking"
import { ServiceView } from "@/views/service"
import { Footer } from "@/widgets/footer"
import axios from "axios"
import { useEffect, useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export const App = () => {
	const [data, setData] = useState<OrientData["ru"] | null>(null)

	useEffect(() => {
		axios
			.get("/orient.json")
			.then(response => {
				setData(response.data.ru)
			})
			.catch(error => {
				console.error("Ошибка при загрузке JSON:", error)
			})
	}, [])

	return (
		<ParallaxProvider>
			<OrientProvider>
				<MainView {...data} />
				<AboutView {...data?.about} />
				<LocationView {...data?.location} />
				<ImprovementView {...data?.improvement} />
				<ArchitectureView {...data?.architecture} />
				<HallView {...data?.hall} />
				<FamilySpaceView />
				<CoworkingView />
				<ParkingView {...data?.parking} />
				<LayoutsView {...data?.layouts} />
				<CtaView />
				<BusinessView />
				<CompanyView {...data?.company} />
				<ServiceView {...data?.service} />
				<Footer {...data?.footer} />
				{/* <Booking /> */}
			</OrientProvider>
		</ParallaxProvider>
	)
}
