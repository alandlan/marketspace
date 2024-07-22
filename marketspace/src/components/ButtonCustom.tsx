import { Button,ButtonText,ButtonSpinner, ButtonGroup,ButtonIcon,View, HStack } from "@gluestack-ui/themed"
import {PressableProps} from 'react-native';

type ButtonCustomProps = PressableProps & {
    title: string;
    icon?: any;
    variant?: "primary" | "secondary" | "tertiary";
    isLoading?: boolean;

}

export function ButtonCustom({title,icon,variant = "primary", isLoading = false, ...rest}: ButtonCustomProps){
    return(
        <ButtonGroup >
            <Button 
                w="$full"
                bg={variant === "primary" ? "$produtoBlue" : variant === "secondary" ? "$baseGray5" : "$baseGray1"}
                borderColor={"$green700"}
                rounded={"$sm"}
                $active-bg={variant === "primary" ? "$produtoBlueLight" : variant === "secondary" ? "$baseGray7" : "$baseGray4"}
                isDisabled={isLoading}
                h={52}
                {...rest}
            >

                {isLoading ? (
                    <ButtonSpinner mr={"$1"} />
                ):( 
                    <HStack gap={5}>
                        { icon && <ButtonIcon as={icon} /> }
                        <ButtonText
                            color={variant === "secondary" ? "$black" : "$white"}
                        >
                            {title}
                        </ButtonText>
                    </HStack>
                )}
                
            </Button>
        </ButtonGroup>
    )
}