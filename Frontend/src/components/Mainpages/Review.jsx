import React from "react";
import Wave from "../../assets/Wave.png";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
} from "@mantine/form";
import {
  Button,
  Group,
  TextInput,
  NumberInput,
  Box,
  Textarea,
  Select,
} from "@mantine/core";
const Review = () => {
    const form = useForm({
    initialValues: {
      Name: "",
      Email: "",
      Type: "",
      Review:"",
      Donor_confirm:""
    },
     validate: {
      Name: hasLength({ min: 2 }, "Name must be 2-10 characters long"),
      Email: isEmail("Enter a valid email"),
      Bloodgroup: isNotEmpty("Blood Group is required"),
      Type: isNotEmpty("Donation field is required"),
    },
  });
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form.values)
    fetch("http://localhost:4000/addRecipient", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
      });
  };
  return (
    <div className="w-full min-h-full relative flex justify-center items-center">
      <div className="w-[80%] max-md:w-[90%] max-[500px]:[100%] h-full relative flex justify-center items-center">
        <div className="w-full absolute h-full justify-center items-center flex">
          <img className="w-full opacity-30" src={Wave} alt="Wave" />
        </div>
    <Box className="min-w-full h-full flex flex-col justify-center items-center"
      component="form"
      maw={400}
      onSubmit={form.onSubmit(() => {})}
    >
    <div className="flex items-center justify-center w-full ">
    <TextInput className="w-[45%]"
        label="Recipient"
        placeholder="Enter your Name"
        mt="md"
        withAsterisk
        styles={() => ({
         input:{
          backgroundColor:"transparent",
          color:"white"
         },
         label:{
         color:"white",
         fontSize:"18px"
         }
        })}
        {...form.getInputProps("Name")}
    />
    </div>
    <div className="flex items-center justify-center w-full ">
    <TextInput className="w-[45%]"
        label="Email"
        placeholder="Enter your Email id"
        mt="md"
        withAsterisk
        styles={() => ({
         input:{
          backgroundColor:"transparent",
          color:"white"
         },
         label:{
         color:"white",
         fontSize:"18px"
         }
        })}
        {...form.getInputProps("Email")}
    />
    </div>
    <div className="flex items-center justify-center w-full">
      <Select className="w-[45%]"
        data={["Yes","No"]}
        label="Donation Confirmation"
        mt="md"
        placeholder="Click to choose"
        withAsterisk
        styles={() => ({
         input:{
          backgroundColor:"transparent",
          color:"white"
         },
         label:{
         color:"white",
         fontSize:"18px"
         },
         rightSection:{
          backgroundColor:"white",
          color:"black"
         },
        })}
        {...form.getInputProps("Donor_confirm")}
      />
    </div>
    <div className="flex items-center justify-center w-full ">
    <Select className="w-[45%]"
        data={["Blood","Kidney","Lung","Liver","Bone Marrow and Stem Cells"]}
        label="Type of Donation Recieved"
        description="(Please note that people who recieved donation only fill the type of donation)"
        mt="md"
        placeholder="Click to choose"
        
        styles={() => ({
         input:{
          backgroundColor:"transparent",
          color:"white"
         },
         label:{
         color:"white",
         fontSize:"18px"
         },
         rightSection:{
          backgroundColor:"white",
          color:"black"
         },
        })}
        {...form.getInputProps("Type")}
      /> 
    </div>
    <div className="flex items-center justify-center w-full ">
    <Textarea className="w-[45%]"
        label="Review"
        placeholder="Enter any suggestions or remarks"
        mt="md"
        minRows={3}
        withAsterisk
        styles={() => ({
         input:{
          backgroundColor:"transparent",
          color:"white"
         },
         label:{
         color:"white",
         fontSize:"18px"
         }
        })}
        {...form.getInputProps("Review")}
    />
    </div>
     <Button type="submit" className="z-50 p-0 h-[50px] mt-[3%] w-[250px] bg-transparent border-3 border-solid border-red-800 hover:bg-gray-300 hover:text-black" onClick={handleSubmit}>Submit</Button>
      </Box>
    </div>
    </div>
  );
};

export default Review;