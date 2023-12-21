package com.ambrosewebapps.employeeattriton.data;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;

import com.ambrosewebapps.employeeattriton.dto.EmployeeAttritionDTO;

public class InsertIBMEmployeeAttrition {
	private Connection connect = null;
	private Statement statement = null;
	private PreparedStatement preparedStatement = null;
	private ResultSet resultSet = null;

	public EmployeeAttritionDTO populateEmpAttDto(String[] employee) {

		EmployeeAttritionDTO dto = new EmployeeAttritionDTO();
		dto.setAge(Integer.parseInt(employee[0]));
		dto.setAttrition(employee[1]);
		dto.setBusinessTravel(employee[2]);
		dto.setDailyRate(Integer.parseInt(employee[3]));
		dto.setDepartment(employee[4]);
		dto.setDistanceFromHome(Integer.parseInt(employee[5]));
		dto.setEducation(Integer.parseInt(employee[6]));
		dto.setEducationField(employee[7]);
		dto.setEmployeeCount(Integer.parseInt(employee[8]));
		dto.setEmployeeNumber(Integer.parseInt(employee[9]));
		dto.setEnvironmentSatisfaction(Integer.parseInt(employee[10]));
		dto.setGender(employee[11]);
		dto.setHourlyRate(Integer.parseInt(employee[12]));
		dto.setJobInvolvement(Integer.parseInt(employee[13]));
		dto.setJobLevel(Integer.parseInt(employee[14]));
		dto.setJobRole(employee[15]);
		dto.setJobSatisfaction(Integer.parseInt(employee[16]));
		dto.setMaritalStatus(employee[17]);
		dto.setMonthlyIncome(Integer.parseInt(employee[18]));
		dto.setMonthlyRate(Integer.parseInt(employee[19]));
		dto.setNumCompaniesWorked(Integer.parseInt(employee[20]));
		dto.setOver18(employee[21]);
		dto.setOverTime(employee[22]);
		dto.setPercentSalaryHike(Integer.parseInt(employee[23]));
		dto.setPerformanceRating(Integer.parseInt(employee[24]));
		dto.setRelationshipSatisfaction(Integer.parseInt(employee[25]));
		dto.setStandardHours(Integer.parseInt(employee[26]));
		dto.setStockOptionLevel(Integer.parseInt(employee[27]));
		dto.setTotalWorkingYears(Integer.parseInt(employee[28]));
		dto.setTrainingTimesLastYear(Integer.parseInt(employee[29]));
		dto.setWorkLifeBalance(Integer.parseInt(employee[30]));
		dto.setYearsAtCompany(Integer.parseInt(employee[31]));
		dto.setYearsInCurrentRole(Integer.parseInt(employee[32]));
		dto.setYearsSinceLastPromotion(Integer.parseInt(employee[33]));
		dto.setYearsWithCurrManager(Integer.parseInt(employee[34]));

		return dto;
	}

	public int insertEmployeeAttrition(EmployeeAttritionDTO dto, int rowCount) throws Exception {
		try {
			// This will load the MySQL driver, each DB has its own driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			// Setup the connection with the DB
			connect = DriverManager.getConnection("jdbc:mysql://localhost/?" + "user=root&password=root");

			// Statements allow to issue SQL queries to the database
			statement = connect.createStatement();
			// Result set get the result of the SQL query
			resultSet = statement.executeQuery("select * from Employee_Data.employee_attrition");

			preparedStatement = connect.prepareStatement(
					"insert into Employee_Data.employee_attrition (emp_att_id,Age,Attrition,Business_Travel,Daily_Rate,Department,Distance_From_Home,Education,Education_Field,Employee_Count,Employee_Number,Environment_Satisfaction,Gender,Hourly_Rate,Job_Involvement,Job_Level,Job_Role,Job_Satisfaction,Marital_Status,Monthly_Income,Monthly_Rate,Num_Companies_Worked,Over_18,OverTime,Percent_Salary_Hike,Performance_Rating,Relationship_Satisfaction,Standard_Hours,Stock_Option_Level,Total_Working_Years,Training_Times_Last_Year,Work_Life_Balance,Years_At_Company,Years_In_Current_Role,Years_Since_Last_Promotion,Years_With_Curr_Manager)"
							+ " values (" + rowCount + ", ?, ?, ?, ?, ?," + " ?, ?, ?, ?, ?," + " ?, ?, ?, ?, ?,"
							+ " ?, ?, ?, ?, ?," + " ?, ? , ?, ?, ?," + " ?, ? , ?, ?, ?," + " ?, ?, ? , ?, ?)");
			// preparedStatement.setString(1,
			// preparedStatement.setInt(2,
			preparedStatement.setInt(1, dto.getAge());
			preparedStatement.setString(2, dto.getAttrition());
			preparedStatement.setString(3, dto.getBusinessTravel());
			preparedStatement.setInt(4, dto.getDailyRate());
			preparedStatement.setString(5, dto.getDepartment());
			preparedStatement.setInt(6, dto.getDistanceFromHome());
			preparedStatement.setInt(7, dto.getEducation());
			preparedStatement.setString(8, dto.getEducationField());
			preparedStatement.setInt(9, dto.getEmployeeCount());
			preparedStatement.setInt(10, dto.getEmployeeNumber());
			preparedStatement.setInt(11, dto.getEnvironmentSatisfaction());
			preparedStatement.setString(12, dto.getGender());
			preparedStatement.setInt(13, dto.getHourlyRate());
			preparedStatement.setInt(14, dto.getJobInvolvement());
			preparedStatement.setInt(15, dto.getJobLevel());
			preparedStatement.setString(16, dto.getJobRole());
			preparedStatement.setInt(17, dto.getJobSatisfaction());
			preparedStatement.setString(18, dto.getMaritalStatus());
			preparedStatement.setInt(19, dto.getMonthlyIncome());
			preparedStatement.setInt(20, dto.getMonthlyRate());
			preparedStatement.setInt(21, dto.getNumCompaniesWorked());
			preparedStatement.setString(22, dto.getOver18());
			preparedStatement.setString(23, dto.getOverTime());
			preparedStatement.setInt(24, dto.getPercentSalaryHike());
			preparedStatement.setInt(25, dto.getPerformanceRating());
			preparedStatement.setInt(26, dto.getRelationshipSatisfaction());
			preparedStatement.setInt(27, dto.getStandardHours());
			preparedStatement.setInt(28, dto.getStockOptionLevel());
			preparedStatement.setInt(29, dto.getTotalWorkingYears());
			preparedStatement.setInt(30, dto.getTrainingTimesLastYear());
			preparedStatement.setInt(31, dto.getWorkLifeBalance());
			preparedStatement.setInt(32, dto.getYearsAtCompany());
			preparedStatement.setInt(33, dto.getYearsInCurrentRole());
			preparedStatement.setInt(34, dto.getYearsSinceLastPromotion());
			preparedStatement.setInt(35, dto.getYearsWithCurrManager());
			int effectedRows = preparedStatement.executeUpdate();
			// PreparedStatements can use variables and are more efficient
			/*
			 * preparedStatement = connect
			 * .prepareStatement("insert into  feedback.comments values (default, ?, ?, ?, ? , ?, ?)"
			 * ); // "myuser, webpage, datum, summary, COMMENTS from feedback.comments"); //
			 * Parameters start with 1 preparedStatement.setString(1, "Test");
			 * preparedStatement.setString(2, "TestEmail"); preparedStatement.setString(3,
			 * "TestWebpage"); preparedStatement.setDate(4, new java.sql.Date(2009, 12,
			 * 11)); preparedStatement.setString(5, "TestSummary");
			 * preparedStatement.setString(6, "TestComment");
			 * preparedStatement.executeUpdate();
			 * 
			 * preparedStatement = connect
			 * .prepareStatement("SELECT myuser, webpage, datum, summary, COMMENTS from feedback.comments"
			 * ); resultSet = preparedStatement.executeQuery();
			 * 
			 * // Remove again the insert comment preparedStatement = connect
			 * .prepareStatement("delete from feedback.comments where myuser= ? ; ");
			 * preparedStatement.setString(1, "Test"); preparedStatement.executeUpdate();
			 * 
			 * resultSet = statement .executeQuery("select * from feedback.comments");
			 */
			return effectedRows;

		} catch (Exception e) {
			throw e;
		} finally {
			close();
		}

	}

	private void close() {
		try {
			if (resultSet != null) {
				resultSet.close();
			}

			if (statement != null) {
				statement.close();
			}

			if (connect != null) {
				connect.close();
			}
		} catch (Exception e) {

		}
	}

	public void insertEmployeeAttrition() throws Exception {
		String line = "";
		String splitBy = ",";

		try {
			// parsing a CSV file into BufferedReader class constructor
			BufferedReader br = new BufferedReader(new FileReader("WA_Fn-UseC_-HR-Employee-Attrition2.csv"));
			System.out.println(br.readLine());// skip first line
			line = br.readLine();
			line = br.readLine();
			int primaryKey = 1470;

			while ((line = br.readLine()) != null) {
				String[] employee = line.split(splitBy); // use comma as separator
				EmployeeAttritionDTO dto = populateEmpAttDto(employee);
				insertEmployeeAttrition(dto, primaryKey);
				primaryKey++;
			}

		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) throws Exception {
		InsertIBMEmployeeAttrition main = new InsertIBMEmployeeAttrition();
		main.insertEmployeeAttrition();
	}
}
