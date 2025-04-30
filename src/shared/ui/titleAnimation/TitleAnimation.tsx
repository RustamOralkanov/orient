import { useResponsive } from "@/shared/lib";
import { motion } from "motion/react";

export const TitleAnimation = ({ title, height }: { title: string[]; height?: number }) => {
    const { isMobile } = useResponsive();

    return title?.map((row, id) => (
        <span key={id} className={["overflow-hidden", height ? `!h-[${height}px]` : `h-[${isMobile ? 39 : 84}px]`].join(" ")}>
            <motion.span
                initial={{ rotate: 5, y: isMobile ? 37 : 75, opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.3 * id, duration: 1.5, ease: [0, 0.71, 0.2, 1.01] }}
                viewport={{ once: true }}
                className="block"
            >
                {row}
            </motion.span>
        </span>
    ));
};
