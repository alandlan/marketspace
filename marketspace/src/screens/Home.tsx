import { Header } from "@components/Header";
import { FormControl, Heading, HStack, InputField, Text, VStack,InputIcon,InputSlot,Input } from "@gluestack-ui/themed";
import { ArrowRight, MagnifyingGlass, Sliders, Tag } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export function Home(){

    function handleSearch(){
        console.log("Buscando produtos");
    }

    function handleModalIn(){
        console.log("Abrindo modal");
    }

    return (
        <VStack flex={1} px={20}>
            <Header />

            <Text fontSize={"$sm"} mb={10}>Seus produtos anunciados para venda</Text>
            <HStack bg={"$baseGray5"} mb={30} px={20} py={10} borderRadius={8} alignItems="center" gap={10}>
                <VStack alignItems="center">
                    <Tag color={"#364D9D"} size={30} />
                </VStack>
                <VStack flex={1}>
                    <Heading>4</Heading>
                    <Text fontSize={"$xs"}>anúncios ativos</Text>
                </VStack>
                <TouchableOpacity >
                    <HStack flex={1} alignItems="center" gap={10}>
                        <Heading fontSize={"$sm"} color={"$produtoBlue"} >Meus anúncios</Heading>
                        <ArrowRight size={20} color={"#364D9D"} />
                    </HStack>
                </TouchableOpacity>
            </HStack>
            
            <Text fontSize={"$sm"} mb={10}>Compre produtos variados</Text>
            <FormControl w={'$full'}>
                <Input
                    bg={'$white'}
                    h={52}
                    px={16}
                    mb={16}
                    borderRadius={8}
                    borderWidth={0}
                >
                    <InputField 
                        placeholder="Buscar produtos"
                        placeholderTextColor="$gray300"
                        color="$black"
                        fontSize="$md"
                        fontFamily='$body'
                        h={52}
                        type={"text"}
                        keyboardType={"default"}
                    />
                    <InputSlot >
                        <HStack gap={10}>
                            <TouchableOpacity onPress={handleSearch}>
                                <InputIcon size="xl" as={MagnifyingGlass} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleModalIn}>
                                <InputIcon size="xl" as={Sliders} />
                            </TouchableOpacity>
                        </HStack>
                    </InputSlot> 
                </Input>
                   
            </FormControl> 
        </VStack>
    )
}