import { EyeIcon, EyeOffIcon, Input, InputField, InputIcon, InputSlot,FormControl } from "@gluestack-ui/themed";
import { useState } from "react";
import { TextInputProps } from 'react-native';

export interface InputCustomProps extends TextInputProps {
    placeholder: string;
    type?: "text" | "password";
    keyboardType?: "default" | "email-address" | "phone-pad";
}

export function InputCustom({ placeholder, type = "text", keyboardType = "default",...rest }: InputCustomProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleState = () => {
        console.log(showPassword);
        setShowPassword((showState) => {
            return !showState;
        });
    };

    return (
        <FormControl w={'$full'} >
            <Input
              bg={'$white'}
              h={52}
              px={16}
              mb={16}
              borderRadius={8}
              borderWidth={0}
            >
                <InputField
                    placeholder={placeholder}
                    placeholderTextColor="$gray300"
                    color="$black"
                    fontSize="$md"
                    fontFamily='$body'
                    h={52}
                    type={(type == "password" && showPassword) ? "text" :  type}
                    keyboardType={keyboardType}
                    {...rest}
                />
                {type === "password" && (
                    <InputSlot onPress={handleState}>
                        <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                    </InputSlot>
                )}
            </Input>

            
        </FormControl>


        // <Input
        //     variant="outline"
        //     size="md"
        //     isDisabled={isDisabled}
        //     isReadOnly={isReadOnly}
        //     >
        //     <InputField 
        //         placeholder={placeholder} 
        //         type={type} 
        //         keyboardType={keyboardType}    
        //     />
        //       {type == "password" ? (
        //         <InputSlot pr="$3" onPress={handleState}>
        //             <InputIcon
        //                 as={showPassword ? EyeIcon : EyeOffIcon}
        //                 color="$darkBlue500"
        //             />
        //         </InputSlot>
        //       ) : null}
        // </Input>
    );
}