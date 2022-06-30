import { gql, useQuery, ApolloProvider } from "@apollo/client"
import Event from './Pages/Event'

import { client } from "./lib/apollo"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App
