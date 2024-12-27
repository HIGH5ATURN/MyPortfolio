"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",

  },
  {
    num: "02",
    title: "Android Development",
    description: "We build android applications that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",

  },

  {
    num: "03",
    title: "Desktop Application",
    description: "We build desktop applications that serve as powerful tool for managing your business.",
    href: "",

  },


];

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div>

      <div className="container mx-auto">
      services page
      </div>
     
    </div>
  )
};

export default Services;