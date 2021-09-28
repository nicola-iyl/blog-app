import React, {useContext,useState} from 'react';
import {View,Text,TextInput,StyleSheet} from "react-native";
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    return(
        <View>
            <Text style={styles.label}>Titolo:</Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input}
            />
            <Text style={styles.label}>Contenuto:</Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom: 10,
    },
    label:{
        fontSize: 18,
        marginBottom:6,
    }
});

export default CreateScreen;