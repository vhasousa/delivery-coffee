import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { OrderContextProvider } from './contexts/OrderContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </CartContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
