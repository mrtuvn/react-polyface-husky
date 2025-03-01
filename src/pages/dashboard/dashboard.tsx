import { useSelector } from "react-redux"

function Dashboard() {
  const state = useSelector(state => state);
  console.log('state: ', state)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard