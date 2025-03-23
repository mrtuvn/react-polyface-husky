import React from "react";
import { useSelector } from "react-redux"

import BoxCard from "../../components/card/box-card";
import SimpleButton from "../../components/button/simple-button";
import ErrorBoundaryComponent from "../../components/error-boundary";

function Dashboard() {
  const [user, setUser] = React.useState<null | {}>(null);

  const state = useSelector(state => state);
  console.log('state: ', state)

  return (
    <>
      <BoxCard>
        <div className="titleDashboard">Dashboard</div>
        <SimpleButton 
          buttonText="Test Error"
          onClick={() => setUser({})}
        />
        <ErrorBoundaryComponent>
          User: {user}
        </ErrorBoundaryComponent>
      </BoxCard>
    </>
  )
}

export default Dashboard