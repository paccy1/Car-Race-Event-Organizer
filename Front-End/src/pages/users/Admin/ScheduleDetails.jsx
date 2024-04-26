import React from 'react'
import { Helmet } from 'react-helmet-async'
import { DashboardContentContainer, DashboardTitleBar } from '../../../components/styled-components/dashboardStyledComponents'

export default function ScheduleDetails() {
  return (
    <>
      <Helmet>
        <title>Schedule - Administrator</title>
        <meta name="description" content="More details about a schedule."/> 
      </Helmet>
      <DashboardContentContainer>
        <DashboardTitleBar>
          <h3>Schedule details</h3>
        </DashboardTitleBar>
      </DashboardContentContainer>
    </>
  )
}