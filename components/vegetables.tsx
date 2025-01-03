import { motion } from "framer-motion";

export function Carrot() {
  return (
    <motion.img
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      width="300"
      height="300"
      className="object-contain opacity-50"
      alt="carrot"
      src="/images/carrot.png"
    />
  );
}

export function Lettuce() {
  return (
    <motion.svg
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute opacity-20"
    >
      <path
        d="M32 16C32 16 48 24 48 40C48 56 16 56 16 40C16 24 32 16 32 16Z"
        fill="#4CAF50"
      />
    </motion.svg>
  );
}

export function Tomato() {
  return (
    <motion.svg
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute opacity-20"
    >
      <circle cx="32" cy="32" r="24" fill="#FF6B6B" />
      <path
        d="M32 8C32 8 36 12 36 16C36 20 32 20 32 20C32 20 28 20 28 16C28 12 32 8 32 8Z"
        fill="#4CAF50"
      />
    </motion.svg>
  );
}
