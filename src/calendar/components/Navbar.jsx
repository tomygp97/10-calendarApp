
export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      {/* navbar-dark letras blancas --- bg-dark backgroundColor negro --- mb margin botom --- px pading en eje x */}
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp;
        Tomas
      </span>

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  )
}
