"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function MotionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
