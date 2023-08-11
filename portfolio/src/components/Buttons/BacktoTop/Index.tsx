"use client";

import { TbArrowNarrowUp } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import BtnOnlyIcon from "../BtnOnlyIcon";
import { useCallback, useEffect, useState } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY <= 500) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {show && (
        <motion.div className="fixed right-4 bottom-4 z-20">
          <BtnOnlyIcon
            icon={<TbArrowNarrowUp size={20} />}
            className="rounded-[50%] p-[10px]"
            onClick={scrollToTop}
          />
        </motion.div>
      )}
    </>
  );
};

export default BackToTop;
