import TopHeader from "./header-compon/top-header"


const Header = props => {
  return (
    <>
        <header
          className=" 
          fixed top-0
            bx-header"
          >
            <div
              className="
                container-full
                w-full
                mx-auto
              "
            >
                <TopHeader />
            </div>
        </header>


    </>
  )
}



export default Header







