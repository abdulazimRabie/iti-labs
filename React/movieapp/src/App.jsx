import { Route, Routes } from "react-router-dom"

import Movies from "./pages/Movies"
import Movie from './pages/Movie'
import NotFound from "./pages/NotFound"
import AppLayout from "./components/app/AppLayout"
import Favorites from "./pages/Favorites"


function App() {
  return (
      // <AccordionDemo />
      <>
        {/* <BrowserRouter>
          <Switch>
            <Route path='/' component={Movies} exact/>
            <Route path='/movies' component={Movies} exact/>
            <Route path='/movies/:id' component={Movie} exact/>
            <Route path='*' component={NotFound} exact/>
          </Switch>
        </BrowserRouter> */}

        <Routes>
          {/* All routes inside AppLayout get the sidebar */}
          <Route element={<AppLayout />}>
            <Route path="/movies"       element={<Movies />} />
            <Route path="/movies/:id"   element={<Movie />} />
            <Route path="/favorites"    element={<Favorites />} />
            <Route path="*" element={<NotFound />} /> 
          </Route>
        </Routes>
      </>
  )
}

export default App