import { Button, Icon, IconType } from "vcc-ui";

interface CarouselButtonProps {
  type: IconType;
  onClick: (index: number) => void;
  disabled: boolean;
  index: number;
}
const CarouselButton = ({
  type,
  onClick,
  disabled,
  index,
}: CarouselButtonProps): JSX.Element => {
  return (
    <Button
      className="button"
      variant="text"
      onClick={() => onClick(index)}
      disabled={disabled}
      extend={{width: 36}}
    >
      <Icon type={type} />
    </Button>
  );
};

export default CarouselButton;
