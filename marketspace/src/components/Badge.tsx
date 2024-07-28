import { Pressable, Text,View,HStack} from "@gluestack-ui/themed";
import { X } from "phosphor-react-native";

type BadgeProps = {
    text: string;
    active?: boolean;
    icon?: boolean;
}

export function Badge({text,active=false,icon=true}: BadgeProps){
    return (
        <Pressable
            bg={active ? "$produtoBlue" : "$baseGray5"}
            borderRadius={15}
            paddingLeft={20}
            paddingRight={active && icon ? 10 : 20}
            py={5}

        >
            <HStack gap={5} justifyContent="center">
                <Text fontSize={"$sm"} color={active ? "$white" : "$baseGray1"}>{text}</Text>
                {(active && icon) && (
                    <View justifyContent="center" bg={"$white"} p={5} borderRadius={"$full"} >
                        <X size={10} /> 
                    </View>
                )}
            </HStack>
        </Pressable>
    )
}