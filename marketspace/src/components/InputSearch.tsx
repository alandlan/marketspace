import { FormControl, Heading, HStack, Input, InputField, InputIcon, InputSlot, View,Switch, VStack, Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxLabel, CheckIcon, CheckboxGroup, FlatList, ScrollView } from "@gluestack-ui/themed";
import { MagnifyingGlass, Sliders, X } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { ButtonCustom } from "./ButtonCustom";
import { useState } from "react";
import { Badge } from "./Badge";



export function InputSearch(){

    const [showModal, setShowModal] = useState(false);
    const [replace, setReplace] = useState(false);
    const [payments, setPayments] = useState(["Boleto","Pix","Dinheiro","Cartão de Crédito","Cartão de Débito"]);

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
        <>
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
                propagateSwipe={true}
            >
                <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}>
                    <View bg={"white"} borderRadius={10} px={20} py={40}>
                        <HStack justifyContent="space-between" mb={20}>
                            <Heading fontSize={"$lg"}>Filtrar anúncios</Heading>
                            <TouchableOpacity onPress={handleModalOut}>
                                <X size={20} color={"#364D9D"} />
                            </TouchableOpacity>
                        </HStack>



                        <Heading fontSize={"$sm"} mb={5}>Condição</Heading>
                        <HStack gap={5} mb={20}>
                            <Badge text="Novo" active />
                            <Badge text="Usado" />
                        </HStack>

                        <Heading fontSize={"$sm"} mb={5}>Aceita troca?</Heading>
                        <HStack mb={20}>
                            <Switch size="lg" value={replace} onToggle={() => setReplace(!replace)} />
                        </HStack>

                        <Heading fontSize={"$sm"} mb={5}>Meios de Pagamento</Heading>
                        <CheckboxGroup value={payments} onChange={(keys) => setPayments(keys)} mb={40}>
                            <VStack gap={10} space="md">
                                <Checkbox aria-label="boleto" value="Boleto" >
                                    <CheckboxIndicator mr="$2">
                                        <CheckboxIcon as={CheckIcon} color="$white" $checked-bg="$produtoBlue"/>
                                    </CheckboxIndicator>
                                    <CheckboxLabel aria-label="boleto">Boleto</CheckboxLabel>
                                </Checkbox>
                                <Checkbox aria-label="pix" value="Pix">
                                    <CheckboxIndicator mr="$2">
                                        <CheckboxIcon as={CheckIcon} color="$white" $checked-bg="$produtoBlue"/>
                                    </CheckboxIndicator>
                                    <CheckboxLabel aria-label="pix">Pix</CheckboxLabel>
                                </Checkbox>
                                <Checkbox aria-label="dinheiro" value="Dinheiro">
                                    <CheckboxIndicator mr="$2">
                                        <CheckboxIcon as={CheckIcon} color="$white" $checked-bg="$produtoBlue"/>
                                    </CheckboxIndicator>
                                    <CheckboxLabel aria-label="dinheiro">Dinheiro</CheckboxLabel>
                                </Checkbox>
                                <Checkbox aria-label="cartao de credito" value="Cartão de Crédito">
                                    <CheckboxIndicator mr="$2">
                                        <CheckboxIcon as={CheckIcon} color="$white" $checked-bg="$produtoBlue"/>
                                    </CheckboxIndicator>
                                    <CheckboxLabel>Cartão de Crédito</CheckboxLabel>
                                </Checkbox>
                                <Checkbox aria-label="cartao de debito" value="Cartão de Débito">
                                    <CheckboxIndicator mr="$2">
                                        <CheckboxIcon as={CheckIcon} color="$white" $checked-bg="$produtoBlue"/>
                                    </CheckboxIndicator>
                                    <CheckboxLabel>Cartão de Débito</CheckboxLabel>
                                </Checkbox>
                            </VStack>
                        </CheckboxGroup>


                        <HStack gap={10}>
                            <View flex={1}>
                                <ButtonCustom variant="secondary" title="Resetar filtros" />
                            </View>
                            <View flex={1}>
                                <ButtonCustom variant="tertiary" title="Aplicar filtros" />
                            </View>
                        </HStack>

                        
                    </View>
                </ScrollView>
            </Modal>
        </>
    )
}