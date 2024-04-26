import React from 'react'
import { Helmet } from 'react-helmet-async'
import { DashboardContentContainer, DashboardTitleBar } from '../../../components/styled-components/dashboardStyledComponents'

const Report = () => {
  return (
    <>
      <Helmet>
        <title>Report preview - Administrator</title>
        <meta name="description" content="Administrator's report preview page."/> 
      </Helmet>
      <DashboardContentContainer>
        <DashboardTitleBar>
          <h3>Report Preview</h3>
        </DashboardTitleBar>
      </DashboardContentContainer>
    </>
  )
}

export default Report