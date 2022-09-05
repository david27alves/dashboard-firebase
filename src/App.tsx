import ContextAuthSignIn from "./contexts/contextAuth"
import AppRoutes from "./routes/AppRoutes"
import { SnackbarProvider } from 'notistack'

function App() {
  

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <ContextAuthSignIn>
          <AppRoutes />
        </ContextAuthSignIn>
      </SnackbarProvider>
      
    </div>
  )
}

export default App
