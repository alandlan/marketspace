import { Header } from "@components/Header";
import { InputSearch } from "@components/InputSearch";
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { ArrowRight, Tag } from "phosphor-react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export function Home(){

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
            <InputSearch />

        </VStack>
    )
}