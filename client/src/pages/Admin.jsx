import {
  Container,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
  RadioGroup,
  Radio,
  Select,
} from "@chakra-ui/react";

import HomeRoute from "../components/HomeRoute";

const Admin = () => {
  return (
    <Box className="Admin" pt={24}>
      <HomeRoute className="Admin__title" title={"Admin"} />

      <Container
        maxW={"7xl"}
        className="Admin__container"
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        overflow="hidden"
        mb={32}
      >
        <Box className="forms">
          {/* Car Data Form */}
          <Box border={"2px"} borderRadius={"xl"} p={4} mb={8}>
            <Heading as="h2" size="lg" mb={4}>
              Add New Cars
            </Heading>
            <form>
              <FormControl id="carName" isRequired mb={5}>
                <FormLabel>Car Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter car name"
                  name="carName"
                />
              </FormControl>

              <FormControl id="carPrice" isRequired mb={5}>
                <FormLabel>Price</FormLabel>
                <Input placeholder="Enter car price" name="carDescription" />
              </FormControl>

              <FormControl id="carDescription" isRequired mb={5}>
                <FormLabel>Car Details</FormLabel>
                <Box
                  gap={"0.7rem"}
                  display={"grid"}
                  gridTemplateColumns={"1fr 1fr 1fr"}
                >
                  <Input placeholder="Enter car brand" name="carDescription" />
                  <Input placeholder="Enter car model" name="carDescription" />
                  <Input placeholder="Enter car year" name="carDescription" />
                  <Input
                    type="number"
                    placeholder="Doors quantity"
                    name="carDescription"
                  />
                  <Select placeholder="Transmission">
                    <option value="option1">Manual</option>
                    <option value="option2">Automatic</option>
                  </Select>
                  <Select placeholder="Fuel Type">
                    <option value="option1">Petrol</option>
                    <option value="option2">Diesel</option>
                  </Select>
                </Box>
              </FormControl>

              <FormControl id="carDescription" isRequired mb={5}>
                <FormLabel>Is New ?</FormLabel>
                <RadioGroup>
                  <Stack direction="row">
                    <Radio value="1">First</Radio>
                    <Radio value="2">Second</Radio>
                    <Radio value="3">Third</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <Button type="submit" colorScheme="red">
                Add Car
              </Button>
            </form>
          </Box>

          {/* Blog Post Data Form */}
          <Box border={"2px"} borderRadius={"xl"} p={4} mb={8}>
            <Heading as="h2" size="lg" mb={4}>
              Create Blog Post
            </Heading>
            <form>
              <FormControl id="blogTitle" isRequired mb={4}>
                <FormLabel>Blog Title</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter blog title"
                  name="blogTitle"
                />
              </FormControl>
              <FormControl id="blogContent" isRequired mb={4}>
                <FormLabel>Content</FormLabel>
                <Textarea placeholder="Enter blog content" name="blogContent" />
              </FormControl>
              <FormControl id="blogImage" isRequired mb={4}>
                <FormLabel>Image</FormLabel>
                <Textarea placeholder="Enter blog image" name="blogImage" />
              </FormControl>
              <Button type="submit" colorScheme="red">
                Create Post
              </Button>
            </form>
          </Box>

          {/* Team Data Form */}
          <Box border={"2px"} borderRadius={"xl"} p={4} mb={8}>
            <Heading as="h2" size="lg" mb={4}>
              Add Team Members
            </Heading>
            <form>
              <FormControl id="blogTitle" isRequired mb={4}>
                <FormLabel>Team Member Full Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Team Member Full Name"
                  name="blogTitle"
                />
              </FormControl>
              <FormControl id="blogContent" isRequired mb={4}>
                <FormLabel>Role</FormLabel>
                <Input
                  placeholder="Enter Team Member's role"
                  name="blogContent"
                />
              </FormControl>
              <FormControl id="blogContent" isRequired mb={4}>
                <FormLabel>Image</FormLabel>
                <Input
                  placeholder="Enter Team Member's photo"
                  name="blogContent"
                />
              </FormControl>
              <Button type="submit" colorScheme="red">
                Add Team Member
              </Button>
            </form>
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={10}
          className="data"
        >
          {/* Car Data */}
          <Box border={"2px"} p={4} borderRadius={"xl"}>
            <Heading as="h3" mb={7} size="md">
              Edit a car data
            </Heading>

            <Box bg="gray.100" p={4} borderRadius="md">
              <Box>
                {" "}
                <b>Brand:</b> BMW
              </Box>
              <Box>
                <b>Model:</b> 5 Series Coupe
              </Box>
              <Box>
                <b>Year:</b> 2017
              </Box>
              <Box>
                <b>Doors:</b> 4
              </Box>
              <Box>
                <b>Transmission:</b> Automatic
              </Box>
              <Box>
                <b>Fuel:</b> Petrol
              </Box>
            </Box>
          </Box>

          {/* Blog Post Data */}
          <Box border={"2px"} p={4} borderRadius={"xl"}>
            <Heading as="h3" mb={7} size="md">
              Edit a blog post data
            </Heading>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Box>
                {" "}
                <b>Title:</b> Ondrive, not onedrive !
              </Box>
              <Box>
                <b>Content:</b> Some content
              </Box>
              <Box>
                <b>Image:</b> img
              </Box>
            </Box>
          </Box>

          {/* Team Members Data */}
          <Box border={"2px"} p={4} borderRadius={"xl"}>
            <Heading as="h3" mb={7} size="md">
              Edit a car data
            </Heading>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Box>
                {" "}
                <b>Full Name:</b> Victor Purice
              </Box>
              <Box>
                <b>Role:</b> CEO
              </Box>
              <Box>
                <b>Image:</b> img
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Admin;
