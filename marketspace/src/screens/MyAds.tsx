import { ProductCard } from '@components/ProductCard';
import { SelectItem,SelectDragIndicator,SelectDragIndicatorWrapper,SelectContent,SelectBackdrop,SelectPortal, ChevronDownIcon, Heading, HStack, Icon, Pressable, Select, SelectIcon, SelectInput, SelectTrigger, Text, View, ScrollView } from '@gluestack-ui/themed';
import { Plus } from 'phosphor-react-native';
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigatorRoutesProps } from "@routes/app.routes";

export function MyAds(){
    const navigation = useNavigation<AppStackNavigatorRoutesProps>();

    function handleCreateAd(){
        navigation.navigate("CreateAd");
        return true;
    }

    function handleOpenExercise() {

        navigation.navigate("DetailsAd");
        return true;
    }

    return (
        <View flex={1} p={20}>
            <View h={30} mt={30} mb={30} position='relative' alignItems='center'>
                <Heading>Meus anúncios</Heading>
                <Pressable right={0} position='absolute' onPress={() => handleCreateAd()}>
                    <Plus />
                </Pressable>
            </View>
            <HStack justifyContent='space-between' alignItems='center' mb={15}>
                <Text>3 anúncios</Text>
                <Select>
                    <SelectTrigger variant="rounded" size="sm">
                        <SelectInput placeholder="Select option" />
                        <SelectIcon>
                            <Icon as={ChevronDownIcon} />
                        </SelectIcon>
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                            <SelectDragIndicatorWrapper>
                                <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="Todos" value="1" />
                            <SelectItem label="Ativos" value="2" />
                            <SelectItem label="Inativos" value="3" />
                        </SelectContent>
                    </SelectPortal>
                </Select>
            </HStack>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <HStack mt={10} justifyContent="space-between" gap={10} flexWrap={"wrap"}>
                    <Pressable onPress={() => handleOpenExercise()}>
                        <ProductCard />
                    </Pressable>
                    <Pressable onPress={() => handleOpenExercise()}>
                        <ProductCard />
                    </Pressable>
                    <Pressable onPress={() => handleOpenExercise()}>
                        <ProductCard />
                    </Pressable>
                </HStack>
            </ScrollView>
        </View>
    )
}