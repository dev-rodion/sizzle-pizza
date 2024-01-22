import { Stack } from "expo-router"
import { Header } from "../components";


const Layout = () => {
  return (
    <>
      <Header />
      <Stack screenOptions={{
        header: () => null,
      }} />
    </>
  )
}

export default Layout;