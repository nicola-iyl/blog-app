import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from "react-native";

const BlogPostForm = ({ onSubmit, initialValues })=>{
    const [title,setTitle] = useState(initialValues.title);
    const [content,setContent] = useState(initialValues.content);

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
            <Button
                title="Save Blog Post"
                onPress={ () => onSubmit(title,content) }
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues : {
        title: '',
        content: '',
    }
};

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom: 10,
        padding:5

    },
    label:{
        fontSize: 18,
        marginBottom:6,
    }
});

export default BlogPostForm;