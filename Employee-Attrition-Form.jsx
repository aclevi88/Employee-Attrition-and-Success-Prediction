import React, { useState } from 'react';
import { Container, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const EmployeeAttritionForm = () => {
  const [formMessage, setFormMessage] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = React.useState({
    /* Age: '',
    BusinessTravel: '', 
    DailyRate: '', 
    Department: '',
    DistanceFromHome: '',
    Education: '',
    EducationField: '', 
    EnvironmentSatisfaction: '', 
    Gender: '', 
    HourlyRate: '',
    JobInvolvement: '', 
    JobLevel: '', 
    JobRole: '', 
    JobSatisfaction: '',
    MaritalStatus: '', 
    MonthlyIncome: '', 
    MonthlyRate: '', 
    NumCompaniesWorked: '',
    OverTime: '', 
    PercentSalaryHike: '', 
    PerformanceRating: '',
    RelationshipSatisfaction: '', 
    StockOptionLevel: '',
    TotalWorkingYears: '', 
    TrainingTimesLastYear: '', 
    WorkLifeBalance: '',
    YearsAtCompany: '', 
    YearsInCurrentRole: '', 
    YearsSinceLastPromotion: '',
    YearsWithCurrManager: '' */  
  });

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDialogClose = () => {
    setShowDialog(false);
  };
    const handleSubmit = async (event) => {
    event.preventDefault();
    var formData = new FormData(event.target);
    formData.forEach(function (value, key) {
      formData[key] = Number(value);
    });
    try {
      // Replace 'your-web-service-endpoint' with the actual endpoint URL
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: "["+JSON.stringify(formData)+"]",
      }
      ).then(response => response.json())
      .then(data => {
        if (data.message) {
          setFormMessage(data.message);
          setShowDialog(true); // Show the dialog after form submission
        }
      });

      /* if (response.ok) {
        setShowDialog(true);
      
      } else {
        console.error('Error submitting form data:', response.statusText);
      }  */
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error submitting form data:', error.message);
    }
  };
  // Handle form submission
  /* const handleSubmit = async (event) => {
    event.preventDefault();
    var formData = new FormData(event.target);
    formData.forEach(function (value, key) {
      formData[key] = Number(value);
    });
    try {
      // Replace 'your-web-service-endpoint' with the actual endpoint URL
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: "["+JSON.stringify(formData)+"]",
      });

      if (response.ok) {
        debugger;
        var data = response.json().data;
        console.log(data.message);
      } else {
        // Handle error responses from the server
        console.error('Error submitting form data:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error submitting form data:', error.message);
    }
  }; */

  return (
    
    <Container maxWidth="sm">
      <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Employee Attrition Prediction Form
        </Typography>
      </Toolbar>
    </AppBar>
    <br></br>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Age"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="business-travel-label">Business Travel</InputLabel>
              <Select
                labelId="business-travel-label"
                id="businessTravel"
                name="BusinessTravel"
                value={formData.BusinessTravel}
                onChange={handleChange}
                label="Business Travel"
                defaultValue = ""
              >
                <MenuItem value="1">Travel Rarely</MenuItem>
                <MenuItem value="2">Travel Frequently</MenuItem>
                <MenuItem value="0">Non-Travel</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Daily Rate"
              name="DailyRate"
              value={formData.DailyRate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="department-label">Department</InputLabel>
              <Select
                labelId="department-label"
                id="department"
                name="Department"
                value={formData.Department}
                onChange={handleChange}
                label="Department"
                defaultValue = ""
              >
                <MenuItem value="2">HR</MenuItem>
                <MenuItem value="1">Research & Development</MenuItem>
                <MenuItem value="0">Sales</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Distance From Home(In miles)"
              name="DistanceFromHome"
              value={formData.DistanceFromHome}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="education-label">Education</InputLabel>
              <Select
                labelId="education-label"
                id="education"
                name="Education"
                value={formData.Education}
                onChange={handleChange}
                label="Education"
                defaultValue = ""
              >
                <MenuItem value="1">Did not complete high school</MenuItem>
                <MenuItem value="2">High School Diploma</MenuItem>
                <MenuItem value="3">Bachelor's Degree</MenuItem>
                <MenuItem value="4">Master's Degree</MenuItem>
                <MenuItem value="5">PHD Degree</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="education-field-label">Education Field</InputLabel>
              <Select
                labelId="education-field-label"
                id="educationField"
                name="EducationField"
                value={formData.EducationField}
                onChange={handleChange}
                label="Education Field"
                defaultValue = ""
              >
                <MenuItem value="0">Life Sciences</MenuItem>
                <MenuItem value="2">Medical</MenuItem>
                <MenuItem value="3">Marketing</MenuItem>
                <MenuItem value="4">Technical Degree</MenuItem>
                <MenuItem value="5">Human Resources</MenuItem>
                <MenuItem value="1">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="environment-satisfaction-label">Environment Satisfaction</InputLabel>
              <Select
                labelId="environment-satisfaction-label"
                id="environmentSatisfaction"
                name="EnvironmentSatisfaction"
                value={formData.EnvironmentSatisfaction}
                onChange={handleChange}
                label="Environment Satisfaction (Scale 1-4)"
                defaultValue = ""
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                name="Gender"
                value={formData.Gender}
                onChange={handleChange}
                label="Gender"
                defaultValue = ""
              >
                <MenuItem value="0">Female</MenuItem>
                <MenuItem value="1">Male</MenuItem>
               
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Hourly Rate"
              name="HourlyRate"
              value={formData.HourlyRate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="job-involvement-label">Job Involvement</InputLabel>
              <Select
                labelId="job-involvement-label"
                id="jobInvolvement"
                name="JobInvolvement"
                value={formData.JobInvolvement}
                onChange={handleChange}
                label="Job Involvement (Scale 1-4)"
                defaultValue = ""
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="job-level-label">Job Level</InputLabel>
              <Select
                labelId="job-level-label"
                id="jobLevel"
                name="JobLevel"
                value={formData.JobLevel}
                onChange={handleChange}
                label="Job Level"
                defaultValue = ""
              >
                <MenuItem value="1">Junior</MenuItem>
                <MenuItem value="2">Mid-Level</MenuItem>
                <MenuItem value="3">Senior</MenuItem>
                <MenuItem value="4">Lead/Manager</MenuItem>
                <MenuItem value="5">Director/VP</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="job-role-label">Job Role</InputLabel>
              <Select
                labelId="job-role-label"
                id="jobRole"
                name="JobRole"
                value={formData.JobRole}
                onChange={handleChange}
                label="Job Role"
                defaultValue = ""
              >
                <MenuItem value="0">Laboratory Technician</MenuItem>
                <MenuItem value="1">Research Scientist</MenuItem>
                <MenuItem value="2">Manufacturing Director</MenuItem>
                <MenuItem value="3">Healthcare Representive</MenuItem>
                <MenuItem value="4">Manager</MenuItem>
                <MenuItem value="5">Sales Representative</MenuItem>
                <MenuItem value="6">Research Director</MenuItem>
                <MenuItem value="7">Human Resources</MenuItem>
                <MenuItem value="">Sales Executive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="job-satisfaction-label">Job Satisfaction</InputLabel>
              <Select
                labelId="job-satisfaction-label"
                id="jobSatisfaction"
                name="JobSatisfaction"
                value={formData.JobSatisfaction}
                onChange={handleChange}
                label="Job Satisfaction (Scale 1-4)"
                defaultValue = ""
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="marital-status-label">Marital Status</InputLabel>
              <Select
                labelId="marital-status-label"
                id="maritalStatus"
                name="MaritalStatus"
                value={formData.MaritalStatus}
                onChange={handleChange}
                label="Martial Status"
                defaultValue = ""
              >
                <MenuItem value="0">Single</MenuItem>
                <MenuItem value="1">Married</MenuItem>
                <MenuItem value="2">Divorced</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Monthly Income"
              name="MonthlyIncome"
              value={formData.MonthlyIncome}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Monthly Rate"
              name="MonthlyRate"
              value={formData.MonthlyRate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Num of Companies worked at"
              name="NumCompaniesWorked"
              value={formData.NumCompaniesWorked}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="overtime-label">Overtime</InputLabel>
              <Select
                labelId="overtime-label"
                id="overtime"
                name="OverTime"
                value={formData.OverTime}
                onChange={handleChange}
                label="Overtime"
                defaultValue = ""
              >
                <MenuItem value="0">No</MenuItem>
                <MenuItem value="1">Yes</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Percent Salary Hike"
              name="PercentSalaryHike"
              value={formData.PercentSalaryHike}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="performance-rating-label">Performance Rating</InputLabel>
              <Select
                labelId="performance-rating-label"
                id="performanceRating"
                name="PerformanceRating"
                value={formData.PerformanceRating}
                onChange={handleChange}
                label="Performance Rating (Scale 1-4)"
                defaultValue = ""
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                
              </Select>
            </FormControl>
          </Grid> 
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="relationship-satisfaction-label">Relationship Satisfaction</InputLabel>
              <Select
                labelId="relationship-satisfaction-label"
                id="relationshipSatisfaction"
                name="RelationshipSatisfaction"
                value={formData.RelationshipSatisfaction}
                onChange={handleChange}
                label="Relationship Satisfaction (Scale 1-4)"
                defaultValue = ""
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="stock-option-level-label">Stock Option Level</InputLabel>
              <Select
                labelId="stock-option-level-label"
                id="stockOptionLevel"
                name="StockOptionLevel"
                value={formData.StockOptionLevel}
                onChange={handleChange}
                label="Stock Option Level"
                defaultValue = ""
              >
                <MenuItem value="0">None</MenuItem>
                <MenuItem value="1">Basic</MenuItem>
                <MenuItem value="2">Average</MenuItem>
                <MenuItem value="3">Advance</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Total Working Years"
              name="TotalWorkingYears"
              value={formData.TotalWorkingYears}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Training Times Last Year"
              name="TrainingTimesLastYear"
              value={formData.TrainingTimesLastYear}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="work-life-balance-label">Work Life Balance</InputLabel>
              <Select
                labelId="work-life-balance-label"
                id="workLifeBalance"
                name="WorkLifeBalance"
                value={formData.WorkLifeBalance}
                onChange={handleChange}
                label="Work Life Balance (Scale 1-4)"
                defaultValue = ""
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Years At Company"
              name="YearsAtCompany"
              value={formData.YearsAtCompany}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Years In Current Role"
              name="YearsInCurrentRole"
              value={formData.YearsInCurrentRole}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Years Since Last Promotion"
              name="YearsSinceLastPromotion"
              value={formData.YearsSinceLastPromotion}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Years With Current Manager"
              name="YearsWithCurrManager"
              value={formData.YearsWithCurrManager}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <br></br>
      <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body2" color="inherit" align="center">
          &copy; {new Date().getFullYear()} <a href="https://ambrosewebapps.com">ambrosewebapps.com</a>

        </Typography>
      </Toolbar>
    </AppBar>
      <Dialog open={showDialog} onClose={handleDialogClose}>
        <DialogTitle>API Response</DialogTitle>
        <DialogContent>
          <DialogContentText>{formMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EmployeeAttritionForm;