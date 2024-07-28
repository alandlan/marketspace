import { HStack, View, Text, Heading, Image, VStack } from "@gluestack-ui/themed";

import ProductExample from "@assets/productExample.svg";
import { ImageUser } from "./ImageUser";
import { Badge } from "./Badge";
import { useAuth } from "@hooks/useAuth";

export function ProductCard(){

    const { user } = useAuth();

    return (
        <View>
            <HStack>
                <View position="relative" >
                    <Image 
                        source={{uri: "https://img.ltwebstatic.com/images3_spmp/2024/03/13/12/1710336855e00ee01f326c34559817944d8e1a905d_thumbnail_720x.jpg"}}
                        width={150}
                        height={150}
                        alt="Product"
                        borderRadius={10}
                    />
                    <View position="absolute" top={5} left={5}>
                        <ImageUser size={30} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"}} />
                    </View>
                    <View position="absolute" top={5} right={5}>
                        <Badge text="Novo" active icon={false} />
                    </View>
                </View>
                
            </HStack>
            <VStack>
                    <Text fontSize={14}>Tênis Vermelho</Text>
                    <Heading fontSize={14}>
                        R$
                        <Heading fontSize={16}>
                            150,00
                        </Heading>
                    </Heading>
                </VStack>
        </View>
        
    )
}