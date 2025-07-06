import ContactForm from '@/components/contact-form';
import {
  SectionContainer,
  SectionContent,
  SectionHeader,
} from '@/components/section-container';

function Contact() {
  return (
    <SectionContainer id="contact">
      <SectionHeader>Contact</SectionHeader>
      <SectionContent className="place-items-center">
        <p>
          Please contact me at{' '}
          <a
            className="font-semibold text-primary transition-all hover:underline"
            href="mailto:aldotestino4@gmail.com"
          >
            aldotestino4@gmail.com
          </a>{' '}
          or through this form.
        </p>
        <ContactForm />
      </SectionContent>
    </SectionContainer>
  );
}

export default Contact;
