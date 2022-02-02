import {StyleSheet} from "react-native"

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerTop:{
      justifyContent: 'flex-start'
    },
    container2: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      width:150,
      height:160
    },
    button__home:{
      marginRight: 20
    },
   darkbg:{
     backgroundColor:"#333"
   },
   login__msg:(text='none')=> ({
     fontWeight:"bold",
     fontSize: 22,
     color:"red",
     marginTop: 10,
     marginBottom: 15,
     display: text
   }),
   login__form:{
     width: "80%"

   },
   login__input:{
     backgroundColor:"#FFF",
     fontSize: 19,
     padding: 7,
     marginBottom: 15
   },
   login__button:{
     padding: 12,
     backgroundColor:"#5768D4",
    alignSelf:"center",
    borderRadius: 5
    },
    login_buttonText:{
      fontWeight:"bold",
      fontSize: 22,
      color: "#333"

    },
    area__menu:{
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 10,
    width: '100%',
    backgroundColor:'#111',
    alignItems:'center',
    justifyContent:'center'
    },
    button__home2:{
      textAlign:'left'
    },
    area__title:{
      width: '80%',
      fontWeight:'bold',
      fontSize:20,
      color:'#fff',
      textAlign:'center'
    },
    button__logout:{
      textAlign:'right'
    },
    ConfigMenu:{
      display: 'flex',
      flexDirection: 'row',
      height: 'ScreenHeight',
      width: 'ScreenWidth'
    },
    containerText:{
      backgroundColor:'transparent',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      alignItems:'center'

    },
   texto1:{
    fontSize: 20,
    marginTop: 50
   },
    texto:{
      fontSize: 20,
      marginTop: 30

    },
  });
  export {css}