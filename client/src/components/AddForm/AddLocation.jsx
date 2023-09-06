import React, { useState } from "react";
// import { useForm } from "@mantine/form";
// import { validateString } from "../../utils/common";
import { Button, Group, Select, TextInput } from "@mantine/core";
import useCountries from "../../hooks/useCountries";
import Map from "../Map/Map";

const AddLocation = () => {
    const [location,setLocation]=useState({country:"India",city:"Bangalore",address:"Whitefield"});
  const { getAll } = useCountries();
//   const form = useForm({
//     initialValues: {
//         country: propertyDetails?.country,
//         city: propertyDetails?.city,
//         address: propertyDetails?.address,
//     },

//     validate: {
//       country: (value) => validateString(value),
//       city: (value) => validateString(value),
//       address: (value) => validateString(value),
//     },
//   });


  const { country, city, address } = location;


  const handleSubmit = ()=> {
    
    // const {hasErrors} = form.validate();
    // if(!hasErrors) {
    //     console.log("aa gya")
        setLocation((prev)=> ({...prev, city, address, country}))
        // nextStep()
    // }
    // else {
    //     console.log("error hai")
    // }
  }
  return (
    <form
    onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit()
    }}
    >
      <div
        className="flexCenter"
        style={{
          justifyContent: "space-between",
          gap: "3rem",
          marginTop: "3rem",
          flexDirection: "row",
        }}
      >

        <div className="flexColStart" style={{ flex: 1, gap: "1rem" }}>
          <Select
            w={"100%"}
            withAsterisk
            label="Country"
            placeholder="Enter Country"
            clearable
            searchable
            data={getAll()}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="City"
            placeholder="Enter City"
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Address"
            placeholder="Address"
          />
        </div>



        <div style={{ flex: 1 }}>
          <h1>{location.address}</h1>
          <Map address={location.address} city={location.city} country={location.country} />
        </div>
      </div>

      <Group position="center" mt={"xl"}>
        <Button type="submit">Next Step</Button>
      </Group>
    </form>
  );
};

export default AddLocation;