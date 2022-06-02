import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React ,{useState} from 'react';

const HomeScreen = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function mailer() {
        fetch("https://dry-escarpment-11593.herokuapp.com/", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name:name,
            email:email,
            mobile:mobile,
            message:message,
          }),
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      const handler = () => {
        mailer();
        setEmail('');
        setMessage('');
        setName('');
        setMobile('');
      }

  return (
    <View style={styles.container}>
    <View style={styles.wrapper}>
    <Text style={styles.header}>Name</Text>
    <TextInput 
    style={styles.input}
    placeholder="Type here to translate!"
        onChangeText={newText => setName(newText)}
        defaultValue={name}
    />
    </View>
    <View style={styles.wrapper}>
    <Text style={styles.header}>Mobile Number</Text>
    <TextInput 
    style={styles.input}
    placeholder="Type here to translate!"
        onChangeText={newText => setMobile(newText)}
        defaultValue={mobile}
    />
    </View>
    <View style={styles.wrapper}>
    <Text style={styles.header}>Email</Text>
    <TextInput 
    style={styles.input}
    placeholder="Type here to translate!"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
    />
    </View>
    <View style={styles.wrapper}>
    <Text style={styles.header}>Message</Text>
    <TextInput 
    style={styles.input}
    placeholder="Type here to translate!"
        onChangeText={newText => setMessage(newText)}
        defaultValue={message}
    />
    </View>
    <View style={styles.button}>
    <TouchableOpacity onPress={() => {
        handler();
    }}>
    <Text>SEND</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:50,
    },
    wrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    header: {
        fontSize:20,
        fontWeight: 'bold',
        textShadowOffset: {width: 5, height: 5},
        color: '#2f354b',
    },
    input: {
        marginTop:20,
        paddingTop:20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 300,
      },
      button:{
        paddingTop:35,
        justifyContent: 'center',
        alignItems: 'center',
      }
  });

export default HomeScreen;