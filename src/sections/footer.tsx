function Footer() {
  return (
    <p className="text-muted-foreground text-center">
      ©
      {' '}
      {new Date().getFullYear()}
      {' '}
      Aldo Testino. All rights reserved.
    </p>
  );
}

export default Footer;
