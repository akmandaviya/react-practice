import React, { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"

const LazyHome = lazy(() => import("../components/LazyLoading/LazyHome"))
const About = lazy(() => import("../components/LazyLoading/About"))

const AppRoutes = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes