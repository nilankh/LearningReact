// tocreat context there are 3methods
// step1 to creating the user contex
import React from 'react'


// const UserContext = React.createContext()
// you can set default values to your context and default value is set while creating a context
const UserContext = React.createContext('Codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext//context part3 me aaya
