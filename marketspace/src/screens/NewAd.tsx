import { InputCustom } from "@components/InputCustom";
import { CheckboxGroup,Checkbox,CheckboxIndicator,CheckboxLabel,CheckIcon,CheckboxIcon,Radio,RadioIndicator,RadioIcon,RadioLabel,CircleIcon, Heading, HStack, Pressable, Text, View, Image, Button, FormControl,Input, InputField, RadioGroup, useTheme, VStack } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigatorRoutesProps } from "@routes/app.routes";
import { ArrowLeft, Plus,Barcode, CreditCard, Money, QrCode, WhatsappLogo } from "phosphor-react-native"
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { ButtonCustom } from "@components/ButtonCustom";


export function NewAd(){
    const [productState, setProductState] = useState("new")
    const [waysToPay, setWaysToPay] = useState<string[]>([]);

    const navigation = useNavigation<AppStackNavigatorRoutesProps>();

    const theme = useTheme();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View flex={1} p={20}>
            <View h={30} mt={30} mb={10} position="relative" justifyContent="center" alignItems='center'>
                <Pressable left={0} position="absolute" onPress={() => { handleGoBack() }}>
                    <ArrowLeft />
                </Pressable>

                <Heading>Criar anúncio</Heading>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Heading mt={10} fontSize={16} color={"$trueGray600"}>Imagens</Heading>
                <Text fontSize={14}>Escolha até 3 imagens para mostrar o quanto o seu produto é incrível!</Text>
            
                <HStack my={20}>
                    <Image
                        w={88}
                        h={88}
                        mr={2}
                        source={{
                            uri: 'https://github.com/diaspd.png',
                        }}
                        alt="Imagem do anúncio"
                        resizeMode="cover"
                        borderRadius={8}
                    />

                    <Button
                        bg="$trueGray300"
                        w={88}
                        h={88}
                        ml={2}
                        mb={6}
                        onPress={() => console.log('foto adicionada')}
                    >
                        <Plus color="$trueGray600" />
                    </Button>
                </HStack>

                <Heading mt={10} fontSize={16} color={"$trueGray600"}>Sobre o produto</Heading>
                
                <InputCustom placeholder="Titulo do Anuncio" />
                
                <FormControl w={'$full'} >
                    <Input
                      bg={'$white'}
                      h={200}
                      mb={16}
                      borderRadius={8}
                      borderWidth={0}
                    >
                        <InputField
                            placeholder="Descrição do produto"
                            placeholderTextColor="$gray300"
                            color="$black"
                            fontSize="$md"
                            type="text"
                            fontFamily='$body'
                            h={52}
                        />
                    </Input>
                </FormControl>

                <RadioGroup my={20} value={productState} onChange={setProductState}>
                    <HStack alignItems="center" gap={10}>
                        <Radio value="new" >
                            <RadioIndicator mr="$2" borderColor="$produtoBlueLight">
                                <RadioIcon as={CircleIcon} color={"$produtoBlueLight"} />
                            </RadioIndicator>
                            <RadioLabel>Produto Novo</RadioLabel>
                        </Radio>
                        <Radio value="old" >
                            <RadioIndicator mr="$2" borderColor="$produtoBlueLight">
                                <RadioIcon as={CircleIcon} color={"$produtoBlueLight"} />
                            </RadioIndicator>
                            <RadioLabel>Produto Usado</RadioLabel>
                        </Radio>
                    </HStack>
                </RadioGroup>

                <Heading mt={10} fontSize={16} color={"$trueGray600"}>Venda</Heading>
                <InputCustom placeholder="Valor do Produto" keyboardType="numeric" />

                <Heading mt={10} fontSize={16} color={"$trueGray600"}>Meios de pagamento aceitos</Heading>
                
                <CheckboxGroup
                    value={waysToPay}
                    onChange={(keys) => {
                        setWaysToPay(keys)
                    }}
                >                
                    <VStack space="sm">
                        <Checkbox aria-label="boleto" value="Boleto">
                            <CheckboxIndicator mr="$2" $checked-bgColor="$produtoBlueLight" borderColor="$produtoBlueLight">
                                <CheckboxIcon as={CheckIcon} color="#fff"/>
                            </CheckboxIndicator>
                            <CheckboxLabel>Boleto</CheckboxLabel>
                        </Checkbox>
                        <Checkbox aria-label="pix"  value="Pix">
                            <CheckboxIndicator mr="$2" $checked-bgColor="$produtoBlueLight" borderColor="$produtoBlueLight">
                                <CheckboxIcon as={CheckIcon} color="#fff"/>
                            </CheckboxIndicator>
                            <CheckboxLabel>Pix</CheckboxLabel>
                        </Checkbox>
                        <Checkbox aria-label="dinheiro" value="Dinheiro">
                            <CheckboxIndicator mr="$2" $checked-bgColor="$produtoBlueLight" borderColor="$produtoBlueLight">
                                <CheckboxIcon as={CheckIcon} color="#fff"/>
                            </CheckboxIndicator>
                            <CheckboxLabel>Dinheiro</CheckboxLabel>
                        </Checkbox>
                        <Checkbox aria-label="cartao" value="Cartão">
                            <CheckboxIndicator mr="$2" $checked-bgColor="$produtoBlueLight" borderColor="$produtoBlueLight">
                                <CheckboxIcon as={CheckIcon} color="#fff"/>
                            </CheckboxIndicator>
                            <CheckboxLabel>Cartão</CheckboxLabel>
                        </Checkbox>
                    </VStack>
                </CheckboxGroup>

                <HStack gap={10} mt={20}>
                    <View flex={1}>
                        <ButtonCustom variant="secondary" title="Cancelar" />
                    </View>
                    <View flex={1}>
                        <ButtonCustom variant="tertiary" title="Avançar"/>
                    </View>
                </HStack>

            </ScrollView>
        </View>
    )
}