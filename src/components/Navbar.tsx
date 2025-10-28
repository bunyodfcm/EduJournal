const Navbar = () => {
  return (
    <div className="sticky top-6 z-50">
      <div className="container">
        <div className="flex justify-between items-center bg-white p-8 rounded-full border border-border shadow-xs">
          <div>
            <img src="/logo.png" alt="logo" className="h-10" />
          </div>

          <ul className="flex gap-4">
            <li>
              <a href="#">Asosiy</a>
            </li>
            <li>
              <a href="#">Jurnal haqida</a>
            </li>
            <li>
              <a href="#">Arxiv</a>
            </li>
            <li>
              <a href="#">Tahririyat</a>
            </li>
          </ul>
          <div>lang</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
