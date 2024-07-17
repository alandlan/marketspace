import { Center, Text } from "@gluestack-ui/themed";

import LogoImage from '@assets/logo.svg';


export function SignIn(){
    return (
        <Center flex={1}>
            <LogoImage />
            <Text>Sign In</Text>
        </Center>
    )
}