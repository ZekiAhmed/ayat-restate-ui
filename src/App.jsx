import HomeePage from './routes/homePage/HomeePage'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ListePage from './routes/listPage/ListePage'
import Layout from './routes/layout/Layout'
import SinglePage from './routes/singlePage/SinglePage'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <HomeePage />
        },
        {
          path: "/list",
          element: <ListePage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        }
      ]
    }
  ])

  return (
    // <div className="layout">
    //   <div className="navba">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomeePage />
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App