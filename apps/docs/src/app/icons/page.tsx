import { Icon1inchMono } from "@bgd-labs/react-icons";
import { IconCard } from "@/components/IconCard";

const IconsPage = () => {
  // TODO: map icons here
  return (
    <main className="p-24">
      <div className="block flex flex-wrap gap-4">
        <IconCard name="1INCH" symbol="1inch">
          <Icon1inchMono />
        </IconCard>
      </div>
    </main>
  );
};

export default IconsPage;
