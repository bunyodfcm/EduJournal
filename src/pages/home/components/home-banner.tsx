import Button from "../../../components/buttons/button";
import { bannerImage } from "../../../assets/images-links";

const HomeBanner = () => {
  return (
    <div className="container">
      <div className="py-10 flex items-center justify-between gap-10">
        <div className="flex flex-col justify-start gap-4">
          <h1 className="text-4xl font-bold">Mamun Science Xalqaro Jurnali</h1>
          <p className="text-lg text-text-secondary">
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
        <div className="w-96 h-[500px] flex shrink-0 rounded-lg overflow-hidden">
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
