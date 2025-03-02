import { useSelector } from "react-redux"

import BoxCard from "../../components/card/box-card";

function Dashboard() {
  const state = useSelector(state => state);
  console.log('state: ', state)

  return (
    <>
      <BoxCard>
        Dashboard
      </BoxCard>
    </>
  )
}

export default Dashboard