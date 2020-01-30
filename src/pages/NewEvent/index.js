import React,{useState} from 'react';
import { View, Text, Switch, TextInput,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Calendar from 'expo-calendar';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';

export default function NewEvent() {

  const [title,setTitle] = useState('');
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  const [allDay,setAllDay] = useState(false);

  const [mode,setMode] = useState('');
  const [show,setShow] = useState(false);
  const [show2,setShow2] = useState(false);
  const [r,setR] = useState(true);

  async function createEvent(){
    await Calendar.createEventAsync(calendarID,{
      title:'Teste123',
      startDate:Date.now(),
      endDate:Date.now(),
      allDay:true,
      alarms:Calendar.AlarmMethod.ALARM,
    })
  }

  function setStartDateFunction(event, date){
    setShow(false);
    if(mode==='date'){
      date = date || startDate
      setStartDate(date)
    }else{
      const d = startDate
      date = date || startDate
      d.setHours(date.getHours(),date.getMinutes())
      setStartDate(d)
    }
    setR(false)
    setR(true)
  }

  function setEndDateFunction(event, date){
    setShow2(false);
    if(mode==='date'){
      date = date || endDate
      setEndDate(date)
    }else{
      const d = endDate
      date = date || endDate
      d.setHours(date.getHours(),date.getMinutes())
      setEndDate(d)
    }
    setR(false)
    setR(true)
  }
  
  return r &&(
    <LinearGradient colors={['#5411d9', '#7314a3', '#9c0b99']} style={styles.container}>
        {show &&<DateTimePicker mode={mode} value={startDate} onChange={setStartDateFunction}/>}
        {show2 &&<DateTimePicker mode={mode} value={endDate} onChange={setEndDateFunction}/>}
        <View style={styles.form}>

            <Text style={styles.label}>Título</Text>
            <TextInput placeholder="Qual é o seu compromisso?"
              placeholderTextColor="#999" 
              value={title} 
              onChangeText={setTitle} 
              style={{marginBottom:10}}
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput placeholder="Descrição do compromisso..."
              placeholderTextColor="#999" 
              value={title} 
              onChangeText={setTitle} 
              style={{marginBottom:10}}
            />

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={styles.label}>O dia todo?</Text>
              <Switch value={allDay} onValueChange={(v) => setAllDay(v)}/>
            </View>

            <Text style={styles.label}>{allDay? 'Data':'Data de início'}</Text>
            <TouchableOpacity onPress={()=>{setShow(true);setMode('date')}}>
              <Text style={styles.dataText}>{`${startDate.getDate()}/${startDate.getMonth()+1}/${startDate.getFullYear()}`}</Text>
            </TouchableOpacity> 
            

            <Text style={styles.label}>{allDay?'Hora' : 'Hora de início'}</Text>
            <TouchableOpacity onPress={()=>{setShow(true);setMode('time')}}>
              <Text style={styles.dataText}>{`${startDate.getHours()}:${startDate.getMinutes()}`}</Text>
            </TouchableOpacity> 

            {!allDay &&
            <>
              <Text style={styles.label}>Data de fim</Text>
              <TouchableOpacity onPress={()=>{setShow2(true);setMode('date')}}>
                <Text style={styles.dataText}>{`${endDate.getDate()}/${endDate.getMonth()+1}/${endDate.getFullYear()}`}</Text>
              </TouchableOpacity> 
              

              <Text style={styles.label}>Hora de fim</Text>
              <TouchableOpacity onPress={()=>{setShow2(true);setMode('time')}}>
                <Text style={styles.dataText}>{`${endDate.getHours()}:${endDate.getMinutes()}`}</Text>
              </TouchableOpacity> 
            </>
            }

            

        </View>
    </LinearGradient>
  );
}
