// src/components/ContactInfo.tsx
import { Icon } from "@iconify/react";

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4 border border-border">
      <div className="flex items-center gap-3 text-text-secondary">
        <Icon icon="mdi:phone-outline" width="24" height="24" />
        <span>+998 (77) 369-40-40</span>
      </div>

      <div className="flex items-center gap-3 text-text-secondary">
        <Icon icon="mdi:email-outline" width="24" height="24" />
        <span>info@mamunedu.uz</span>
      </div>

      <div className="flex items-center gap-3 text-text-secondary">
        <Icon icon="mdi:map-marker-outline" width="24" height="24" />
        <span>
          Xorazm viloyati, Xiva, Qibla tozabog' MFY, Bol-xovuz ko'chasi, 2-uy
        </span>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.569421047441!2d60.6019300610543!3d41.535266655180415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc90000bbd2dd%3A0xfe1a923da48fb03e!2sMa&#39;mun%20Universitet%20Yugastroy!5e0!3m2!1suz!2s!4v1761653678071!5m2!1suz!2s"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactInfo;
