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
  Select,
  Textarea,
} from "@mantine/core";

//import dateFormat from 'dateformat';
const DLogin = () => {
  const form = useForm({
    initialValues: {
      Name: "",
      Phoneno: "",
      Gender: "",
      Email: "",
      Bloodgroup: "",
      Address: "",
      Age: 0,
      Type: "",
      FatalHealth: "",
    },

    validate: {
      Name: hasLength({ min: 2 }, "Name must be 2-10 characters long"),
      Phoneno: hasLength(
        { min: 10, max: 10 },
        "Phone number must be 10 characters long"
      ),
      Gender: isNotEmpty("Select any one option"),
      Email: isEmail("Enter a valid email"),
      Bloodgroup: isNotEmpty("Blood Group is required"),
      Address: isNotEmpty("Address is required"),
      Age: isInRange({ min: 18, max: 99 }),
      Type: isNotEmpty("Donation field is required"),
      FatalHealth: isNotEmpty("Reason field is required"),
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form.values);
    fetch("http://localhost:4000/addDonor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        alert("Request added successfully");
      });
  };

  return (
    <Box className="min-w-full h-full flex flex-col justify-center items-center"
      component="form"
      maw={400}
      
      onSubmit={form.onSubmit(() => {})}
    >
    <div className="flex items-center justify-between w-full ">
      <TextInput className="w-[45%]"
        label="Name"
        placeholder="Name"
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
      <NumberInput className="w-[45%]"
        label="Your age"
        placeholder="Your age"
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
         }
        })}
        {...form.getInputProps("Age")}
      />
    </div>
    <div className="flex items-center justify-between w-full">
      <NumberInput className="w-[45%]"
        label="Phone Number"
        placeholder="Enter your phone number"
        withAsterisk
        mt="md"
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
         }
        })}
        {...form.getInputProps("Phoneno")}
      />
      <TextInput className="w-[45%]"
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
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
         }
        })}
        {...form.getInputProps("Email")}
      />
    </div>
    <div className="flex items-center justify-between w-full">
      <Select className="w-full"
        data={["Male", "Female", "Prefer not to say"]}
        label="Gender"
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
        {...form.getInputProps("Gender")}
      />
    </div>
    <div className="flex items-center justify-between w-full">
       <Select className="w-[45%]"
        data={["A+","A-","B+","B-","AB+","AB-","O+","O-"]}
        label="Blood Group"
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
        {...form.getInputProps("Bloodgroup")}
      />
      <Select className="w-[45%]"
        data={["Blood","Kidney","Lung","Liver","Bone Marrow and Stem Cells"]}
        label="Type of donation"
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
        {...form.getInputProps("Type")}
      />
      
    </div>
    <div className="flex items-center justify-between w-full" >
      <Textarea className="w-full"
        placeholder="Address"
        label="Address"
        autosize
        minRows={2}
        withAsterisk
        mt="md"
        styles={() => ({
         input:{
          backgroundColor:"transparent",
          color:"white"
         },
         label:{
         color:"white",
         fontSize:"18px"
         },
        })}
        {...form.getInputProps("Address")}
      />
    </div> 
    <div className="flex items-center justify-between w-full">
      <TextInput className="w-full"
        label="Any Fatal Health Condition"
        placeholder="Enter any fatal health condition"
        description="(Please note that people with diabetes and asthama must avoid donation)"
        withAsterisk
        mt="md"
        styles={() => ({
         input:{
          backgroundColor:"transparent",
          color:"white"
         },
         label:{
         color:"white",
         fontSize:"18px"
         },
        })}
        {...form.getInputProps("FatalHealth")}
      />
    </div>  
    

        <Button type="submit" className="z-50 p-0 h-[50px] mt-[5%] w-[250px] bg-transparent border-3 border-solid border-red-800 hover:bg-gray-300 hover:text-black" onClick={handleSubmit}>Submit</Button>

    
    </Box>
  );
};

export default DLogin;
