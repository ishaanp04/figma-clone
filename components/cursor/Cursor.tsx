import CursorSVG from "@/public/assets/CursorSVG";
import { motion } from "framer-motion";

type Props = {
    color: string;
    x: number;
    y: number;
    message: string;
}

const Cursor = ({ color, x, y, message }: Props) => {
    return (
        <motion.div className="pointer-events-none absolute top-0 left-0"
            style={{
                transform: `translateX(${x}px) translateY(${y}px)`,
            }}
            initial={{ x, y }}
            animate={{ x, y }}
            transition={{
                type: "spring",
                damping: 30,
                mass: 0.8,
                stiffness: 400,
            }}
        >
            <CursorSVG color={color} />
            {message && (
                <div className="absolute left-2 top-5 rounded-3xl px-4 py-2"
                    style={{ backgroundColor: color }}>
                    <p className="text-white whitespace-nowrap text-sm leading-relaxed">{message}</p>
                </div>
            )}
        </motion.div>
    )
}

export default Cursor
