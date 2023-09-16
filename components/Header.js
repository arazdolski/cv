function Header() {
  return (
    <div className="flex justify-between my-10 items-center">
      <h1 className="font-medium text-xl">CV</h1>
      <div>
        <a
          href="https://www.linkedin.com/in/arazdolski/"
          className="mr-4"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/arazdolski"
          className="mr-4"
        >
          Github
        </a>
        <a
          href="mailto:aleksandr.razdolski@gmail.com"
        >
          Email
        </a>
      </div>
    </div>
  );
}

export default Header;
