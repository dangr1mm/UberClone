import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Auth } from 'aws-amplify';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} >
            <View style={{backgroundColor: 'black', padding: 15}}>

                <View style={{flexDirection: 'row'}}>
                    <View style={{
                        backgroundColor: '#cacaca',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        marginRight: 10
                    }}/>
                    <View>
                        <Text style={{color: 'white', fontSize: 24}}>Dan Grimm</Text>
                        <Text style={{color: 'lightgrey'}}>5.00 *</Text>
                    </View>
                    
                </View>

                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#919191',
                    borderTopWidth: 1,
                    borderTopColor: '#919191',
                    paddingVertical: 10,
                    marginVertical: 10
                }}>
                    <Pressable>
                        <Text style={{
                            color: '#dddddd', 
                            fontWeight: 'bold', 
                            paddingVertical: 5,
                            fontSize: 18
                        }}>
                            Messages
                        </Text>
                    </Pressable>
                </View>

                <Pressable
                    onPress={() => alert('do more')}
                >
                    <Text style={{color: '#dddddd', paddingVertical: 5}}>Do more with your account</Text>                    
                </Pressable>

                <Pressable
                    onPress={() => alert('make money')}
                >
                <Text style={{color: 'white', paddingVertical: 5}}>Make money driving</Text>                   
                </Pressable>

            </View>

            <DrawerItemList {...props} />

            <Pressable
                    onPress={() => Auth.signOut()}
                >
                <Text style={{padding: 5, paddingLeft: 20}}>Logout</Text>                   
            </Pressable>

        </DrawerContentScrollView>
    );
};

export default CustomDrawer;