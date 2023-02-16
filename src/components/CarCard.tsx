import React from "react";
import { Text, View } from "vcc-ui";
import { Car } from "../types";
import Image from "next/image";
import Link from "next/link";

interface CarProps {
  car: Car;
  isDetailPage?: boolean;
}

const CarCard = ({ car, isDetailPage = false }: CarProps): JSX.Element => {
  return (
    <View className="car-card">
      <Text extend={{ color: "gray", paddingBottom: 5 }}>{car.bodyType}</Text>
      <View className="car-model">
        <View extend={{ color: "black", fontWeight: "bold" }}>
          {car.modelName}
        </View>
        <View extend={{ color: "gray" }}> {car.modelType}</View>
      </View>
      <View paddingTop={2}>
        <div>
          <Image
            src={car.imageUrl}
            alt={car.modelName}
            title={car.modelName}
            layout="responsive"
            width="350"
            height="270"
            priority
          />
        </div>
      </View>
      <View
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isDetailPage ? (
          <div className="car-links">
            <Link href={`/learn/${car.id}`}>
              <a className="car-link">
                <span>Learn</span>
                <Image
                  src="/images/chevron-small.svg"
                  height={16}
                  width={16}
                  alt="arrow right"
                  title="arrow right"
                />
              </a>
            </Link>
            <Link href={`/shop/${car.id}`}>
              <a className="car-link">
                <span>Shop</span>
                <Image
                  src="/images/chevron-small.svg"
                  height={16}
                  width={16}
                  alt="arrow right"
                  title="arrow right"
                />
              </a>
            </Link>
          </div>
        ) : (
          <div className="car-links">
            <Link href="/">
              <a className="car-link">
                <span>Back Home</span>
                <Image
                  src="/images/chevron-small.svg"
                  height={16}
                  width={16}
                  alt="arrow right"
                  title="arrow right"
                />
              </a>
            </Link>
          </div>
        )}
      </View>
    </View>
  );
};

export default CarCard;
