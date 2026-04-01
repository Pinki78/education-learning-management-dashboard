import TopHeader from "./header-compon/top-header"


const Header = props => {
  return (
    <>
      <header className={`fixed top-0 bx-header bg-white z-[999]
          shadow-[0px 0.052083333in 11.25pt -9px rgba(0,0,0,.1)] w-[100%]`}>
          <div className="container-full w-full mx-auto">
            <TopHeader />
          </div>
      </header>


    </>
  )
}



export default Header







