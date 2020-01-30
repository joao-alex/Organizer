import React,{useEffect,useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EventItem from '../../components/EventItem';

import * as Calendar from 'expo-calendar';
import styles from './styles';

export default function Main({navigationOptions}) {
  const [calendarID, setCalendarID] = useState('');

  useEffect(()=>{
    async function initCalendar(){
      const {status} = await Calendar.requestCalendarPermissionsAsync()
      if(status==='granted'){
        const calendars = await Calendar.getCalendarsAsync();
        const calendar = calendars.filter(calendar => calendar.title ==='Organizer');
        if(calendar.length>0){
          setCalendarID(calendar[0].id)
        }else{
          const calendarID = await Calendar.createCalendarAsync({
            title:'Organizer',
            color:'blue',
            entityType:Calendar.EntityTypes.EVENT,
            sourceId:'99',
            source:{
              isLocalAccount:true,
              name:'Organizer',
            },
            name:'Organizer',
            ownerAccount:'personal',
            accessLevel:Calendar.CalendarAccessLevel.OWNER
          });
          setCalendarID(calendarID);
        }
      }
    }
    initCalendar();
  },[])

  return (
    <LinearGradient colors={['#5411d9', '#7314a3', '#9c0b99']} style={styles.container}>
      <Text style={styles.textEventsToday}>Compromissos de hoje...</Text>
      <EventItem/>
      <EventItem/>
      <EventItem/>
      <EventItem/>
    </LinearGradient>
  );
}
