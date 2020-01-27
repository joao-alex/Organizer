import React,{useEffect,useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Calendar from 'expo-calendar';
import styles from './styles';

export default function Main() {
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

  async function createEvent(){
    await Calendar.createEventAsync(calendarID,{
      title:'Teste123',
      startDate:Date.now(),
      endDate:Date.now(),
      allDay:true,
      alarms:Calendar.AlarmMethod.ALARM,
    })
  }

  return (
    <View style={styles.container}>
        <Text>Teste oi</Text>
        <TouchableOpacity onPress={createEvent}>
          <Text>{calendarID}</Text>
        </TouchableOpacity>
    </View>
  );
}
