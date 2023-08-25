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
        alert("Request added successfully");
      });
  };

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
      onSubmit={form.onSubmit(() => {})}
    >
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        {...form.getInputProps("Name")}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        {...form.getInputProps("Age")}
      />
      <NumberInput
        label="Phone Number"
        placeholder="Enter your phone number"
        withAsterisk
        mt="md"
        {...form.getInputProps("Phoneno")}
      />
      <Select
        data={["Male", "Female", "Prefer not to say"]}
        label="Gender"
        mt="md"
        placeholder="Click to choose"
        withAsterisk
        {...form.getInputProps("Gender")}
      />
      <TextInput
        label="Blood Group"
        placeholder="Blood Group"
        mt="md"
        withAsterisk
        {...form.getInputProps("Bloodgroup")}
      />

      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps("Email")}
      />
      <Textarea
        placeholder="Address"
        label="Address"
        autosize
        minRows={2}
        withAsterisk
        mt="md"
        {...form.getInputProps("Address")}
      />

      <TextInput
        label="Type of donation"
        placeholder="Enter what do you want to donate"
        withAsterisk
        mt="md"
        {...form.getInputProps("Type")}
      />
      <TextInput
        label="Any Fatal Health Condition"
        placeholder="Enter any fatal health condition"
        description="(Please note that people with diabetes and asthama must avoid donation)"
        withAsterisk
        mt="md"
        {...form.getInputProps("FatalHealth")}
      />
      <Group position="right" mt="md">
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Group>
    </Box>
  );
};

export default DLogin;
