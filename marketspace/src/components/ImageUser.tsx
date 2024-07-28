import { Image } from '@gluestack-ui/themed';
import { ImageProps } from 'react-native';

type ImageUserProps = ImageProps & {
    size: number;
}

export function ImageUser({size, ...props}: ImageUserProps){
    return (
        <Image 
            w={size} 
            h={size}
            rounded={"$full"}
            borderWidth={4}
            borderColor={"$produtoBlue"}
            alt='User Profile'
            source={{}}
            {...props} 
        />
    )
}   