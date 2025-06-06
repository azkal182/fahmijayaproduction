// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import Footer from '@components/layout/front-pages/Footer'
import Header from '@components/layout/front-pages/Header'

// Server Action Imports
// import { getServerMode } from '@core/utils/serverHelpers'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

const FrontLayout = async ({ children }: ChildrenType) => {
  // Vars
  // const mode = await getServerMode()

  return (
    <div className={frontLayoutClasses.root}>
      <Header mode={"light"} />
      {children}
      <Footer mode={"light"} />
    </div>
  )
}

export default FrontLayout
