// tocreat context there are 3methods
// step1 to create contex
import React from 'react'


const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }