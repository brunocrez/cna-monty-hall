// import Gift from '../components/Gift';
import Door from '../components/Door';

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      {/* <Gift /> */}
      <Door />
      <Door selected />
    </div>
  )
}
