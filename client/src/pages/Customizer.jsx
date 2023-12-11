import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapShot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation } from "../config/motion";

const Customizer = () => {
  return <div>Customizer</div>;
};

export default Customizer;
