import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Biz bilan bog‘lanish uchun
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
