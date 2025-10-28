// src/components/ContactForm.tsx
import { useState } from "react";
import Button from "../../../components/shared/button";

const ContactForm = () => {
  const [fileName, setFileName] = useState("");

  return (
    <form className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4 w-full border border-border">
      <input
        type="text"
        placeholder="Ismingizni kiriting"
        className="border border-border rounded-lg px-4 py-2 focus:outline-blue-500"
      />

      <input
        type="tel"
        placeholder="Telefon raqamingizni kiriting"
        className="border border-border rounded-lg px-4 py-2 focus:outline-blue-500"
      />

      <input
        type="email"
        placeholder="Elektron pochtangizni kiriting"
        className="border border-border rounded-lg px-4 py-2 focus:outline-blue-500"
      />

      <div className="flex items-center justify-between border border-border rounded-lg px-4 py-2">
        <label className="text-gray-500 cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={(e) =>
              setFileName(e.target.files?.[0]?.name || "Fayl tanlanmagan")
            }
          />
          Faylni tanlash
        </label>
        <span className="text-sm text-gray-400 truncate">
          {fileName || "Hali fayl tanlanmagan"}
        </span>
      </div>

      <textarea
        placeholder="Xabaringizni yozing..."
        rows={4}
        className="border border-border rounded-lg px-4 py-2 focus:outline-blue-500 resize-none"
      ></textarea>

      <Button text="Xabarni yuborish" iconRight="mdi:send" className="w-full flex justify-center" />
    </form>
  );
};

export default ContactForm;
