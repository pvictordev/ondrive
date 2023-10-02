import React from 'react'
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

const Footer = () => {
  return (
    <Box>
      <Container>
        <SimpleGrid>
          <Stack>
            <Box>
              <Text>Logo</Text>
            </Box>
            <Text>© 2023 Company Name. All rights reserved</Text>
            <Stack>
              <Text>
                Twitter
              </Text>
              <Text>
                Facebook
              </Text>
              <Text>
                Youtube
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Text>
              Should import here list header
            </Text>
            <Box>
              About us
            </Box>
            <Box>
              About us
            </Box>
            <Box>
              About us
            </Box>
            <Box>
              About us
            </Box>
          </Stack>
          <Stack>
            <Text> Should import here list header</Text>
            <Stack>
              <Input/>
              <IconButton/>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
