import Button from "../../../components/shared/button";
import { bannerImage } from "../../../assets/images-links";

const HomeBanner = ({ meta }: { meta: any }) => {
  console.log(meta);
  
  return (
    <div className="container">
      <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        <div className="flex flex-col justify-start gap-4 w-full md:w-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Mamun Science Xalqaro Jurnali</h1>
          <p className="text-base md:text-lg text-text-secondary">
            “Mamun Science” xalqaro jurnali o‘z sahifalarida filologiya, tarix,
            falsafa, iqtisodiyot, pedagogika va psixologiya, tibbiyot, tabiiy,
            fizika, matematika kabi fan yo‘nalishlarida akademik tadqiqotlar
            natijalari va ilmiy maqolalarni chop etib boradi.
          </p>
          <Button
            text="Eng so‘nggi sonini yuklash"
            iconRight="stash:cloud-arrow-down"
            onClick={() => {}}
            className="mt-4"
          />
        </div>
        <div className="w-full md:w-96 h-[400px] md:h-[500px] flex shrink-0 rounded-lg overflow-hidden">
          <img
            src={bannerImage}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
