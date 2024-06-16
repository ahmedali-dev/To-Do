import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminRoutes, Authed, MainRoute, UserRoutes } from './utils/RouteRules'

const App = () => {
  const [rule, setRule] = React.useState<string>("admin")
  const [ChangeRule, setChangeRule]= React.useState<string>('');
  return (
    <div>
      <div>
        <input type="text" defaultValue={ChangeRule} onChange={(e) => setChangeRule(e?.target?.value)} />
        <button onClick={()=> {
          setRule(prev => ChangeRule);
          setChangeRule('')
        }}>change</button>
      </div>
      <h1>{process.env.REACT_APP_API_URL}: {rule}</h1>
      <Routes>
        <Route element={<Authed  rule={rule} />}>
          <Route path='/auth' element={<div>auth page</div>} />
          <Route path='/register' element={<div>REgister page</div>} />
        </Route>

        <Route element={<UserRoutes rule={rule} />} >
          <Route path='/' element={<div>home page</div>} />
        </Route>

        <Route element={<AdminRoutes rule={rule} />}>
          <Route path='/admin' element={<div>admin page</div>} />
        </Route>
        <Route path='*' element={<div>page not found</div>}/>
      </Routes>
    </div>
  )
}

export default App