import { View,Image } from "@gluestack-ui/themed";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

type CarouselProductsProps = {
    images: string[];
}

export function CarouselProducts({ images }: CarouselProductsProps) {
    const width = Dimensions.get('window').width;

    return (
        <View>
            <Carousel 
                loop={false}
                width={width - 40}
                height={300}
                mode="parallax"
                data={images}
                renderItem={({ item }) => (
                    <Image 
                        source={{uri: item}}
                        w="$full"
                        h={300}
                        alt="Product"
                        borderRadius={10}
                    />
                )}
            />
        </View>
    )
}