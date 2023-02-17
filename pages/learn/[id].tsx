import { useRouter } from "next/router";
import CarCard from "../../src/components/CarCard";
import { useCars } from "../../src/hooks/useCars";

const LearnPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { getCarById } = useCars();
  const car = getCarById(id as string);

  if (!car) return <>No details found of the car</>;

  return (
    <div className="container">
      <CarCard car={car} isDetailPage />
    </div>
  );
};

export default LearnPage;
