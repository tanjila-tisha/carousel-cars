import React from "react";
import { Text, View } from "vcc-ui";
import Image from "next/image";
import { Car } from "../types";
import PageNavigation from "./PageNavigation";

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
        <Image
          src={car.imageUrl}
          alt={car.modelName}
          title={car.modelName}
          layout="responsive"
          width="350"
          height="270"
          priority
        />
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
            <PageNavigation route={`/learn/${car.id}`} label="Learn" />
            <PageNavigation route={`/shop/${car.id}`} label="Shop" />
          </div>
        ) : (
          <div className="car-links">
            <PageNavigation route="/" label="Back" />
          </div>
        )}
      </View>
    </View>
  );
};

export default CarCard;
