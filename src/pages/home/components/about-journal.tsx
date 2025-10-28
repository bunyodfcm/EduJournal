import { bannerImage } from "../../../assets/images-links";
import Button from "../../../components/shared/button";

const AboutJournal = () => {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-20">
        <div className="w-full md:w-80 h-[300px] md:h-[400px] flex shrink-0 rounded-lg overflow-hidden mx-auto md:mx-0">
          <img
            src={bannerImage}
            alt="abour juornal"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-xl md:text-2xl font-bold">About Journal</h2>
          <p className="text-text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos.
          </p>
          <Button
            text="Read More"
            iconRight="stash:arrow-right"
            onClick={() => {}}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutJournal;
