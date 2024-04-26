import React from 'react'
import { Helmet } from 'react-helmet-async'
import { DashboardContentContainer, DashboardTitleBar } from '../../../components/styled-components/dashboardStyledComponents'

export default function Schedules() {
  return (
    <>
      <Helmet>
        <title>Schedules - Administrator</title>
        <meta name="description" content="Administrator's report preview page."/> 
      </Helmet>
      <DashboardContentContainer >
        <DashboardTitleBar>
          <h3>Schedules</h3>
        </DashboardTitleBar>
      </DashboardContentContainer>
    </>
  )
}