"use client";

import React from "react";

import CardcAtivity from "./CardcAtivity";
import { homePageInfo } from "@/types/schemas/pages";
import { motion } from "framer-motion";

const CardsActivitIes = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex gap-[40px] lg:flex-col">
      {homeInfo.functions.map(
        ({ activity, activityComplement, description, iconSvg }, index) => (
          <motion.div
            key={`activity-${activity}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.15, delay: index * 0.2 }}
          >
            <CardcAtivity
              activity={activity}
              activityComplement={activityComplement}
              description={description}
              iconSvg={iconSvg}
            />
          </motion.div>
        )
      )}
    </div>
  );
};

export default CardsActivitIes;
