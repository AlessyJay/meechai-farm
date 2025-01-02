import { motion } from "framer-motion";

export function Carrot() {
  return (
    <motion.svg
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute opacity-20"
    >
      <path
        d="M32 8C32 8 45 12 48 32C51 52 42 56 32 56C22 56 13 52 16 32C19 12 32 8 32 8Z"
        fill="#FF6B6B"
      />
      <path
        d="M32 4C32 4 36 6 36 8C36 10 32 12 32 12C32 12 28 10 28 8C28 6 32 4 32 4Z"
        fill="#4CAF50"
      />
    </motion.svg>
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
