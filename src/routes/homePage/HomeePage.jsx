import "./homePage.scss"

const HomeePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Nam quo voluptas neque esse enim aspernatur nesciunt fuga 
            aut inventore. Ad tempore quam molestiae a eaque, incidunt 
            omnis labore nobis laboriosam!
          </p>
        </div>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomeePage