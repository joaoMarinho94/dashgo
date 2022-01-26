import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile(): JSX.Element {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>João Paulo</Text>
        <Text color="gray.300" fontSize="small">
          email.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Joao Paulo"
        src="https://github.com/joaoMarinho94.png"
      />
    </Flex>
  );
}
