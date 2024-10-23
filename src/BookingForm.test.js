import { render, screen } from "@testing-library/react";
import App from './App'
import React, {useEffect, useReducer} from "react";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./components/BookingForm";

var initialTimes = [
  {
    id: 1,
    date: "monday",
    availability: [12],
  },
  {
    id: 2,
    date: "tuesday",
    availability:  [],
  },
  {
    id: 3,
    date: "wednesday",
    availability:  [],
  },
  {
    id: 4,
    date: "thursday",
    availability:  [],
  },
  {
    id: 5,
    date: "friday",
    availability:  [],
  }
];
const reducer = (availableTimes, action) => {
  switch (action.type) {
    case "updateTimes":
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
  case "initializeTimes":
    return [
      {
        id: 1,
        date: "monday",
        availability: [],
      },
      {
        id: 2,
        date: "tuesday",
        availability:  [],
      },
      {
        id: 3,
        date: "wednesday",
        availability:  [],
      },
      {
        id: 4,
        date: "thursday",
        availability:  [],
      },
      {
        id: 5,
        date: "friday",
        availability:  [],
      }
    ];
}};
const submitAPI = function(formData) {
  return true;
};
test('Renders the BookingForm heading', () => {
  render(<React.StrictMode>
            <BrowserRouter>
            <BookingForm initialTimes={initialTimes} submitAPIf={submitAPI}/>
            </BrowserRouter>
        </React.StrictMode>);

    const headingElement = screen.getByText("Reserve your spot!");
    expect(headingElement).toBeInTheDocument();
})
test('Reducer test action and output state', ()=>{
  const newState = reducer(initialTimes, {type:'updateTimes', payload:{weekday:"monday", newDate:12}})
  const expectedSate = [
    {
      id: 1,
      date: "monday",
      availability: [12],
    },
    {
      id: 2,
      date: "tuesday",
      availability:  [],
    },
    {
      id: 3,
      date: "wednesday",
      availability:  [],
    },
    {
      id: 4,
      date: "thursday",
      availability:  [],
    },
    {
      id: 5,
      date: "friday",
      availability:  [],
    }
  ];
  console.log("here")
  console.log(newState)
  console.log(expectedSate)
expect(newState).toEqual(expectedSate);
})


test('Reducer initialize times test', ()=>{
  const newState = reducer(initialTimes, {type:'initializeTimes', payload:{}})
  const expectedSate = [
    {
      id: 1,
      date: "monday",
      availability: [],
    },
    {
      id: 2,
      date: "tuesday",
      availability:  [],
    },
    {
      id: 3,
      date: "wednesday",
      availability:  [],
    },
    {
      id: 4,
      date: "thursday",
      availability:  [],
    },
    {
      id: 5,
      date: "friday",
      availability:  [],
    }
  ];
  console.log("here")
  console.log(newState)
  console.log(expectedSate)
expect(newState).toEqual(expectedSate);
})