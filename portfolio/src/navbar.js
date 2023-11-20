function Navbar(){
    return(
        <div>
        <nav className="navbar navbar-expand-md" style={{ paddingLeft: '2%',backgroundColor:"rgb(7, 56, 99)",borderBottom:"15px solid #ee4b00"}}>
      <div className="container-fluid all-show ">
    <section className="wrapper">
  <nav className="navbar navbar-expand-xs">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ display:"flex",justifyContent: "flex-end",alignItems: 'center'}}>
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}><p>About Myself</p></a>
          </li>
          <li className="nav-item">
            <a href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}><p>Projects</p></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</section>

  </div>
  </nav>
  </div>
    )
}
export default Navbar