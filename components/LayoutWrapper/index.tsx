"use client";

import ContentPadding from "../ContentPadding/ContentPadding";
import styles from "./LayoutWrapper.module.css";
import { motion } from "framer-motion";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={styles.layout}
    >
      <ContentPadding>{children}</ContentPadding>
    </motion.div>
  );
};
export default LayoutWrapper;
