import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = () => {
    const formattedDate = selectedDate.toDateString();
    if (!newTask.trim()) return;

    setTasks((prev) => ({
      ...prev,
      [formattedDate]: [...(prev[formattedDate] || []), { title: newTask, completed: false }],
    }));
    setNewTask("");
  };

  const handleCompleteTask = (taskIndex) => {
    const formattedDate = selectedDate.toDateString();
    const taskToComplete = tasks[formattedDate][taskIndex];

    setCompletedTasks((prev) => [...prev, taskToComplete]);
    setTasks((prev) => {
      const updatedTasks = [...prev[formattedDate]];
      updatedTasks.splice(taskIndex, 1);
      return { ...prev, [formattedDate]: updatedTasks };
    });
  };

  const formattedDate = selectedDate.toDateString();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        backgroundColor: "#f8f9fc",
        padding: 2,
      }}
    >
      {/* Calendar Section */}
      <Box sx={{ width: "30%", padding: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
        >
          Planner
        </Typography>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        <Typography
          sx={{ mt: 2, fontStyle: "italic", textAlign: "center" }}
        >
          Selected Date: {formattedDate}
        </Typography>

        {/* Completed Tasks Section */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          Completed Tasks
        </Typography>
        <Card>
          <CardContent>
            <List>
              {completedTasks.map((task, index) => (
                <ListItem key={index}>
                  <ListItemText primary={task.title} />
                </ListItem>
              ))}
              {!completedTasks.length && (
                <Typography
                  sx={{ fontStyle: "italic", color: "gray" }}
                >
                  No completed tasks yet.
                </Typography>
              )}
            </List>
          </CardContent>
        </Card>
      </Box>

      {/* Task Section */}
      <Box sx={{ flex: 1, padding: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Tasks for {formattedDate}
        </Typography>

        {/* Task List */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <List>
              {(tasks[formattedDate] || []).map((task, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ListItemText primary={task.title} />
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleCompleteTask(index)}
                  >
                    Complete
                  </Button>
                </ListItem>
              ))}
              {!(tasks[formattedDate] || []).length && (
                <Typography
                  sx={{ fontStyle: "italic", color: "gray" }}
                >
                  No tasks for this date.
                </Typography>
              )}
            </List>
          </CardContent>
        </Card>

        {/* Add New Task */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 3 }}>
          <TextField
            label="Add a Task"
            variant="outlined"
            fullWidth
            placeholder="E.g., Study for math test"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="contained" onClick={handleAddTask}>
            Add Task
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Planner;
