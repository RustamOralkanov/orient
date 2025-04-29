import { motion } from "motion/react";
import { type ReactNode } from "react";

export const TextAnimation: React.FC<{ children: ReactNode; delay?: number }> = ({ children, delay = 1 }) => {
    return (
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: delay, duration: 1 }} viewport={{ once: true }}>
            {children}
        </motion.span>
    );
};
