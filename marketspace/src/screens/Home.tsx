import { ButtonCustom } from "@components/ButtonCustom";
import { Header } from "@components/Header";
import { FormControl, Heading, HStack, InputField, Text, VStack,InputIcon,InputSlot,Input,View } from "@gluestack-ui/themed";
import { ArrowRight, MagnifyingGlass, Sliders, Tag, X } from "phosphor-react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export function Home(){
    const [showModal, setShowModal] = useState(false);

    function handleSearch(){
        console.log("Buscando produtos");
    }

    function handleModalIn(){
        setShowModal(true);
    }

    function handleModalOut(){
        setShowModal(false);
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
            <Modal 
                isVisible={showModal} 
                hasBackdrop={false}
                animationOutTiming={500}
                style={{margin: 0,justifyContent:"flex-end"}}
            >
                <View bg={"white"} borderRadius={10} px={20} py={40}>
                    <HStack justifyContent="space-between" mb={20}>
                        <Heading fontSize={"$lg"}>Test</Heading>
                        <TouchableOpacity onPress={handleModalOut}>
                            <X size={20} color={"#364D9D"} />
                        </TouchableOpacity>
                    </HStack>
                    <HStack gap={10}>
                        <View flex={1}>
                            <ButtonCustom variant="secondary" title="Resetar filtros" />
                        </View>
                        <View flex={1}>
                            <ButtonCustom variant="tertiary" title="Aplicar filtros" />
                        </View>
                    </HStack>
                </View>
            </Modal>
        </VStack>
    )
}