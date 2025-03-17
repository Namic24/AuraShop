import React, { useState } from "react"
import { Redirect, router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, ScrollView, Image } from "react-native"
import {images} from '@/constants'
import CustomButton from "@/components/CustomButtom"
import { useRouter } from "expo-router"

export default function Index() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <>
   { isLoggedIn && <Redirect href={"/(tabs)/home"} /> }   // เปิดหน้าเว็บแล้วให้ขึ้นไปหน้าHomeเลย
    {  
     !isLoggedIn && <SafeAreaView className="bg-gray-900 h-full">
      <ScrollView contentContainerStyle={{ height: "100%"}}>
          <View className=" w-full flex justify-center items-center h-full px-4 ">
              <Image source={images.logo} className="h-[84px]" resizeMode="contain" />
              <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
              <View className="relative mt-5 ">
                  <Text className=" text-3xl text-white font-bold text-center ">
                      Lorem ipsum dolor sit {"\n"}  amet Aurashop 
                      <Text className=" text-orange-300 "> AuraShop.</Text>
                  </Text>
                  <Image source={images.path} className="w-[150px] h-[15px] absolute -bottom-3 -right-8 " resizeMode="contain" />
              </View>
              <Text className=" text-sm  text-white mt-7 text-center " > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate soluta officia est totam, error </Text>

              <CustomButton  
              title="Continue with Email"
              handlePress={() => { 
               router.push("/(auth)/login")
              }}
              containerStyles="w-full mt-7 "
            />

          </View>
      </ScrollView>
     </SafeAreaView>
    }
     </>

  )
}

