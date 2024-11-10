import ContactForm from '@/components/contact-form';
import { SectionContainer, SectionContent, SectionHeader } from '@/components/section-container';
import React from 'react';

function Contact() {
  return (
    <SectionContainer>
      <SectionHeader>Contact</SectionHeader>
      <SectionContent className="place-items-center">
        <p>
          Please contact me at
          {' '}
          <a className="underline font-semibold text-primary" href="mailto:aldotestino4@gmail.com">aldotestino4@gmail.com</a>
          {' '}
          or through this form.
        </p>
        <ContactForm />
      </SectionContent>
    </SectionContainer>
  );
}

export default Contact;
