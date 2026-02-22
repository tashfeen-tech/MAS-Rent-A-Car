"use client";

import { motion } from "framer-motion";
import { Users, Fuel, Gauge, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import styles from "./CarCard.module.css";
import { Car } from "@/data/fleet";

interface CarCardProps {
    car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={styles.card}
        >
            <div className={styles.imageContainer}>
                <img
                    src={car.image}
                    alt={car.name}
                    className={styles.carImage}
                    loading="lazy"
                />
                <span className={styles.carTypeBadge}>{car.type}</span>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{car.name}</h3>
                </div>

                <div className={styles.specs}>
                    <div className={styles.specItem}>
                        <Users size={16} />
                        <span>{car.seats} Seats</span>
                    </div>
                    <div className={styles.specItem}>
                        <Gauge size={16} />
                        <span>{car.transmission}</span>
                    </div>
                    <div className={styles.specItem}>
                        <Fuel size={16} />
                        <span>Petrol</span>
                    </div>
                </div>

                <div className={styles.features}>
                    {car.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className={styles.feature}>
                            <CheckCircle2 size={12} /> {feature}
                        </span>
                    ))}
                </div>

                <button className={styles.bookBtn}>
                    Send Inquiry
                </button>
            </div>
        </motion.div>
    );
};

export default CarCard;
