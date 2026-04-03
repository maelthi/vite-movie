import { lazy, Suspense, Component, ErrorInfo, ReactNode } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "virtual:svg-icons-register"

import HomeContainer from "@pages/Home/Home.container"

import "./App.css"

const MoviesComponent = lazy(() => import("@pages/Movies/Movies"))
const ActorsComponent = lazy(() => import("@pages/Actors/Actors"))
const ActorComponent = lazy(() => import("@pages/Actor/Actor"))
const MovieComponent = lazy(() => import("@pages/Movie/Movie"))

type ErrorBoundaryState = { hasError: boolean }

class ErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="app__error">
          Une erreur est survenue. Veuillez recharger la page.
        </div>
      )
    }
    return this.props.children
  }
}

const App = () => (
  <div className="app">
    <ErrorBoundary>
      <Suspense
        fallback={<div className="app__loading-screen">Chargement...</div>}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/movies" element={<MoviesComponent />} />
            <Route path="/actors" element={<ActorsComponent />} />
            <Route path="/actors/:id" element={<ActorComponent />} />
            <Route path="/movies/:id" element={<MovieComponent />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  </div>
)

export default App
