import { StyleSheet } from 'react-native';
import { Colors } from '../colors';
import { Typography } from '../police';
import { Spacing, Radius } from '../espace';

export const AccueilStyles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
    alignItems: 'center',
  },
 
  nom: {
    fontSize: 28,
    color: '#000000ff',
    fontFamily: 'Baloo-Bold',
    bottom: 15,
    textAlign: 'center'
  },
  carte1:{
    width:380,
    backgroundColor:'#97d9ffff',
    height:220,
    borderRadius:35,
    top:10,
    shadowOffset: { width: 0, height: -10 },
    shadowColor: "#0993fdff",
    elevation: 10,
    },
  carte2:{
    width:168,
    height:157,
    backgroundColor:'rgba(255, 255, 255, 1)',
    borderRadius:15,
    left:105,
    top:35,
     boxShadow:"20 20 20 black",
    shadowOffset: { width: 0, height: -10 },

    shadowColor: "#9a9898ff",
  elevation: 3,
    
  },
  carte3:{
    width:168,
    height:157,
    backgroundColor:'#ffffffff',
    borderRadius:15,
    right:105,
    bottom:122,
     boxShadow:"20 20 20 black",
    shadowOffset: { width: 0, height: -10 },

    shadowColor: "#9a9898ff",
  elevation: 3,
    
  },
   carte4:{
    width:380,
    height:100,
    backgroundColor:'#ffffffff',
    borderRadius:15,
    boxShadow:"20 20 20 black",
    right:2,
    bottom:100,
    shadowOffset: { width: 0, height: -10 },

    shadowColor: "#615e5eff",
  elevation: 3,
    
  },

  textecarte1:{
     fontSize: 28,
    color: '#000000ff',
    fontFamily: 'Baloo-Bold',
    top: 0,
    textAlign: 'center'


  },
  carte3Texte:{
    fontSize: 18,
    color: '#000000ff',
    fontFamily: 'Baloo-Bold',
    top: 30,
    textAlign: 'center'

  },
  carte4Texte:{
    fontSize: 20,
    color: '#000000ff',
    fontFamily: 'Baloo-Bold',
    bottom:25,
    textAlign: 'center'

  },
  carte2Texte:{
    fontSize: 18,
    color: '#000000ff',
    fontFamily: 'Baloo-Bold',
    top: 30,
    textAlign: 'center'

  },


icon1:{
    
    left: 165,
    bottom:75,

},
icon2:{
  color:Colors.primary,
  bottom:95,
  left:20,
},
icon3:{
  backgroundColor:'white',
  width:60,
  height:60,
  top:10,
  left:10,
  borderRadius:10,
  
  paddingLeft:8,
  paddingTop:8,

},
icon4:{
   backgroundColor:'white',
  width:60,
  height:60,
  top:10,
  left:10,
  borderRadius:10,
 
  paddingLeft:8,
  paddingTop:8,
},
icon5:{
   backgroundColor:"#38b6ff3a",
   
  width:60,
  height:60,
  top:15,
  left:35,
  borderRadius:50,
  paddingLeft:13,
  paddingTop:13,
},
temp:{
  bottom:120,
  fontSize:20,
  left:50,
  fontFamily:'Baloo-Bold'

},
gaugeContainer: {
  bottom:20,
 
  alignItems: "center",
 
  
},

gaugeImage: {
  width: 280,
  height: 200,
},

aiguille: {

      position: 'absolute',
      bottom: 30, 
    
      width:120,
      height:120,
      
    },
    


gaugeLabel: {
  backgroundColor: "#ffffffff",
  paddingHorizontal: 10,
  paddingVertical: 2,
  borderRadius: 8,
  fontWeight: "bold",
  color: "#00b300",
  textAlign: "center",
  bottom:40,
},

});