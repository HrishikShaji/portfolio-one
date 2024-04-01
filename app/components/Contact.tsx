import { Headings } from "./Headings";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <div className=" h-screen flex flex-col justify-center gap-10">
      <Headings text="CONTACT" />
      <ContactForm />
    </div>
  );
};

export default Contact;
