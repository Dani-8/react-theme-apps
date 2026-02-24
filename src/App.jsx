import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./portal/Header"
import AppCardsList  from "./portal/AppCardsList"

import BasicThemeApp from "./apps/basic/basicThememode"
import LogicThemeApp from "./apps/logic/logicThememode"



import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <div className='min-h-screen bg-slate-50 p-6 md:p-12'>
            <div className='max-w-4xl mx-auto'>
              <Header />
              <h3 className="text-lg font-bold text-slate-700 mb-6">Pick an app:</h3>
              <AppCardsList />
            </div>
          </div>
        }/>

        <Route path='/apps/basic/basicThememode' element={<BasicThemeApp />} />
        <Route path='/apps/logic/logicThememode' element={<LogicThemeApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
