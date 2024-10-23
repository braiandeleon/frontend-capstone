import React, {useEffect, useReducer} from "react";
import { useFormik } from "formik";
import {
  
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import Alert from "./Alert";


const BookingForm = ({initialTimes, submitAPIf}) => {
  const {isLoading, response, submit} = useSubmit();

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};


  const formik = useFormik({
    initialValues: {firstName:'',email:'', type:'', comment:''},
    onSubmit: async (data) => {
       await submit(data);
      if (response.type === "error") {
        onOpen("error", response.message);
      } else {
        onOpen("success", response.message);
      }
      formik.resetForm();
    },
    validationSchema: Yup.object({firstName:Yup.string().required(),email:Yup.string().required(), comment:Yup.string().required()}),
  });
  const [dateValue, setDateValue] = React.useState('monday');
  const [timeValue, setTimeValue] = React.useState('12');
  

const handleInputChange = (e) => {
  setDateValue(e.target.value);
}
const handleTimeChange = (e) => {
  setTimeValue(e.target.value);
}


  const reducer = (availableTimes, action) => {
    
    switch (action.type) {
      case "Add":
        return availableTimes.map((weekday) => {
          if (weekday.date === action.payload.weekday && !weekday.availability.includes(action.payload.newDate)) {
            return {
              ...weekday,
              availability: [...weekday.availability, action.payload.newDate],
            };
            
          } else if (weekday.date === action.payload.weekday && weekday.availability.includes(action.payload.newDate)) {
            return weekday;
        }else{
          return weekday
        };
    })
  }};
const [availableTimes, dispatch] = useReducer(reducer, initialTimes)

const handleit = function (event){
  dispatch({type:'Add', payload:{weekday:dateValue, newDate:timeValue}})
  const taken = availableTimes.some((weekday) => weekday.date == dateValue && weekday.availability.includes(timeValue));
  const d = new Date();
  if (taken) {
    alert("This date is taken. Select other one");
  }else{
    if(submitAPIf("")){
      window.location.href = '/done';
    }
    
  }
}
useEffect(() => {
  console.log(availableTimes);
}, [availableTimes]);


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#0078ab"
      py={16}
      spacing={8}
    >

      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Reserve your spot!
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel htmlFor="type">Weekday</FormLabel>
                <Select id="type" name="type" value={dateValue} onChange={handleInputChange} className="text-black">
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Time</FormLabel>
                <Select id="type" name="type" value={formik.values.ocassion} onChange={handleTimeChange} className="text-black">
                  <option value="12">12PM</option>
                  <option value="1">1PM</option>
                  <option value="2">2PM</option>
                  <option value="3">3PM</option>
                  <option value="4">4PM</option>
                  <option value="5">5PM</option>
                </Select>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full" hidden>
                {isLoading?"Loading":"Reserve"}
              </Button>
              <Button colorScheme="blue" width="full" onClick={handleit}>
                Reserve
              </Button>
              <h3>Confirmed reservations this week</h3>
              <ul>
            {availableTimes.map((weekday) => (
                    <li key={weekday.id}>
                    {weekday.date}: {weekday.availability.join(", ")}
                  </li>
            ))}
              </ul>
            </VStack>
          </form>
        </Box>
      </VStack>

    </FullScreenSection>

  );
};

export default BookingForm;
