const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-8 font-semibold bg-footer-pattern">
      <span>
        Made by{" "}
        <a
          href="https://github.com/julandrod"
          target="_blank"
          rel="noreferrer"
          className=" hover:text-primary-red"
        >
          {" "}
          Julian Rodriguez 🇨🇴 | 2023
        </a>
      </span>
    </footer>
  );
};

export default Footer;
