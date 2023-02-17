import Image from "next/image";
import Link from "next/link";

interface PageNavigationProps {
  route: string;
  label: string;
}

const PageNavigation = ({ route, label }: PageNavigationProps): JSX.Element => {
  return (
    <Link href={route}>
      <a className="car-link">
        <span>{label}</span>
        <Image
          src="/images/chevron-small.svg"
          height={16}
          width={16}
          alt="arrow right"
          title="arrow right"
        />
      </a>
    </Link>
  );
};

export default PageNavigation;
