import React from 'react'

import LandingPageWrapper from '@/features/front-pages/landing-page'

export const dynamic = 'force-static'

const Page = () => {
  return (
    <div>
      <LandingPageWrapper mode={'light'} />
    </div>
  )
}

export default Page
