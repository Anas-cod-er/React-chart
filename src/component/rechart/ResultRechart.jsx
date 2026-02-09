import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";


const resultdata = [
  {
    "student_id": 1,
    "name": "Rahul",
    "physics": 78,
    "chemistry": 72,
    "math": 80
  },
  {
    "student_id": 2,
    "name": "Ayesha",
    "physics": 85,
    "chemistry": 88,
    "math": 90
  },
  {
    "student_id": 3,
    "name": "Aman",
    "physics": 67,
    "chemistry": 70,
    "math": 65
  },
  {
    "student_id": 4,
    "name": "Priya",
    "physics": 92,
    "chemistry": 90,
    "math": 95
  },
  {
    "student_id": 5,
    "name": "Rohit",
    "physics": 74,
    "chemistry": 76,
    "math": 78
  },
  {
    "student_id": 6,
    "name": "Neha",
    "physics": 88,
    "chemistry": 85,
    "math": 89
  },
  {
    "student_id": 7,
    "name": "Arjun",
    "physics": 81,
    "chemistry": 79,
    "math": 83
  },
  {
    "student_id": 8,
    "name": "Sana",
    "physics": 69,
    "chemistry": 71,
    "math": 68
  },
  {
    "student_id": 9,
    "name": "Karan",
    "physics": 90,
    "chemistry": 92,
    "math": 94
  },
  {
    "student_id": 10,
    "name": "Pooja",
    "physics": 76,
    "chemistry": 74,
    "math": 77
  }
]


const ResultRechart = () => {
    return(
        <div>
            <LineChart width={800} height={500} data={resultdata}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke="red" strokeWidth={2}></Line>
                <Line dataKey="chemistry"></Line>
            </LineChart>
        </div>
    );
};

export default ResultRechart;