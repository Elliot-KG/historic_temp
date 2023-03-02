import Location from "../../src/location.interface"

//Create an empty react component
export default function Box({ location }: { location: Location }) {
    return (
      <div className="">
        {location.name}
      </div>
    )
  }