import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div>
      <div className="flex flex-center mt-32">
        <div className="text-white lg:text-4xl text-2xl font-semibold">
          Возможное будущее трудоустройство
        </div>
      </div>
      <div className="md:my-20 my-10 relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />
        <div className="marquee h-10">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon) => (
              <LogoIcon key={icon.name} icon={icon} />
            ))}
            {logoIconsList.map((icon) => (
              <LogoIcon key={icon.name} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
