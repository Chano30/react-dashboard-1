import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Route, Routes } from "react-router-dom";
import  SideNavigation from "./scenes/global/SideNavigation";
import TopBar from './scenes/global/TopBar'
import Dashboard from './scenes/dashboard'
// import Team from './scenes/team'
// import Invoices from './scenes/invoices'
// import Contacts from './scenes/contacts'
// import Bar from './scenes/bar'
// import Form from './scenes/form'
// import Line from './scenes/line'
// import Pie from './scenes/pie'
// import FAQ from './scenes/faq'
// import Geography from './scenes/geography'
// import Calendar from './scenes/calendar'

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideNavigation />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/tema" element={<Team />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoces" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
